import { json, publicUser, getUserFromToken, parseJson, canUseUltimate, canUseAvatar, normalizeUnlockedAvatars } from "./_utils.js";

const allowedAccents = new Set(["blue", "green", "rose", "gold", "dark", "purple", "ocean", "fire", "forest", "neon"]);
const allowedMotivation = new Set(["balanced", "calm", "competitive"]);
const allowedTimers = new Set(["off", "relaxed", "standard", "speed"]);
const allowedFeedback = new Set(["end", "instant"]);
function canUseTheme(user, theme) {
  if (theme === "blue") return true;
  if (theme === "green") return Number(user.best_score || 0) >= 40;
  if (theme === "purple") return Number(user.total_quizzes || 0) >= 2;
  if (theme === "rose") return Number(user.best_score || 0) >= 60;
  if (theme === "ocean") return Number(user.streak || 0) >= 2;
  if (theme === "fire") return Number(user.best_score || 0) >= 75;
  if (theme === "forest") return Number(user.level || 1) >= 5;
  if (theme === "neon") return Number(user.total_quizzes || 0) >= 10;
  if (theme === "dark") return Number(user.level || 1) >= 3 || Number(user.best_score || 0) >= 70;
  if (theme === "gold") return canUseUltimate(user);
  return false;
}

export async function onRequestOptions() {
  return json({ ok: true });
}

export async function onRequestPost({ request, env }) {
  try {
    const user = await getUserFromToken(env, request);
    if (!user) return json({ error: "Please login again." }, 401);

    const { profile } = await request.json();
    const existing = parseJson(user.profile_settings, {});
    const ultimate = canUseUltimate(user);
    const requestedAvatar = String(profile?.avatar || existing.avatar || "avatar1").trim().slice(0, 16);
    const requestedAccent = allowedAccents.has(profile?.accent) ? profile.accent : (existing.accent || "blue");
    const cleanProfile = {
      ...existing,
      nickname: String(profile?.nickname || "").trim().slice(0, 24),
      unlockedAvatars: normalizeUnlockedAvatars(profile?.unlockedAvatars || existing.unlockedAvatars, user),
      successfulQuizzes: Number(profile?.successfulQuizzes || existing.successfulQuizzes || 0),
      avatar: canUseAvatar(user, requestedAvatar, { ...existing, ...profile }) ? requestedAvatar : (existing.avatar || "avatar1"),
      accent: canUseTheme(user, requestedAccent) ? requestedAccent : (existing.accent || "blue"),
      motivationStyle: allowedMotivation.has(profile?.motivationStyle) ? profile.motivationStyle : (existing.motivationStyle || "balanced"),
      quizLength: [5, 10, 15, 20].includes(Number(profile?.quizLength)) ? Number(profile.quizLength) : Number(existing.quizLength || 15),
      timerMode: allowedTimers.has(profile?.timerMode) ? profile.timerMode : (existing.timerMode || "standard"),
      feedbackMode: allowedFeedback.has(profile?.feedbackMode) ? profile.feedbackMode : (existing.feedbackMode || "end"),
      dailyGoal: [1, 2, 3].includes(Number(profile?.dailyGoal)) ? Number(profile.dailyGoal) : Number(existing.dailyGoal || 1),
      soundEnabled: Boolean(profile?.soundEnabled),
      profilePhoto: ultimate ? String(profile?.profilePhoto || "").slice(0, 350000) : ""
    };

    await env.DB.prepare(
      `UPDATE students
       SET avatar = ?, profile_settings = ?, updated_at = datetime('now')
       WHERE id = ?`
    ).bind(cleanProfile.avatar, JSON.stringify(cleanProfile), user.id).run();

    const updated = await env.DB.prepare("SELECT * FROM students WHERE id = ?").bind(user.id).first();
    return json({ user: publicUser(updated) });
  } catch (error) {
    return json({ error: "Could not save profile." }, 500);
  }
}
