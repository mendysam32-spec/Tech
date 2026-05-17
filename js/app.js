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

    function setLoginMode(mode) {
        const isAdmin = mode === "admin";
        form.dataset.loginMode = isAdmin ? "admin" : "student";
        studentTab.classList.toggle("active", !isAdmin);
        adminTab.classList.toggle("active", isAdmin);
        document.body.classList.toggle("admin-login-mode", isAdmin);
        loginTitle.textContent = isAdmin ? "Admin Control Center" : "Enter the Arena";
        loginDescription.textContent = isAdmin
            ? "Admin and teacher accounts login here. Credentials are checked securely by Cloudflare, not browser JavaScript."
            : "Students can login or create an account using only username and password.";
        loginHint.textContent = isAdmin
            ? "Staff login requires internet connection and Cloudflare secrets/D1 to be configured."
            : "New student accounts are created automatically.";
        loginSubmitBtn.textContent = isAdmin ? "Enter Control Center" : "Student Login";
        msg.textContent = "";
    }

    studentTab.addEventListener("click", () => setLoginMode("student"));
    adminTab.addEventListener("click", () => setLoginMode("admin"));

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
