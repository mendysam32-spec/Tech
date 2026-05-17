import { json, requireStaff, publicUser } from "../_utils.js";
export async function onRequestGet({ request, env }) { const auth = await requireStaff(env, request, true); if (auth.error) return auth.error; const result = await env.DB.prepare("SELECT * FROM students ORDER BY best_score DESC, xp DESC LIMIT 200").all(); return json({ students: (result.results || []).map(publicUser) }); }
