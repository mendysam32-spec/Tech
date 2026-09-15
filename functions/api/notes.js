import { json, getUserFromToken, normalizeAllowedSubjects } from "./_utils.js";
export async function onRequestGet({ request, env }) {
  try {
    const url = new URL(request.url);
    const subject = url.searchParams.get("subject") || "";
    let results = [];
    if (subject) {
      const row = await env.DB.prepare("SELECT id, subject, title, content FROM notes WHERE subject = ? ORDER BY updated_at DESC").bind(subject).all();
      results = row.results || [];
    } else {
      const row = await env.DB.prepare("SELECT id, subject, title, content FROM notes ORDER BY updated_at DESC").all();
      results = row.results || [];
    }
    const user = await getUserFromToken(env, request);
    const allowed = user ? normalizeAllowedSubjects(user.allowed_subjects) : null;
    if (user && Array.isArray(allowed)) {
      const lower = allowed.map(s => String(s).toLowerCase());
      results = results.filter(n => lower.includes(String(n.subject || "").toLowerCase()));
    }
    return json({ notes: results });
  } catch (_) { return json({ notes: [] }); }
}