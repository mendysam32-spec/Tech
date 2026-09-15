import { json, requireStaff, normalizeAllowedSubjects } from "../../_utils.js";

export async function onRequestOptions() {
  return json({ ok: true });
}

export async function onRequestPost({ request, env }) {
  const auth = await requireStaff(env, request, true);
  if (auth.error) return auth.error;
  try {
    const body = await request.json();
    const studentId = String(body.studentId || "");
    const allowed = normalizeAllowedSubjects(body.allowedSubjects);
    if (!studentId) return json({ error: "Student is required." }, 400);

    const student = await env.DB.prepare("SELECT id FROM students WHERE id = ? OR username = ? OR name = ?").bind(studentId, studentId, studentId).first();
    if (!student) return json({ error: "Student not found." }, 404);

    const value = allowed ? JSON.stringify(allowed) : "";
    await env.DB.prepare(
      "UPDATE students SET allowed_subjects = ?, updated_at = datetime('now') WHERE id = ?"
    ).bind(value, student.id).run();

    return json({ ok: true, allowedSubjects: allowed });
  } catch (error) {
    return json({ error: "Could not update student access." }, 500);
  }
}
