import { json, hashPassword, publicUser, publicStaff, usernameFrom, createStudentSession, createStaffSession } from "./_utils.js";
const STARTER_PROFILE = JSON.stringify({ avatar: "avatar1", accent: "blue", motivationStyle: "balanced", quizLength: 15, timerMode: "standard", feedbackMode: "end", dailyGoal: 1, soundEnabled: false, profilePhoto: "", unlockedAvatars: ["avatar1"], successfulQuizzes: 0 });
export async function onRequestOptions() { return json({ ok: true }); }
export async function onRequestPost({ request, env }) {
  try {
    const { username, password } = await request.json();
    const cleanUsername = usernameFrom(username);
    if (!cleanUsername || !password) return json({ error: "Username and password are required." }, 400);
    const passwordHash = await hashPassword(String(password));

    const adminUsername = usernameFrom(env.ADMIN_USERNAME || "");
    if (adminUsername && cleanUsername === adminUsername) {
      if (!env.ADMIN_PASSWORD) return json({ error: "Admin password secret is not configured." }, 500);
      const adminHash = await hashPassword(String(env.ADMIN_PASSWORD));
      if (passwordHash !== adminHash) return json({ error: "Wrong password." }, 401);
      const staff = { id: "env-admin", role: "admin", name: env.ADMIN_DISPLAY_NAME || "Admin", username: adminUsername, subject: "All Subjects" };
      await env.DB.prepare("INSERT OR IGNORE INTO staff_users (id, role, name, username, subject, password_hash, created_at, updated_at) VALUES (?, 'admin', ?, ?, 'All Subjects', ?, datetime('now'), datetime('now'))").bind(staff.id, staff.name, staff.username, adminHash).run();
      const token = await createStaffSession(env, staff);
      return json({ role: "admin", staff: publicStaff(staff), staffToken: token });
    }

    const staff = await env.DB.prepare("SELECT * FROM staff_users WHERE lower(username)=lower(?)").bind(cleanUsername).first();
    if (staff) {
      if (staff.password_hash !== passwordHash) return json({ error: "Wrong password." }, 401);
      const token = await createStaffSession(env, staff);
      return json({ role: staff.role, staff: publicStaff(staff), staffToken: token });
    }

    let user = await env.DB.prepare("SELECT * FROM students WHERE lower(username)=lower(?) OR lower(name)=lower(?) LIMIT 1").bind(cleanUsername, cleanUsername).first();
    if (user && user.password_hash !== passwordHash) return json({ error: "Wrong password for this student account." }, 401);
    if (!user) {
      const id = crypto.randomUUID();
      await env.DB.prepare(`INSERT INTO students (id, username, name, student_class, password_hash, xp, level, best_score, total_quizzes, avatar, profile_settings, streak, daily_quiz_count, last_played_date, badges, topic_stats, created_at, updated_at) VALUES (?, ?, ?, 'General', ?, 0, 1, 0, 0, 'avatar1', ?, 0, 0, '', '[]', '{}', datetime('now'), datetime('now'))`).bind(id, cleanUsername, String(username).trim(), passwordHash, STARTER_PROFILE).run();
      user = await env.DB.prepare("SELECT * FROM students WHERE id = ?").bind(id).first();
    }
    const sessionToken = await createStudentSession(env, user);
    return json({ role: "student", user: publicUser(user), sessionToken });
  } catch (error) { return json({ error: "Login failed. Run the latest D1 migrations and set ADMIN_USERNAME / ADMIN_PASSWORD secrets." }, 500); }
}
