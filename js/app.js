document.addEventListener("DOMContentLoaded", () => {
    const isNativeApp = !!(window.Capacitor && typeof window.Capacitor.isNativePlatform === "function" && window.Capacitor.isNativePlatform());

    // Android app: never expose the admin login on the device. The app always
    // opens on this screen; saved accounts let students continue with one tap.
    if (isNativeApp) {
        const adminTab = document.getElementById("adminLoginTab");
        const adminRecovery = document.getElementById("adminRecoveryWrap");
        const roleTabs = document.querySelector(".login-role-tabs");
        [adminTab, adminRecovery, roleTabs].forEach(el => { if (el) el.style.display = "none"; });
    }

    // Accounts created before this update keep working as saved profiles.
    try { Storage.syncSavedAccounts(); } catch (_) {}

    loadHallOfFame();
    const form = document.getElementById("loginForm");
    const msg = document.getElementById("loginMessage");
    const studentTab = document.getElementById("studentLoginTab");
    const adminTab = document.getElementById("adminLoginTab");
    const loginTitle = document.getElementById("loginTitle");
    const loginDescription = document.getElementById("loginDescription");
    const loginHint = document.getElementById("loginHint");
    const loginSubmitBtn = document.getElementById("loginSubmitBtn");
    const loginUsername = document.getElementById("loginUsername");
    const loginPassword = document.getElementById("loginPassword");
    const loginFormWrap = document.getElementById("loginFormWrap");
    const savedAccountsWrap = document.getElementById("savedAccountsWrap");
    const savedAccountsList = document.getElementById("savedAccountsList");
    const accountsCount = document.getElementById("accountsCount");
    const accountsMessage = document.getElementById("accountsMessage");
    const addAccountBtn = document.getElementById("addAccountBtn");
    const MAX_ACCOUNTS = typeof TM_MAX_SAVED_ACCOUNTS !== "undefined" ? TM_MAX_SAVED_ACCOUNTS : 3;
    let forcingFormOpen = new URLSearchParams(window.location.search).get("add") === "1";

    function accountDisplayName(account) {
        return account.profile?.nickname || account.name || account.username || "Student";
    }

    function enterSavedAccount(key) {
        const user = Storage.activateSavedAccount(key);
        if (!user) {
            accountsMessage.style.color = "#dc2626";
            accountsMessage.textContent = "That account is no longer on this device.";
            return;
        }
        window.location.href = "dashboard.html";
    }

    function renderSavedAccounts() {
        const accounts = Storage.getSavedAccounts();
        const current = Storage.getCurrentUser();
        const currentKey = current ? Storage.accountKey(current) : "";
        const count = accounts.length;

        if (!count) {
            savedAccountsWrap.classList.add("d-none");
            accountsMessage.textContent = "";
            loginFormWrap.classList.remove("d-none");
            addAccountBtn.classList.add("d-none");
            const isAdmin = form.dataset.loginMode === "admin";
            loginTitle.textContent = isAdmin ? "Admin Control Center" : "Enter the Arena";
            loginDescription.textContent = isAdmin
                ? "Admin and teacher accounts login here. Credentials are checked securely by Cloudflare, not browser JavaScript. You can use your username OR mendysam32@gmail.com with the same password."
                : "Students can login or create an account using only username and password.";
            loginSubmitBtn.textContent = isAdmin ? "Enter Control Center" : "Student Login";
            return;
        }

        savedAccountsWrap.classList.remove("d-none");
        accountsCount.textContent = `${count} of ${MAX_ACCOUNTS}`;
        savedAccountsList.innerHTML = "";

        accounts.forEach(account => {
            const key = account.accountKey || Storage.accountKey(account);
            const active = key === currentKey;
            const card = document.createElement("div");
            card.className = "tm-account-card" + (active ? " active" : "");
            card.dataset.accountKey = key;
            card.setAttribute("role", "button");
            card.tabIndex = 0;

            const avatar = document.createElement("span");
            avatar.className = "tm-account-avatar";
            try { Storage.renderIdentity(avatar, account); } catch (_) { avatar.textContent = "TM"; }

            const text = document.createElement("span");
            text.className = "tm-account-text";
            const strong = document.createElement("strong");
            strong.textContent = accountDisplayName(account);
            const small = document.createElement("small");
            const klass = account.class || account.studentClass || "General";
            small.textContent = `@${account.username || account.name || "student"} · ${klass}`;
            text.appendChild(strong);
            text.appendChild(small);

            card.appendChild(avatar);
            card.appendChild(text);

            if (active) {
                const pill = document.createElement("span");
                pill.className = "tm-account-active-pill";
                pill.textContent = "Active";
                card.appendChild(pill);
            }

            const remove = document.createElement("button");
            remove.type = "button";
            remove.className = "tm-account-remove";
            remove.setAttribute("aria-label", `Remove ${accountDisplayName(account)}`);
            remove.textContent = "✕";
            remove.addEventListener("click", (event) => {
                event.stopPropagation();
                const label = accountDisplayName(account);
                if (!window.confirm(`Remove "${label}" from this device? You can log back in with its username and password.`)) return;
                Storage.removeSavedAccount(key);
                if (Storage.savedAccountCount() === 0) forcingFormOpen = true;
                renderSavedAccounts();
            });
            card.appendChild(remove);

            const activate = () => enterSavedAccount(key);
            card.addEventListener("click", activate);
            card.addEventListener("keydown", (event) => {
                if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    activate();
                }
            });

            savedAccountsList.appendChild(card);
        });

        const showForm = shouldShowForm(count);
        loginFormWrap.classList.toggle("d-none", !showForm);
        addAccountBtn.classList.toggle("d-none", showForm || count >= MAX_ACCOUNTS);
        accountsMessage.style.color = "#475569";
        accountsMessage.textContent = count >= MAX_ACCOUNTS
            ? `Limit reached: you can keep ${MAX_ACCOUNTS} accounts. Remove one to add another.`
            : "";
        if (showForm) {
            loginTitle.textContent = count ? "Add another account" : "Enter the Arena";
            loginDescription.textContent = count
                ? `You can save up to ${MAX_ACCOUNTS} accounts on this device. This account will be added to the list.`
                : "Students can login or create an account using only username and password.";
            loginSubmitBtn.textContent = "Add Account";
        } else {
            loginTitle.textContent = "Choose your account";
            loginDescription.textContent = currentKey
                ? "Tap your account to continue. You stay signed in until you log out."
                : "Tap an account to open it.";
        }
    }

    function shouldShowForm(count) {
        return count === 0 || forcingFormOpen;
    }

    addAccountBtn.addEventListener("click", () => {
        forcingFormOpen = true;
        renderSavedAccounts();
        if (loginUsername) {
            loginUsername.value = "";
            loginPassword.value = "";
            loginUsername.focus();
        }
    });

    const adminRecoveryWrap = document.getElementById("adminRecoveryWrap");
    const forgotBtn = document.getElementById("forgotCredsBtn");
    const recoverForm = document.getElementById("recoverForm");
    const recoverEmail = document.getElementById("recoverEmail");
    const recoverBtn = document.getElementById("recoverBtn");
    const recoverMessage = document.getElementById("recoverMessage");

    function setLoginMode(mode) {
        const isAdmin = mode === "admin" && !isNativeApp;
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

        // Admin sign-in always needs the credential form; student mode shows
        // the saved-account picker when accounts exist.
        if (isAdmin) {
            forcingFormOpen = true;
            loginFormWrap.classList.remove("d-none");
        } else {
            forcingFormOpen = false;
            if (Storage.savedAccountCount() > 0) renderSavedAccounts();
        }
    }

    studentTab.addEventListener("click", () => setLoginMode("student"));
    adminTab.addEventListener("click", () => setLoginMode("admin"));
    renderSavedAccounts();

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
        const username = loginUsername.value.trim();
        const password = loginPassword.value.trim();
        const loginMode = form.dataset.loginMode || "student";
        if (!username || !password) return;

        // Enforce the 3-account cap before creating/signing in a new profile.
        if (loginMode !== "admin") {
            const alreadySaved = Storage.getSavedAccountKeys().includes(Storage.accountKey(username));
            if (!alreadySaved && Storage.savedAccountCount() >= MAX_ACCOUNTS) {
                msg.style.color = "#dc2626";
                msg.textContent = `You can save up to ${MAX_ACCOUNTS} accounts on this device. Remove one of the saved accounts first.`;
                return;
            }
        }

        msg.style.color = "";
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

            const remembered = Storage.rememberAccount(data.user, password);
            if (!remembered.success) {
                msg.style.color = "#dc2626";
                msg.textContent = remembered.error || "Could not save this account.";
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
            let existingUser = users.find(u => Storage.accountKey(u) === Storage.accountKey(username));
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
            const remembered = Storage.rememberAccount(existingUser, password);
            if (!remembered.success) {
                msg.style.color = "#dc2626";
                msg.textContent = remembered.error || "Could not save this account.";
                return;
            }
            Storage.setCurrentUser(existingUser);
            if (window.Sync) window.Sync.enqueue({ path: "/unified-login", method: "POST", body: JSON.stringify({ username, password }) });
            window.location.href = "dashboard.html";
        }
    });
});
