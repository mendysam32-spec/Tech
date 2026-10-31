/* =====================================================
   TECH MONSTER API
   Works in browser (Cloudflare Functions) and Electron
   (offline-first via localStorage + data files).
   Staff credentials stay on the server, never in browser JS.
   ===================================================== */
const API = {
    base: "/api",
    remoteBase: "", // set to Cloudflare URL (e.g. https://tech-monster.pages.dev/api) for cloud sync
    isElectron: !!window.electronAPI,

    // Map subject keys to window globals exposed by data/*.js
    NOTES_GLOBALS: {
        english: "englishNotes",
        maths: "mathsNotes",
        science: "scienceNotes",
        "technical drawing": "technicalDrawingNotes",
        foundationscience: "foundationScienceNotes",
        ses: "sesFullNotes",
    },

    async request(path, options = {}) {
        const method = (options.method || "GET").toUpperCase();
        const token = localStorage.getItem("tm_sessionToken");
        const staffToken = localStorage.getItem("tm_staffToken");
        const headers = {
            "Content-Type": "application/json",
            ...(options.headers || {})
        };

        if (options.staff && staffToken) headers.Authorization = `Bearer ${staffToken}`;
        else if (token) headers.Authorization = `Bearer ${token}`;

        const cleanOptions = { ...options };
        delete cleanOptions.staff;

        const isWrite = method === "POST" || method === "PUT" || method === "DELETE";

        // --- Electron offline-first path ---
        if (this.isElectron && !method.startsWith("OPTIONS")) {
            const localResult = this.handleLocal(path, method, cleanOptions.body ? JSON.parse(cleanOptions.body) : null);
            if (localResult !== null) {
                // Also attempt remote sync in background if remoteBase configured and online
                if (isWrite && this.remoteBase && navigator.onLine) {
                    this.remoteRequest(path, cleanOptions).catch(() => {});
                }
                return localResult;
            }
            // Fall through to network for reads not handled locally
        }

        // --- Network path (browser or Electron with remote) ---
        const fetchUrl = this.remoteBase ? this.remoteBase + path : this.base + path;
        try {
            const response = await fetch(fetchUrl, { ...cleanOptions, headers });
            let data = {};
            try { data = await response.json(); } catch (_) {}
            if (!response.ok) throw new Error(data.error || "Request failed");

            // Cache GET responses in localStorage for offline use
            if (method === "GET" && response.ok) {
                try { localStorage.setItem("tm_api_" + path.replace(/\W/g, "_"), JSON.stringify(data)); } catch (_) {}
            }
            return data;
        } catch (err) {
            const isNetworkError = err instanceof TypeError || /network|failed to fetch|Failed to fetch/i.test(String(err));
            if (isNetworkError && isWrite) {
                try {
                    if (window.Sync) {
                        window.Sync.enqueue({
                            path,
                            method,
                            body: cleanOptions.body,
                            headers: { "Content-Type": "application/json", ...(options.headers || {}) }
                        });
                    }
                } catch (_) {}
            }
            // For reads in Electron, try local fallback before throwing
            if (this.isElectron) {
                const localResult = this.handleLocal(path, method, cleanOptions.body ? JSON.parse(cleanOptions.body) : null);
                if (localResult !== null) return localResult;
            }
            throw err;
        }
    },

    // Serve API-like data from localStorage cache or window globals (Electron offline)
    handleLocal(path, method, body) {
        const cleanPath = path.replace(/\?.*$/, "");

        // --- GET endpoints ---
        if (method === "GET") {
            if (cleanPath === "/config") {
                return Storage ? Storage.getAppConfig() : { appName: "Tech Monster", passingScore: 70 };
            }
            if (cleanPath === "/leaderboard") {
                const users = Storage ? Storage.getUsers() : [];
                return { users: users.sort((a, b) => (b.bestScore || 0) - (a.bestScore || 0)).slice(0, 20) };
            }
            if (cleanPath === "/subjects") {
                const subjects = new Set(["Technical Drawing", "English", "Maths", "Science"]);
                if (Storage) {
                    const user = Storage.getCurrentUser();
                    if (user?.allowedSubjects) user.allowedSubjects.forEach(s => subjects.add(s));
                }
                return { subjects: Array.from(subjects) };
            }
            if (cleanPath === "/questions") {
                const subject = this.extractSubject(path);
                return this.getQuestions(subject);
            }
            if (cleanPath === "/notes") {
                const subject = this.extractSubject(path);
                return this.getNotes(subject);
            }
            if (cleanPath === "/events") {
                const subject = this.extractSubject(path);
                return this.getLocalData("events", subject, []);
            }
            if (cleanPath === "/assignments") {
                const subject = this.extractSubject(path);
                return this.getLocalData("assignments", subject, []);
            }
        }

        // --- POST endpoints ---
        if (method === "POST") {
            if (cleanPath === "/login" || cleanPath === "/unified-login") {
                return this.localLogin(body);
            }
            if (cleanPath === "/score") {
                if (Storage && Storage.updateLocalStats) {
                    const user = Storage.updateLocalStats(body.score, body.topicResults, body.subject);
                    return { success: true, user };
                }
                return { success: true };
            }
            if (cleanPath === "/profile") {
                if (Storage && Storage.applyProfile) {
                    const user = Storage.applyProfile(body.profile);
                    return { success: true, user };
                }
                return { success: true };
            }
            if (cleanPath === "/assignments") {
                // Save assignment submission locally
                const submissions = JSON.parse(localStorage.getItem("tm_assignments_submissions") || "[]");
                submissions.push({ ...body, at: Date.now() });
                localStorage.setItem("tm_assignments_submissions", JSON.stringify(submissions));
                return { success: true };
            }
        }

        return null; // not handled locally
    },

    extractSubject(path) {
        const m = path.match(/[?&]subject=([^&]+)/);
        return m ? decodeURIComponent(m[1]) : "";
    },

    getQuestions(subject) {
        const key = "tm_api_questions" + (subject ? "_" + subject : "");
        const cached = localStorage.getItem(key);
        if (cached) return { questions: JSON.parse(cached) };

        let questions = [];
        if (typeof Questions !== "undefined" && Array.isArray(Questions)) {
            questions = Questions;
        } else if (window.Questions && Array.isArray(window.Questions)) {
            questions = window.Questions;
        }

        if (subject) {
            questions = questions.filter(q => String(q.subject || "").toLowerCase() === subject.toLowerCase());
        }
        return { questions };
    },

    getNotes(subject) {
        const key = "tm_api_notes" + (subject ? "_" + subject : "");
        const cached = localStorage.getItem(key);
        if (cached) return { notes: JSON.parse(cached) };

        let notes = [];
        const globalName = this.NOTES_GLOBALS[subject.toLowerCase().replace(/\s/g, "")];
        if (globalName && window[globalName]) {
            const g = window[globalName];
            notes = Array.isArray(g) ? g : (g.notes || []);
        }
        return { notes };
    },

    getLocalData(type, subject, def) {
        const key = `tm_api_${type}${subject ? "_" + subject : ""}`;
        const cached = localStorage.getItem(key);
        if (cached) return { [type]: JSON.parse(cached) };
        return { [type]: def };
    },

    localLogin(body) {
        if (!Storage) return { error: "Storage unavailable" };
        const users = Storage.getUsers();
        const name = body.name || body.username;
        const password = body.password;
        const studentClass = body.studentClass || "";

        // Try existing user
        let user = users.find(u =>
            (u.username || u.name) === name &&
            (u.class || u.studentClass || "") === studentClass &&
            u.password === password
        );

        if (!user) {
            // Auto-create student account
            user = {
                name,
                username: name,
                studentClass,
                class: studentClass,
                password,
                xp: 0,
                level: 1,
                coins: 0,
                bestScore: 0,
                totalQuizzes: 0,
                streak: 0,
                badges: [],
                topicStats: {},
                allowedSubjects: null,
                profile: { ...Storage.TM_DEFAULT_PROFILE },
                createdAt: Date.now()
            };
            users.push(user);
            Storage.saveUsers(users);
        }

        Storage.setCurrentUser(user);
        const token = "tm_" + Date.now() + "_" + Math.random().toString(36).slice(2);
        Storage.setSession(token);

        return {
            success: true,
            user: Storage.normalizeUser(user),
            sessionToken: token
        };
    },

    // --- Background remote sync (when remoteBase configured) ---
    async remoteRequest(path, cleanOptions) {
        try {
            const headers = { "Content-Type": "application/json", ...(cleanOptions.headers || {}) };
            const token = localStorage.getItem("tm_sessionToken");
            const staffToken = localStorage.getItem("tm_staffToken");
            if (staffToken) headers.Authorization = `Bearer ${staffToken}`;
            else if (token) headers.Authorization = `Bearer ${token}`;
            await fetch(this.remoteBase + path, { ...cleanOptions, headers });
        } catch (_) {}
    },

    setRemoteBase(url) {
        this.remoteBase = url.replace(/\/+$/, "");
    },

    async unifiedLogin(username, password) {
        return this.request("/unified-login", { method: "POST", body: JSON.stringify({ username, password }) });
    },
    async login(name, studentClass, password) {
        return this.request("/login", { method: "POST", body: JSON.stringify({ name, username: name, studentClass, password }) });
    },
    async saveScore(score, topicResults = [], subject = "") {
        return this.request("/score", { method: "POST", body: JSON.stringify({ score, topicResults, subject }) });
    },
    async saveProfile(profile) {
        return this.request("/profile", { method: "POST", body: JSON.stringify({ profile }) });
    },
    async leaderboard() { return this.request("/leaderboard"); },
    async subjects() { return this.request("/subjects"); },
    async questions(subject = "") { return this.request(`/questions${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`); },
    async notes(subject = "") { return this.request(`/notes${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`); },
    async config() { return this.request("/config"); },
    async events(subject = "") { return this.request(`/events${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`); },
    async assignments(subject = "") { return this.request(`/assignments${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`); },
    async submitAssignment(assignmentId, answer) { return this.request("/assignments", { method: "POST", body: JSON.stringify({ assignmentId, answer }) }); },
    async adminConfig(method = "GET", body = null) {
        return this.request("/admin/config", { method, staff: true, ...(body ? { body: JSON.stringify(body) } : {}) });
    },
    async adminSubjects(method = "GET", body = null) {
        return this.request("/admin/subjects", { method, staff: true, ...(body ? { body: JSON.stringify(body) } : {}) });
    },
    async adminTeachers(method = "GET", body = null) {
        return this.request("/admin/teachers", { method, staff: true, ...(body ? { body: JSON.stringify(body) } : {}) });
    },
    async adminQuestions(method = "GET", body = null) {
        return this.request("/admin/questions", { method, staff: true, ...(body ? { body: JSON.stringify(body) } : {}) });
    },
    async adminNotes(method = "GET", body = null) {
        return this.request("/admin/notes", { method, staff: true, ...(body ? { body: JSON.stringify(body) } : {}) });
    },
    async adminStudents() { return this.request("/admin/students", { staff: true }); },
    async adminStudentAccess(studentId, allowedSubjects = []) {
        return this.request("/admin/students/access", { method: "POST", staff: true, body: JSON.stringify({ studentId, allowedSubjects }) });
    },
    async adminEvents(method = "GET", body = null) {
        return this.request("/admin/events", { method, staff: true, ...(body ? { body: JSON.stringify(body) } : {}) });
    },
    async adminAssignments(method = "GET", body = null) {
        return this.request("/admin/assignments", { method, staff: true, ...(body ? { body: JSON.stringify(body) } : {}) });
    },
    async approveCertificate(studentId, subject, approved = true) {
        return this.request("/admin/certificates", { method: "POST", staff: true, body: JSON.stringify({ studentId, subject, approved }) });
    },
    async adminRecover(email) {
        return this.request("/admin/recover", { method: "POST", body: JSON.stringify({ email }) });
    },
    async adminRecoverVerify(token) {
        return this.request("/admin/recover-verify", { method: "POST", body: JSON.stringify({ token }) });
    }
};

// Expose TM_DEFAULT_PROFILE for localLogin
if (typeof Storage !== "undefined" && Storage.TM_DEFAULT_PROFILE) {
    API.localLoginProto = Storage.TM_DEFAULT_PROFILE;
}
