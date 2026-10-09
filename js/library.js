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

    // deep link ?note=<topicId> or ?grade=<gradeId> jumps straight into the Science Book
    const deepNote = qs.get("note") || qs.get("topic");
    const deepGrade = qs.get("grade");
    if (deepNote || deepGrade) {
        const sel = document.getElementById("librarySubject");
        if (sel.value !== "Science") { sel.value = "Science"; localStorage.setItem("tm_selectedSubject", "Science"); }
        activate("notes");
        await renderNotes();
        renderPapers();
        if (deepNote) window.openScienceTopic(deepNote);
        else window.openScienceGrade(deepGrade);
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
function renderMathsNote(note) {
    const image = note.image
        ? `<img src="${escapeHTML(note.image)}" alt="${escapeHTML(note.title)}" class="study-image">`
        : `<div class="study-placeholder"><span>${escapeHTML(note.icon || "📘")}</span><p>${escapeHTML(note.imageNote || "Insert diagram here later.")}</p></div>`;
    return `<article class="study-card monster-note">
        <div class="study-art">${image}</div>
        <div class="study-content">
            <p class="mini-label">${escapeHTML(note.grade)} • Topic ${escapeHTML(note.topicNumber)} • Aki Ola Maths / BECE Focus</p>
            <h4>${escapeHTML(note.title)}</h4>
            <p>${escapeHTML(note.explanation)}</p>
            ${renderList("Key Points", note.points)}${renderList("Definitions", note.definitions)}${renderList("Formulas", note.formulas)}${renderList("Rules to Remember", note.rules)}${renderList("Examples", note.examples)}${renderList("WAEC Focus", note.waecFocus)}
            <div class="memory-tip">💡 ${escapeHTML(note.memoryTip || "Revise this before quiz time.")}</div>
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
            <a class="glass-btn" href="quiz.html?mode=topic&subject=Science&topic=${encodeURIComponent(topic.title)}">🎯 Practice this topic${n ? ` (${n} question${n === 1 ? "" : "s"})` : ""}</a>
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
                    <a class="glass-btn mt-2" href="quiz.html?mode=topic&subject=Science&topic=${encodeURIComponent(topic.title)}">🎯 Practice now</a>
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

async function hydrateSubjects() {
    const select = document.getElementById("librarySubject");
    const currentUser = Storage.getCurrentUser();
    let subjects = ["Technical Drawing", "English", "Maths", "Science"].map(name => ({ name }));
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

    // Science is served from the bundled Foundation Science Book (closet view).
    if (subject !== "Science") { scienceView = "shelf"; scienceGradeId = null; scienceTopicId = null; }
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
        html = localNotes.map(renderMathsNote).join("");
        if (!html) html = q ? `<div class="empty-state">No Maths notes match “${escapeHTML(q)}”.</div>` : `<div class="empty-state">No notes for Maths yet.</div>`;
        container.innerHTML = html;
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
            passage = `<details class="paper-passage"${isNew ? " open" : ""}><summary>📄 Passage${isNew ? "" : " (shown above)"}</summary><div class="passage-text">${escapeHTML(q.passage)}</div></details>`;
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
