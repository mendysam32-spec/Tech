/* =====================================================
   TECH MONSTER CLOUD API
   Cloudflare Pages Functions + D1.
   Staff credentials stay on the server, never in browser JS.
===================================================== */
const API = {
    base: "/api",

    async request(path, options = {}) {
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

        const response = await fetch(this.base + path, { ...cleanOptions, headers });
        let data = {};
        try { data = await response.json(); } catch (_) {}
        if (!response.ok) throw new Error(data.error || "Cloud request failed");
        return data;
    },

    async unifiedLogin(username, password) {
        return this.request("/unified-login", {
            method: "POST",
            body: JSON.stringify({ username, password })
        });
    },

    async login(name, studentClass, password) {
        return this.request("/login", {
            method: "POST",
            body: JSON.stringify({ name, username: name, studentClass, password })
        });
    },

    async saveScore(score, topicResults = [], subject = "") {
        return this.request("/score", {
            method: "POST",
            body: JSON.stringify({ score, topicResults, subject })
        });
    },

    async saveProfile(profile) {
        return this.request("/profile", {
            method: "POST",
            body: JSON.stringify({ profile })
        });
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
