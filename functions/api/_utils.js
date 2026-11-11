const DEFAULT_PROFILE = {
  avatar: "avatar1", accent: "blue", motivationStyle: "balanced", quizLength: 15,
  timerMode: "standard", feedbackMode: "end", dailyGoal: 1, soundEnabled: false,
  profilePhoto: "",
  unlockedAvatars: ["avatar1"],
  successfulQuizzes: 0
};

const BADGES = [
  { id: "first_quiz", rule: user => Number(user.total_quizzes || 0) >= 1 },
  { id: "sharp_70", rule: user => Number(user.best_score || 0) >= 70 },
  { id: "elite_90", rule: user => Number(user.best_score || 0) >= 90 },
  { id: "level_5", rule: user => Number(user.level || 1) >= 5 },
  { id: "streak_3", rule: user => Number(user.streak || 0) >= 3 },
  { id: "ultimate_gold", rule: user => canUseUltimate(user) }
];

export function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization"
    }
  });
}
export function parseJson(value, fallback) { if (!value) return fallback; try { return JSON.parse(value); } catch (_) { return fallback; } }
export async function hashPassword(password) { const encoded = new TextEncoder().encode(password); const hashBuffer = await crypto.subtle.digest("SHA-256", encoded); return [...new Uint8Array(hashBuffer)].map(b => b.toString(16).padStart(2, "0")).join(""); }
export function usernameFrom(value) { return String(value || "").trim().toLowerCase().replace(/[^a-z0-9._-]+/g, ".").replace(/^\.+|\.+$/g, "").slice(0, 50); }
export function getAdminRecoveryEmail(env) {
  return String(env.ADMIN_RECOVERY_EMAIL || env.RECOVERY_EMAIL || "mendysam32@gmail.com").trim().toLowerCase();
}
export function isRecoveryEmail(value, env) {
  return String(value || "").trim().toLowerCase() === getAdminRecoveryEmail(env);
}
export function normalizeEmail(value) { return String(value || "").trim().toLowerCase(); }
export function isValidEmail(value) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value || "").trim()); }
export function parseEmailFrom(value) {
  // Extract email like "Name <email@domain>" -> email@domain, else raw
  const s = String(value || "").trim();
  const m = s.match(/<([^>]+)>/);
  return (m ? m[1] : s).trim().toLowerCase();
}

export function normalizeUnlockedAvatars(value, user = {}) {
  let unlocked = Array.isArray(value) ? value.filter(id => /^avatar([1-9]|10)$/.test(String(id))) : [];
  if (!unlocked.includes("avatar1")) unlocked.unshift("avatar1");
  const successCount = Number(user.successful_quizzes || user.successfulQuizzes || user.profile?.successfulQuizzes || 0);
  for (let i = 1; i <= Math.min(10, successCount + 1); i++) {
    const id = `avatar${i}`;
    if (!unlocked.includes(id)) unlocked.push(id);
  }
  const badges = Array.isArray(user.badges) ? user.badges : parseJson(user.badges, []);
  if (badges.includes("legendary_winner") && !unlocked.includes("avatar10")) unlocked.push("avatar10");
  return [...new Set(unlocked)];
}
export function canUseAvatar(user, avatar, profile = null) {
  const p = profile || { ...DEFAULT_PROFILE, ...parseJson(user.profile_settings, {}) };
  if (avatar === "custom-photo") return canUseUltimate(user) && Boolean(p.profilePhoto);
  return normalizeUnlockedAvatars(p.unlockedAvatars, { ...user, profile: p }).includes(avatar);
}

export function normalizeAllowedSubjects(value) {
  if (value == null || value === "") return null;
  let list = Array.isArray(value) ? value : [];
  if (typeof value === "string") { try { const p = JSON.parse(value); return normalizeAllowedSubjects(p); } catch (_) { list = value.split(","); } }
  list = list.map(s => String(s).trim()).filter(Boolean);
  return list.length ? [...new Set(list)] : null;
}
export function publicUser(row) {
  const profile = { ...DEFAULT_PROFILE, ...parseJson(row.profile_settings, {}) };
  profile.successfulQuizzes = Number(profile.successfulQuizzes || 0);
  profile.unlockedAvatars = normalizeUnlockedAvatars(profile.unlockedAvatars, { ...row, profile });
  if (!canUseUltimate(row)) {
    profile.profilePhoto = "";
    if (profile.avatar === "custom-photo") profile.avatar = "avatar1";
  }
  if (!canUseAvatar(row, profile.avatar || row.avatar || "avatar1", profile)) profile.avatar = "avatar1";
  return { id: row.id, username: row.username || usernameFrom(row.name), name: row.name, class: row.student_class || "General", xp: row.xp || 0, level: row.level || 1, bestScore: row.best_score || 0, totalQuizzes: row.total_quizzes || 0, avatar: profile.avatar || row.avatar || "avatar1", profile, streak: row.streak || 0, dailyQuizCount: row.daily_quiz_count || 0, lastPlayedDate: row.last_played_date || "", badges: parseJson(row.badges, []), topicStats: parseJson(row.topic_stats, {}), allowedSubjects: normalizeAllowedSubjects(row.allowed_subjects) };
}
export function publicStaff(row) { return { id: row.id, role: row.role, name: row.name, username: row.username, subject: row.subject || "All Subjects" }; }
export function canUseUltimate(user) { return Number(user.best_score || user.bestScore || 0) >= 95 || Number(user.level || 1) >= 10; }
export function todayKey() { return new Date().toISOString().slice(0, 10); }
export function yesterdayKey() { const date = new Date(); date.setUTCDate(date.getUTCDate() - 1); return date.toISOString().slice(0, 10); }
function isPerSubjectStats(stats) { const values = Object.values(stats || {}); if (!values.length) return false; return values.some(v => v && typeof v === "object" && !("correct" in v || "total" in v)); }
export function topicStatsForSubject(topicStats, subject) { const stats = topicStats || {}; if (!subject) return {}; if (isPerSubjectStats(stats)) return { ...(stats[subject] || {}) }; if (String(subject).toLowerCase() === "technical drawing") return { ...stats }; return {}; }
export function mergeTopicStats(existing, topicResults, defaultSubject = "") { const stats = { ...(existing || {}) }; const perSubject = isPerSubjectStats(stats); let base = {}; if (perSubject) { Object.entries(stats).forEach(([subj, topics]) => { base[subj] = { ...(topics || {}) }; }); } else if (Object.keys(stats).length) { base = { "Technical Drawing": { ...stats } }; } (topicResults || []).forEach(result => { const subject = String(result.subject || defaultSubject || "Technical Drawing").slice(0, 60); const topic = String(result.topic || "General").slice(0, 40); if (!base[subject]) base[subject] = {}; const current = base[subject][topic] || { correct: 0, total: 0 }; current.correct = Number(current.correct || 0) + (result.correct ? 1 : 0); current.total = Number(current.total || 0) + 1; base[subject][topic] = current; }); return base; }
export function unlockedBadges(user, existingBadges = []) { const earned = BADGES.filter(badge => badge.rule(user)).map(badge => badge.id); return [...new Set([...existingBadges, ...earned])]; }
export async function getUserFromToken(env, request) { const auth = request.headers.get("Authorization") || ""; const token = auth.replace("Bearer ", "").trim(); if (!token) return null; const session = await env.DB.prepare("SELECT student_id FROM sessions WHERE token = ? AND expires_at > datetime('now')").bind(token).first(); if (!session) return null; await env.DB.prepare("UPDATE sessions SET expires_at = datetime('now', '+3650 days') WHERE token = ? AND expires_at < datetime('now', '+90 days')").bind(token).run(); return env.DB.prepare("SELECT * FROM students WHERE id = ?").bind(session.student_id).first(); }
export async function getStaffFromToken(env, request) { const auth = request.headers.get("Authorization") || ""; const token = auth.replace("Bearer ", "").trim(); if (!token) return null; const session = await env.DB.prepare("SELECT staff_id FROM staff_sessions WHERE token = ? AND expires_at > datetime('now')").bind(token).first(); if (!session) return null; return env.DB.prepare("SELECT * FROM staff_users WHERE id = ?").bind(session.staff_id).first(); }
export async function requireStaff(env, request, adminOnly = false) { const staff = await getStaffFromToken(env, request); if (!staff) return { error: json({ error: "Staff login required." }, 401) }; if (adminOnly && staff.role !== "admin") return { error: json({ error: "Admin permission required." }, 403) }; return { staff }; }
export async function ensureDefaultSubjects(env) {
  const defaults = ["Technical Drawing", "English", "Maths", "Science", "SES"];
  for (const name of defaults) {
    const row = await env.DB.prepare("SELECT id FROM subjects WHERE lower(name)=lower(?)").bind(name).first();
    if (!row) await env.DB.prepare("INSERT INTO subjects (id, name, created_at, updated_at) VALUES (?, ?, datetime('now'), datetime('now'))").bind(crypto.randomUUID(), name).run();
  }
}
export async function ensureDefaultSubject(env) { await ensureDefaultSubjects(env); }
export async function createStudentSession(env, user) { const token = crypto.randomUUID() + crypto.randomUUID(); await env.DB.prepare("INSERT INTO sessions (token, student_id, expires_at, created_at) VALUES (?, ?, datetime('now', '+3650 days'), datetime('now'))").bind(token, user.id).run(); return token; }
export async function createStaffSession(env, staff) { const token = crypto.randomUUID() + crypto.randomUUID(); await env.DB.prepare("INSERT INTO staff_sessions (token, staff_id, expires_at, created_at) VALUES (?, ?, datetime('now', '+12 hours'), datetime('now'))").bind(token, staff.id).run(); return token; }
