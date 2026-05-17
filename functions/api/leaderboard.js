import { json, publicUser } from "./_utils.js";

export async function onRequestGet({ env }) {
  try {
    const result = await env.DB.prepare(
      `SELECT * FROM students
       ORDER BY best_score DESC, xp DESC, total_quizzes DESC, updated_at ASC
       LIMIT 10`
    ).all();

    return json({ users: (result.results || []).map(publicUser) });
  } catch (error) {
    return json({ error: "Could not load Hall of Fame." }, 500);
  }
}
