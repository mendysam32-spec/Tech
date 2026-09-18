import { json, getAdminRecoveryEmail, normalizeEmail, hashPassword, publicStaff, createStaffSession } from "../_utils.js";

export async function onRequestOptions() { return json({ ok: true }); }

export async function onRequestPost({ request, env }) {
  try {
    let body = {};
    try { body = await request.json(); } catch (_) {}
    const inputEmail = normalizeEmail(body.email || body.username || body.recoveryEmail || "");
    const recoveryEmail = getAdminRecoveryEmail(env);

    if (!inputEmail) return json({ error: "Please enter your recovery email." }, 400);

    // Security: only the configured recovery email is allowed
    if (inputEmail !== recoveryEmail) {
      return json({ error: `This email is not authorized for admin recovery. Authorized recovery email is ${recoveryEmail.replace(/(.{2}).+(@.+)/, "$1***$2")}.` }, 403);
    }

    if (!env.ADMIN_USERNAME || !env.ADMIN_PASSWORD) {
      return json({ error: "Admin secrets are not configured. Set ADMIN_USERNAME and ADMIN_PASSWORD in Cloudflare Dashboard > Pages > Settings > Environment variables." }, 500);
    }

    // Rate limit: one email per 90 seconds
    const recent = await env.DB.prepare(
      "SELECT token FROM admin_recovery_tokens WHERE email = ? AND created_at > datetime('now', '-90 seconds') LIMIT 1"
    ).bind(recoveryEmail).first().catch(() => null);
    if (recent) {
      return json({ error: "A recovery email was just sent. Please wait 90 seconds before requesting another." }, 429);
    }

    // Ensure table exists (for DBs that haven't run new migration yet)
    await env.DB.prepare(
      "CREATE TABLE IF NOT EXISTS admin_recovery_tokens (token TEXT PRIMARY KEY, email TEXT NOT NULL, expires_at TEXT NOT NULL, used INTEGER NOT NULL DEFAULT 0, created_at TEXT NOT NULL)"
    ).run().catch(()=>{});

    const token = crypto.randomUUID() + crypto.randomUUID().replace(/-/g, "");
    await env.DB.prepare(
      "INSERT INTO admin_recovery_tokens (token, email, expires_at, used, created_at) VALUES (?, ?, datetime('now', '+15 minutes'), 0, datetime('now'))"
    ).bind(token, recoveryEmail).run();

    // Build magic link: origin + ?recovery_token=xxx
    const origin = request.headers.get("origin") || new URL(request.url).origin;
    const magicLink = `${origin}/index.html?recovery_token=${encodeURIComponent(token)}`;

    const adminUsername = String(env.ADMIN_USERNAME || "").trim();
    const adminPassword = String(env.ADMIN_PASSWORD || "");
    const displayName = String(env.ADMIN_DISPLAY_NAME || "Admin");

    // Also sync staff_users so magic link works even if env-admin hasn't logged in before
    const adminHash = await hashPassword(adminPassword);
    await env.DB.prepare(
      "INSERT OR IGNORE INTO staff_users (id, role, name, username, subject, password_hash, created_at, updated_at) VALUES ('env-admin', 'admin', ?, ?, 'All Subjects', ?, datetime('now'), datetime('now'))"
    ).bind(displayName, adminUsername || recoveryEmail, adminHash).run().catch(()=>{});

    const fromRaw = String(env.EMAIL_FROM || "Tech Monster <noreply@tech-monster.app>").trim();
    // Parse "Name <email>" or plain email
    let fromEmail = fromRaw;
    let fromName = "Tech Monster";
    const angle = fromRaw.match(/^(.*)<([^>]+)>\s*$/);
    if (angle) { fromName = angle[1].trim().replace(/^"|"$/g, "") || fromName; fromEmail = angle[2].trim(); }
    else if (fromRaw.includes("@")) { fromEmail = fromRaw; }

    const subject = "Tech Monster — Admin Recovery";
    const text = `Tech Monster Admin Recovery\n\nYour admin credentials:\n- Username: ${adminUsername}\n- Recovery email (also works as username): ${recoveryEmail}\n- Password: ${adminPassword}\n\nYou can login two ways:\n1) Go to the login page, switch to \"Admin Login\" and use either Username (${adminUsername}) or Email (${recoveryEmail}) with your password.\n2) One-click magic link (valid 15 minutes): ${magicLink}\n\nIf you did not request this, ignore this email.\n`;
    const html = `
      <div style="font-family:Segoe UI,Arial,sans-serif;max-width:560px;margin:0 auto;padding:24px;background:#f8fafc;border-radius:16px;border:1px solid #e2e8f0">
        <h2 style="margin:0 0 8px;color:#0f172a">Tech Monster — Admin Recovery</h2>
        <p style="color:#475569">You requested admin credentials for <strong>Tech Monster</strong>. You can recover or login with email <strong>${recoveryEmail}</strong>.</p>
        <div style="background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;padding:16px;margin:16px 0">
          <div style="margin-bottom:8px"><strong>Admin username:</strong> <code style="background:#f1f5f9;padding:2px 6px;border-radius:6px">${escapeHtml(adminUsername)}</code></div>
          <div style="margin-bottom:8px"><strong>Recovery email (works as login):</strong> <code style="background:#f1f5f9;padding:2px 6px;border-radius:6px">${escapeHtml(recoveryEmail)}</code></div>
          <div><strong>Password:</strong> <code style="background:#f1f5f9;padding:2px 6px;border-radius:6px">${escapeHtml(adminPassword)}</code></div>
          <p style="font-size:12px;color:#64748b;margin:8px 0 0">Tip: You can type either the username <em>or</em> your recovery email in the Admin Login username field — both use the same password.</p>
        </div>
        <a href="${escapeHtml(magicLink)}" style="display:inline-block;background:linear-gradient(135deg,#2563eb,#7c3aed);color:#ffffff;text-decoration:none;padding:12px 20px;border-radius:999px;font-weight:800;margin:8px 0">One-click admin login (15 min)</a>
        <p style="font-size:12px;color:#64748b;word-break:break-all">If the button doesn't work, copy this link:<br/>${escapeHtml(magicLink)}</p>
        <p style="font-size:12px;color:#94a3b8;margin-top:16px">If you didn't request this, ignore this email. This link expires in 15 minutes and can be used once.</p>
      </div>
    `;

    let emailed = false;
    let emailError = "";

    if (env.EMAIL && typeof env.EMAIL.send === "function") {
      try {
        await env.EMAIL.send({
          to: recoveryEmail,
          from: { email: fromEmail, name: fromName },
          subject,
          text,
          html,
        });
        emailed = true;
      } catch (e) {
        emailError = e && (e.message || String(e));
        // Provide actionable hint for common misconfig
        if (emailError.includes("E_SENDER_NOT_VERIFIED") || emailError.includes("not verified") || emailError.includes("E_SENDER_DOMAIN_NOT_AVAILABLE")) {
          emailError += " — Onboard your sending domain: npx wrangler email sending enable " + fromEmail.split("@")[1] + " and set EMAIL_FROM to an address on that domain.";
        }
      }
    } else {
      emailError = "Email binding not configured (send_email). Add [[send_email]] name=\"EMAIL\" to wrangler.toml and onboard a domain, or set a Resend API fallback.";
    }

    // Optional fallback: Resend REST API if configured
    if (!emailed && env.RESEND_API_KEY && fromEmail) {
      try {
        const res = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: { "Authorization": `Bearer ${env.RESEND_API_KEY}`, "Content-Type": "application/json" },
          body: JSON.stringify({ from: `${fromName} <${fromEmail}>`, to: [recoveryEmail], subject, html, text })
        });
        if (res.ok) emailed = true;
        else emailError = `Resend: ${await res.text()}`;
      } catch (e) { emailError = e && (e.message || String(e)); }
    }

    if (emailed) {
      return json({ ok: true, message: `Recovery email sent to ${recoveryEmail}. Check inbox (and spam). Magic link valid 15 minutes.`, magicLinkHint: "Email delivered." });
    }

    // If email couldn't be sent, still return the magic link for the authenticated owner (local dev / misconfigured prod)
    // This keeps the flow unblocked while telling the operator how to fix email.
    return json({
      ok: true,
      delivered: false,
      warning: emailError || "Email not sent — check server logs.",
      message: "Recovery link generated but email delivery failed. Use the magic link below and fix email domain onboarding.",
      magicLink,
      credentials: { username: adminUsername, recoveryEmail, passwordHint: adminPassword ? adminPassword.slice(0, 2) + "***" : "" },
      // For fully local / dev convenience, include token
      token
    }, 200);

  } catch (error) {
    return json({ error: error && error.message ? error.message : "Recovery failed. Check D1 migrations." }, 500);
  }
}

function escapeHtml(s) {
  return String(s || "").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
}
