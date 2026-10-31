const TM_DEFAULT_PROFILE = {
    avatar: "avatar1",
    accent: "blue",
    motivationStyle: "balanced",
    quizLength: 15,
    timerMode: "standard",
    feedbackMode: "end",
    dailyGoal: 1,
    soundEnabled: false,
    profilePhoto: "",
    unlockedAvatars: ["avatar1"],
    successfulQuizzes: 0
};

const TM_AVATARS = [
    { id: "avatar1", name: "Rookie Monster", image: "images/avatars/avatar1.svg" },
    { id: "avatar2", name: "Prince Monster", image: "images/avatars/avatar2.svg" },
    { id: "avatar3", name: "Green Genius", image: "images/avatars/avatar3.svg" },
    { id: "avatar4", name: "Princess Monster", image: "images/avatars/avatar4.svg" },
    { id: "avatar5", name: "Dark Engineer", image: "images/avatars/avatar5.svg" },
    { id: "avatar6", name: "King Monster", image: "images/avatars/avatar6.svg" },
    { id: "avatar7", name: "Ocean Brain", image: "images/avatars/avatar7.svg" },
    { id: "avatar8", name: "Fire Builder", image: "images/avatars/avatar8.svg" },
    { id: "avatar9", name: "Forest Master", image: "images/avatars/avatar9.svg" },
    { id: "avatar10", name: "Queen Monster", image: "images/avatars/avatar10.svg" }
];

const TM_THEMES = [
    { id: "blue", name: "Blue Focus", rule: () => true },
    { id: "green", name: "Green Growth", rule: user => Number(user.bestScore || 0) >= 40 },
    { id: "purple", name: "Purple GradeUP", rule: user => Number(user.totalQuizzes || 0) >= 2 },
    { id: "rose", name: "Rose Energy", rule: user => Number(user.bestScore || 0) >= 60 },
    { id: "ocean", name: "Ocean Calm", rule: user => Number(user.streak || 0) >= 2 },
    { id: "fire", name: "Fire Mode", rule: user => Number(user.bestScore || 0) >= 75 },
    { id: "forest", name: "Forest Focus", rule: user => Number(user.level || 1) >= 5 },
    { id: "neon", name: "Neon Arena", rule: user => Number(user.totalQuizzes || 0) >= 10 },
    { id: "dark", name: "Dark Champion", rule: user => Number(user.level || 1) >= 3 || Number(user.bestScore || 0) >= 70 },
    { id: "gold", name: "Gold Ultimate", rule: user => Storage.canUseUltimate(user) || (user.badges || []).includes("legendary_winner") }
];

const TM_BADGES = [
    { id: "first_quiz", name: "First Battle", rule: user => Number(user.totalQuizzes || 0) >= 1 },
    { id: "quiz_5", name: "Study Streak", rule: user => Number(user.totalQuizzes || 0) >= 5 },
    { id: "quiz_10", name: "Quiz Collector", rule: user => Number(user.totalQuizzes || 0) >= 10 },
    { id: "quiz_25", name: "Quiz Master", rule: user => Number(user.totalQuizzes || 0) >= 25 },
    { id: "sharp_70", name: "Sharp 70", rule: user => Number(user.bestScore || 0) >= 70 },
    { id: "elite_90", name: "Elite 90", rule: user => Number(user.bestScore || 0) >= 90 },
    { id: "perfect_100", name: "Perfect Score", rule: user => Number(user.bestScore || 0) >= 100 },
    { id: "level_5", name: "Level 5", rule: user => Number(user.level || 1) >= 5 },
    { id: "level_10", name: "Double Digits", rule: user => Number(user.level || 1) >= 10 },
    { id: "streak_3", name: "3 Day Streak", rule: user => Number(user.streak || 0) >= 3 },
    { id: "streak_7", name: "Week Warrior", rule: user => Number(user.streak || 0) >= 7 },
    { id: "ultimate_gold", name: "Ultimate Gold", rule: user => Storage.canUseUltimate(user) },
    { id: "legendary_winner", name: "Legendary Winner", rule: user => (user.badges || []).includes("legendary_winner") },
    { id: "td_pro", name: "TD Pro", rule: user => { const s = Storage.topicStatsForSubject(user.topicStats, "Technical Drawing"); return Object.values(s || {}).filter(v => v && v.total >= 3 && (v.correct / v.total) >= 0.8).length >= 5; } },
    { id: "english_pro", name: "English Pro", rule: user => { const s = Storage.topicStatsForSubject(user.topicStats, "English"); return Object.values(s || {}).filter(v => v && v.total >= 3 && (v.correct / v.total) >= 0.8).length >= 5; } },
    { id: "ses_pro", name: "SES Pro", rule: user => { const s = Storage.topicStatsForSubject(user.topicStats, "SES"); return Object.values(s || {}).filter(v => v && v.total >= 3 && (v.correct / v.total) >= 0.8).length >= 5; } }
];

// Coin cost -> unlock duration (in months) for purchasable features.
// "Prepare for Exam" unlocks a full timed exam simulation for the chosen subject.
const FEATURE_PRICES = {
    exam_prep: { 25: 1, 50: 2, 75: 5, 100: 12 }
};
const MONTH_MS = 30 * 24 * 60 * 60 * 1000;


const Storage = {
    getUsers() {
        return JSON.parse(localStorage.getItem("tm_users")) || [];
    },

    saveUsers(users) {
        localStorage.setItem("tm_users", JSON.stringify(users));
    },

    getCurrentUser() {
        const user = JSON.parse(localStorage.getItem("tm_currentUser"));
        return user ? this.normalizeUser(user) : null;
    },

    setCurrentUser(user) {
        localStorage.setItem("tm_currentUser", JSON.stringify(this.normalizeUser(user)));
    },

    setSession(token) {
        if (token) localStorage.setItem("tm_sessionToken", token);
    },

    clearSession() {
        localStorage.removeItem("tm_currentUser");
        localStorage.removeItem("tm_sessionToken");
    },

    getAdminSession() {
        const raw = localStorage.getItem("tm_adminSession");
        if (!raw) return null;
        try {
            return JSON.parse(raw);
        } catch (_) {
            return null;
        }
    },

    setAdminSession(session) {
        if (session) localStorage.setItem("tm_adminSession", JSON.stringify(session));
        else localStorage.removeItem("tm_adminSession");
    },

    getAppConfig() {
        return {
            appName: "Tech Monster",
            certificateTitle: "Certificate of Achievement",
            passingScore: 70,
            announcement: "Build your account, unlock rewards, and master technical drawing.",
            ...JSON.parse(localStorage.getItem("tm_appConfig") || "{}")
        };
    },

    saveAppConfig(config) {
        localStorage.setItem("tm_appConfig", JSON.stringify({ ...this.getAppConfig(), ...config }));
    },

    getTeachers() {
        return JSON.parse(localStorage.getItem("tm_teachers")) || [];
    },

    saveTeachers(teachers) {
        localStorage.setItem("tm_teachers", JSON.stringify(teachers));
    },

    getCustomQuestions() {
        return JSON.parse(localStorage.getItem("tm_customQuestions")) || [];
    },

    saveCustomQuestions(questions) {
        localStorage.setItem("tm_customQuestions", JSON.stringify(questions));
    },

    getAllQuestions(baseQuestions = []) {
        return [...baseQuestions, ...this.getCustomQuestions()];
    },

    normalizeUser(user) {
        const profile = { ...TM_DEFAULT_PROFILE, ...(user.profile || {}) };
        profile.unlockedAvatars = Storage.normalizeUnlockedAvatars(profile.unlockedAvatars, user);
        profile.successfulQuizzes = Number(profile.successfulQuizzes || 0);
        const normalized = {
            ...user,
            class: user.class || user.studentClass,
            xp: Number(user.xp || 0),
            level: Storage.levelFromXP(user.xp),
            coins: Number(user.coins || 0),
            bestScore: Number(user.bestScore || user.best_score || 0),
            totalQuizzes: Number(user.totalQuizzes || user.total_quizzes || 0),
            streak: Number(user.streak || 0),
            dailyQuizCount: Number(user.dailyQuizCount || 0),
            lastPlayedDate: user.lastPlayedDate || "",
            featureUnlocks: user.featureUnlocks || {},
            profile,
            badges: Array.isArray(user.badges) ? user.badges : [],
            topicStats: user.topicStats || {},
            allowedSubjects: Storage.normalizeAllowedSubjects(user.allowedSubjects || user.allowed_subjects)
        };

        if (!this.isThemeUnlocked(normalized, profile.accent)) normalized.profile.accent = "blue";
        if (!this.isAvatarUnlocked(normalized, profile.avatar)) normalized.profile.avatar = "avatar1";
        if (!this.canUseUltimate(normalized)) {
            normalized.profile.profilePhoto = "";
            if (normalized.profile.avatar === "custom-photo") normalized.profile.avatar = "avatar1";
        }

        normalized.avatar = normalized.profile.avatar || "avatar1";
        normalized.rankTitle = this.rankTitle(normalized);
        normalized.badges = this.unlockedBadges(normalized);
        return normalized;
    },

    rankTitle(user) {
        const xp = Number(user?.xp || 0);
        if (xp >= 3000) return "Legend Monster";
        if (xp >= 2000) return "Grand Master";
        if (xp >= 1200) return "Arena Boss";
        if (xp >= 700) return "Rising Champion";
        if (xp >= 300) return "Quiz Warrior";
        return "New Challenger";
    },

    xpPerLevel(baseLevel) {
        const l = Math.max(1, Number(baseLevel || 1));
        return Math.round(100 * Math.pow(1.4, l - 1));
    },

    totalXPForLevel(targetLevel) {
        const t = Math.max(1, Number(targetLevel || 1));
        let total = 0;
        for (let l = 1; l < t; l++) {
            total += this.xpPerLevel(l);
        }
        return total;
    },

    levelFromXP(xp) {
        const total = Number(xp || 0);
        let level = 1;
        while (this.totalXPForLevel(level + 1) <= total) {
            level++;
        }
        return level;
    },

    canUseUltimate(user) {
        return Number(user?.bestScore || 0) >= 95 || Number(user?.level || 1) >= 10;
    },

    normalizeAllowedSubjects(value) {
        const uniq = list => [...new Set(list.map(s => String(s).trim()).filter(Boolean))];
        if (value === null || value === undefined || value === "") return null;
        if (Array.isArray(value)) {
            const cleaned = uniq(value);
            return cleaned.length ? cleaned : null;
        }
        if (typeof value === "string") {
            try { const parsed = JSON.parse(value); return this.normalizeAllowedSubjects(parsed); } catch (_) {}
            const list = uniq(value.split(","));
            return list.length ? list : null;
        }
        return null;
    },

    canAccessSubject(user, subject) {
        const allowed = user?.allowedSubjects;
        if (!Array.isArray(allowed) || allowed.length === 0) return true;
        return allowed.some(name => String(name).toLowerCase() === String(subject).toLowerCase());
    },

    filterAllowedSubjects(user, subjects) {
        const allowed = user?.allowedSubjects;
        if (!Array.isArray(allowed) || allowed.length === 0) return subjects;
        return subjects.filter(s => allowed.some(a => String(a).toLowerCase() === String(s.name || s).toLowerCase()));
    },

    saveUserAccess(user, allowedSubjects) {
        const list = Array.isArray(allowedSubjects) ? allowedSubjects.filter(Boolean) : [];
        const nextUser = { ...user, allowedSubjects: this.normalizeAllowedSubjects(list) };
        const users = this.getUsers().map(u =>
            (u.username || u.name) === (user.username || user.name) && (u.class || u.studentClass || "") === (user.class || user.studentClass || "")
                ? nextUser : u
        );
        this.saveUsers(users);
        const current = this.getCurrentUser();
        if (current && (current.username || current.name) === (user.username || user.name) && (current.class || "") === (user.class || "")) {
            this.setCurrentUser({ ...current, allowedSubjects: nextUser.allowedSubjects });
        }
        return nextUser;
    },

    normalizeUnlockedAvatars(value, user = {}) {
        let unlocked = Array.isArray(value) ? value : [];
        unlocked = unlocked.filter(id => /^avatar([1-9]|10)$/.test(String(id)));
        if (!unlocked.includes("avatar1")) unlocked.unshift("avatar1");
        const successCount = Number(user?.successfulQuizzes || user?.profile?.successfulQuizzes || 0);
        for (let i = 1; i <= Math.min(10, successCount + 1); i++) {
            const id = `avatar${i}`;
            if (!unlocked.includes(id)) unlocked.push(id);
        }
        if ((user.badges || []).includes("legendary_winner") && !unlocked.includes("avatar10")) unlocked.push("avatar10");
        return [...new Set(unlocked)];
    },

    nextAvatarToUnlock(user) {
        const unlocked = this.normalizeUnlockedAvatars(user?.profile?.unlockedAvatars, user);
        return TM_AVATARS.find(item => !unlocked.includes(item.id)) || null;
    },

    unlockNextAvatar(user) {
        const profile = { ...TM_DEFAULT_PROFILE, ...(user.profile || {}) };
        profile.unlockedAvatars = this.normalizeUnlockedAvatars(profile.unlockedAvatars, user);
        const next = TM_AVATARS.find(item => !profile.unlockedAvatars.includes(item.id));
        if (next) profile.unlockedAvatars.push(next.id);
        profile.successfulQuizzes = Number(profile.successfulQuizzes || 0) + 1;
        user.profile = profile;
        return next;
    },

    unlockedAvatars(user) {
        const unlocked = this.normalizeUnlockedAvatars(user?.profile?.unlockedAvatars, user);
        return TM_AVATARS.filter(item => unlocked.includes(item.id));
    },

    unlockedThemes(user) {
        return TM_THEMES.filter(item => item.rule(user));
    },

    isAvatarUnlocked(user, avatar) {
        if (avatar === "custom-photo") return this.canUseUltimate(user) && Boolean(user?.profile?.profilePhoto);
        return this.unlockedAvatars(user).some(item => item.id === avatar);
    },

    isThemeUnlocked(user, theme) {
        return this.unlockedThemes(user).some(item => item.id === theme);
    },

    avatarFor(user) {
        const avatar = user?.profile?.avatar || user?.avatar || "avatar1";
        if (avatar === "custom-photo" && this.photoFor(user)) return "custom-photo";
        return avatar === "custom-photo" ? "avatar1" : avatar;
    },

    photoFor(user) {
        return this.canUseUltimate(user) ? (user?.profile?.profilePhoto || "") : "";
    },

    renderIdentity(target, user, sizeClass = "") {
        const photo = this.avatarFor(user) === "custom-photo" ? this.photoFor(user) : "";
        target.className = `${target.className.replace(/has-photo/g, "").trim()} ${sizeClass}`.trim();
        target.style.fontSize = "";
        if (photo) {
            target.classList.add("has-photo");
            target.innerHTML = `<img src="${photo}" alt="${user.name || "Student"} profile photo">`;
        } else {
            const avatar = this.avatarFor(user);
            const found = TM_AVATARS.find(a => a.id === avatar) || TM_AVATARS[0];
            target.classList.add("has-photo");
            target.innerHTML = `<img src="${found.image}" alt="${found.name}">`;
        }
    },

    unlockedBadges(user) {
        const existing = Array.isArray(user.badges) ? user.badges : [];
        const earned = TM_BADGES.filter(badge => badge.rule(user)).map(badge => badge.id);
        return [...new Set([...existing, ...earned])];
    },

    badgeName(id) {
        return TM_BADGES.find(badge => badge.id === id)?.name || id;
    },

    todayKey() {
        return new Date().toISOString().slice(0, 10);
    },

    yesterdayKey() {
        const date = new Date();
        date.setDate(date.getDate() - 1);
        return date.toISOString().slice(0, 10);
    },

    isPerSubjectStats(stats) {
        const values = Object.values(stats || {});
        if (!values.length) return false;
        // New format: { "Technical Drawing": { "Projection": {correct,total} } }
        // Legacy format: { "Projection": {correct,total} }
        return values.some(v => v && typeof v === "object" && !("correct" in v || "total" in v));
    },

    topicStatsForSubject(topicStats, subject) {
        const stats = topicStats || {};
        if (!subject) return {};
        if (this.isPerSubjectStats(stats)) {
            return { ...(stats[subject] || {}) };
        }
        // Legacy flat stats pre-date per-subject tracking (app was
        // TD-only). Attribute them to Technical Drawing so they don't
        // leak into English/Maths/Science radars.
        if (String(subject).toLowerCase() === "technical drawing") return { ...stats };
        return {};
    },

    examPrepDoneKey(subject) {
        const user = this.getCurrentUser();
        return `tm_examPrepDone_${user?.name || "guest"}_${subject || "Technical Drawing"}`;
    },

    examPrepDone(subject) {
        try {
            return JSON.parse(localStorage.getItem(this.examPrepDoneKey(subject))) || [];
        } catch (_) {
            return [];
        }
    },

    markExamPrepTopicDone(subject, topic) {
        if (!topic) return;
        const list = this.examPrepDone(subject);
        if (list.indexOf(topic) === -1) {
            list.push(topic);
            try { localStorage.setItem(this.examPrepDoneKey(subject), JSON.stringify(list)); } catch (_) {}
        }
    },

    mergeTopicStats(existing, topicResults, defaultSubject = "") {
        const stats = { ...(existing || {}) };
        const perSubject = this.isPerSubjectStats(stats);
        // Migrate legacy flat stats under Technical Drawing (the original
        // single-subject app) so old entries don't leak into every subject.
        let base = stats;
        if (!perSubject && Object.keys(stats).length) {
            base = { "Technical Drawing": { ...stats } };
        } else if (perSubject) {
            base = {};
            Object.entries(stats).forEach(([subj, topics]) => { base[subj] = { ...(topics || {}) }; });
        } else {
            base = {};
        }
        (topicResults || []).forEach(result => {
            const subject = String(result.subject || defaultSubject || "Technical Drawing").slice(0, 60);
            const topic = String(result.topic || "General").slice(0, 40);
            if (!base[subject]) base[subject] = {};
            const current = base[subject][topic] || { correct: 0, total: 0 };
            current.correct = Number(current.correct || 0) + (result.correct ? 1 : 0);
            current.total = Number(current.total || 0) + 1;
            base[subject][topic] = current;
        });
        return base;
    },

    topicSummary(topicStats, subject = "") {
        const source = subject ? this.topicStatsForSubject(topicStats, subject) : (topicStats || {});
        const entries = Object.entries(source);
        if (!entries.length) return { strongest: "Not enough data", focus: "Take a quiz first" };

        const ranked = entries
            .map(([topic, stat]) => ({
                topic,
                total: Number(stat.total || 0),
                percent: Math.round((Number(stat.correct || 0) / Math.max(1, Number(stat.total || 0))) * 100)
            }))
            .filter(item => item.total > 0)
            .sort((a, b) => b.percent - a.percent);

        return {
            strongest: ranked[0]?.topic || "Not enough data",
            focus: [...ranked].reverse()[0]?.topic || "Take a quiz first"
        };
    },

    applyProfile(profilePatch) {
        const user = this.getCurrentUser();
        if (!user) return null;

        const nextProfile = { ...TM_DEFAULT_PROFILE, ...(user.profile || {}), ...profilePatch };
        if (!this.isThemeUnlocked(user, nextProfile.accent)) nextProfile.accent = user.profile?.accent || "blue";
        if (!this.isAvatarUnlocked(user, nextProfile.avatar)) nextProfile.avatar = user.profile?.avatar || "avatar1";
        if (!this.canUseUltimate(user)) {
            nextProfile.profilePhoto = "";
            if (nextProfile.avatar === "custom-photo") nextProfile.avatar = "avatar1";
        }

        user.profile = nextProfile;
        user.avatar = user.profile.avatar;
        this.setCurrentUser(user);

        const users = this.getUsers().filter(u => !(u.name === user.name && (u.class || u.studentClass) === user.class));
        users.push(user);
        this.saveUsers(users);
        return user;
    },

    updateLocalStats(score, topicResults = [], subject = "") {
        let users = this.getUsers();
        let currentUser = this.getCurrentUser();
        if (!currentUser) return null;

        const today = this.todayKey();
        const playedYesterday = currentUser.lastPlayedDate === this.yesterdayKey();
        const playedToday = currentUser.lastPlayedDate === today;
        const streak = playedToday ? currentUser.streak : (playedYesterday ? Number(currentUser.streak || 0) + 1 : 1);

        currentUser.xp = Number(currentUser.xp || 0) + Number(score);
        currentUser.totalQuizzes = Number(currentUser.totalQuizzes || 0) + 1;
        currentUser.bestScore = Math.max(Number(currentUser.bestScore || 0), Number(score));
        currentUser.level = this.levelFromXP ? this.levelFromXP(currentUser.xp) : Math.max(1, Math.floor(currentUser.xp / 100) + 1);
        currentUser.streak = streak;
        currentUser.dailyQuizCount = playedToday ? Number(currentUser.dailyQuizCount || 0) + 1 : 1;
        currentUser.lastPlayedDate = today;
        const quizSubject = subject || topicResults?.[0]?.subject || localStorage.getItem("tm_selectedSubject") || "Technical Drawing";
        currentUser.topicStats = this.mergeTopicStats(currentUser.topicStats, topicResults, quizSubject);
        const passScore = Number(this.getAppConfig().passingScore || 70);
        if (Number(score) >= passScore) this.unlockNextAvatar(currentUser);
        currentUser.badges = this.unlockedBadges(currentUser);
        currentUser.rankTitle = this.rankTitle(currentUser);

        users = users.filter(u => !(u.name === currentUser.name && (u.class || u.studentClass) === currentUser.class));
        users.push(currentUser);
        this.saveUsers(users);
        this.setCurrentUser(currentUser);
        return currentUser;
    },

    getCoins() {
        const user = this.getCurrentUser();
        return user ? Number(user.coins || 0) : 0;
    },

    addCoins(amount) {
        if (!amount) return this.getCurrentUser();
        const user = this.getCurrentUser();
        if (!user) return null;
        user.coins = Number(user.coins || 0) + Number(amount);
        const users = this.getUsers().map(u =>
            (u.name === user.name && (u.class || u.studentClass) === user.class) ? user : u
        );
        this.saveUsers(users);
        this.setCurrentUser(user);
        return user;
    },

    spendCoins(amount) {
        const user = this.getCurrentUser();
        if (!user) return false;
        const current = Number(user.coins || 0);
        if (current < Number(amount)) return false;
        user.coins = current - Number(amount);
        const users = this.getUsers().map(u =>
            (u.name === user.name && (u.class || u.studentClass) === user.class) ? user : u
        );
        this.saveUsers(users);
        this.setCurrentUser(user);
        return true;
    },

    levelRewardCoins(nextLevel) {
        return Math.round(75 * nextLevel);
    },

    featureUnlocksForLevel(level) {
        const unlocks = [];
        if (level >= 2) unlocks.push({ id: "custom_themes", title: "Custom Themes", body: "Unlock rose, ocean, fire, forest, neon and dark accents." });
        if (level >= 3) unlocks.push({ id: "avatar_accessories", title: "Avatar Accessories", body: "Equip frames and badges on your profile avatar." });
        if (level >= 5) unlocks.push({ id: "exclusive_quizzes", title: "Exclusive Quizzes", body: "Championship rounds and boss-level question packs." });
        if (level >= 10) unlocks.push({ id: "gold_profile", title: "Gold Profile", body: "Ultimate theme + custom profile photo unlocked." });
        if (level >= 15) unlocks.push({ id: "legend_badge", title: "Legend Badge", body: "Permanent hall-of-fame badge and crown avatar." });
        return unlocks;
    },

    recordLevelCompletion(fromLevel, toLevel, coins) {
        try {
            const log = JSON.parse(localStorage.getItem("tm_levelLog") || "[]");
            log.push({ from: fromLevel, to: toLevel, coins, at: Date.now() });
            localStorage.setItem("tm_levelLog", JSON.stringify(log.slice(-50)));
        } catch (_) {}
    },

    // Returns { leveledUp: boolean, from, to, coins } when the just-saved user
    // reached a new level since the last recorded level-up.
    pendingLevelUp(user) {
        const u = user || this.getCurrentUser();
        if (!u) return null;
        const level = Number(u.level || 1);
        const log = JSON.parse(localStorage.getItem("tm_levelLog") || "[]");
        const already = log.some(entry => Number(entry.to) === level);
        if (already || level < 2) return null;
        const prev = log[log.length - 1];
        const from = prev ? Number(prev.to) : level - 1;
        const coins = u.coins ? Number(u.coins) : 0;
        return { leveledUp: true, from, to: level, coins };
    },

    // --- Purchasable feature unlocks (coin-funded, time-limited) ---
    getFeatureUnlocks(user) {
        const u = user || this.getCurrentUser();
        return u ? (u.featureUnlocks || {}) : {};
    },

    isFeatureUnlocked(user, featureId) {
        const u = user || this.getCurrentUser();
        if (!u) return false;
        const expiry = Number((u.featureUnlocks || {})[featureId] || 0);
        return expiry > 0 && Date.now() < expiry;
    },

    unlockFeature(featureId, coins) {
        const user = this.getCurrentUser();
        if (!user) return { success: false, error: "No user logged in." };
        const priceMap = FEATURE_PRICES[featureId];
        if (!priceMap) return { success: false, error: "Unknown feature." };
        if (!Object.prototype.hasOwnProperty.call(priceMap, coins)) {
            return { success: false, error: "Invalid coin amount." };
        }
        const currentCoins = Number(user.coins || 0);
        if (currentCoins < Number(coins)) {
            return { success: false, error: "Not enough gold coins." };
        }
        const months = priceMap[coins];
        const expiry = Date.now() + months * MONTH_MS;
        user.coins = currentCoins - Number(coins);
        user.featureUnlocks = { ...(user.featureUnlocks || {}), [featureId]: expiry };

        const users = this.getUsers().map(u =>
            (u.name === user.name && (u.class || u.studentClass) === user.class) ? user : u
        );
        this.saveUsers(users);
        this.setCurrentUser(user);
        return { success: true, months, expiry, coinsRemaining: user.coins };
    }
};
