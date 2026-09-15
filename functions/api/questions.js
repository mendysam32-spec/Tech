import { json, getUserFromToken, normalizeAllowedSubjects } from "./_utils.js";
export async function onRequestGet({ request, env }) {
  try {
    const url = new URL(request.url);
    const subject = url.searchParams.get("subject") || "";
    const user = await getUserFromToken(env, request);
    const allowed = user ? normalizeAllowedSubjects(user.allowed_subjects) : null;

    let results = [];
    if (subject) {
      const row = await env.DB.prepare("SELECT * FROM questions WHERE subject = ? ORDER BY created_at DESC").bind(subject).all();
      results = row.results || [];
    } else {
      const row = await env.DB.prepare("SELECT * FROM questions ORDER BY created_at DESC").all();
      results = row.results || [];
    }
    if (user && Array.isArray(allowed)) {
      const lower = allowed.map(s => String(s).toLowerCase());
      results = results.filter(q => lower.includes(String(q.subject || "").toLowerCase()));
    }
    return json({ questions: results.map(q => ({ ...q, options: JSON.parse(q.options || "[]"), correct: Number(q.correct) })) });
  } catch (_) { return json({ questions: [] }); }
}