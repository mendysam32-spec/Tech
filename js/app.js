document.addEventListener("DOMContentLoaded", () => {
    loadHallOfFame();
    const form = document.getElementById("loginForm");
    const msg = document.getElementById("loginMessage");
    const studentTab = document.getElementById("studentLoginTab");
    const adminTab = document.getElementById("adminLoginTab");
    const loginTitle = document.getElementById("loginTitle");
    const loginDescription = document.getElementById("loginDescription");
    const loginHint = document.getElementById("loginHint");
    const loginSubmitBtn = document.getElementById("loginSubmitBtn");

    const adminRecoveryWrap = document.getElementById("adminRecoveryWrap");
    const forgotBtn = document.getElementById("forgotCredsBtn");
    const recoverForm = document.getElementById("recoverForm");
    const recoverEmail = document.getElementById("recoverEmail");
    const recoverBtn = document.getElementById("recoverBtn");
    const recoverMessage = document.getElementById("recoverMessage");

    function setLoginMode(mode) {
        const isAdmin = mode === "admin";
        form.dataset.loginMode = isAdmin ? "admin" : "student";
        studentTab.classList.toggle("active", !isAdmin);
        adminTab.classList.toggle("active", isAdmin);
        document.body.classList.toggle("admin-login-mode", isAdmin);
        loginTitle.textContent = isAdmin ? "Admin Control Center" : "Enter the Arena";
        loginDescription.textContent = isAdmin
            ? "Admin and teacher accounts login here. Credentials are checked securely by Cloudflare, not browser JavaScript. You can use your username OR mendysam32@gmail.com with the same password."
            : "Students can login or create an account using only username and password.";
        loginHint.textContent = isAdmin
            ? "Tip: Forgot credentials? Use your email mendysam32@gmail.com as username, or tap 'Recover via email'."
            : "New student accounts are created automatically.";
        loginSubmitBtn.textContent = isAdmin ? "Enter Control Center" : "Student Login";
        if (adminRecoveryWrap) adminRecoveryWrap.classList.toggle("d-none", !isAdmin);
        if (recoverForm) recoverForm.classList.add("d-none");
        if (recoverMessage) recoverMessage.textContent = "";
        msg.textContent = "";
    }

    studentTab.addEventListener("click", () => setLoginMode("student"));
    adminTab.addEventListener("click", () => setLoginMode("admin"));

    if (forgotBtn && recoverForm) {
        forgotBtn.addEventListener("click", () => {
            recoverForm.classList.toggle("d-none");
            if (!recoverForm.classList.contains("d-none") && recoverEmail) recoverEmail.focus();
        });
        recoverForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            const email = (recoverEmail.value || "mendysam32@gmail.com").trim();
            if (!email) return;
            recoverBtn.disabled = true;
            recoverBtn.textContent = "Sending…";
            recoverMessage.style.color = "#64748b";
            recoverMessage.textContent = "Sending recovery email…";
            try {
                const data = await API.adminRecover(email);
                recoverMessage.style.color = "#059669";
                if (data.magicLink) {
                    recoverMessage.innerHTML = `${escapeHtmlLocal(data.message || "Recovery link generated.")}<br><a href="${escapeHtmlLocal(data.magicLink)}" class="tm-link">Click to login instantly</a> <small>(valid 15 min)</small>`;
                    // Auto-login if token present and email not delivered (dev fallback)
                    if (data.token) {
                        try {
                            const v = await API.adminRecoverVerify(data.token);
                            if (v.staffToken) {
                                localStorage.setItem("tm_staffToken", v.staffToken);
                                Storage.setAdminSession(v.staff);
                                recoverMessage.textContent = "Magic link verified — redirecting…";
                                window.location.href = "admin.html";
                                return;
                            }
                        } catch (_) {}
                    }
                } else {
                    recoverMessage.textContent = data.message || "Recovery email sent. Check inbox and spam folder.";
                }
            } catch (err) {
                recoverMessage.style.color = "#b45309";
                recoverMessage.textContent = err.message || "Could not send recovery email.";
            } finally {
                recoverBtn.disabled = false;
                recoverBtn.textContent = "Send recovery email";
            }
        });
    }

    // Magic link auto-login: ?recovery_token=xxx or ?token=xxx
    (async () => {
        const params = new URLSearchParams(window.location.search);
        const token = params.get("recovery_token") || params.get("token");
        if (!token) return;
        msg.style.color = "#7c3aed";
        msg.textContent = "Verifying recovery link…";
        // Switch to admin mode for context
        setLoginMode("admin");
        try {
            const data = await API.adminRecoverVerify(token);
            if (data.staffToken) {
                localStorage.setItem("tm_staffToken", data.staffToken);
                Storage.setAdminSession(data.staff);
                msg.style.color = "#059669";
                msg.textContent = "Recovery verified — entering Control Center…";
                // Clean URL
                history.replaceState({}, "", window.location.pathname);
                setTimeout(() => window.location.href = "admin.html", 600);
            }
        } catch (err) {
            msg.style.color = "#dc2626";
            msg.textContent = err.message || "Recovery link invalid or expired.";
        }
    })();

    function escapeHtmlLocal(s){ return String(s||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"); }

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const username = document.getElementById("loginUsername").value.trim();
        const password = document.getElementById("loginPassword").value.trim();
        const loginMode = form.dataset.loginMode || "student";
        if (!username || !password) return;

        msg.textContent = loginMode === "admin" ? "Checking secure staff account..." : "Checking account...";
        try {
            const data = await API.unifiedLogin(username, password);
            if (data.role === "admin" || data.role === "teacher") {
                localStorage.setItem("tm_staffToken", data.staffToken);
                Storage.setAdminSession(data.staff);
                window.location.href = "admin.html";
                return;
            }

            if (loginMode === "admin") {
                msg.textContent = "This is a student account. Use Student Login instead.";
                return;
            }

            Storage.setCurrentUser(data.user);
            Storage.setSession(data.sessionToken);
            window.location.href = "dashboard.html";
        } catch (error) {
            if (loginMode === "admin") {
                msg.textContent = "Admin/teacher login needs Cloudflare D1 and secrets. Check ADMIN_USERNAME, ADMIN_PASSWORD, and the DB binding.";
                return;
            }

            // Offline/local fallback for student accounts only. Staff login must be cloud-secured.
            let users = Storage.getUsers();
            let existingUser = users.find(u => String(u.username || u.name).toLowerCase() === username.toLowerCase());
            if (existingUser && existingUser.password && existingUser.password !== password) {
                msg.textContent = "Wrong password for this account.";
                return;
            }
            if (!existingUser) {
                existingUser = {
                    username,
                    name: username,
                    class: "General",
                    password,
                    xp: 0,
                    level: 1,
                    bestScore: 0,
                    totalQuizzes: 0,
                    avatar: "avatar1",
                    profile: { ...TM_DEFAULT_PROFILE },
                    streak: 0,
                    dailyQuizCount: 0,
                    badges: [],
                    topicStats: {},
                    rankTitle: "New Challenger"
                };
                users.push(existingUser);
                Storage.saveUsers(users);
            }
            Storage.setCurrentUser(existingUser);
            window.location.href = "dashboard.html";
        }
    });
});
