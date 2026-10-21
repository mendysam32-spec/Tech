document.addEventListener("DOMContentLoaded", async () => {
    const user = Storage.getCurrentUser();
    if (!user) { window.location.href = "index.html"; return; }
    document.body.dataset.accent = user.profile?.accent || "blue";
    await hydrateSubjects();
    // tabs + search (defined early to avoid TDZ when activate calls applySearch)
    const tabNotes = document.getElementById("tabNotes");
    const tabPapers = document.getElementById("tabPapers");
    const panelNotes = document.getElementById("panelNotes");
    const panelPapers = document.getElementById("panelPapers");
    const searchInput = document.getElementById("librarySearch");
    const clearBtn = document.getElementById("clearSearch");
    function applySearch() {
        const q = (searchInput?.value || "").trim().toLowerCase();
        if (clearBtn) clearBtn.style.display = q ? "" : "none";
        if (panelNotes && panelNotes.style.display !== "none") renderNotes(q);
        if (panelPapers && panelPapers.style.display !== "none") {
            if (!paperDetailVisible) renderPapers(q);
        }
    }
    function activate(which) {
        const isNotes = which === "notes";
        tabNotes.classList.toggle("active", isNotes);
        tabPapers.classList.toggle("active", !isNotes);
        panelNotes.style.display = isNotes ? "" : "none";
        panelPapers.style.display = isNotes ? "none" : "";
        localStorage.setItem("tm_libraryTab", which);
        hidePaperDetail();
        applySearch();
    }
    tabNotes.addEventListener("click", () => activate("notes"));
    tabPapers.addEventListener("click", () => activate("papers"));
    const qs = new URLSearchParams(location.search);
    const initial = qs.get("tab") === "papers" ? "papers" : (localStorage.getItem("tm_libraryTab") || "notes");
    activate(initial);

    await renderNotes();
    renderPapers();

    document.getElementById("librarySubject").addEventListener("change", async e => {
        localStorage.setItem("tm_selectedSubject", e.target.value);
        await renderNotes();
        renderPapers();
        if (paperDetailVisible) hidePaperDetail();
    });

    searchInput.addEventListener("input", applySearch);
    clearBtn.addEventListener("click", () => { searchInput.value = ""; applySearch(); searchInput.focus(); });

    // expose applySearch globally for hydrations
    window._libraryApplySearch = applySearch;

    // detail controls
    document.getElementById("backToPapers").addEventListener("click", hidePaperDetail);
    document.getElementById("detailPrintBtn").addEventListener("click", () => window.print());
    document.getElementById("detailToggleAnswers").addEventListener("click", () => {
        detailShowAnswers = !detailShowAnswers;
        renderPaperDetail(detailSubject, detailYear, detailShowAnswers);
    });
    document.getElementById("detailAttemptBtn").addEventListener("click", () => {
        if (detailSubject && detailYear) attemptPaper(detailSubject, detailYear);
    });

    // deep link ?note=<topicId> or ?grade=<gradeId> jumps straight into the Science / SES / English Book
    const deepNote = qs.get("note") || qs.get("topic");
    const deepGrade = qs.get("grade");
    if (deepNote || deepGrade) {
        const sel = document.getElementById("librarySubject");
        const key = String(deepNote || deepGrade || "");
        const isSes = key.startsWith("ses-");
        const isEng = key.startsWith("eng-");
        const target = isSes ? "SES" : isEng ? "English" : "Science";
        if (sel.value !== target) { sel.value = target; localStorage.setItem("tm_selectedSubject", target); }
        activate("notes");
        await renderNotes();
        renderPapers();
        if (deepNote) { if (isSes) window.openSesTopic(deepNote); else if (isEng) window.openEnglishTopic(deepNote); else window.openScienceTopic(deepNote); }
        else { if (isSes) window.openSesGrade(deepGrade); else if (isEng) window.openEnglishGrade(deepGrade); else window.openScienceGrade(deepGrade); }
        return;
    }

    // deep link ?year=2026 or ?view=2026 to jump to papers + detail
    const deepYear = qs.get("view") || qs.get("year");
    if (deepYear) {
        activate("papers");
        // need subject from query or selected
        const sub = qs.get("subject") || document.getElementById("librarySubject").value || "Technical Drawing";
        // defer until papers rendered
        setTimeout(() => viewPaper(sub, deepYear), 300);
    } else if (qs.get("tab") === "papers") {
        activate("papers");
    }
});

function escapeHTML(value) {
    return String(value ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
}

// Passage vocabulary highlight: bold + theme colour for every
// "as used in the passage" word (minimum five per comprehension passage).
function passageVocabHighlight(passage, allQuestions, passageId, fallbackWord) {
    const words = [];
    (allQuestions || []).forEach(item => {
        if (item && item.passageId === passageId && item.targetWord) words.push(item.targetWord);
    });
    if (!words.length && fallbackWord) words.push(fallbackWord);
    const unique = [...new Set(words)].sort((a, b) => b.length - a.length);
    let html = escapeHTML(passage);
    unique.forEach(w => {
        if (!w) return;
        try {
            const needle = escapeHTML(w).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
            const re = new RegExp(`\\b(${needle})\\b`, "gi");
            html = html.replace(re, `<strong class="passage-vocab">$1</strong>`);
        } catch (_) {}
    });
    return html;
}
function renderList(title, items) {
    if (!Array.isArray(items) || !items.length) return "";
    return `<div class="study-section"><h6>${escapeHTML(title)}</h6><ul>${items.map(x => `<li>${escapeHTML(x)}</li>`).join("")}</ul></div>`;
}
function renderTDNote(note) {
    const image = note.image
        ? `<img src="${escapeHTML(note.image)}" alt="${escapeHTML(note.title)}" class="study-image">`
        : `<div class="study-placeholder"><span>${escapeHTML(note.icon || "📘")}</span><p>${escapeHTML(note.imageNote || "Insert diagram here later.")}</p></div>`;
    return `<article class="study-card monster-note">
        <div class="study-art">${image}</div>
        <div class="study-content">
            <p class="mini-label">${escapeHTML(note.grade)} • Topic ${escapeHTML(note.topicNumber)} • WAEC/GABECE Focus</p>
            <h4>${escapeHTML(note.title)}</h4>
            <p>${escapeHTML(note.explanation)}</p>
            ${renderList("Key Notes", note.points)}${renderList("Key Terms", note.keyTerms)}${renderList("Use and Care", note.useAndCare)}${renderList("Metric Conversions", note.conversions)}${renderList("Examples", note.examples)}${renderList("Title Block Items", note.titleBlockItems)}${renderList("Not Usually Included", note.notUsuallyInTitleBlock)}${renderList("Paper Sizes", note.paperSizes)}${renderList("Types of Lines", note.lineTypes)}${renderList("Line Work Rules", note.lineWorkRules)}${renderList("Standards", note.standards)}${renderList("Constructions", note.constructions)}${renderList("Types by Sides", note.typesBySides)}${renderList("Types by Angles", note.typesByAngles)}${renderList("Triangle Facts", note.triangleFacts)}${renderList("Construction Notes", note.constructionNotes)}${renderList("Types", note.types)}${renderList("Properties", note.properties)}${renderList("Circle Types", note.circleTypes)}${renderList("Circle Facts", note.circleFacts)}${renderList("Important Facts", note.importantFacts)}${renderList("First Angle Projection", note.firstAngle)}${renderList("Third Angle Projection", note.thirdAngle)}${renderList("Rules", note.rules)}${renderList("Polygon Names", note.polygonNames)}${renderList("Polygon Facts", note.polygonFacts)}${renderList("Parts", note.parts)}${renderList("Methods of Construction", note.methods)}${renderList("Not Accepted Method", note.notMethods)}${renderList("Common Solids", note.commonSolids)}${renderList("Sections of a Cone", note.sectionsOfCone)}${renderList("First Angle Rules", note.firstAngleRules)}${renderList("Third Angle Rules", note.thirdAngleRules)}${renderList("Projection Tips", note.projectionTips)}${renderList("WAEC/GABECE Focus", note.waecFocus)}
            <div class="memory-tip">💡 ${escapeHTML(note.memoryTip || "Revise this before quiz time.")}</div>
        </div>
    </article>`;
}
function renderEnglishNote(note) {
    const image = note.image
        ? `<img src="${escapeHTML(note.image)}" alt="${escapeHTML(note.title)}" class="study-image">`
        : `<div class="study-placeholder"><span>${escapeHTML(note.icon || "📘")}</span><p>${escapeHTML(note.imageNote || "Insert diagram here later.")}</p></div>`;
    return `<article class="study-card monster-note">
        <div class="study-art">${image}</div>
        <div class="study-content">
            <p class="mini-label">${escapeHTML(note.grade)} • Topic ${escapeHTML(note.topicNumber)} • Aki Ola / WAEC Focus</p>
            <h4>${escapeHTML(note.title)}</h4>
            <p>${escapeHTML(note.explanation)}</p>
            ${renderList("Key Points", note.points)}${renderList("Definitions", note.definitions)}${renderList("Rules to Remember", note.rules)}${renderList("Examples", note.examples)}${renderList("WAEC Focus", note.waecFocus)}
            <div class="memory-tip">💡 ${escapeHTML(note.memoryTip || "Revise this before quiz time.")}</div>
        </div>
    </article>`;
}
function mathsQuizTopic(note) { return note.quizTopic || "Number and Numeration"; }
function mathsQuestionCount(quizTopic) {
    try { return typeof MathsQuestions === "undefined" ? 0 : MathsQuestions.filter(q => q.topic === quizTopic).length; }
    catch (_) { return 0; }
}
function renderMathsNote(note) {
    const image = note.image
        ? `<img src="${escapeHTML(note.image)}" alt="${escapeHTML(note.title)}" class="study-image">`
        : `<div class="study-placeholder"><span>${escapeHTML(note.icon || "📘")}</span><p>${escapeHTML(note.imageNote || "Insert diagram here later.")}</p></div>`;
    const quizTopic = mathsQuizTopic(note);
    const n = mathsQuestionCount(quizTopic);
    const practiceUrl = `quiz.html?mode=topic&subject=Maths&topic=${encodeURIComponent(quizTopic)}`;
    return `<article class="study-card monster-note">
        <div class="study-art">${image}</div>
        <div class="study-content">
            <p class="mini-label">${escapeHTML(note.grade)} • Topic ${escapeHTML(note.topicNumber)} • Aki Ola Maths / BECE Focus</p>
            <h4>${escapeHTML(note.title)}</h4>
            <p>${escapeHTML(note.explanation)}</p>
            <div class="d-flex flex-wrap gap-2 mb-2">
                <a class="glass-btn" href="${practiceUrl}">🎯 Practice ${escapeHTML(quizTopic)}${n ? ` (${n} questions)` : ""}</a>
            </div>
            ${renderList("Key Points", note.points)}${renderList("Definitions", note.definitions)}${renderList("Formulas", note.formulas)}${renderList("Rules to Remember", note.rules)}${renderList("Examples", note.examples)}${renderList("WAEC Focus", note.waecFocus)}
            <div class="memory-tip">💡 ${escapeHTML(note.memoryTip || "Revise this before quiz time.")}</div>
            ${n ? `<div class="topic-quiz-cta"><strong>${n} questions</strong> in the quiz bank for <strong>${escapeHTML(quizTopic)}</strong> (minimum 10 guaranteed).<a class="glass-btn mt-2" href="${practiceUrl}">🎯 Practice now</a></div>` : ""}
        </div>
    </article>`;
}
function renderScienceNote(note) {
    const image = note.image
        ? `<img src="${escapeHTML(note.image)}" alt="${escapeHTML(note.title)}" class="study-image">`
        : `<div class="study-placeholder"><span>${escapeHTML(note.icon || "📘")}</span><p>${escapeHTML(note.imageNote || "Insert diagram here later.")}</p></div>`;
    return `<article class="study-card monster-note">
        <div class="study-art">${image}</div>
        <div class="study-content">
            <p class="mini-label">${escapeHTML(note.grade)} • Topic ${escapeHTML(note.topicNumber)} • Aki Ola Science / BECE Focus</p>
            <h4>${escapeHTML(note.title)}</h4>
            <p>${escapeHTML(note.explanation)}</p>
            ${renderList("Key Points", note.points)}${renderList("Definitions", note.definitions)}${renderList("Formulas", note.formulas)}${renderList("Rules to Remember", note.rules)}${renderList("Examples", note.examples)}${renderList("WAEC Focus", note.waecFocus)}
            <div class="memory-tip">💡 ${escapeHTML(note.memoryTip || "Revise this before quiz time.")}</div>
        </div>
    </article>`;
}

/* ============================================================
   SCIENCE BOOK CLOSET
   Shelf (3 grade doors) -> Grade shelf (topic books) -> Topic
   ============================================================ */
let scienceView = "shelf";      // "shelf" | "grade" | "topic"
let scienceGradeId = null;
let scienceTopicId = null;
let scienceCloudNotes = [];

function scienceFlatTopics() {
    const out = [];
    (window.scienceBook || []).forEach(g => (g.themes || []).forEach(th => (th.topics || []).forEach(t => out.push({ grade: g, theme: th, topic: t }))));
    return out;
}
function scienceFindTopic(id) { return scienceFlatTopics().find(x => x.topic.id === id) || null; }
function scienceFindGrade(id) { return (window.scienceBook || []).find(g => g.id === id) || null; }
function scienceGradeSequence(gradeId) {
    const g = scienceFindGrade(gradeId);
    if (!g) return [];
    const seq = [];
    (g.themes || []).forEach(th => (th.topics || []).forEach(t => seq.push(t)));
    return seq;
}
function scienceTopicNav(found) {
    const seq = scienceGradeSequence(found.grade.id);
    const i = seq.findIndex(t => t.id === found.topic.id);
    if (i < 0) return "";
    const prev = seq[i - 1], next = seq[i + 1];
    const btn = (t, dir, arrow) => t
        ? `<button type="button" class="secondary-btn chapter-btn" onclick="openScienceTopic('${escapeHTML(t.id)}')">${arrow} ${escapeHTML(shortTitle(t.title, 28))}</button>`
        : "";
    return `
    <div class="chapter-nav">
        ${btn(prev, "prev", "←")}
        <span class="chapter-progress">${offsetToChapter(i, seq.length, found.grade)}</span>
        ${btn(next, "next", "→")}
    </div>`;
}
function offsetToChapter(i, len, grade) {
    const label = i === 0 ? `First chapter of ${escapeHTML(grade.grade)}` : i === len - 1 ? `Last chapter of ${escapeHTML(grade.grade)}` : `Chapter ${i + 1} of ${len}`;
    return `<span class="chapter-progress-text">${label}</span>`;
}
function shortTitle(title, max) { return title.length > max ? title.slice(0, max - 1) + "…" : title; }

function scienceQuestionCount(title) {
    try { return typeof ScienceQuestions === "undefined" ? 0 : ScienceQuestions.filter(q => q.topic === title).length; }
    catch (_) { return 0; }
}

function scienceTotalTopics() { return scienceFlatTopics().length; }

function scienceSearch(query) {
    const q = (query || "").trim().toLowerCase();
    if (!q) return null;
    return scienceFlatTopics().filter(({ grade, theme, topic }) =>
        `${topic.title} ${topic.explanation} ${theme.title} ${grade.grade} ${(topic.points || []).join(" ")} ${(topic.definitions || []).join(" ")} ${(topic.waecFocus || []).join(" ")}`
            .toLowerCase().includes(q)
    );
}

function renderScienceCloset(query = null) {
    const container = document.getElementById("notesContainer");
    if (!container) return;
    const results = scienceSearch(query);

    if (results) {
        container.innerHTML = `
            <div class="closet">
                <div class="closet-head">
                    <span class="closet-badge">🔎 Search</span>
                    <div>
                        <h5 class="mb-0">Science Book results</h5>
                        <p class="mb-0 small opacity-75">${results.length} topic${results.length === 1 ? "" : "s"} match “${escapeHTML(query)}”</p>
                    </div>
                </div>
                ${results.length ? `<div class="book-grid">${results.map(r => scienceBookCard(r.topic, r.theme, r.grade)).join("")}</div>`
                    : `<div class="empty-state">No topics in the Science Book match “${escapeHTML(query)}”.</div>`}
            </div>
            ${scienceCloudNotesBlock(query)}`;
        return;
    }

    if (scienceView === "topic" && scienceTopicId) {
        const found = scienceFindTopic(scienceTopicId);
        if (found) { container.innerHTML = scienceTopicView(found); return; }
        scienceView = "shelf"; scienceTopicId = null;
    }
    if (scienceView === "grade" && scienceGradeId) {
        const grade = scienceFindGrade(scienceGradeId);
        if (grade) { container.innerHTML = scienceGradeView(grade); return; }
        scienceView = "shelf"; scienceGradeId = null;
    }
    container.innerHTML = scienceShelfView();
}

function scienceShelfView() {
    const grades = window.scienceBook || [];
    return `
    <div class="closet">
        <div class="closet-head">
            <span class="closet-badge">📕 Foundation Science</span>
            <div>
                <h5 class="mb-0">The Science Book</h5>
                <p class="mb-0 small opacity-75">${scienceTotalTopics()} topics • Grades 7, 8 and 9 • Open a shelf to start reading</p>
            </div>
        </div>
        <div class="closet-doors">
            ${grades.map(g => {
                const topicCount = (g.themes || []).reduce((n, th) => n + th.topics.length, 0);
                return `
                <button type="button" class="closet-door" onclick="openScienceGrade('${escapeHTML(g.id)}')" aria-label="Open ${escapeHTML(g.grade)}">
                    <span class="door-panel door-left"></span>
                    <span class="door-panel door-right"></span>
                    <span class="door-hinge"></span>
                    <span class="door-icon">${escapeHTML(g.icon)}</span>
                    <span class="door-grade">${escapeHTML(g.grade)}</span>
                    <span class="door-label">${escapeHTML(g.label)}</span>
                    <span class="door-count">${(g.themes || []).length} themes • ${topicCount} topics</span>
                    <span class="door-cta">Open shelf →</span>
                </button>`;
            }).join("")}
        </div>
        <p class="small opacity-75 mt-3 mb-0">💡 Each shelf opens into its themes. Pick a book to read the full topic, then hit <strong>Practice this topic</strong> to quiz yourself on exactly what you just read.</p>
    </div>
    ${scienceCloudNotesBlock()}`;
}

function scienceGradeView(grade) {
    const topicCount = (grade.themes || []).reduce((n, th) => n + th.topics.length, 0);
    return `
    <div class="closet">
        <div class="closet-head">
            <span class="closet-badge">${escapeHTML(grade.icon)} ${escapeHTML(grade.grade)}</span>
            <div class="flex-grow-1">
                <h5 class="mb-0">${escapeHTML(grade.label)}</h5>
                <p class="mb-0 small opacity-75">${(grade.themes || []).length} themes • ${topicCount} topics</p>
            </div>
            <button type="button" class="secondary-btn nav-action" onclick="backToScienceShelf()">📕 Close shelf</button>
        </div>
        <p class="small opacity-75">${escapeHTML(grade.blurb || "")}</p>
        ${(grade.themes || []).map(th => `
            <div class="shelf-row">
                <div class="shelf-bar">
                    <span class="shelf-theme">${escapeHTML(th.number)} • ${escapeHTML(th.title)}</span>
                    <span class="shelf-count">${th.topics.length} book${th.topics.length === 1 ? "" : "s"}</span>
                </div>
                <div class="book-grid">
                    ${th.topics.map(t => scienceBookCard(t, th, grade)).join("")}
                </div>
            </div>`).join("")}
        <div class="d-flex flex-wrap gap-2 mt-4">
            <button type="button" class="glass-btn" onclick="backToScienceShelf()">📕 Back to all shelves</button>
        </div>
    </div>`;
}

function scienceBookCard(topic, theme, grade) {
    const n = scienceQuestionCount(topic.title);
    return `
    <button type="button" class="book-spine" onclick="openScienceTopic('${escapeHTML(topic.id)}')">
        <span class="book-band">${escapeHTML(topic.unit || "—")}</span>
        <span class="book-title">${escapeHTML(topic.title)}</span>
        <span class="book-theme">${escapeHTML(theme ? theme.title : "")}</span>
        <span class="book-foot">
            <span class="book-emoji">${escapeHTML(topic.icon || "📘")}</span>
            <span class="book-qs">${n ? n + " Qs" : "Read"}</span>
        </span>
    </button>`;
}

function scienceTopicView(found) {
    const { grade, theme, topic } = found;
    const n = scienceQuestionCount(topic.title);
    const nav = scienceTopicNav(found);
    return `
    <div class="closet">
        <div class="closet-head">
            <span class="closet-badge">${escapeHTML(grade.icon)} ${escapeHTML(grade.grade)}</span>
            <div class="flex-grow-1">
                <h5 class="mb-0">${escapeHTML(topic.title)}</h5>
                <p class="mb-0 small opacity-75">${escapeHTML(theme.number)} • ${escapeHTML(theme.title)} • Unit ${escapeHTML(topic.unit || "—")}${topic.page ? ` • p.${escapeHTML(topic.page)}` : ""}</p>
            </div>
            <button type="button" class="secondary-btn nav-action" onclick="openScienceGrade('${escapeHTML(grade.id)}')">← Back to shelf</button>
        </div>

        <div class="d-flex flex-wrap gap-2 mb-3">
            <a class="glass-btn" href="quiz.html?mode=topic&subject=Science&topic=${encodeURIComponent(topic.title)}&note=${encodeURIComponent(topic.id)}">🎯 Practice this topic${n ? ` (${n} question${n === 1 ? "" : "s"})` : ""}</a>
            <button type="button" class="secondary-btn" onclick="backToScienceShelf()">📕 All shelves</button>
            <button type="button" class="secondary-btn" onclick="window.print()">🖨️ Print</button>
        </div>

        ${nav}

        <article class="study-card monster-note">
            <div class="study-art">
                ${topic.image ? `<img class="study-image" src="${escapeHTML(topic.image)}" alt="${escapeHTML(topic.title)}">` : `<div class="study-placeholder"><span>${escapeHTML(topic.icon || "📘")}</span><p>${escapeHTML(grade.label)}<br>${escapeHTML(theme.title)}</p></div>`}
            </div>
            <div class="study-content">
                <p class="mini-label">${escapeHTML(grade.grade)} • ${escapeHTML(theme.number)} • Unit ${escapeHTML(topic.unit || "—")}${topic.page ? ` • Page ${escapeHTML(topic.page)}` : ""}</p>
                <h4>${escapeHTML(topic.title)}</h4>
                <p>${escapeHTML(topic.explanation)}</p>
                ${renderList("Key Points", topic.points)}
                ${renderList("Definitions", topic.definitions)}
                ${renderList("Formulas", topic.formulas)}
                ${renderList("Rules to Remember", topic.rules)}
                ${renderList("Examples", topic.examples)}
                ${renderList("Exam Focus", topic.waecFocus)}
                <div class="memory-tip">💡 ${escapeHTML(topic.memoryTip || "Revise this before quiz time.")}</div>
                ${n ? `<div class="topic-quiz-cta">
                    <strong>${n} question${n === 1 ? "" : "s"} in the quiz bank</strong> are tagged with this exact topic.
                    <a class="glass-btn mt-2" href="quiz.html?mode=topic&subject=Science&topic=${encodeURIComponent(topic.title)}&note=${encodeURIComponent(topic.id)}">🎯 Practice now</a>
                </div>` : `<div class="topic-quiz-cta muted">New questions for this topic are being added — read on and check back soon.</div>`}
            </div>
        </article>

        ${nav}
    </div>`;
}

function scienceCloudNotesBlock(query = null) {
    const notes = (scienceCloudNotes || []).filter(n => {
        if (!query) return true;
        return `${n.title} ${n.content || ""}`.toLowerCase().includes(query.toLowerCase());
    });
    if (!notes.length) return "";
    return `
    <div class="mt-4">
        <div class="d-flex align-items-center gap-2 mb-2">
            <span class="topic-pill">Teacher notes</span>
            <h6 class="mb-0">Added from the control center</h6>
        </div>
        ${notes.map(n => `<article class="study-card monster-note"><div class="study-content"><p class="mini-label">Science • Cloud Note</p><h4>${escapeHTML(n.title)}</h4><div>${n.content}</div></div></article>`).join("")}
    </div>`;
}

window.openScienceGrade = function (id) {
    scienceGradeId = id; scienceTopicId = null; scienceView = "grade";
    renderScienceCloset(getScienceQuery());
    document.getElementById("notesContainer")?.scrollIntoView({ behavior: "smooth", block: "start" });
};
window.openScienceTopic = function (id) {
    const found = scienceFindTopic(id);
    if (!found) return;
    scienceGradeId = found.grade.id; scienceTopicId = id; scienceView = "topic";
    renderScienceCloset(getScienceQuery());
    document.getElementById("notesContainer")?.scrollIntoView({ behavior: "smooth", block: "start" });
};
window.backToScienceShelf = function () {
    scienceView = "shelf"; scienceGradeId = null; scienceTopicId = null;
    renderScienceCloset(getScienceQuery());
};
function getScienceQuery() {
    const el = document.getElementById("librarySearch");
    return (el?.value || "").trim().toLowerCase();
}

/* ============================================================
   SES BOOK CLOSET (mirrors Science closet)
   Shelf (Grade 7 / 8 / 9 doors) -> Grade shelf -> Topic
   ============================================================ */
let sesView = "shelf";      // "shelf" | "grade" | "topic"
let sesGradeId = null;
let sesTopicId = null;
let sesCloudNotes = [];

function sesFlatTopics() {
    const out = [];
    (window.sesBook || []).forEach(g => (g.themes || []).forEach(th => (th.topics || []).forEach(t => out.push({ grade: g, theme: th, topic: t }))));
    return out;
}
function sesFindTopic(id) { return sesFlatTopics().find(x => x.topic.id === id) || null; }
function sesFindGrade(id) { return (window.sesBook || []).find(g => g.id === id) || null; }
function sesGradeSequence(gradeId) {
    const g = sesFindGrade(gradeId);
    if (!g) return [];
    const seq = [];
    (g.themes || []).forEach(th => (th.topics || []).forEach(t => seq.push(t)));
    return seq;
}
function sesTopicNav(found) {
    const seq = sesGradeSequence(found.grade.id);
    const i = seq.findIndex(t => t.id === found.topic.id);
    if (i < 0) return "";
    const prev = seq[i - 1], next = seq[i + 1];
    const btn = (t, arrow) => t
        ? `<button type="button" class="secondary-btn chapter-btn" onclick="openSesTopic('${escapeHTML(t.id)}')">${arrow} ${escapeHTML(shortTitle(t.title, 28))}</button>`
        : "";
    return `
    <div class="chapter-nav">
        ${btn(prev, "←")}
        <span class="chapter-progress">${offsetToChapter(i, seq.length, found.grade)}</span>
        ${btn(next, "→")}
    </div>`;
}
function sesQuestionCount(title) {
    try { return typeof SESQuestions === "undefined" ? 0 : SESQuestions.filter(q => q.topic === title).length; }
    catch (_) { return 0; }
}
function sesTotalTopics() { return sesFlatTopics().length; }
function sesSearch(query) {
    const q = (query || "").trim().toLowerCase();
    if (!q) return null;
    return sesFlatTopics().filter(({ grade, theme, topic }) =>
        `${topic.title} ${topic.explanation} ${theme.title} ${grade.grade} ${(topic.points || []).join(" ")} ${(topic.definitions || []).join(" ")} ${(topic.waecFocus || []).join(" ")} ${((window.sesFullNotes || {})[topic.id]?.text) || ""}`
            .toLowerCase().includes(q)
    );
}
function renderSesCloset(query = null) {
    const container = document.getElementById("notesContainer");
    if (!container) return;
    const results = sesSearch(query);
    if (results) {
        container.innerHTML = `
            <div class="closet">
                <div class="closet-head">
                    <span class="closet-badge">🔎 Search</span>
                    <div>
                        <h5 class="mb-0">SES Book results</h5>
                        <p class="mb-0 small opacity-75">${results.length} topic${results.length === 1 ? "" : "s"} match “${escapeHTML(query)}”</p>
                    </div>
                </div>
                ${results.length ? `<div class="book-grid">${results.map(r => sesBookCard(r.topic, r.theme, r.grade)).join("")}</div>`
                    : `<div class="empty-state">No topics in the SES Book match “${escapeHTML(query)}”.</div>`}
            </div>
            ${sesCloudNotesBlock(query)}`;
        return;
    }
    if (sesView === "topic" && sesTopicId) {
        const found = sesFindTopic(sesTopicId);
        if (found) { container.innerHTML = sesTopicView(found); return; }
        sesView = "shelf"; sesTopicId = null;
    }
    if (sesView === "grade" && sesGradeId) {
        const grade = sesFindGrade(sesGradeId);
        if (grade) { container.innerHTML = sesGradeView(grade); return; }
        sesView = "shelf"; sesGradeId = null;
    }
    container.innerHTML = sesShelfView();
}
function sesShelfView() {
    const grades = window.sesBook || [];
    return `
    <div class="closet">
        <div class="closet-head">
            <span class="closet-badge">🌍 SES Book</span>
            <div>
                <h5 class="mb-0">The SES Book</h5>
                <p class="mb-0 small opacity-75">${sesTotalTopics()} topics • Grades 7, 8 and 9 • Open a shelf to start reading</p>
            </div>
        </div>
        <div class="closet-doors">
            ${grades.map(g => {
                const topicCount = (g.themes || []).reduce((n, th) => n + th.topics.length, 0);
                return `
                <button type="button" class="closet-door" onclick="openSesGrade('${escapeHTML(g.id)}')" aria-label="Open ${escapeHTML(g.grade)}">
                    <span class="door-panel door-left"></span>
                    <span class="door-panel door-right"></span>
                    <span class="door-hinge"></span>
                    <span class="door-icon">${escapeHTML(g.icon)}</span>
                    <span class="door-grade">${escapeHTML(g.grade)}</span>
                    <span class="door-label">${escapeHTML(g.label)}</span>
                    <span class="door-count">${(g.themes || []).length} themes • ${topicCount} topics</span>
                    <span class="door-cta">Open shelf →</span>
                </button>`;
            }).join("")}
        </div>
        <p class="small opacity-75 mt-3 mb-0">💡 Each shelf opens into its themes. Pick a book to read the full topic, then hit <strong>Practice this topic</strong> to quiz yourself on exactly what you just read.</p>
    </div>
    ${sesCloudNotesBlock()}`;
}
function sesGradeView(grade) {
    const topicCount = (grade.themes || []).reduce((n, th) => n + th.topics.length, 0);
    return `
    <div class="closet">
        <div class="closet-head">
            <span class="closet-badge">${escapeHTML(grade.icon)} ${escapeHTML(grade.grade)}</span>
            <div class="flex-grow-1">
                <h5 class="mb-0">${escapeHTML(grade.label)}</h5>
                <p class="mb-0 small opacity-75">${(grade.themes || []).length} themes • ${topicCount} topics</p>
            </div>
            <button type="button" class="secondary-btn nav-action" onclick="backToSesShelf()">🌍 Close shelf</button>
        </div>
        <p class="small opacity-75">${escapeHTML(grade.blurb || "")}</p>
        ${(grade.themes || []).map(th => `
            <div class="shelf-row">
                <div class="shelf-bar">
                    <span class="shelf-theme">${escapeHTML(th.number)} • ${escapeHTML(th.title)}</span>
                    <span class="shelf-count">${th.topics.length} book${th.topics.length === 1 ? "" : "s"}</span>
                </div>
                <div class="book-grid">
                    ${th.topics.map(t => sesBookCard(t, th, grade)).join("")}
                </div>
            </div>`).join("")}
        <div class="d-flex flex-wrap gap-2 mt-4">
            <button type="button" class="glass-btn" onclick="backToSesShelf()">🌍 Back to all shelves</button>
        </div>
    </div>`;
}
function sesBookCard(topic, theme, grade) {
    const n = sesQuestionCount(topic.title);
    return `
    <button type="button" class="book-spine" onclick="openSesTopic('${escapeHTML(topic.id)}')">
        <span class="book-band">${escapeHTML(topic.unit || "—")}</span>
        <span class="book-title">${escapeHTML(topic.title)}</span>
        <span class="book-theme">${escapeHTML(theme ? theme.title : "")}</span>
        <span class="book-foot">
            <span class="book-emoji">${escapeHTML(topic.icon || "📘")}</span>
            <span class="book-qs">${n ? n + " Qs" : "Read"}</span>
        </span>
    </button>`;
}
function sesFullContent(topic) {
    const full = (window.sesFullNotes || {})[topic.id];
    if (!full || !full.sections || !full.sections.length) return "";
    const base = "fn-" + String(topic.id).replace(/[^a-z0-9]+/gi, "-");
    const headed = full.sections.map((s, i) => ({ s, i })).filter(x => x.s.h);
    const toc = headed.length >= 2
        ? `<div class="fullnote-toc"><span class="mini-label">In this chapter</span><div>${
            headed.map(x => `<a href="#${base}-${x.i}">${escapeHTML(x.s.h.length > 48 ? x.s.h.slice(0, 47) + "…" : x.s.h)}</a>`).join("")
        }</div></div>`
        : "";
    const secs = full.sections.map((s, i) => {
        const body = s.blocks.map(b => {
            if (b.t === "ul") return `<ul>${b.items.map(x => `<li>${escapeHTML(x)}</li>`).join("")}</ul>`;
            if (b.t === "dl") return `<p class="fullnote-dl"><strong>${escapeHTML(b.k)} — </strong>${escapeHTML(b.v)}</p>`;
            if (b.t === "note") return `<div class="memory-tip">📌 ${escapeHTML(b.x)}</div>`;
            return `<p>${escapeHTML(b.x)}</p>`;
        }).join("");
        return `<div class="study-section">${s.h ? `<h6 id="${base}-${i}">${escapeHTML(s.h)}</h6>` : ""}${body}</div>`;
    }).join("");
    return `
    <p class="small opacity-75">📖 Complete class notes below (${escapeHTML(full.chapter || "")} — Mr. Fafanding Dibba): the whole class notes, then a quick revision and practice.</p>
    ${toc}
    ${secs}`;
}
// Legacy wrapper kept for compatibility (now part of the unified article).
function sesFullNotesBlock(topic) {
    const html = sesFullContent(topic);
    if (!html) return "";
    return `<article class="study-card monster-note fullnotes-card"><div class="study-content">${html}</div></article>`;
}
function sesTopicView(found) {
    const { grade, theme, topic } = found;
    const n = sesQuestionCount(topic.title);
    const nav = sesTopicNav(found);
    const hasFull = !!((window.sesFullNotes || {})[topic.id]?.sections?.length);
    return `
    <div class="closet">
        <div class="closet-head">
            <span class="closet-badge">${escapeHTML(grade.icon)} ${escapeHTML(grade.grade)}</span>
            <div class="flex-grow-1">
                <h5 class="mb-0">${escapeHTML(topic.title)}</h5>
                <p class="mb-0 small opacity-75">${escapeHTML(theme.number)} • ${escapeHTML(theme.title)} • Unit ${escapeHTML(topic.unit || "—")}${topic.page ? ` • p.${escapeHTML(topic.page)}` : ""}${hasFull ? " • 📖 Comprehensive notes" : ""}</p>
            </div>
            <button type="button" class="secondary-btn nav-action" onclick="openSesGrade('${escapeHTML(grade.id)}')">← Back to shelf</button>
        </div>
        <div class="d-flex flex-wrap gap-2 mb-3">
            <a class="glass-btn" href="quiz.html?mode=topic&subject=SES&topic=${encodeURIComponent(topic.title)}&note=${encodeURIComponent(topic.id)}">🎯 Practice this topic${n ? ` (${n} question${n === 1 ? "" : "s"})` : ""}</a>
            <button type="button" class="secondary-btn" onclick="backToSesShelf()">🌍 All shelves</button>
            <button type="button" class="secondary-btn" onclick="window.print()">🖨️ Print</button>
        </div>
        ${nav}
        <article class="study-card monster-note${hasFull ? " fullnotes-card" : ""}">
            <div class="study-art">
                ${topic.image ? `<img class="study-image" src="${escapeHTML(topic.image)}" alt="${escapeHTML(topic.title)}">` : `<div class="study-placeholder"><span>${escapeHTML(topic.icon || "📘")}</span><p>${escapeHTML(grade.label)}<br>${escapeHTML(theme.title)}</p></div>`}
            </div>
            <div class="study-content">
                <p class="mini-label">${escapeHTML(grade.grade)} • ${escapeHTML(theme.number)} • Unit ${escapeHTML(topic.unit || "—")}${topic.page ? ` • Page ${escapeHTML(topic.page)}` : ""}${hasFull ? " • 📖 Comprehensive notes" : ""}</p>
                <h4>${escapeHTML(topic.title)}</h4>
                <p>${escapeHTML(topic.explanation)}</p>
                ${sesFullContent(topic)}
                ${hasFull ? `<p class="mini-label mt-3">⚡ Quick revision — the essentials</p>` : ""}
                ${renderList("Key Points", topic.points)}
                ${renderList("Definitions", topic.definitions)}
                ${renderList("Formulas", topic.formulas)}
                ${renderList("Rules to Remember", topic.rules)}
                ${renderList("Examples", topic.examples)}
                ${renderList("Exam Focus", topic.waecFocus)}
                <div class="memory-tip">💡 ${escapeHTML(topic.memoryTip || "Revise this before quiz time.")}</div>
                ${n ? `<div class="topic-quiz-cta">
                    <strong>${n} question${n === 1 ? "" : "s"} in the quiz bank</strong> are tagged with this exact topic.
                    <a class="glass-btn mt-2" href="quiz.html?mode=topic&subject=SES&topic=${encodeURIComponent(topic.title)}&note=${encodeURIComponent(topic.id)}">🎯 Practice now</a>
                </div>` : `<div class="topic-quiz-cta muted">New questions for this topic are being added — read on and check back soon.</div>`}
            </div>
        </article>
        ${nav}
    </div>`;
}
function sesCloudNotesBlock(query = null) {
    const notes = (sesCloudNotes || []).filter(n => {
        if (!query) return true;
        return `${n.title} ${n.content || ""}`.toLowerCase().includes(query.toLowerCase());
    });
    if (!notes.length) return "";
    return `
    <div class="mt-4">
        <div class="d-flex align-items-center gap-2 mb-2">
            <span class="topic-pill">Teacher notes</span>
            <h6 class="mb-0">Added from the control center</h6>
        </div>
        ${notes.map(n => `<article class="study-card monster-note"><div class="study-content"><p class="mini-label">SES • Cloud Note</p><h4>${escapeHTML(n.title)}</h4><div>${n.content}</div></div></article>`).join("")}
    </div>`;
}
window.openSesGrade = function (id) {
    sesGradeId = id; sesTopicId = null; sesView = "grade";
    renderSesCloset(getSesQuery());
    document.getElementById("notesContainer")?.scrollIntoView({ behavior: "smooth", block: "start" });
};
window.openSesTopic = function (id) {
    const found = sesFindTopic(id);
    if (!found) return;
    sesGradeId = found.grade.id; sesTopicId = id; sesView = "topic";
    renderSesCloset(getSesQuery());
    document.getElementById("notesContainer")?.scrollIntoView({ behavior: "smooth", block: "start" });
};
window.backToSesShelf = function () {
    sesView = "shelf"; sesGradeId = null; sesTopicId = null;
    renderSesCloset(getSesQuery());
};
function getSesQuery() {
    const el = document.getElementById("librarySearch");
    return (el?.value || "").trim().toLowerCase();
}

/* ============================================================
   ENGLISH BOOK CLOSET (mirrors Science closet)
   Shelf (Grade 7 / 8 / 9 doors) -> Grade shelf -> Topic
   Each topic links to quiz.html?mode=topic&subject=English&topic=<title>
   ============================================================ */
let englishView = "shelf";      // "shelf" | "grade" | "topic"
let englishGradeId = null;
let englishTopicId = null;
let englishCloudNotes = [];

function englishFlatTopics() {
    const out = [];
    (window.englishBook || []).forEach(g => (g.themes || []).forEach(th => (th.topics || []).forEach(t => out.push({ grade: g, theme: th, topic: t }))));
    return out;
}
function englishFindTopic(id) { return englishFlatTopics().find(x => x.topic.id === id) || null; }
function englishFindGrade(id) { return (window.englishBook || []).find(g => g.id === id) || null; }
function englishGradeSequence(gradeId) {
    const g = englishFindGrade(gradeId);
    if (!g) return [];
    const seq = [];
    (g.themes || []).forEach(th => (th.topics || []).forEach(t => seq.push(t)));
    return seq;
}
function englishTopicNav(found) {
    const seq = englishGradeSequence(found.grade.id);
    const i = seq.findIndex(t => t.id === found.topic.id);
    if (i < 0) return "";
    const prev = seq[i - 1], next = seq[i + 1];
    const btn = (t, arrow) => t
        ? `<button type="button" class="secondary-btn chapter-btn" onclick="openEnglishTopic('${escapeHTML(t.id)}')">${arrow} ${escapeHTML(shortTitle(t.title, 28))}</button>`
        : "";
    return `
    <div class="chapter-nav">
        ${btn(prev, "←")}
        <span class="chapter-progress">${offsetToChapter(i, seq.length, found.grade)}</span>
        ${btn(next, "→")}
    </div>`;
}
function englishQuestionCount(title) {
    try {
        let n = 0;
        if (typeof EnglishQuestions !== "undefined") n += EnglishQuestions.filter(q => q.topic === title).length;
        return n;
    } catch (_) { return 0; }
}
function englishTotalTopics() { return englishFlatTopics().length; }
function englishSearch(query) {
    const q = (query || "").trim().toLowerCase();
    if (!q) return null;
    return englishFlatTopics().filter(({ grade, theme, topic }) =>
        `${topic.title} ${topic.explanation} ${theme.title} ${grade.grade} ${(topic.points || []).join(" ")} ${(topic.definitions || []).join(" ")} ${(topic.waecFocus || []).join(" ")} ${(topic.rules || []).join(" ")}`
            .toLowerCase().includes(q)
    );
}
function renderEnglishCloset(query = null) {
    const container = document.getElementById("notesContainer");
    if (!container) return;
    const results = englishSearch(query);
    if (results) {
        container.innerHTML = `
            <div class="closet">
                <div class="closet-head">
                    <span class="closet-badge">🔎 Search</span>
                    <div>
                        <h5 class="mb-0">English Book results</h5>
                        <p class="mb-0 small opacity-75">${results.length} topic${results.length === 1 ? "" : "s"} match “${escapeHTML(query)}”</p>
                    </div>
                </div>
                ${results.length ? `<div class="book-grid">${results.map(r => englishBookCard(r.topic, r.theme, r.grade)).join("")}</div>`
                    : `<div class="empty-state">No topics in the English Book match “${escapeHTML(query)}”.</div>`}
            </div>
            ${englishCloudNotesBlock(query)}`;
        return;
    }
    if (englishView === "topic" && englishTopicId) {
        const found = englishFindTopic(englishTopicId);
        if (found) {
            container.innerHTML = englishTopicView(found);
            // Letter masterclass: mount guide + word-card game after render.
            try {
                if ((found.topic && (found.topic.letterMasterclass || /informal letter/i.test(found.topic.title || ""))) && window.renderLetterGuide && window.openLetterGame) {
                    window.renderLetterGuide("letterGuideMount");
                    const firstEx = (window.englishLetterExercises || [])[0];
                    if (firstEx) window.openLetterGame(firstEx.id, "letterGameMount");
                }
            } catch (_) {}
            return;
        }
        englishView = "shelf"; englishTopicId = null;
    }
    if (englishView === "grade" && englishGradeId) {
        const grade = englishFindGrade(englishGradeId);
        if (grade) { container.innerHTML = englishGradeView(grade); return; }
        englishView = "shelf"; englishGradeId = null;
    }
    container.innerHTML = englishShelfView();
}
function englishShelfView() {
    const grades = window.englishBook || [];
    return `
    <div class="closet">
        <div class="closet-head">
            <span class="closet-badge">📝 English Book</span>
            <div>
                <h5 class="mb-0">The English Book</h5>
                <p class="mb-0 small opacity-75">${englishTotalTopics()} chapters • Grades 7, 8 and 9 • Open a shelf to start reading</p>
            </div>
        </div>
        <div class="closet-doors">
            ${grades.map(g => {
                const topicCount = (g.themes || []).reduce((n, th) => n + th.topics.length, 0);
                return `
                <button type="button" class="closet-door" onclick="openEnglishGrade('${escapeHTML(g.id)}')" aria-label="Open ${escapeHTML(g.grade)}">
                    <span class="door-panel door-left"></span>
                    <span class="door-panel door-right"></span>
                    <span class="door-hinge"></span>
                    <span class="door-icon">${escapeHTML(g.icon)}</span>
                    <span class="door-grade">${escapeHTML(g.grade)}</span>
                    <span class="door-label">${escapeHTML(g.label)}</span>
                    <span class="door-count">${(g.themes || []).length} themes • ${topicCount} chapters</span>
                    <span class="door-cta">Open shelf →</span>
                </button>`;
            }).join("")}
        </div>
        <p class="small opacity-75 mt-3 mb-0">💡 Each shelf opens into its themes. Pick a chapter to read the full note, then hit <strong>Practice this chapter</strong> to attempt at least 10 questions on exactly what you just read.</p>
    </div>
    ${englishCloudNotesBlock()}`;
}
function englishGradeView(grade) {
    const topicCount = (grade.themes || []).reduce((n, th) => n + th.topics.length, 0);
    return `
    <div class="closet">
        <div class="closet-head">
            <span class="closet-badge">${escapeHTML(grade.icon)} ${escapeHTML(grade.grade)}</span>
            <div class="flex-grow-1">
                <h5 class="mb-0">${escapeHTML(grade.label)}</h5>
                <p class="mb-0 small opacity-75">${(grade.themes || []).length} themes • ${topicCount} chapters</p>
            </div>
            <button type="button" class="secondary-btn nav-action" onclick="backToEnglishShelf()">📝 Close shelf</button>
        </div>
        <p class="small opacity-75">${escapeHTML(grade.blurb || "")}</p>
        ${(grade.themes || []).map(th => `
            <div class="shelf-row">
                <div class="shelf-bar">
                    <span class="shelf-theme">${escapeHTML(th.number)} • ${escapeHTML(th.title)}</span>
                    <span class="shelf-count">${th.topics.length} chapter${th.topics.length === 1 ? "" : "s"}</span>
                </div>
                <div class="book-grid">
                    ${th.topics.map(t => englishBookCard(t, th, grade)).join("")}
                </div>
            </div>`).join("")}
        <div class="d-flex flex-wrap gap-2 mt-4">
            <button type="button" class="glass-btn" onclick="backToEnglishShelf()">📝 Back to all shelves</button>
        </div>
    </div>`;
}
function englishBookCard(topic, theme, grade) {
    const n = englishQuestionCount(topic.title);
    return `
    <button type="button" class="book-spine" onclick="openEnglishTopic('${escapeHTML(topic.id)}')">
        <span class="book-band">${escapeHTML(topic.unit || "—")}</span>
        <span class="book-title">${escapeHTML(topic.title)}</span>
        <span class="book-theme">${escapeHTML(theme ? theme.title : "")}</span>
        <span class="book-foot">
            <span class="book-emoji">${escapeHTML(topic.icon || "📘")}</span>
            <span class="book-qs">${n ? n + " Qs" : "Read"}</span>
        </span>
    </button>`;
}
function englishPassageSets(title) {
    try {
        if (typeof window.englishPassageSets === "function") {
            const sets = window.englishPassageSets(title);
            if (sets && sets.length) return sets;
        }
    } catch (_) {}
    // Fallback: derive groups from the question bank.
    const groups = {};
    try {
        (EnglishQuestions || []).forEach(q => {
            if (q.topic === title && q.passageId) {
                (groups[q.passageId] = groups[q.passageId] || { id: q.passageId, title: q.passageTitle || q.passageId, count: 0 });
                groups[q.passageId].count++;
            }
        });
    } catch (_) {}
    return Object.values(groups);
}
function englishHowToCard(title) {
    if (title === "Comprehension Skills") {
        return `
        <div class="study-card howto-card">
            <div class="study-content">
                <p class="mini-label">📖 WASSCE method • Read this before you practice</p>
                <h4>How to answer a comprehension passage effectively</h4>
                <ol class="howto-steps">
                    <li><strong>Skim the whole passage first.</strong> Read once for the main idea. Do not stop at hard words — the meaning becomes clear as you read on.</li>
                    <li><strong>Read the questions before your second reading.</strong> Knowing what is asked tells you what to hunt for: a detail, a reason, or a conclusion.</li>
                    <li><strong>Answer ONLY from the passage.</strong> Never use your own knowledge. The correct option is stated directly or clearly implied by the text.</li>
                    <li><strong>For word-in-context questions, test each option in the sentence.</strong> Slot each choice into the original sentence — the one that keeps the meaning is correct.</li>
                    <li><strong>Eliminate extremes.</strong> Options with <em>always, never, only, all</em> are usually wrong unless the passage says exactly that.</li>
                </ol>
                <p class="small opacity-75 mb-0">🔁 Each Practice serves <strong>one full passage</strong> (static text on every question: read, choose, press Next until the last question, then Submit). Come back again and you will meet a <strong>different passage</strong>.</p>
            </div>
        </div>`;
    }
    if (title === "Informal Letter Writing — Perfect Letter Masterclass" || /informal letter/i.test(title || "")) {
        return `
        <div class="study-card howto-card">
            <div class="study-content">
                <p class="mini-label">✉️ WAEC / GABECE method • Informal letters first</p>
                <h4>How to score full marks in an informal letter</h4>
                <ol class="howto-steps">
                    <li><strong>Length first — minimum 300 words:</strong> short letters lose content marks. Plan P1 ~40, P2 ~80, P3 ~80, P4 ~60, conclusion ~40 (about 30 body lines).</li>
                    <li><strong>Layout first:</strong> writer's address (right) → date → <em>Dear + first name,</em> → paragraphs → <em>Your loving friend,</em> + first name. Format alone is ~10 marks.</li>
                    <li><strong>One paragraph = one idea:</strong> P1 reason for writing, P2 details, P3 an example, P4 feelings/plan, last paragraph greet + ask for reply.</li>
                    <li><strong>Show the relationship:</strong> ask after health, use a memory, a question, a feeling addressed TO the person — not only about yourself.</li>
                    <li><strong>Link every paragraph:</strong> Firstly, Moreover, For example, Because of this, Finally, I look forward to.</li>
                    <li><strong>Game rule:</strong> below you build the letter from word cards. You are marked /100 and review shows <strong>mistakes only</strong> — the full correct letter is never displayed.</li>
                </ol>
            </div>
        </div>`;
    }
    if (title === "Summary Writing") {
        return `
        <div class="study-card howto-card">
            <div class="study-content">
                <p class="mini-label">📝 WASSCE method • Read this before you practice</p>
                <h4>How to answer a summary passage effectively</h4>
                <ol class="howto-steps">
                    <li><strong>Read the summary question FIRST.</strong> It tells you exactly what to collect — causes, effects, solutions, habits — and what to ignore.</li>
                    <li><strong>Collect one point per sentence, skip the decoration.</strong> Examples, figures of speech, numbers and repetitions are details — leave them out.</li>
                    <li><strong>Write in your own words.</strong> Never copy long stretches. Join two short points into one fresh sentence.</li>
                    <li><strong>Obey the limit.</strong> If the limit is 40 words or 5 sentences, cut details and combine points until you fit — extra words lose marks.</li>
                    <li><strong>Add nothing new.</strong> Every point must come from the passage. An invented point scores zero, however sensible it sounds.</li>
                </ol>
                <p class="small opacity-75 mb-0">🔁 Each Practice serves <strong>one full summary passage</strong> with questions on main points, best paraphrase and limit rules. Return again for a <strong>different passage</strong>.</p>
            </div>
        </div>`;
    }
    return "";
}
function englishPassagePickerCard(title, topicId) {
    const sets = englishPassageSets(title);
    if (!sets.length) return "";
    const noteParam = topicId ? `&note=${encodeURIComponent(topicId)}` : "";
    const links = sets.map(s => `
        <a class="secondary-btn chapter-btn" href="quiz.html?mode=topic&subject=English&topic=${encodeURIComponent(title)}&passage=${encodeURIComponent(s.id)}${noteParam}">📄 ${escapeHTML(s.title)} • ${s.count} Qs</a>`).join("");
    return `
    <div class="study-card passage-picker">
        <div class="study-content">
            <p class="mini-label">📚 Passage sets • ${sets.length} available</p>
            <h4>Choose your passage — or let Practice rotate</h4>
            <p class="small opacity-75">Tap <strong>Practice</strong> for a surprise passage (it changes every visit), or start directly with one below. Each set shows its static passage on every question.</p>
            <div class="d-flex flex-wrap gap-2">${links}</div>
        </div>
    </div>`;
}
function englishLetterBlocks(topic) {
    if (!topic || !(topic.letterMasterclass || /informal letter/i.test(topic.title || ""))) return "";
    return `
    <div class="study-card monster-note letter-full">
        <div class="study-content">
            <p class="mini-label">✉️ Masterclass • 7 steps • 5 letter types • linking words</p>
            <h4>Perfect informal letter — study guide</h4>
            <div id="letterGuideMount"><p class="small opacity-75">Loading letter steps…</p></div>
        </div>
    </div>
    <div class="study-card monster-note letter-full">
        <div class="study-content">
            <p class="mini-label">🎮 Practice game • word cards • marked /100</p>
            <h4>Build the letter — word-card game</h4>
            <div id="letterGameMount"><p class="small opacity-75">Loading game…</p></div>
        </div>
    </div>`;
}
function englishTopicView(found) {
    const { grade, theme, topic } = found;
    const n = englishQuestionCount(topic.title);
    const nav = englishTopicNav(found);
    const sets = englishPassageSets(topic.title);
    const isPassageTopic = sets.length > 0;
    const practiceUrl = `quiz.html?mode=topic&subject=English&topic=${encodeURIComponent(topic.title)}&note=${encodeURIComponent(topic.id)}`;
    return `
    <div class="closet">
        <div class="closet-head">
            <span class="closet-badge">${escapeHTML(grade.icon)} ${escapeHTML(grade.grade)}</span>
            <div class="flex-grow-1">
                <h5 class="mb-0">${escapeHTML(topic.title)}</h5>
                <p class="mb-0 small opacity-75">${escapeHTML(theme.number)} • ${escapeHTML(theme.title)} • Chapter ${escapeHTML(topic.unit || "—")}${topic.page ? ` • p.${escapeHTML(topic.page)}` : ""}${isPassageTopic ? ` • ${sets.length} passages` : ""}</p>
            </div>
            <button type="button" class="secondary-btn nav-action" onclick="openEnglishGrade('${escapeHTML(grade.id)}')">← Back to shelf</button>
        </div>
        <div class="d-flex flex-wrap gap-2 mb-3">
            <a class="glass-btn" href="${practiceUrl}">🎯 ${isPassageTopic ? `Practice with a passage` : `Practice this chapter`}${n ? ` (${n} question${n === 1 ? "" : "s"}${isPassageTopic ? ` across ${sets.length} passages` : ""})` : ""}</a>
            <button type="button" class="secondary-btn" onclick="backToEnglishShelf()">📝 All shelves</button>
            <button type="button" class="secondary-btn" onclick="window.print()">🖨️ Print</button>
        </div>
        ${nav}
        ${englishHowToCard(topic.title)}
        ${englishPassagePickerCard(topic.title, topic.id)}
        ${englishLetterBlocks(topic)}
        <article class="study-card monster-note">
            <div class="study-art">
                ${topic.image ? `<img class="study-image" src="${escapeHTML(topic.image)}" alt="${escapeHTML(topic.title)}">` : `<div class="study-placeholder"><span>${escapeHTML(topic.icon || "📘")}</span><p>${escapeHTML(grade.label)}<br>${escapeHTML(theme.title)}</p></div>`}
            </div>
            <div class="study-content">
                <p class="mini-label">${escapeHTML(grade.grade)} • ${escapeHTML(theme.number)} • Chapter ${escapeHTML(topic.unit || "—")}${topic.page ? ` • Page ${escapeHTML(topic.page)}` : ""}</p>
                <h4>${escapeHTML(topic.title)}</h4>
                <p>${escapeHTML(topic.explanation)}</p>
                ${renderList("Key Points", topic.points)}
                ${renderList("Definitions", topic.definitions)}
                ${renderList("Rules to Remember", topic.rules)}
                ${renderList("Examples", topic.examples)}
                ${renderList("Exam Focus", topic.waecFocus)}
                <div class="memory-tip">💡 ${escapeHTML(topic.memoryTip || "Revise this before quiz time.")}</div>
                ${n ? `<div class="topic-quiz-cta">
                    <strong>${n} question${n === 1 ? "" : "s"} in the quiz bank</strong> are tagged with this exact chapter (minimum 10 guaranteed)${isPassageTopic ? `, organised into ${sets.length} full passages` : ""}.
                    <a class="glass-btn mt-2" href="${practiceUrl}">🎯 ${isPassageTopic ? "Practice now — a passage is picked for you" : "Practice now"}</a>
                </div>` : `<div class="topic-quiz-cta muted">New questions for this chapter are being added — read on and check back soon.</div>`}
            </div>
        </article>
        ${nav}
    </div>`;
}
function englishCloudNotesBlock(query = null) {
    const notes = (englishCloudNotes || []).filter(n => {
        if (!query) return true;
        return `${n.title} ${n.content || ""}`.toLowerCase().includes(query.toLowerCase());
    });
    if (!notes.length) return "";
    return `
    <div class="mt-4">
        <div class="d-flex align-items-center gap-2 mb-2">
            <span class="topic-pill">Teacher notes</span>
            <h6 class="mb-0">Added from the control center</h6>
        </div>
        ${notes.map(n => `<article class="study-card monster-note"><div class="study-content"><p class="mini-label">English • Cloud Note</p><h4>${escapeHTML(n.title)}</h4><div>${n.content}</div></div></article>`).join("")}
    </div>`;
}
window.openEnglishGrade = function (id) {
    englishGradeId = id; englishTopicId = null; englishView = "grade";
    renderEnglishCloset(getEnglishQuery());
    document.getElementById("notesContainer")?.scrollIntoView({ behavior: "smooth", block: "start" });
};
window.openEnglishTopic = function (id) {
    const found = englishFindTopic(id);
    if (!found) return;
    englishGradeId = found.grade.id; englishTopicId = id; englishView = "topic";
    renderEnglishCloset(getEnglishQuery());
    document.getElementById("notesContainer")?.scrollIntoView({ behavior: "smooth", block: "start" });
};
window.backToEnglishShelf = function () {
    englishView = "shelf"; englishGradeId = null; englishTopicId = null;
    renderEnglishCloset(getEnglishQuery());
};
function getEnglishQuery() {
    const el = document.getElementById("librarySearch");
    return (el?.value || "").trim().toLowerCase();
}

async function hydrateSubjects() {
    const select = document.getElementById("librarySubject");
    const currentUser = Storage.getCurrentUser();
    let subjects = ["Technical Drawing", "English", "Maths", "Science", "SES"].map(name => ({ name }));
    try { const data = await API.subjects(); for (const s of (data.subjects || [])) { if (!subjects.some(x => x.name.toLowerCase() === String(s.name).toLowerCase())) subjects.push(s); } } catch (_) {}
    subjects = Storage.filterAllowedSubjects(currentUser, subjects);
    const selected = localStorage.getItem("tm_selectedSubject") || subjects[0]?.name || "";
    select.innerHTML = subjects.map(s => `<option value="${escapeHTML(s.name)}">${escapeHTML(s.name)}</option>`).join("");
    select.value = subjects.some(s => s.name === selected) ? selected : (subjects[0]?.name || "");
}

function getPaperHistory() {
    try { return JSON.parse(localStorage.getItem("tm_paperHistory") || "{}"); } catch { return {}; }
}

async function renderNotes(filterQuery = null) {
    const container = document.getElementById("notesContainer");
    const subject = document.getElementById("librarySubject").value || "Technical Drawing";
    const q = (filterQuery ?? document.getElementById("librarySearch")?.value ?? "").trim().toLowerCase();

    // Science / SES / English are served from bundled book closets.
    if (subject !== "Science") { scienceView = "shelf"; scienceGradeId = null; scienceTopicId = null; }
    if (subject !== "SES") { sesView = "shelf"; sesGradeId = null; sesTopicId = null; }
    if (subject !== "English") { englishView = "shelf"; englishGradeId = null; englishTopicId = null; }
    if (subject === "English" && window.englishBook && window.englishBook.length) {
        renderEnglishCloset(q);
        try { const data = await API.notes("English"); englishCloudNotes = data.notes || []; }
        catch (_) { englishCloudNotes = []; }
        if (englishCloudNotes.length && englishView === "shelf") renderEnglishCloset(q);
        return;
    }
    if (subject === "SES" && window.sesBook && window.sesBook.length) {
        renderSesCloset(q);
        try { const data = await API.notes("SES"); sesCloudNotes = data.notes || []; }
        catch (_) { sesCloudNotes = []; }
        if (sesCloudNotes.length && sesView === "shelf") renderSesCloset(q);
        return;
    }
    if (subject === "Science" && window.scienceBook && window.scienceBook.length) {
        renderScienceCloset(q);
        try { const data = await API.notes("Science"); scienceCloudNotes = data.notes || []; }
        catch (_) { scienceCloudNotes = []; }
        if (scienceCloudNotes.length && scienceView === "shelf") renderScienceCloset(q);
        return;
    }

    container.innerHTML = `<div class="empty-state">Loading notes...</div>`;
    let notes = [];
    try { const data = await API.notes(subject); notes = data.notes || []; } catch (_) {}
    // local fallback with filter
    let localNotes = [];
    let html = "";
    if (subject === "Technical Drawing" && (!notes || notes.length === 0)) {
        localNotes = window.technicalDrawingNotes || [];
        if (q) localNotes = localNotes.filter(n => `${n.title} ${n.explanation} ${(n.points||[]).join(" ")} ${(n.waecFocus||[]).join(" ")}`.toLowerCase().includes(q));
        html = localNotes.map(renderTDNote).join("");
        if (!html) html = q ? `<div class="empty-state">No Technical Drawing notes match “${escapeHTML(q)}”.</div>` : `<div class="empty-state">Technical Drawing book notes coming from data file. Check back soon.</div>`;
        container.innerHTML = html;
        return;
    }
    if (subject === "English" && (!notes || notes.length === 0)) {
        localNotes = window.englishNotes || [];
        if (q) localNotes = localNotes.filter(n => `${n.title} ${n.explanation}`.toLowerCase().includes(q));
        html = localNotes.map(renderEnglishNote).join("");
        if (!html) html = q ? `<div class="empty-state">No English notes match “${escapeHTML(q)}”.</div>` : `<div class="empty-state">No notes for English yet.</div>`;
        container.innerHTML = html;
        return;
    }
    if (subject === "Maths" && (!notes || notes.length === 0)) {
        localNotes = window.mathsNotes || [];
        if (q) localNotes = localNotes.filter(n => `${n.title} ${n.explanation}`.toLowerCase().includes(q));
        const quizTopics = ["Number and Numeration", "Ratio and Proportion", "Algebra", "Geometry", "Mensuration", "Statistics & Probability", "Money & Interest"];
        const topicButtons = quizTopics.map(t => {
            const n = mathsQuestionCount(t);
            return `<a class="secondary-btn chapter-btn" href="quiz.html?mode=topic&subject=Maths&topic=${encodeURIComponent(t)}">🎯 ${escapeHTML(t)} • ${n} Qs</a>`;
        }).join("");
        const intro = q ? "" : `<div class="alert mb-3" style="background:rgba(37,99,235,.08);border:1px solid rgba(37,99,235,.15);border-radius:14px;">📘 <strong>Maths revision arena</strong> — ${localNotes.length} comprehensive notes (JSS 1–3) with diagrams, each linked to practice. Every practice topic has <strong>minimum 10 questions</strong>.<div class="d-flex flex-wrap gap-2 mt-2">${topicButtons}</div></div>`;
        html = localNotes.map(renderMathsNote).join("");
        if (!html) html = q ? `<div class="empty-state">No Maths notes match “${escapeHTML(q)}”.</div>` : `<div class="empty-state">No notes for Maths yet.</div>`;
        container.innerHTML = intro + html;
        return;
    }
    if (subject === "Science" && (!notes || notes.length === 0)) {
        localNotes = window.scienceNotes || [];
        if (q) localNotes = localNotes.filter(n => `${n.title} ${n.explanation}`.toLowerCase().includes(q));
        html = localNotes.map(renderScienceNote).join("");
        if (!html) html = q ? `<div class="empty-state">No Science notes match “${escapeHTML(q)}”.</div>` : `<div class="empty-state">No notes for Science yet.</div>`;
        container.innerHTML = html;
        return;
    }
    // cloud notes with filter
    if (q && notes.length) {
        notes = notes.filter(n => `${n.title} ${n.content||""}`.toLowerCase().includes(q));
    }
    if (!notes.length) { container.innerHTML = q ? `<div class="empty-state">No notes match “${escapeHTML(q)}” for ${escapeHTML(subject)}.</div>` : `<div class="empty-state">No notes available for ${escapeHTML(subject)} yet. Admin or teacher can add notes from the control center.</div>`; return; }
    container.innerHTML = notes.map((note) => `<article class="study-card monster-note"><div class="study-content"><p class="mini-label">${escapeHTML(subject)} • Cloud Note</p><h4>${escapeHTML(note.title)}</h4><div>${note.content}</div></div></article>`).join("");
}

let paperDetailVisible = false;
let detailSubject = null, detailYear = null, detailShowAnswers = false;

function hidePaperDetail() {
    paperDetailVisible = false;
    detailSubject = null; detailYear = null;
    const detail = document.getElementById("paperDetail");
    const grid = document.getElementById("papersContainer");
    const hint = document.getElementById("papersHint");
    if (detail) detail.style.display = "none";
    if (grid) grid.style.display = "";
    if (hint) hint.style.display = "";
    // remove view param from url without reload
    const url = new URL(location.href);
    if (url.searchParams.has("view")) { url.searchParams.delete("view"); history.replaceState(null, "", url.toString()); }
}

function renderPapers(filterQuery = null) {
    const subject = document.getElementById("librarySubject").value || "Technical Drawing";
    const container = document.getElementById("papersContainer");
    const hint = document.getElementById("papersHint");
    const q = (filterQuery ?? document.getElementById("librarySearch")?.value ?? "").trim().toLowerCase();
    let papers = (window.getPapersForSubject ? window.getPapersForSubject(subject) : []).slice().sort((a,b)=> b.year - a.year);
    if (q) {
        papers = papers.filter(p => `${p.year} ${p.label} ${p.exam}`.toLowerCase().includes(q));
    }
    const history = getPaperHistory();
    // Actual servable count, so a paper whose answer key is still being completed
    // does not advertise questions it cannot yet serve.
    const servedCount = (p) => {
        try { return getPaperQuestions(p.subject, p.year).length || p.questions; }
        catch (_) { return p.questions; }
    };

    if (!papers.length) {
        hint.textContent = q ? `No papers match “${q}”.` : (subject === "Technical Drawing" ? "No papers found." : `Past papers for ${subject} are being prepared. Technical Drawing papers are ready below — switch subject to Technical Drawing to practice.`);
        if (!q) {
            container.innerHTML = `
                <div class="empty-state" style="padding:18px;border:1px dashed rgba(15,23,42,.12);border-radius:16px;background:rgba(255,255,255,.6)">
                    <strong>No past papers yet for ${escapeHTML(subject)}.</strong><br>
                    ${subject !== "Technical Drawing" ? ` Switch to <strong>Technical Drawing</strong> to access 8 GABECE papers (2002–2026). Other subjects arriving soon.` : `Check back soon.`}
                </div>`;
        } else {
            container.innerHTML = `<div class="empty-state">No papers match “${escapeHTML(q)}”.</div>`;
        }
        // also hide detail if filtering while detail visible?
        return;
    }
    hint.textContent = q ? `${papers.length} papers match “${q}” • Click View to read full paper` : `${papers.length} papers • View full paper, then Attempt or Just Read • Untimed`;

    container.style.display = "";
    // if detail is visible, keep it but still update grid behind? For now hide grid when detail visible — handled by viewPaper
    container.innerHTML = `
        <div class="paper-grid">
            ${papers.map(p => {
                const key = `${p.subject}__${p.year}`;
                const h = history[key];
                const histBadge = h ? `<span class="topic-pill" style="background:#dcfce7;color:#166534;border-color:#86efac;">Last: ${h.score}% • ${new Date(h.date).toLocaleDateString()}</span>` : `<span class="topic-pill" style="background:#fef3c7;color:#92400e;">Not attempted</span>`;
                return `
            <article class="paper-card">
                <div class="paper-year">${escapeHTML(p.year)}</div>
                <div class="paper-body">
                    <h6>${escapeHTML(p.label)}</h6>
                    <p class="small opacity-75 mb-2">${servedCount(p)} questions • ${escapeHTML(p.duration)} • ${escapeHTML(p.exam)}</p>
                    <div class="d-flex gap-2 flex-wrap align-items-center">
                        <span class="topic-pill">${servedCount(p)} Qs</span>
                        <span class="topic-pill">GABECE</span>
                        ${histBadge}
                    </div>
                </div>
                <div class="paper-actions">
                    <button class="glass-btn nav-action w-100" onclick="viewPaper('${escapeHTML(p.subject)}','${escapeHTML(p.year)}')">👁️ View paper</button>
                    <button class="secondary-btn nav-action w-100" onclick="attemptPaper('${escapeHTML(p.subject)}','${escapeHTML(p.year)}')">✏️ Quick attempt</button>
                    <small class="opacity-75">View first — then decide to attempt or just read</small>
                </div>
            </article>`;
            }).join("")}
        </div>
        <div class="mt-3 small opacity-75">💡 Click <strong>View paper</strong> to see all ${servedCount(papers[0]) || ""} questions with diagrams. You can <strong>Just Read</strong> or hit <strong>Attempt (untimed)</strong> — answers/explanations are shown after submit in Review.</div>
    `;
}

window.viewPaper = function(subject, year) {
    detailSubject = subject; detailYear = String(year); detailShowAnswers = false;
    const qs = getPaperQuestions(subject, year);
    if (!qs || !qs.length) { alert("No questions found for this paper."); return; }
    paperDetailVisible = true;
    document.getElementById("papersContainer").style.display = "none";
    document.getElementById("papersHint").style.display = "none";
    const detail = document.getElementById("paperDetail");
    detail.style.display = "";
    // update url
    const url = new URL(location.href);
    url.searchParams.set("view", String(year));
    url.searchParams.set("tab", "papers");
    url.searchParams.set("subject", subject);
    history.replaceState(null, "", url.toString());
    renderPaperDetail(subject, year, detailShowAnswers);
    detail.scrollIntoView({ behavior: "smooth", block: "start" });
};

function renderPaperDetail(subject, year, showAnswers) {
    const header = document.getElementById("paperDetailHeader");
    const content = document.getElementById("paperDetailContent");
    const qs = getPaperQuestions(subject, year);
    const meta = getPaperMeta(subject, year);
    const toggleBtn = document.getElementById("detailToggleAnswers");
    toggleBtn.textContent = showAnswers ? "🙈 Hide answers" : "👁️ Show answers";
    toggleBtn.classList.toggle("glass-btn", showAnswers);
    toggleBtn.classList.toggle("secondary-btn", !showAnswers);

    const history = getPaperHistory();
    const h = history[`${subject}__${year}`];
    const diagramCount = qs.filter(q => q.image).length;
    const facts = [
        `${qs.length} questions`,
        meta ? meta.duration : null,
        meta ? meta.exam : null,
        meta && meta.marks ? `${meta.marks} marks` : null,
        diagramCount ? `${diagramCount} diagrams` : null
    ].filter(Boolean).join(" • ");
    header.innerHTML = `
        <div class="d-flex flex-wrap justify-content-between gap-3 align-items-center">
            <div>
                <h5 class="mb-1">${escapeHTML(subject)} — Paper ${escapeHTML(year)}</h5>
                <p class="mb-0 small opacity-75">${facts} • Untimed • Reading mode ${showAnswers ? "(answers visible)" : "(answers hidden)"}</p>
            </div>
            <span class="topic-pill">${escapeHTML(year)} • ${qs.length} Qs</span>
        </div>
        ${h ? `<div class="mt-2 small" style="color:#166534;background:#dcfce7;border:1px solid #86efac;border-radius:999px;padding:6px 12px;display:inline-block;">Last attempt: <strong>${h.score}%</strong> (${h.correct}/${h.total}) • ${new Date(h.date).toLocaleString()}</div>` : `<div class="mt-2 small opacity-75">Not attempted yet — view then decide.</div>`}
        <div class="mt-2 small opacity-75">💡 <strong>Just Read:</strong> scroll and study. <strong>Attempt:</strong> click “Attempt this paper” — you’ll answer then get instant review with explanations, no timer.</div>
    `;

    let lastPassage = null;
    content.innerHTML = qs.map((q, idx) => {
        const opts = q.options.map((opt, i) => {
            const isCorrect = showAnswers && i === q.correct;
            const cls = isCorrect ? "paper-option correct" : "paper-option";
            const marker = String.fromCharCode(65 + i);
            return `<div class="${cls}"><span class="opt-marker">${marker}</span><span>${escapeHTML(opt)} ${isCorrect ? "✓" : ""}</span></div>`;
        }).join("");
        const img = q.image ? `<div class="paper-question-image"><img src="${escapeHTML(q.image)}" alt="Diagram Q${idx+1}" loading="lazy"></div>` : "";
        const expl = showAnswers ? `<div class="paper-expl"><strong>Answer: ${String.fromCharCode(65+q.correct)} • Explanation:</strong> ${escapeHTML(q.explanation || "No explanation.")}</div>` : `<div class="paper-expl muted">Answer hidden — toggle “Show answers” or attempt the paper for full review.</div>`;
        let passage = "";
        if (q.passage) {
            const isNew = q.passage !== lastPassage;
            lastPassage = q.passage;
            passage = `<details class="paper-passage"${isNew ? " open" : ""}><summary>📄 Passage${isNew ? "" : " (shown above)"}</summary><div class="passage-text">${passageVocabHighlight(q.passage, qs, q.passageId, q.targetWord)}</div></details>`;
        }
        const section = q.section ? `<span class="topic-pill" style="flex:0 0 auto;">Section ${escapeHTML(q.section)}</span>` : "";
        return `
        <article class="paper-question-card">
            <div class="d-flex justify-content-between align-items-start gap-2 mb-2">
                <h6 class="mb-0">Q${idx+1}. ${escapeHTML(q.question)}</h6>
                ${section}
            </div>
            ${passage}
            ${img}
            <div class="paper-options">${opts}</div>
            ${expl}
        </article>`;
    }).join("");

    // update attempt btn to carry subject/year
    const attemptBtn = document.getElementById("detailAttemptBtn");
    attemptBtn.onclick = () => attemptPaper(subject, year);
}

window.attemptPaper = function(subject, year) {
    localStorage.setItem("tm_selectedSubject", subject);
    const url = `quiz.html?mode=paper&subject=${encodeURIComponent(subject)}&year=${encodeURIComponent(year)}`;
    window.location.href = url;
};
