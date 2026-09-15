import { json, ensureDefaultSubject, getUserFromToken, normalizeAllowedSubjects } from "./_utils.js";
export async function onRequestGet({ request, env }) {
  try {
    await ensureDefaultSubject(env);
    const result = await env.DB.prepare("SELECT id, name FROM subjects ORDER BY name").all();
    let subjects = result.results || [];
    const user = await getUserFromToken(env, request);
    const allowed = user ? normalizeAllowedSubjects(user.allowed_subjects) : null;
    if (user && Array.isArray(allowed)) {
      const lower = allowed.map(s => String(s).toLowerCase());
      subjects = subjects.filter(s => lower.includes(String(s.name).toLowerCase()));
    }
    return json({ subjects });
  } catch (_) { return json({ subjects: [{ id: "technical-drawing", name: "Technical Drawing" }] }); }
}
