import {
  json,
  publicUser,
  getUserFromToken,
  parseJson,
  todayKey,
  yesterdayKey,
  mergeTopicStats,
  unlockedBadges,
  normalizeUnlockedAvatars
} from "./_utils.js";

export async function onRequestOptions() {
  return json({ ok: true });
}

export async function onRequestPost({ request, env }) {
  try {
    const user = await getUserFromToken(env, request);
    if (!user) return json({ error: "Please login again." }, 401);

    const { score, topicResults } = await request.json();
    const cleanScore = Math.max(0, Math.min(100, Number(score || 0)));

    const xp = Number(user.xp || 0) + cleanScore;
    const level = Math.max(1, Math.floor(xp / 100) + 1);
    const bestScore = Math.max(Number(user.best_score || 0), cleanScore);
    const totalQuizzes = Number(user.total_quizzes || 0) + 1;

    const today = todayKey();
    const playedToday = user.last_played_date === today;
    const playedYesterday = user.last_played_date === yesterdayKey();
    const streak = playedToday ? Number(user.streak || 0) : (playedYesterday ? Number(user.streak || 0) + 1 : 1);
    const dailyQuizCount = playedToday ? Number(user.daily_quiz_count || 0) + 1 : 1;
    const topicStats = mergeTopicStats(parseJson(user.topic_stats, {}), topicResults);

    const badgeUser = {
      ...user,
      xp,
      level,
      best_score: bestScore,
      total_quizzes: totalQuizzes,
      streak
    };
    const badges = unlockedBadges(badgeUser, parseJson(user.badges, []));
    const profile = { ...parseJson(user.profile_settings, {}) };
    profile.unlockedAvatars = normalizeUnlockedAvatars(profile.unlockedAvatars, { ...user, profile });
    profile.successfulQuizzes = Number(profile.successfulQuizzes || 0);
    let passingScore = 70;
    try {
      const configRow = await env.DB.prepare("SELECT value FROM app_config WHERE key='main'").first();
      const config = parseJson(configRow?.value, {});
      passingScore = Number(config.passingScore || 70);
    } catch (_) {}
    if (cleanScore >= passingScore) {
      profile.successfulQuizzes += 1;
      const nextAvatar = ["avatar1","avatar2","avatar3","avatar4","avatar5","avatar6","avatar7","avatar8","avatar9","avatar10"].find(id => !profile.unlockedAvatars.includes(id));
      if (nextAvatar) profile.unlockedAvatars.push(nextAvatar);
    }

    await env.DB.prepare(
      `UPDATE students
       SET xp = ?, level = ?, best_score = ?, total_quizzes = ?,
           streak = ?, daily_quiz_count = ?, last_played_date = ?,
           badges = ?, topic_stats = ?, profile_settings = ?, updated_at = datetime('now')
       WHERE id = ?`
    ).bind(
      xp,
      level,
      bestScore,
      totalQuizzes,
      streak,
      dailyQuizCount,
      today,
      JSON.stringify(badges),
      JSON.stringify(topicStats),
      JSON.stringify(profile),
      user.id
    ).run();

    const updated = await env.DB.prepare("SELECT * FROM students WHERE id = ?").bind(user.id).first();
    return json({ user: publicUser(updated) });
  } catch (error) {
    return json({ error: "Could not save score." }, 500);
  }
}
