import { json, hashPassword, publicUser } from "./_utils.js";

const STARTER_PROFILE = JSON.stringify({
  avatar: "avatar1",
  accent: "blue",
  motivationStyle: "balanced",
  quizLength: 15,
  timerMode: "standard",
  feedbackMode: "end",
  dailyGoal: 1,
  soundEnabled: false,
  profilePhoto: "", unlockedAvatars: ["avatar1"], successfulQuizzes: 0
});

export async function onRequestOptions() {
  return json({ ok: true });
}

export async function onRequestPost({ request, env }) {
  try {
    const { name, username, studentClass, password } = await request.json();

    if (!(name || username) || !password) {
      return json({ error: "Username and password are required." }, 400);
    }

    const cleanName = String(name || username).trim();
    const cleanUsername = String(username || name).trim().toLowerCase().replace(/[^a-z0-9._-]+/g, ".").replace(/^\.+|\.+$/g, "").slice(0, 50);
    const cleanClass = String(studentClass || "General").trim();
    const passwordHash = await hashPassword(String(password));

    let user = await env.DB.prepare(
      "SELECT * FROM students WHERE lower(username) = lower(?) OR (lower(name) = lower(?) AND student_class = ?) LIMIT 1"
    ).bind(cleanUsername, cleanName, cleanClass).first();

    if (user && user.password_hash !== passwordHash) {
      return json({ error: "Wrong password for this student account." }, 401);
    }

    if (!user) {
      const id = crypto.randomUUID();
      await env.DB.prepare(
        `INSERT INTO students (
          id, username, name, student_class, password_hash, xp, level, best_score, total_quizzes,
          avatar, profile_settings, streak, daily_quiz_count, last_played_date,
          badges, topic_stats, created_at, updated_at
        )
        VALUES (?, ?, ?, ?, ?, 0, 1, 0, 0, 'avatar1', ?, 0, 0, '', '[]', '{}', datetime('now'), datetime('now'))`
      ).bind(id, cleanUsername, cleanName, cleanClass, passwordHash, STARTER_PROFILE).run();

      user = await env.DB.prepare("SELECT * FROM students WHERE id = ?").bind(id).first();
    }

    const sessionToken = crypto.randomUUID() + crypto.randomUUID();
    await env.DB.prepare(
      "INSERT INTO sessions (token, student_id, expires_at, created_at) VALUES (?, ?, datetime('now', '+30 days'), datetime('now'))"
    ).bind(sessionToken, user.id).run();

    return json({ user: publicUser(user), sessionToken });
  } catch (error) {
    return json({ error: "Login failed. Check your Cloudflare D1 setup and migrations." }, 500);
  }
}
