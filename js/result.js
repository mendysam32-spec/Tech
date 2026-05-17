document.addEventListener("DOMContentLoaded", () => {
    const score = Number(localStorage.getItem("tm_lastScore"));
    const user = Storage.getCurrentUser();

    if (Number.isNaN(score) || !user) {
        window.location.href = "dashboard.html";
        return;
    }

    document.getElementById("finalScore").textContent = score + "%";
    document.getElementById("xpEarned").textContent = score;
    document.getElementById("currentLevel").textContent = user.level || 1;
    Storage.renderIdentity(document.getElementById("avatarReaction"), user);

    let reaction = "Good attempt. Review one weak area and return stronger.";
    if (score >= 90) reaction = "Elite performance. Your account just got louder.";
    else if (score >= 80) reaction = "Powerful win. You are building Hall of Fame form.";
    else if (score >= 60) reaction = "Nice progress. One review round can push you higher.";
    else if (score >= 40) reaction = "You are warming up. The review page is your upgrade path.";

    document.getElementById("reactionText").textContent = reaction;
    renderAvatarUnlockMessage();
    renderResultBadges(user);
    renderResultFocus(user);
});

function renderResultBadges(user) {
    const container = document.getElementById("resultBadges");
    container.innerHTML = "";

    if (!user.badges.length) {
        container.innerHTML = `<span class="empty-state">No badges yet.</span>`;
        return;
    }

    user.badges.slice(-4).forEach(id => {
        const badge = document.createElement("span");
        badge.className = "tm-badge";
        badge.textContent = Storage.badgeName(id);
        container.appendChild(badge);
    });
}

function renderResultFocus(user) {
    const summary = Storage.topicSummary(user.topicStats);
    document.getElementById("resultFocus").textContent =
        `Next best practice area: ${summary.focus}.`;
}


function renderAvatarUnlockMessage() {
    const box = document.getElementById("avatarUnlockMessage");
    if (!box) return;
    let avatar = null;
    try { avatar = JSON.parse(localStorage.getItem("tm_lastAvatarUnlock") || "null"); } catch (_) {}
    if (!avatar) {
        box.style.display = "none";
        return;
    }
    box.style.display = "block";
    box.textContent = `🔥 New avatar unlocked: ${avatar.name}. Open Settings to choose it.`;
}
