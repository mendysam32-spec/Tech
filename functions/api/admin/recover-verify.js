import { json, getAdminRecoveryEmail, hashPassword, publicStaff, createStaffSession } from "../_utils.js";

export async function onRequestOptions() { return json({ ok: true }); }

export async function onRequestPost({ request, env }) {
  try {
    let body = {};
    try { body = await request.json(); } catch (_) {}
    const token = String(body.token || body.recovery_token || "").trim();
    if (!token) return json({ error: "Missing recovery token." }, 400);

    await env.DB.prepare(
      "CREATE TABLE IF NOT EXISTS admin_recovery_tokens (token TEXT PRIMARY KEY, email TEXT NOT NULL, expires_at TEXT NOT NULL, used INTEGER NOT NULL DEFAULT 0, created_at TEXT NOT NULL)"
    ).run().catch(()=>{});

    const row = await env.DB.prepare(
      "SELECT * FROM admin_recovery_tokens WHERE token = ? LIMIT 1"
    ).bind(token).first();

    if (!row) return json({ error: "Invalid or expired recovery link." }, 401);
    if (Number(row.used) === 1) return json({ error: "This link has already been used. Request a new one." }, 401);

    // Check expiry
    const fresh = await env.DB.prepare(
      "SELECT token FROM admin_recovery_tokens WHERE token = ? AND expires_at > datetime('now') LIMIT 1"
    ).bind(token).first();
    if (!fresh) return json({ error: "Recovery link expired (15 minutes). Request a new one." }, 401);

    const recoveryEmail = getAdminRecoveryEmail(env);
    if (String(row.email || "").toLowerCase() !== recoveryEmail.toLowerCase()) {
      return json({ error: "Recovery email mismatch." }, 403);
    }

    if (!env.ADMIN_USERNAME || !env.ADMIN_PASSWORD) {
      return json({ error: "Admin secrets not configured." }, 500);
    }

    // Mark used
    await env.DB.prepare("UPDATE admin_recovery_tokens SET used = 1 WHERE token = ?").bind(token).run();
    // Cleanup old tokens occasionally
    env.DB.prepare("DELETE FROM admin_recovery_tokens WHERE expires_at < datetime('now', '-1 day') OR used = 1 AND created_at < datetime('now', '-1 hour')").run().catch(()=>{});

    const adminUsername = String(env.ADMIN_USERNAME || "").trim();
    const adminPassword = String(env.ADMIN_PASSWORD || "");
    const displayName = String(env.ADMIN_DISPLAY_NAME || "Admin");
    const effectiveUsername = adminUsername || recoveryEmail;
    const adminHash = await hashPassword(adminPassword);

    await env.DB.prepare(
      "INSERT OR IGNORE INTO staff_users (id, role, name, username, subject, password_hash, created_at, updated_at) VALUES ('env-admin', 'admin', ?, ?, 'All Subjects', ?, datetime('now'), datetime('now'))"
    ).bind(displayName, effectiveUsername, adminHash).run().catch(()=>{});
    await env.DB.prepare("UPDATE staff_users SET username = ?, name = ?, password_hash = ?, updated_at = datetime('now') WHERE id = 'env-admin'").bind(effectiveUsername, displayName, adminHash).run().catch(()=>{});

    const staff = { id: "env-admin", role: "admin", name: displayName, username: effectiveUsername, subject: "All Subjects" };
    const staffToken = await createStaffSession(env, staff);
    return json({ role: "admin", staff: publicStaff(staff), staffToken, message: "Magic link login successful." });
  } catch (error) {
    return json({ error: error && error.message ? error.message : "Verification failed." }, 500);
  }
}

export async function onRequestGet({ request, env }) {
  // Support GET ?token=xxx for direct link click without JS fetch
  const url = new URL(request.url);
  const token = String(url.searchParams.get("token") || url.searchParams.get("recovery_token") || "").trim();
  if (!token) return json({ error: "Missing token." }, 400);
  return onRequestPost({ request: new Request(request.url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ token }) }), env });
}
