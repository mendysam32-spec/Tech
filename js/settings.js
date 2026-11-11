let selectedAvatar = "avatar1";
let selectedAccent = "blue";
let selectedPhoto = "";
let settingsUser = null;

document.addEventListener("DOMContentLoaded", () => {
    settingsUser = Storage.getCurrentUser();
    if (!settingsUser) {
        window.location.href = "index.html";
        return;
    }

    selectedAvatar = settingsUser.profile?.avatar || "avatar1";
    selectedAccent = settingsUser.profile?.accent || "blue";
    selectedPhoto = settingsUser.profile?.profilePhoto || "";
    renderAvatarPicker();
    renderThemePicker();
    hydrateForm(settingsUser);
    renderDeviceAccounts();

    document.getElementById("profilePhoto").addEventListener("change", handlePhotoUpload);
    document.getElementById("removePhoto").addEventListener("click", () => {
        selectedPhoto = "";
        if (selectedAvatar === "custom-photo") selectedAvatar = "avatar1";
        document.getElementById("profilePhoto").value = "";
        renderAvatarPicker();
        document.getElementById("photoHint").textContent = "Photo removed from your avatar choices. Save your account to finish.";
    });
    document.getElementById("settingsForm").addEventListener("submit", saveSettings);
});

function hydrateForm(user) {
    const profile = { ...TM_DEFAULT_PROFILE, ...(user.profile || {}) };
    document.getElementById("nickname").value = profile.nickname || "";
    document.getElementById("motivationStyle").value = profile.motivationStyle;
    document.getElementById("quizLength").value = String(profile.quizLength);
    document.getElementById("timerMode").value = profile.timerMode;
    document.getElementById("feedbackMode").value = profile.feedbackMode;
    document.getElementById("dailyGoal").value = String(profile.dailyGoal);
    document.getElementById("soundEnabled").checked = Boolean(profile.soundEnabled);
    document.body.dataset.accent = selectedAccent;

    const ultimate = Storage.canUseUltimate(user);
    document.getElementById("profilePhoto").disabled = !ultimate;
    document.getElementById("removePhoto").disabled = !ultimate || !selectedPhoto;
    document.getElementById("photoHint").textContent = ultimate
        ? (selectedPhoto ? "Photo active. You can replace or delete it." : "Unlocked. Upload a small square photo for your profile and certificate.")
        : "Locked until 95% best score or Level 10.";
}

function renderAvatarPicker() {
    const picker = document.getElementById("avatarPicker");
    picker.innerHTML = "";

    if (Storage.canUseUltimate(settingsUser) && selectedPhoto) {
        const photoButton = document.createElement("button");
        photoButton.type = "button";
        photoButton.className = `avatar-choice ${selectedAvatar === "custom-photo" ? "selected" : ""}`;
        photoButton.innerHTML = `<img src="${selectedPhoto}" alt="My uploaded photo"><small>My Photo</small>`;
        photoButton.title = "Use my uploaded photo as profile picture";
        photoButton.addEventListener("click", () => { selectedAvatar = "custom-photo"; renderAvatarPicker(); });
        picker.appendChild(photoButton);
    }

    TM_AVATARS.forEach(choice => {
        const unlocked = Storage.isAvatarUnlocked(settingsUser, choice.id);
        const button = document.createElement("button");
        button.type = "button";
        button.className = `avatar-choice ${choice.id === selectedAvatar ? "selected" : ""} ${unlocked ? "" : "locked"}`;
        button.innerHTML = unlocked ? `<img src="${choice.image}" alt="${choice.name}"><small>${choice.name}</small>` : "LOCK";
        button.title = unlocked ? choice.name : `${choice.name} is locked`;
        button.disabled = !unlocked;
        button.addEventListener("click", () => { selectedAvatar = choice.id; renderAvatarPicker(); });
        picker.appendChild(button);
    });
}

function renderThemePicker() {
    const picker = document.getElementById("themePicker");
    picker.innerHTML = "";

    TM_THEMES.forEach(theme => {
        const unlocked = Storage.isThemeUnlocked(settingsUser, theme.id);
        const button = document.createElement("button");
        button.type = "button";
        button.className = `accent-swatch ${theme.id} ${theme.id === selectedAccent ? "selected" : ""} ${unlocked ? "" : "locked"}`;
        button.textContent = unlocked ? "" : "x";
        button.title = unlocked ? theme.name : `${theme.name} is locked`;
        button.disabled = !unlocked;
        button.addEventListener("click", () => {
            selectedAccent = theme.id;
            document.body.dataset.accent = selectedAccent;
            renderThemePicker();
        });
        picker.appendChild(button);
    });
}

function resizeImage(file, maxSize = 420, quality = 0.82) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        const reader = new FileReader();
        reader.onload = () => { img.src = reader.result; };
        reader.onerror = reject;
        img.onload = () => {
            const canvas = document.createElement("canvas");
            const size = Math.min(maxSize, Math.max(img.width, img.height));
            const scale = size / Math.max(img.width, img.height);
            canvas.width = Math.round(img.width * scale);
            canvas.height = Math.round(img.height * scale);
            const ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            resolve(canvas.toDataURL("image/jpeg", quality));
        };
        img.onerror = reject;
        reader.readAsDataURL(file);
    });
}

async function handlePhotoUpload(event) {
    const file = event.target.files?.[0];
    if (!file || !Storage.canUseUltimate(settingsUser)) return;
    document.getElementById("photoHint").textContent = "Preparing photo...";
    try {
        selectedPhoto = await resizeImage(file);
        selectedAvatar = "custom-photo";
        document.getElementById("removePhoto").disabled = false;
        renderAvatarPicker();
        document.getElementById("photoHint").textContent = "Photo ready and added beside your avatars. Save your account to use it.";
    } catch (_) {
        document.getElementById("photoHint").textContent = "Could not prepare this photo. Try a smaller image.";
    }
}

async function saveSettings(event) {
    event.preventDefault();
    const msg = document.getElementById("settingsMessage");
    const profile = {
        nickname: document.getElementById("nickname").value.trim(),
        avatar: selectedAvatar,
        accent: selectedAccent,
        motivationStyle: document.getElementById("motivationStyle").value,
        quizLength: Number(document.getElementById("quizLength").value),
        timerMode: document.getElementById("timerMode").value,
        feedbackMode: document.getElementById("feedbackMode").value,
        dailyGoal: Number(document.getElementById("dailyGoal").value),
        soundEnabled: document.getElementById("soundEnabled").checked,
        profilePhoto: selectedPhoto,
        unlockedAvatars: settingsUser.profile?.unlockedAvatars || ["avatar1"],
        successfulQuizzes: Number(settingsUser.profile?.successfulQuizzes || 0)
    };

    msg.textContent = "Saving your account...";
    try {
        const data = await API.saveProfile(profile);
        Storage.setCurrentUser(data.user);
        settingsUser = Storage.getCurrentUser();
        hydrateForm(settingsUser);
        msg.textContent = "Saved. Your account behavior has been updated.";
    } catch (_) {
        Storage.applyProfile(profile);
        settingsUser = Storage.getCurrentUser();
        hydrateForm(settingsUser);
        msg.textContent = "Saved locally. Cloud sync will work when the API is available.";
    }
}

function renderDeviceAccounts() {
    const list = document.getElementById("deviceAccountsList");
    const countEl = document.getElementById("deviceAccountsCount");
    const message = document.getElementById("deviceAccountsMessage");
    if (!list) return;

    const accounts = Storage.getSavedAccounts();
    const current = Storage.getCurrentUser();
    const currentKey = current ? Storage.accountKey(current) : "";
    const max = typeof TM_MAX_SAVED_ACCOUNTS !== "undefined" ? TM_MAX_SAVED_ACCOUNTS : 3;
    if (countEl) countEl.textContent = `${accounts.length} of ${max}`;
    list.innerHTML = "";

    accounts.forEach((account) => {
        const key = account.accountKey || Storage.accountKey(account);
        const isCurrent = key === currentKey;
        const label = account.profile?.nickname || account.name || account.username || "Student";

        const row = document.createElement("div");
        row.className = "d-flex align-items-center justify-content-between gap-2 border rounded-3 p-2 px-3 bg-white";

        const info = document.createElement("div");
        info.style.minWidth = "0";
        const name = document.createElement("strong");
        name.textContent = label;
        const meta = document.createElement("div");
        meta.className = "small text-muted text-truncate";
        meta.textContent = `@${account.username || account.name || "student"} · ${account.class || account.studentClass || "General"}`;
        info.appendChild(name);
        info.appendChild(meta);

        const actions = document.createElement("div");
        actions.className = "d-flex gap-2 flex-shrink-0 align-items-center";

        if (isCurrent) {
            const badge = document.createElement("span");
            badge.className = "badge text-bg-primary";
            badge.textContent = "Active";
            actions.appendChild(badge);
        } else {
            const switchBtn = document.createElement("button");
            switchBtn.type = "button";
            switchBtn.className = "btn btn-sm btn-outline-primary";
            switchBtn.textContent = "Switch";
            switchBtn.addEventListener("click", () => {
                if (Storage.activateSavedAccount(key)) window.location.href = "dashboard.html";
            });
            actions.appendChild(switchBtn);
        }

        const removeBtn = document.createElement("button");
        removeBtn.type = "button";
        removeBtn.className = "btn btn-sm btn-outline-danger";
        removeBtn.textContent = "Remove";
        removeBtn.addEventListener("click", () => {
            if (!window.confirm(`Remove "${label}" from this device? You can log back in with its username and password.`)) return;
            Storage.removeSavedAccount(key);
            if (isCurrent) {
                window.location.href = "index.html";
                return;
            }
            renderDeviceAccounts();
        });
        actions.appendChild(removeBtn);

        row.appendChild(info);
        row.appendChild(actions);
        list.appendChild(row);
    });

    if (accounts.length >= max) {
        if (message) message.textContent = `Limit reached: ${max} accounts on this device. Remove one to add another.`;
        return;
    }
    if (message) message.textContent = "";

    const addBtn = document.createElement("button");
    addBtn.type = "button";
    addBtn.className = "secondary-btn nav-action mt-2 align-self-start";
    addBtn.textContent = "＋ Add another account";
    addBtn.addEventListener("click", () => { window.location.href = "index.html?add=1"; });
    list.appendChild(addBtn);
}
