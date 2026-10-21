document.addEventListener("DOMContentLoaded", () => {

    const container = document.getElementById("reviewContainer");

    function esc(str) {
        return String(str == null ? "" : str)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
    }

    // Tested word stands out bold in theme colour, same as in the quiz.
    function highlightTarget(text, target) {
        const body = esc(text);
        if (!target) return body;
        const needle = esc(target);
        const pos = body.indexOf(needle);
        if (pos === -1) return body;
        return body.slice(0, pos) + `<span class="question-target">${needle}</span>` + body.slice(pos + needle.length);
    }

    function escRegex(str) {
        return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }

    // Diagram part labels: theme colour + bold + italic, across all subjects.
    function partLabelHtml(text, keywords) {
        if (!keywords || !keywords.length) return text;
        let html = text;
        [...keywords].sort((a, b) => b.length - a.length).forEach(k => {
            if (!k) return;
            const needle = escRegex(String(k));
            try {
                const re = new RegExp(`\\b(${needle})\\b`, "gi");
                html = html.replace(re, `<span class="question-part-label">$1</span>`);
            } catch (_) {}
        });
        return html;
    }

    // Passage vocabulary: bold + theme colour for every "as used" word in
    // this passage (minimum five per comprehension passage).
    function escRegex(str) {
        return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }

    function vocabForPassage(allQuestions, passageId, fallbackWord) {
        const words = [];
        (allQuestions || []).forEach(q => {
            if (q && q.passageId === passageId && q.targetWord) words.push(q.targetWord);
        });
        if (!words.length && fallbackWord) words.push(fallbackWord);
        return [...new Set(words)].sort((a, b) => b.length - a.length);
    }

    function highlightPassage(passage, words) {
        let html = esc(passage);
        (words || []).forEach(w => {
            if (!w) return;
            try {
                const re = new RegExp(`\\b(${escRegex(esc(w))})\\b`, "gi");
                html = html.replace(re, `<strong class="passage-vocab">$1</strong>`);
            } catch (_) {}
        });
        return html;
    }

    let data = null;
    try { data = JSON.parse(localStorage.getItem("tm_review")); } catch (_) {}
    if (!data || !Array.isArray(data.questions) || !data.questions.length) {
        renderEmptyState();
        return;
    }

    const meta = data.meta || {};
    const userAnswers = Array.isArray(data.userAnswers) ? data.userAnswers : [];
    const retakeUrl = buildRetakeUrl(meta);
    const retakeLabel = buildRetakeLabel(meta);

    const bottomRetake = document.getElementById("retakeBtn");
    if (bottomRetake) {
        bottomRetake.href = retakeUrl;
        bottomRetake.textContent = retakeLabel;
        bottomRetake.style.display = "inline-block";
    }

    let html = `
        <div class="glass-card p-4 mb-4 text-center">
            <h5 class="fw-bold mb-2">${meta.score != null ? `You scored ${esc(meta.score)}% on this attempt` : "Review every answer below"}</h5>
            <p class="mb-0 text-muted">Read the explanations below — use the single Try Again button at the bottom for another round.</p>
        </div>
    `;

    let lastPassage = null;

    data.questions.forEach((q, index) => {

        const userAnswer = userAnswers[index];

        let optionsHTML = "";

        q.options.forEach((opt, i) => {

            let className = "";

            // Correct answer → Green
            if (i === q.correct) {
                className = "text-success fw-bold";
            }

            // Wrong selected answer → Red
            if (i === userAnswer && i !== q.correct) {
                className = "text-danger fw-bold";
            }

            optionsHTML += `
                <p class="${className}">
                    ${partLabelHtml(esc(opt), q.partKeywords)}
                </p>
            `;
        });

        const img = q.image ? `<div class="text-center mb-3"><img src="${esc(q.image)}" class="img-fluid rounded" style="max-height:260px;" alt="Question diagram" onerror="this.style.display='none'"></div>` : "";

        let passageHTML = "";
        if (q.passage) {
            const isNew = q.passage !== lastPassage;
            lastPassage = q.passage;
            const words = vocabForPassage(data.questions, q.passageId, q.targetWord);
            passageHTML = `<details class="paper-passage"${isNew ? " open" : ""}><summary>📄 Passage${isNew ? "" : " (shown above)"}</summary><div class="passage-text">${highlightPassage(q.passage, words)}</div></details>`;
        }

        const section = q.section ? ` • Section ${esc(q.section)}` : "";
        const answered = userAnswer === null || userAnswer === undefined
            ? `<span class="text-muted">Not answered</span>`
            : (userAnswer === q.correct
                ? `<span class="text-success fw-bold">✔ Your answer: ${esc(q.options[userAnswer])}</span>`
                : `<span class="text-danger fw-bold">✘ Your answer: ${esc(q.options[userAnswer])}</span>`);

        html += `
            <div class="glass-card p-4 mb-4">
                <div class="d-flex justify-content-between align-items-center">
                    <h5 class="fw-bold">Question ${index + 1}${q.year ? ` • Paper ${esc(q.year)}` : ""}${section}</h5>
                    <span class="topic-pill">${esc(q.topic || "General")}</span>
                </div>
                <p class="mb-3">${highlightTarget(q.question, q.targetWord)}</p>
                ${passageHTML}
                ${img}
                ${optionsHTML}
                <p class="mb-0">${answered}</p>

                <div class="mt-3 p-3 rounded bg-light text-dark">
                    <strong>Explanation:</strong>
                    <p class="mb-0">${partLabelHtml(esc(q.explanation || "No explanation provided."), q.partKeywords)}</p>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;

    wireChapterReturn(meta);

    function renderEmptyState() {
        container.innerHTML = `
            <div class="glass-card p-5 text-center">
                <h4 class="fw-bold">No answers to review yet</h4>
                <p class="lead mb-4">Finish a quiz and your answers with full explanations will appear here.</p>
                <a href="quiz.html" class="glass-btn tm-nav-keep">Start a quiz</a>
                <a href="dashboard.html" class="secondary-btn">Back to Dashboard</a>
            </div>
        `;
        const btn = document.getElementById("retakeBtn");
        if (btn) btn.style.display = "none";
        ["chapterReturnBtn", "nextChapterBtn"].forEach(id => {
            const b = document.getElementById(id);
            if (b) b.style.display = "none";
        });
    }

});

function buildRetakeUrl(meta) {
    let subject = meta.subject || localStorage.getItem("tm_selectedSubject") || "Technical Drawing";
    const params = new URLSearchParams();
    if (meta.mode === "paper" && meta.year) {
        params.set("mode", "paper");
        params.set("subject", subject);
        params.set("year", meta.year);
    } else if (meta.mode === "topic" && meta.topic) {
        params.set("mode", "topic");
        params.set("subject", subject);
        params.set("topic", meta.topic);
        if (meta.note) params.set("note", meta.note);
        else if (meta.passage) params.set("passage", meta.passage);
    } else if (subject) {
        params.set("subject", subject);
    }
    return `quiz.html?${params.toString()}`;
}

function buildRetakeLabel(meta) {
    if (meta.mode === "paper" && meta.year) return `🔁 Try Paper ${meta.year} again`;
    if (meta.mode === "topic" && meta.topic) return meta.passageTitle ? `🔁 Try another ${meta.topic} passage` : `🔁 Try ${meta.topic} again`;
    return `🔁 Try a new ${meta.subject ? meta.subject + " " : ""}quiz`;
}

// Return-to-reading: after a chapter practice, jump straight back to the
// chapter just read, or forward to the next chapter to keep reading.
// Works for every Library subject via window.tmChapterLinks (note id first,
// then title match, then Library shelf fallback).
function englishChapterLinks(topic, subject, noteId) {
    try {
        if (typeof window.tmChapterLinks === "function") {
            const links = window.tmChapterLinks(subject || "English", topic, noteId);
            if (links.backUrl) return { cur: links.backUrl, nxt: links.nextUrl ? { title: (links.nextLabel || "").replace(/^Next:\s*/, "").replace(/\s*→$/, ""), url: links.nextUrl } : null, nextUrl: links.nextUrl, nextLabel: links.nextLabel };
        }
        const book = (typeof window !== "undefined" && window.englishBook) || [];
        const flat = [];
        book.forEach(g => (g.themes || []).forEach(th => (th.topics || []).forEach(t => flat.push(t))));
        const i = flat.findIndex(t => t.title === topic);
        if (i < 0) return {};
        const cur = `library.html?note=${encodeURIComponent(flat[i].id)}`;
        const nxt = flat[i + 1] ? { title: flat[i + 1].title, url: `library.html?note=${encodeURIComponent(flat[i + 1].id)}` } : null;
        return { cur, nxt };
    } catch (_) { return {}; }
}

function wireChapterReturn(meta) {
    const backBtn = document.getElementById("chapterReturnBtn");
    const nextBtn = document.getElementById("nextChapterBtn");
    if (!backBtn && !nextBtn) return;
    if (!meta || meta.mode !== "topic" || !meta.topic) {
        if (backBtn) backBtn.style.display = "none";
        if (nextBtn) nextBtn.style.display = "none";
        return;
    }
    // Preferred: exact chapter + next chapter for every subject.
    let direct = null;
    try { direct = (typeof window.tmChapterLinks === "function") ? window.tmChapterLinks(meta.subject, meta.topic, meta.note) : null; } catch (_) { direct = null; }
    const links = englishChapterLinks(meta.topic, meta.subject, meta.note);
    if (backBtn) {
        backBtn.style.display = "inline-block";
        backBtn.href = (direct && direct.backUrl) || links.cur || "library.html";
        backBtn.textContent = (direct && direct.backLabel) || `📖 Back to ${meta.topic}`;
    }
    if (nextBtn) {
        const nextUrl = (direct && direct.nextUrl) || (links.nxt && links.nxt.url) || links.nextUrl || null;
        const nextLabel = (direct && direct.nextLabel) || links.nextLabel || (links.nxt ? `Next: ${links.nxt.title} →` : null);
        if (nextUrl) {
            nextBtn.style.display = "inline-block";
            nextBtn.href = nextUrl;
            nextBtn.textContent = nextLabel || "Next chapter →";
        } else {
            nextBtn.style.display = "none";
        }
    }
}
