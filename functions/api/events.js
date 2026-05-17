import { json } from "./_utils.js";
export async function onRequestGet({ request, env }) {
  try { const url=new URL(request.url); const subject=url.searchParams.get("subject")||""; const sql=subject?"SELECT * FROM events WHERE active=1 AND (subject=? OR subject='All Subjects') ORDER BY created_at DESC":"SELECT * FROM events WHERE active=1 ORDER BY created_at DESC"; const res=subject?await env.DB.prepare(sql).bind(subject).all():await env.DB.prepare(sql).all(); return json({ events: res.results||[] }); }
  catch(_) { return json({ events: [] }); }
}
