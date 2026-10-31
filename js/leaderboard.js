async function loadHallOfFame() {
    const list = document.getElementById("hallOfFame");
    const pills = document.getElementById("subjectPills");
    if (!list) return;
    list.innerHTML = `<li class="list-group-item">Loading legends...</li>`;
    let subject = localStorage.getItem("tm_leaderboardSubject") || "All Subjects";
    try {
        const data = await API.leaderboard();
        let users = data.users || [];
        if (subject && subject !== "All Subjects") {
            users = users.filter(u => {
                const subjects = u.allowedSubjects || [];
                return subjects.some(s => String(s).toLowerCase() === String(subject).toLowerCase());
            });
        }
        renderHall(list, pills, users, subject);
    } catch (_) {
        let users = Storage.getUsers();
        if (subject && subject !== "All Subjects") {
            users = users.filter(u => {
                const subjects = u.allowedSubjects || [];
                return subjects.some(s => String(s).toLowerCase() === String(subject).toLowerCase());
            });
        }
        users = users.sort((a, b) => b.bestScore - a.bestScore).slice(0, 10);
        renderHall(list, pills, users, subject);
    }
}

function renderPills(pills, activeSubject) {
    if (!pills) return;
    const subjects = ["All Subjects", "Technical Drawing", "English", "Maths", "Science", "SES"];
    pills.innerHTML = subjects.map(s => `
        <button class="subject-pill ${s === activeSubject ? "active" : ""}" data-subject="${s}">${s}</button>
    `).join("");
    pills.querySelectorAll(".subject-pill").forEach(pill => {
        pill.addEventListener("click", () => {
            localStorage.setItem("tm_leaderboardSubject", pill.dataset.subject);
            loadHallOfFame();
        });
    });
}

function renderHall(list, pills, users, activeSubject) {
    renderPills(pills, activeSubject);
    list.innerHTML = "";
    if (!users.length) {
        list.innerHTML = `<li class="list-group-item">No legends yet in this subject.</li>`;
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
