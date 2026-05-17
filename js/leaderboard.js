async function loadHallOfFame() {
    const list = document.getElementById("hallOfFame");
    if (!list) return;
    list.innerHTML = `<li class="list-group-item">Loading legends...</li>`;
    try {
        const data = await API.leaderboard();
        renderHall(list, data.users || []);
    } catch (_) {
        const users = Storage.getUsers().sort((a, b) => b.bestScore - a.bestScore).slice(0, 10);
        renderHall(list, users);
    }
}

function renderHall(list, users) {
    list.innerHTML = "";
    if (!users.length) {
        list.innerHTML = `<li class="list-group-item">No legends yet</li>`;
        return;
    }
    users.slice(0, 10).forEach((user, index) => {
        const normalized = Storage.normalizeUser(user);
        const li = document.createElement("li");
        li.className = `list-group-item hall-item ${index < 3 ? "top-three" : ""}`;
        const identity = document.createElement("span");
        identity.className = "hall-identity";
        const avatar = document.createElement("span");
        avatar.className = "hall-avatar";
        Storage.renderIdentity(avatar, normalized);
        const label = document.createElement("span");
        label.innerHTML = `<strong>${index + 1}. ${normalized.profile?.nickname || normalized.name}</strong><small>${normalized.class || ""}</small>`;
        identity.appendChild(avatar);
        identity.appendChild(label);
        const score = document.createElement("strong");
        score.textContent = `${normalized.bestScore || 0}%`;
        li.appendChild(identity);
        li.appendChild(score);
        list.appendChild(li);
    });
}
