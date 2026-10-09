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
                    ${esc(opt)}
                </p>
            `;
        });

        const img = q.image ? `<div class="text-center mb-3"><img src="${esc(q.image)}" class="img-fluid rounded" style="max-height:260px;" alt="Question diagram"></div>` : "";

        let passageHTML = "";
        if (q.passage) {
            const isNew = q.passage !== lastPassage;
            lastPassage = q.passage;
            passageHTML = `<details class="paper-passage"${isNew ? " open" : ""}><summary>📄 Passage${isNew ? "" : " (shown above)"}</summary><div class="passage-text">${esc(q.passage)}</div></details>`;
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
                <p class="mb-3">${esc(q.question)}</p>
                ${passageHTML}
                ${img}
                ${optionsHTML}
                <p class="mb-0">${answered}</p>

                <div class="mt-3 p-3 rounded bg-light text-dark">
                    <strong>Explanation:</strong>
                    <p class="mb-0">${esc(q.explanation || "No explanation provided.")}</p>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;

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
    } else if (subject) {
        params.set("subject", subject);
    }
    return `quiz.html?${params.toString()}`;
}

function buildRetakeLabel(meta) {
    if (meta.mode === "paper" && meta.year) return `🔁 Try Paper ${meta.year} again`;
    if (meta.mode === "topic" && meta.topic) return `🔁 Try ${meta.topic} again`;
    return `🔁 Try a new ${meta.subject ? meta.subject + " " : ""}quiz`;
}
