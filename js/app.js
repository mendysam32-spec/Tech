document.addEventListener("DOMContentLoaded", () => {
    loadHallOfFame();
    const form = document.getElementById("loginForm");
    const msg = document.getElementById("loginMessage");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const username = document.getElementById("loginUsername").value.trim();
        const password = document.getElementById("loginPassword").value.trim();
        if (!username || !password) return;

        msg.textContent = "Checking account...";
        try {
            const data = await API.unifiedLogin(username, password);
            if (data.role === "admin" || data.role === "teacher") {
                localStorage.setItem("tm_staffToken", data.staffToken);
                Storage.setAdminSession(data.staff);
                window.location.href = "admin.html";
                return;
            }
            Storage.setCurrentUser(data.user);
            Storage.setSession(data.sessionToken);
            window.location.href = "dashboard.html";
        } catch (error) {
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
