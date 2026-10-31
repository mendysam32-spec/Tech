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
    if (score >= 100) reaction = "Flawless. A perfect 100% — legendary.";
    else if (score >= 98) reaction = "Near-perfect. The summit is yours.";
    else if (score >= 95) reaction = "Sensational! A Tower Hero performance.";
    else if (score >= 90) reaction = "Elite performance. Your account just got louder.";
    else if (score >= 80) reaction = "Powerful win. You are building Hall of Fame form.";
    else if (score >= 60) reaction = "Nice progress. One review round can push you higher.";
    else if (score >= 40) reaction = "You are warming up. The review page is your upgrade path.";

    document.getElementById("reactionText").textContent = reaction;
    if (score >= 95) celebrateAvatar(score);
    // paper badge if last was a past-paper attempt
    try {
        const paper = JSON.parse(localStorage.getItem("tm_lastPaper") || "null");
        if (paper && paper.mode === "paper") {
            const badge = document.createElement("div");
            badge.className = "topic-pill d-inline-block mb-2";
            badge.textContent = `📄 Past Paper ${paper.year} • ${paper.subject} • Untimed • Full explanations in Review`;
            document.getElementById("reactionText").after(badge);
            const reviewLink = document.querySelector('a[href="review.html"]');
            if (reviewLink) { reviewLink.textContent = `Review Paper ${paper.year} + Explanations`; reviewLink.classList.add("pulse"); }
        }
    } catch (_) {}
    // exam prep badge if last was a timed exam-prep attempt
    try {
        const review = JSON.parse(localStorage.getItem("tm_review") || "null");
        if (review && review.meta && review.meta.mode === "exam_prep") {
            const badge = document.createElement("div");
            badge.className = "topic-pill d-inline-block mb-2";
            badge.textContent = `🎯 WAEC Exam Prep • ${review.meta.subject} • Timed • ${review.meta.score}% • Full explanations in Review`;
            document.getElementById("reactionText").after(badge);
            const reviewLink = document.querySelector('a[href="review.html"]');
            if (reviewLink) { reviewLink.textContent = `Review Exam Prep + Explanations`; reviewLink.classList.add("pulse"); }
        }
    } catch (_) {}
    renderAvatarUnlockMessage();
    renderResultBadges(user);
    renderResultFocus(user);
    renderReturnToChapter();
    setupMomentumButtons();
});

function setupMomentumButtons() {
    const review = JSON.parse(localStorage.getItem("tm_review") || "null");
    const playAgain = document.getElementById("playAgainBtn");
    const retryWrong = document.getElementById("retryWrongBtn");
    const nextPaper = document.getElementById("nextPaperBtn");
    const score = Number(localStorage.getItem("tm_lastScore") || 0);

    // Play Again: restart the same quiz mode/subject
    if (playAgain && review?.meta) {
        const m = review.meta;
        let url = "quiz.html";
        const params = [];
        if (m.mode === "paper") params.push(`mode=paper&year=${m.year}`);
        else if (m.mode === "exam_prep") params.push(`mode=exam_prep&subject=${encodeURIComponent(m.subject)}`);
        else if (m.mode === "topic") {
            params.push(`mode=topic&topic=${encodeURIComponent(m.topic || "")}`);
            if (m.subject) params.push(`subject=${encodeURIComponent(m.subject)}`);
            if (m.unit) params.push(`unit=${encodeURIComponent(m.unit)}`);
            if (m.unitGrade) params.push(`grade=${encodeURIComponent(m.unitGrade)}`);
            if (m.passage) params.push(`passage=${encodeURIComponent(m.passage)}`);
        } else {
            if (m.subject) params.push(`subject=${encodeURIComponent(m.subject)}`);
        }
        if (params.length) url += "?" + params.join("&");
        playAgain.href = url;
    } else if (playAgain) {
        playAgain.href = "quiz.html";
    }

    // Retry Wrong Ones: filter review questions to wrong answers
    if (retryWrong && review?.questions && Array.isArray(review.userAnswers)) {
        const wrong = review.questions.filter((q, i) => review.userAnswers[i] != null && review.userAnswers[i] !== q.correct);
        if (wrong.length) {
            localStorage.setItem("tm_retryWrong", JSON.stringify({ questions: wrong, subject: review.meta?.subject || localStorage.getItem("tm_selectedSubject") || "Technical Drawing" }));
            retryWrong.style.display = "";
            retryWrong.href = "quiz.html?mode=retry_wrong";
        } else {
            retryWrong.style.display = "none";
        }
    } else if (retryWrong) {
        retryWrong.style.display = "none";
    }

    // Next Paper: go to library papers tab
    if (nextPaper) nextPaper.href = "library.html?tab=papers";

    // Highlight primary button on great scores
    if (score >= 80 && playAgain) {
        playAgain.classList.add("pulse");
    }
}

const LEGEND_PRAISE = {
    perfect: {
        title: "FLAWLESS — 100%!",
        lines: [
            "A perfect score. Absolute mastery of every question.",
            "You did not just win — you owned the whole arena.",
            "The Hall of Fame bows to you. Keep this fire burning."
        ]
    },
    near: {
        title: "SO CLOSE TO PERFECTION!",
        lines: [
            "One step from flawless — phenomenal focus.",
            "Your preparation is clearly paying off. Finish the job next round.",
            "Legends are made of performances like this."
        ]
    },
    hero: {
        title: "TOWER HERO!",
        lines: [
            "95% and above — you have joined the elite.",
            "Your avatar cracked open in celebration because you earned it.",
            "Stay consistent and the crown stays yours."
        ]
    }
};

function praiseFor(score) {
    if (score >= 100) return LEGEND_PRAISE.perfect;
    if (score >= 98) return LEGEND_PRAISE.near;
    return LEGEND_PRAISE.hero;
}

function celebrateAvatar(score) {
    const avatar = document.getElementById("avatarReaction");
    if (!avatar) return;
    const praise = praiseFor(Number(score) || 95);
    const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Build the egg stage around the avatar.
    const stage = document.createElement("div");
    stage.className = "egg-stage mb-3";
    avatar.parentNode.insertBefore(stage, avatar);

    const rays = document.createElement("div");
    rays.className = "egg-rays";
    stage.appendChild(rays);

    const prize = document.createElement("div");
    prize.className = "egg-prize";
    prize.appendChild(avatar);
    stage.appendChild(prize);

    const shell = document.createElement("div");
    shell.className = "egg-shell";
    shell.innerHTML = `<svg class="egg-cracklines" viewBox="0 0 150 190" aria-hidden="true"><path d="M75 60 L62 92 L80 108 L64 132 L78 152 L70 178"/></svg>`;
    stage.appendChild(shell);

    const flash = document.createElement("div");
    flash.className = "egg-flash";
    stage.appendChild(flash);

    const finish = () => {
        shell.style.display = "none";
        const crack = shell.querySelector(".egg-cracklines");
        if (crack) crack.classList.remove("drawn");
        prize.classList.add("revealed");
        rays.classList.add("lit");
        const crown = document.createElement("div");
        crown.className = "avatar-crown";
        crown.textContent = "👑";
        stage.appendChild(crown);
        const rect = stage.getBoundingClientRect();
        burstConfetti(rect.left + rect.width / 2, rect.top + rect.height / 2);
        popSound();
        showPraise(praise);
    };

    if (reduceMotion) {
        finish();
        return;
    }

    // Stage 1: drop from above.
    requestAnimationFrame(() => shell.classList.add("egg-drop"));
    // Stage 2: shake + crack lines draw in.
    setTimeout(() => {
        shell.classList.remove("egg-drop");
        shell.classList.add("egg-shake");
        const crack = shell.querySelector(".egg-cracklines");
        if (crack) crack.classList.add("drawn");
    }, 950);
    // Stage 3: crack open — shell pops, shards fly, prize revealed.
    setTimeout(() => {
        shell.classList.remove("egg-shake");
        shell.classList.add("egg-cracked");
        flash.classList.add("boom");
        flyShards(stage);
        finish();
    }, 2000);
}

function flyShards(stage) {
    const shapes = [
        "polygon(50% 0, 100% 100%, 0 100%)",
        "polygon(0 0, 100% 20%, 60% 100%, 10% 80%)",
        "polygon(50% 0, 100% 60%, 50% 100%, 0 60%)",
        "polygon(0 10%, 90% 0, 100% 90%, 20% 100%)",
        "polygon(50% 0, 100% 100%, 0 100%)",
        "polygon(0 0, 100% 30%, 70% 100%, 0 80%)",
        "polygon(30% 0, 100% 40%, 60% 100%, 0 70%)",
        "polygon(50% 0, 100% 60%, 50% 100%, 0 60%)"
    ];
    for (let i = 0; i < 8; i++) {
        const shard = document.createElement("div");
        shard.className = "egg-shard";
        const angle = (i / 8) * Math.PI * 2 + Math.random() * 0.5;
        const dist = 90 + Math.random() * 70;
        shard.style.clipPath = shapes[i % shapes.length];
        shard.style.setProperty("--tx", `${Math.cos(angle) * dist}px`);
        shard.style.setProperty("--ty", `${Math.sin(angle) * dist - 40}px`);
        shard.style.setProperty("--rr", `${(Math.random() * 540 - 270).toFixed(0)}deg`);
        stage.appendChild(shard);
        requestAnimationFrame(() => shard.classList.add("fly"));
        setTimeout(() => shard.remove(), 1100);
    }
}

function burstConfetti(x, y) {
    try {
        const canvas = document.createElement("canvas");
        canvas.id = "burstCanvas";
        document.body.appendChild(canvas);
        const ctx = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const colors = ["#f59e0b", "#fbbf24", "#ffffff", "#2563eb", "#10b981", "#e11d48", "#7c3aed"];
        const parts = [];
        for (let i = 0; i < 180; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = 3 + Math.random() * 9;
            parts.push({
                x, y,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed - 4,
                size: 4 + Math.random() * 7,
                color: colors[i % colors.length],
                rot: Math.random() * Math.PI,
                spin: (Math.random() - 0.5) * 0.3,
                circle: Math.random() < 0.35,
                life: 1
            });
        }
        let frames = 0;
        const tick = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            let alive = false;
            parts.forEach(p => {
                p.vy += 0.28;
                p.vx *= 0.985;
                p.x += p.vx;
                p.y += p.vy;
                p.rot += p.spin;
                p.life -= 0.008;
                if (p.life > 0 && p.y < canvas.height + 30) alive = true;
                else return;
                ctx.save();
                ctx.globalAlpha = Math.max(0, Math.min(1, p.life * 1.4));
                ctx.translate(p.x, p.y);
                ctx.rotate(p.rot);
                ctx.fillStyle = p.color;
                if (p.circle) {
                    ctx.beginPath();
                    ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
                    ctx.fill();
                } else {
                    ctx.fillRect(-p.size / 2, -p.size / 3, p.size, p.size * 0.66);
                }
                ctx.restore();
            });
            frames++;
            if (alive && frames < 400) requestAnimationFrame(tick);
            else canvas.remove();
        };
        tick();
    } catch (_) {}
}

function popSound() {
    try {
        const Ctx = window.AudioContext || window.webkitAudioContext;
        if (!Ctx) return;
        const ctx = new Ctx();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.type = "triangle";
        osc.frequency.setValueAtTime(420, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.12);
        gain.gain.setValueAtTime(0.12, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
        osc.start();
        osc.stop(ctx.currentTime + 0.26);
    } catch (_) {}
}

function showPraise(praise) {
    const old = document.querySelector(".tower-toast");
    if (old) old.remove();
    const toast = document.createElement("div");
    toast.className = "tower-toast";
    toast.innerHTML = `<h4 class="fw-bold mb-2">${praise.title}</h4>` +
        praise.lines.map((line, i) =>
            `<div class="lead mb-1 praise-line" style="animation-delay:${0.25 + i * 0.3}s">${line}</div>`
        ).join("");
    const reactionText = document.getElementById("reactionText");
    if (reactionText && reactionText.parentNode) reactionText.parentNode.insertBefore(toast, reactionText.nextSibling);
}

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
    let subject = localStorage.getItem("tm_selectedSubject") || "";
    try {
        const review = JSON.parse(localStorage.getItem("tm_review") || "null");
        if (review?.meta?.subject) subject = review.meta.subject;
    } catch (_) {}
    const summary = Storage.topicSummary(user.topicStats, subject);
    document.getElementById("resultFocus").textContent =
        `Next best practice area${subject ? ` in ${subject}` : ""}: ${summary.focus}.`;
}


function renderReturnToChapter() {
    const btn = document.getElementById("chapterReturnBtn");
    const nextBtn = document.getElementById("nextChapterBtn");
    let meta = null;
    try { meta = JSON.parse(localStorage.getItem("tm_review") || "null")?.meta || null; } catch (_) {}
    if (!meta || meta.mode !== "topic" || !meta.topic) {
        if (btn) btn.style.display = "none";
        if (nextBtn) nextBtn.style.display = "none";
        return;
    }
    // Exact chapter + next chapter for every Library subject.
    let links = null;
    try { links = (typeof window.tmChapterLinks === "function") ? window.tmChapterLinks(meta.subject, meta.topic, meta.note) : null; } catch (_) { links = null; }
    if (!links || !links.backUrl) {
        // Legacy English-only fallback when book data is unavailable.
        let url = "library.html";
        try {
            const book = (typeof window !== "undefined" && window.englishBook) || [];
            if ((meta.subject || "") === "English") {
                const flat = [];
                book.forEach(g => (g.themes || []).forEach(th => (th.topics || []).forEach(t => flat.push(t))));
                const found = flat.find(t => t.title === meta.topic);
                if (found) url = `library.html?note=${encodeURIComponent(found.id)}`;
            }
        } catch (_) {}
        links = { backUrl: url, backLabel: `📖 Back to ${meta.topic}`, nextUrl: null, nextLabel: null };
    }
    if (btn) {
        btn.style.display = "inline-block";
        btn.href = links.backUrl;
        btn.textContent = links.backLabel || `📖 Back to ${meta.topic}`;
    }
    if (nextBtn) {
        if (links.nextUrl) {
            nextBtn.style.display = "inline-block";
            nextBtn.href = links.nextUrl;
            nextBtn.textContent = links.nextLabel || "Next chapter →";
        } else {
            nextBtn.style.display = "none";
        }
    }
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
