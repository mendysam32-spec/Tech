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
    { id: "avatar1", name: "Rookie Monster", image: "images/avatars/avatar1.png" },
    { id: "avatar2", name: "Spark Monster", image: "images/avatars/avatar2.png" },
    { id: "avatar3", name: "Green Genius", image: "images/avatars/avatar3.png" },
    { id: "avatar4", name: "Pink Striker", image: "images/avatars/avatar4.png" },
    { id: "avatar5", name: "Dark Engineer", image: "images/avatars/avatar5.png" },
    { id: "avatar6", name: "Royal Monster", image: "images/avatars/avatar6.png" },
    { id: "avatar7", name: "Ocean Brain", image: "images/avatars/avatar7.png" },
    { id: "avatar8", name: "Fire Builder", image: "images/avatars/avatar8.png" },
    { id: "avatar9", name: "Forest Master", image: "images/avatars/avatar9.png" },
    { id: "avatar10", name: "Legendary Monster", image: "images/avatars/avatar10.png" }
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
    { id: "sharp_70", name: "Sharp 70", rule: user => Number(user.bestScore || 0) >= 70 },
    { id: "elite_90", name: "Elite 90", rule: user => Number(user.bestScore || 0) >= 90 },
    { id: "level_5", name: "Level 5", rule: user => Number(user.level || 1) >= 5 },
    { id: "streak_3", name: "3 Day Streak", rule: user => Number(user.streak || 0) >= 3 },
    { id: "ultimate_gold", name: "Ultimate Gold", rule: user => Storage.canUseUltimate(user) },
    { id: "legendary_winner", name: "Legendary Winner", rule: user => (user.badges || []).includes("legendary_winner") }
];

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
            level: Number(user.level || 1),
            bestScore: Number(user.bestScore || user.best_score || 0),
            totalQuizzes: Number(user.totalQuizzes || user.total_quizzes || 0),
            streak: Number(user.streak || 0),
            dailyQuizCount: Number(user.dailyQuizCount || 0),
            lastPlayedDate: user.lastPlayedDate || "",
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

    mergeTopicStats(existing, topicResults) {
        const stats = { ...(existing || {}) };
        (topicResults || []).forEach(result => {
            const topic = result.topic || "General";
            const current = stats[topic] || { correct: 0, total: 0 };
            current.correct += result.correct ? 1 : 0;
            current.total += 1;
            stats[topic] = current;
        });
        return stats;
    },

    topicSummary(topicStats) {
        const entries = Object.entries(topicStats || {});
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

    updateLocalStats(score, topicResults = []) {
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
        currentUser.level = Math.max(1, Math.floor(currentUser.xp / 100) + 1);
        currentUser.streak = streak;
        currentUser.dailyQuizCount = playedToday ? Number(currentUser.dailyQuizCount || 0) + 1 : 1;
        currentUser.lastPlayedDate = today;
        currentUser.topicStats = this.mergeTopicStats(currentUser.topicStats, topicResults);
        const passScore = Number(this.getAppConfig().passingScore || 70);
        if (Number(score) >= passScore) this.unlockNextAvatar(currentUser);
        currentUser.badges = this.unlockedBadges(currentUser);
        currentUser.rankTitle = this.rankTitle(currentUser);

        users = users.filter(u => !(u.name === currentUser.name && (u.class || u.studentClass) === currentUser.class));
        users.push(currentUser);
        this.saveUsers(users);
        this.setCurrentUser(currentUser);
        return currentUser;
    }
};
