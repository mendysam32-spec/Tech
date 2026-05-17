import { json, ensureDefaultSubject } from "./_utils.js";
export async function onRequestGet({ env }) { try { await ensureDefaultSubject(env); const result = await env.DB.prepare("SELECT id, name FROM subjects ORDER BY name").all(); return json({ subjects: result.results || [] }); } catch (_) { return json({ subjects: [{ id: "technical-drawing", name: "Technical Drawing" }] }); } }
