document.addEventListener("DOMContentLoaded", async () => {
    const user = Storage.getCurrentUser();
    if (!user) {
        window.location.href = "index.html";
        return;
    }

    applyTheme(user.profile?.accent);
    renderUser(user);
    renderMission(user);
    renderPreferences(user);
    renderBadges(user);
    renderBadgeChest(user);
    renderTopicRadar(user);
    renderProgressMap(user);
    showLevelUpBanner();
    showMotivation(user.profile?.motivationStyle);
    await loadSubjects();
    loadDashboardHall();
    loadLiveEventsAndAssignments(user);
});

function renderUser(user) {
    Storage.renderIdentity(document.getElementById("currentAvatar"), user);
    document.getElementById("rankTitle").textContent = user.rankTitle;
    document.getElementById("userName").textContent = user.profile?.nickname || user.name;
    document.getElementById("userClass").textContent = user.class || user.studentClass || "General";
    document.getElementById("totalQuizzes").textContent = user.totalQuizzes || 0;
    document.getElementById("bestScore").textContent = user.bestScore || 0;
    document.getElementById("userLevel").textContent = user.level || 1;
    document.getElementById("userStreak").textContent = user.streak || 0;
    updateXPBar(user);
}

const LOCAL_SUBJECTS = TMSubjects.listDefault();

async function loadSubjects() {
    const select = document.getElementById("subjectSelect");
    if (!select) return;
    const user = Storage.getCurrentUser();

    let subjects = LOCAL_SUBJECTS.map(name => ({ name }));
    if (TMSubjects.isOnline()) {
        try {
            const data = await API.subjects();
            const cloud = data.subjects?.length ? data.subjects : [];
            for (const s of cloud) {
                if (!subjects.some(x => x.name.toLowerCase() === String(s.name).toLowerCase())) subjects.push(s);
            }
        } catch (_) {}
    }

    subjects = subjects.filter(s => TMSubjects.isAvailable(s.name));
    subjects = Storage.filterAllowedSubjects(user, subjects);
    if (!subjects.length) {
        select.innerHTML = `<option value="">No subjects available</option>`;
        localStorage.setItem("tm_selectedSubject", "");
        return;
    }

    const saved = localStorage.getItem("tm_selectedSubject") || subjects[0].name;
    select.innerHTML = subjects.map(s => `<option value="${s.name}">${TMSubjects.label(s.name)}</option>`).join("");
    select.value = subjects.some(s => s.name === saved) ? saved : subjects[0].name;
    localStorage.setItem("tm_selectedSubject", select.value);
    renderTopicRadar(Storage.getCurrentUser() || user);
    renderExamPrep(Storage.getCurrentUser() || user, select.value);
    renderProgressMap(Storage.getCurrentUser() || user);
    select.onchange = () => {
        const subj = select.value;
        if (!TMSubjects.isAvailable(subj)) {
            TMSubjects.promptOnline(subj);
            select.value = localStorage.getItem("tm_selectedSubject") || subjects[0].name;
            return;
        }
        localStorage.setItem("tm_selectedSubject", subj);
        renderTopicRadar(Storage.getCurrentUser());
        renderExamPrep(Storage.getCurrentUser(), subj);
        renderProgressMap(Storage.getCurrentUser());
    };
}

if (!window.__tmDashboardNetworkBound) {
    window.__tmDashboardNetworkBound = true;
    TMSubjects.onChange(() => loadSubjects());
}

function updateXPBar(user) {
    const level = Number(user.level || 1);
    const xp = Number(user.xp || 0);
    const currentLevelStart = Storage.totalXPForLevel ? Storage.totalXPForLevel(level) : (level - 1) * 100;
    const xpIntoLevel = Math.max(0, xp - currentLevelStart);
    const needed = Storage.xpPerLevel ? Storage.xpPerLevel(level) : 100;
    const percentage = Math.min(100, Math.round((xpIntoLevel / Math.max(1, needed)) * 100));
    const xpBar = document.getElementById("xpBar");
    xpBar.style.width = percentage + "%";
    xpBar.textContent = `${xpIntoLevel}/${needed} XP`;
}

function renderMission(user) {
    const goal = Number(user.profile?.dailyGoal || 1);
    const done = Number(user.dailyQuizCount || 0);
    const percent = Math.min(100, Math.round((done / goal) * 100));
    document.getElementById("dailyMissionText").textContent = `Complete ${goal} quiz${goal === 1 ? "" : "zes"} today.`;
    document.getElementById("dailyMissionBar").style.width = percent + "%";
    document.getElementById("dailyMissionBar").textContent = `${Math.min(done, goal)}/${goal}`;
    document.getElementById("dailyMissionHint").textContent = done >= goal ? "Mission complete. Come back tomorrow to keep the streak alive." : "One focused round moves your account forward.";
}

function renderPreferences(user) {
    const profile = user.profile || {};
    document.getElementById("prefQuizLength").textContent = profile.quizLength || 15;
    document.getElementById("prefTimer").textContent = profile.timerMode || "standard";
    document.getElementById("prefFeedback").textContent = profile.feedbackMode === "instant" ? "instant" : "after quiz";
}

function renderPreferences(user) {
    const profile = user.profile || {};
    document.getElementById("prefQuizLength").textContent = profile.quizLength || 15;
    document.getElementById("prefTimer").textContent = profile.timerMode || "standard";
    document.getElementById("prefFeedback").textContent = profile.feedbackMode === "instant" ? "instant" : "after quiz";
}

/* ============================================================
   PREPARE FOR EXAM — coin-funded, time-limited unlock
   ============================================================ */
const EXAM_PREP_PRICE_OPTIONS = [
    { coins: 25, months: 1, label: "1 month" },
    { coins: 50, months: 2, label: "2 months" },
    { coins: 75, months: 5, label: "5 months" },
    { coins: 100, months: 12, label: "1 year" }
];

function formatExpiry(expiry) {
    const d = new Date(Number(expiry));
    return d.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });
}

function renderExamPrep(user, subject) {
    const card = document.getElementById("examPrepLockBadge");
    const subjEl = document.getElementById("examPrepSubject");
    const locked = document.getElementById("examPrepLocked");
    const unlocked = document.getElementById("examPrepUnlocked");
    const optionsBox = document.getElementById("examPrepCoinOptions");
    const coinsEl = document.getElementById("examPrepCoins");
    const expiryEl = document.getElementById("examPrepExpiry");
    const startBtn = document.getElementById("startExamPrepBtn");
    if (!card || !subjEl || !locked || !unlocked) return;

    subjEl.textContent = subject || "English";
    coinsEl.textContent = Storage.getCoins ? Storage.getCoins() : 0;

    const isUnlocked = Storage.isFeatureUnlocked(user, "exam_prep");
    card.textContent = isUnlocked ? "Unlocked" : "Locked";
    card.className = isUnlocked ? "badge bg-success text-white ms-2" : "badge bg-warning text-dark ms-2";
    card.style.fontSize = "0.75rem";

    locked.style.display = isUnlocked ? "none" : "";
    unlocked.style.display = isUnlocked ? "" : "none";

    if (isUnlocked) {
        const unlocks = Storage.getFeatureUnlocks(user);
        const expiry = unlocks["exam_prep"];
        if (expiry) expiryEl.textContent = "Active until " + formatExpiry(expiry) + ".";
        startBtn.onclick = () => {
            localStorage.setItem("tm_examPrepSubject", subject || "English");
            window.location.href = "quiz.html?mode=exam_prep&subject=" + encodeURIComponent(subject || "English");
        };
        return;
    }

    optionsBox.innerHTML = "";
    EXAM_PREP_PRICE_OPTIONS.forEach(opt => {
        const btn = document.createElement("button");
        btn.className = "secondary-btn nav-action";
        btn.textContent = `Unlock ${opt.label} (${opt.coins} coins)`;
        btn.onclick = async () => {
            const res = Storage.unlockFeature("exam_prep", opt.coins);
            if (res.success) {
                btn.textContent = "Unlocked!";
                btn.disabled = true;
                btn.classList.replace("secondary-btn", "glass-btn");
                renderExamPrep(Storage.getCurrentUser(), subject);
            } else {
                btn.textContent = res.error;
                setTimeout(() => { btn.textContent = `Unlock ${opt.label} (${opt.coins} coins)`; }, 1500);
            }
        };
        optionsBox.appendChild(btn);
    });
}

function renderBadges(user) {
    const shelf = document.getElementById("badgeShelf");
    shelf.innerHTML = "";
    if (!user.badges.length) {
        shelf.innerHTML = `<span class="empty-state">No unlocks yet. Start a quiz.</span>`;
        return;
    }
    user.badges.forEach(id => {
        const badge = document.createElement("span");
        badge.className = "tm-badge";
        badge.textContent = Storage.badgeName(id);
        shelf.appendChild(badge);
    });
}

function renderBadgeChest(user) {
    const chest = document.getElementById("badgeChest");
    if (!chest) return;
    const all = TM_BADGES || [];
    const earned = new Set(user.badges || []);
    chest.innerHTML = `<h6>Badge Chest</h6><div class="chest-grid"></div><div class="chest-empty"></div>`;
    const grid = chest.querySelector(".chest-grid");
    const empty = chest.querySelector(".chest-empty");
    let shown = 0;
    all.forEach(b => {
        const isEarned = earned.has(b.id);
        // Show earned badges + next 2 locked badges as goals
        if (!isEarned && shown >= 2) return;
        const badge = document.createElement("span");
        badge.className = `tm-badge ${isEarned ? "" : "locked"} ${isEarned ? "new" : ""}`;
        badge.textContent = b.name;
        if (isEarned) badge.title = "Earned";
        else badge.title = "Locked — keep playing";
        grid.appendChild(badge);
        shown++;
    });
    empty.textContent = earned.size >= all.length ? "Chest complete — you've earned them all!" : `Earned ${earned.size} of ${all.length} badges.`;
}

function renderProgressMap(user) {
    const container = document.getElementById("progressMap");
    if (!container) return;
    const subject = localStorage.getItem("tm_selectedSubject") || "Technical Drawing";
    // Ordered topic map per subject
    const topicOrder = {
        "Technical Drawing": [
            "Introduction to Technical Drawing",
            "Drawing Instruments, Equipment & Materials",
            "Lettering & Numerals",
            "Types of Lines & Line Work",
            "Layout of Drawing Sheet (Border, Title Block, Paper Sizes)",
            "Geometric Construction",
            "Triangles & Angles",
            "Quadrilaterals & Polygons",
            "Circles & Tangents",
            "Conic Sections (Ellipse, Parabola, Hyperbola)",
            "Plane & Solid Geometry",
            "Pictorial Drawing (Isometric, Oblique)",
            "Orthographic Projection",
            "Dimensioning & Measurement",
            "Sectional Views & Hatching",
            "Freehand Sketching & Visualization"
        ],
        "English": [
            "Prepositions", "Lexis & Structure", "Grammar", "Concord / Subject-Verb Agreement",
            "Articles: A, An, The", "Determiners", "Tenses", "Verb Forms", "Sentence Structure",
            "Active and Passive Voice", "Direct and Reported Speech", "Question Tags",
            "Word Order & Arrangement", "Punctuation", "Spelling", "Synonyms", "Antonyms",
            "Lexis", "Confusable Words", "Homophones", "Idioms", "Figures of Speech",
            "Prefixes and Suffixes", "Contractions", "Correct and Incorrect Usage",
            "Essay and Letter Writing", "Comprehension", "Summary Writing"
        ],
        "SES": [
            "What is SES?", "Importance of Studying SES", "Importance of Studying History",
            "Sources of History", "Periods and Terms Used in History",
            "Trans-Saharan Trade: Causes and Organisation", "Routes, Centres and Commodities",
            "Effects of Trans-Saharan Trade", "Ghana Empire", "Mali Empire and Mansa Musa",
            "Songhai Empire and Askia Muhammad", "Kaabu Kingdom (1537–1867)", "Fulladu Kingdom",
            "Jollof Kingdom", "Coming and Spread of Islam", "Coming and Effects of Christianity",
            "Mandinko and Fula", "Wollof and Jola", "Sarahuleh, Serer, Aku and Minor Groups",
            "Mandinko, Wollof and Fula Politics", "Jola, Serer and Stateless Groups",
            "Social Hierarchy, Kinship and Work Groups", "Acculturation, Toleration and Joking Relations",
            "Language, Dialect and Official Language", "Taboo, Totem, Superstition and Libation",
            "Traditional Religion and Sacred Places", "Culture, Ceremonies, Proverbs and Masquerades",
            "Types of Families", "Marriage, Dowry and Divorce",
            "Traditional and Modern Economy, Tax and Budget", "Vegetable Gardening and Rice Cultivation",
            "Livestock, Cotton and Fishing", "Industry, Trade and Banking", "Population, Census and Migration",
            "Health, Teenage Pregnancy and Drug Abuse", "Tourism in The Gambia", "Weather, Climate and Environment"
        ],
        "Maths": [], "Science": []
    };
    const order = topicOrder[subject] || [];
    const subjectStats = Storage.topicStatsForSubject(user.topicStats, subject);
    const examDone = new Set(Storage.examPrepDone(subject));
    container.innerHTML = `<h6>${subject} Syllabus Map</h6><div class="map-line"><div class="map-fill" id="mapFill" style="width:0%"></div></div>`;
    if (!order.length) {
        container.innerHTML += `<p class="empty-state">No syllabus map available for ${subject} yet.</p>`;
        return;
    }
    let done = 0, currentShown = false;
    order.forEach((topic, i) => {
        const stat = subjectStats[topic] || { correct: 0, total: 0 };
        const pct = Math.round((Number(stat.correct || 0) / Math.max(1, Number(stat.total || 0))) * 100);
        const isDone = examDone.has(topic) || (pct >= 80 && stat.total >= 3);
        if (isDone) done++;
        const node = document.createElement("div");
        node.className = `map-node ${isDone ? "done" : (currentShown ? "locked" : "current")}`;
        if (!isDone && !currentShown) currentShown = true;
        const num = document.createElement("div");
        num.className = "map-dot";
        num.textContent = i + 1;
        if (isDone) num.innerHTML = "✔";
        const label = document.createElement("span");
        label.className = "map-label";
        label.textContent = topic;
        const pctSpan = document.createElement("span");
        pctSpan.className = "map-pct";
        pctSpan.textContent = pct + "%";
        node.appendChild(num);
        node.appendChild(label);
        node.appendChild(pctSpan);
        if (isDone) {
            const lock = document.createElement("span");
            lock.className = "map-lock-icon";
            lock.textContent = "🔓";
            node.appendChild(lock);
        } else if (!currentShown) {
            const lock = document.createElement("span");
            lock.className = "map-lock-icon";
            lock.textContent = "🔒";
            node.appendChild(lock);
        }
        container.appendChild(node);
    });
    const overall = Math.round((done / order.length) * 100);
    document.getElementById("mapFill").style.width = overall + "%";
    container.insertAdjacentHTML("beforeend", `<div class="map-node" style="margin-top:4px;justify-content:space-between;"><span class="map-label">Overall Progress</span><span class="map-pct fw-bold">${overall}%</span></div>`);
}

function renderTopicRadar(user) {
    const subject = localStorage.getItem("tm_selectedSubject") || "Technical Drawing";
    const subjectStats = Storage.topicStatsForSubject(user.topicStats, subject);
    const summary = Storage.topicSummary(user.topicStats, subject);
    document.getElementById("strongestTopic").textContent = summary.strongest;
    document.getElementById("focusTopic").textContent = summary.focus;
    const bars = document.getElementById("topicBars");
    bars.innerHTML = `<small class="text-muted d-block mb-2">Showing ${subject} only</small>`;
    Object.entries(subjectStats || {}).forEach(([topic, stat]) => {
        const percent = Math.round((Number(stat.correct || 0) / Math.max(1, Number(stat.total || 0))) * 100);
        const row = document.createElement("div");
        row.className = "topic-row";
        row.innerHTML = `<div class="d-flex justify-content-between"><small>${topic}</small><small>${percent}%</small></div><div class="progress mini-progress"><div class="progress-bar" style="width:${percent}%"></div></div>`;
        bars.appendChild(row);
    });
    if (!Object.keys(subjectStats || {}).length) bars.innerHTML += `<span class="empty-state">No ${subject} progress yet. Take a ${subject} quiz.</span>`;
}

async function loadDashboardHall() {
    const list = document.getElementById("dashboardHall");
    list.innerHTML = `<li class="list-group-item">Loading...</li>`;
    try {
        const data = await API.leaderboard();
        renderDashboardHall(data.users || []);
    } catch (_) {
        const users = Storage.getUsers().sort((a, b) => b.bestScore - a.bestScore).slice(0, 10);
        renderDashboardHall(users);
    }
}

function renderDashboardHall(users) {
    const list = document.getElementById("dashboardHall");
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
        const bubble = document.createElement("span");
        bubble.className = "hall-avatar";
        Storage.renderIdentity(bubble, normalized);
        const name = document.createElement("span");
        name.innerHTML = `<strong>${index + 1}. ${normalized.profile?.nickname || normalized.name}</strong><small>${normalized.class || ""}</small>`;
        identity.appendChild(bubble);
        identity.appendChild(name);
        const score = document.createElement("strong");
        score.textContent = `${normalized.bestScore || 0}%`;
        li.appendChild(identity);
        li.appendChild(score);
        list.appendChild(li);
    });
}

function applyTheme(accent = "blue") { document.body.dataset.accent = accent; }
function logout() { Storage.clearSession(); window.location.href = "index.html"; }

function showLevelUpBanner() {
    const pending = Storage.pendingLevelUp ? Storage.pendingLevelUp() : null;
    if (!pending) return;
    const banner = document.createElement("div");
    banner.className = "level-up-banner";
    banner.innerHTML = `
        <div class="lu-inner">
            <div class="lu-emoji">🎉</div>
            <div class="lu-title">Level ${pending.to} Reached!</div>
            <div class="lu-sub">You leveled up from ${pending.from} to ${pending.to}. Keep the momentum going.</div>
            <div class="lu-coins">+${pending.coins || 0} Tech Coins</div>
            <button class="lu-claim" type="button">Awesome!</button>
        </div>
    `;
    document.body.appendChild(banner);
    banner.querySelector(".lu-claim").onclick = () => {
        banner.remove();
        try { localStorage.removeItem("tm_levelLog"); } catch (_) {}
    };
    setTimeout(() => { if (banner.parentNode) banner.remove(); }, 8000);
}

async function loadLiveEventsAndAssignments(user) {
    const subject = localStorage.getItem("tm_selectedSubject") || "Technical Drawing";
    const eventsBox = document.getElementById("liveEvents");
    const assignmentsBox = document.getElementById("assignmentStack");
    try {
        const data = await API.events(subject);
        const events = data.events || [];
        eventsBox.innerHTML = events.length ? events.map(e => `<div class="event-card ${e.type}"><strong>${e.title}</strong><p>${e.description || ""}</p><small>${e.subject} • ${e.type.replace("_", " ")}</small></div>`).join("") : `<span class="empty-state">No live event for this subject.</span>`;
    } catch (_) { eventsBox.innerHTML = `<span class="empty-state">No live event for this subject.</span>`; }
    try {
        const data = await API.assignments(subject);
        const assignments = data.assignments || [];
        assignmentsBox.innerHTML = assignments.length ? assignments.map(a => `<form class="assignment-card" data-id="${a.id}"><strong>${a.title}</strong><p>${a.instructions || ""}</p><textarea class="form-control mt-2" rows="3" placeholder="Write your answer here"></textarea><button class="glass-btn nav-action mt-2" type="submit">Submit Assignment</button><small class="assignment-msg d-block mt-2"></small></form>`).join("") : `<span class="empty-state">No assignment yet.</span>`;
        assignmentsBox.querySelectorAll("form.assignment-card").forEach(form => form.addEventListener("submit", async ev => {
            ev.preventDefault();
            const answer = form.querySelector("textarea").value.trim();
            const msg = form.querySelector(".assignment-msg");
            if (!answer) { msg.textContent = "Write your answer first."; return; }
            msg.textContent = "Submitting...";
            try { await API.submitAssignment(form.dataset.id, answer); msg.textContent = "Submitted. Your teacher/admin will receive it."; form.querySelector("button").disabled = true; }
            catch (_) { msg.textContent = "Could not submit online. Try again when cloud is active."; }
        }));
    } catch (_) { assignmentsBox.innerHTML = `<span class="empty-state">No assignment yet.</span>`; }
}
