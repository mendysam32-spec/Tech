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
                    <p class="small opacity-75 mb-2">${p.questions} questions • ${escapeHTML(p.duration)} • ${escapeHTML(p.exam)}</p>
                    <div class="d-flex gap-2 flex-wrap align-items-center">
                        <span class="topic-pill">${p.questions} Qs</span>
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
        <div class="mt-3 small opacity-75">💡 Click <strong>View paper</strong> to see all ${papers[0]?.questions || ""} questions with diagrams. You can <strong>Just Read</strong> or hit <strong>Attempt (untimed)</strong> — answers/explanations are shown after submit in Review.</div>
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
    header.innerHTML = `
        <div class="d-flex flex-wrap justify-content-between gap-3 align-items-center">
            <div>
                <h5 class="mb-1">${escapeHTML(subject)} — Paper ${escapeHTML(year)}</h5>
                <p class="mb-0 small opacity-75">${meta ? `${meta.questions} questions • ${meta.duration} • ${meta.exam} • ${qs.filter(q=>q.image).length} diagrams` : `${qs.length} questions`} • Untimed • Reading mode ${showAnswers ? "(answers visible)" : "(answers hidden)"}</p>
            </div>
            <span class="topic-pill">${escapeHTML(year)} • ${qs.length} Qs</span>
        </div>
        ${h ? `<div class="mt-2 small" style="color:#166534;background:#dcfce7;border:1px solid #86efac;border-radius:999px;padding:6px 12px;display:inline-block;">Last attempt: <strong>${h.score}%</strong> (${h.correct}/${h.total}) • ${new Date(h.date).toLocaleString()}</div>` : `<div class="mt-2 small opacity-75">Not attempted yet — view then decide.</div>`}
        <div class="mt-2 small opacity-75">💡 <strong>Just Read:</strong> scroll and study. <strong>Attempt:</strong> click “Attempt this paper” — you’ll answer then get instant review with explanations, no timer.</div>
    `;

    content.innerHTML = qs.map((q, idx) => {
        const opts = q.options.map((opt, i) => {
            const isCorrect = showAnswers && i === q.correct;
            const cls = isCorrect ? "paper-option correct" : "paper-option";
            const marker = String.fromCharCode(65 + i);
            return `<div class="${cls}"><span class="opt-marker">${marker}</span><span>${escapeHTML(opt)} ${isCorrect ? "✓" : ""}</span></div>`;
        }).join("");
        const img = q.image ? `<div class="paper-question-image"><img src="${escapeHTML(q.image)}" alt="Diagram Q${idx+1}" loading="lazy"></div>` : "";
        const expl = showAnswers ? `<div class="paper-expl"><strong>Answer: ${String.fromCharCode(65+q.correct)} • Explanation:</strong> ${escapeHTML(q.explanation || "No explanation.")}</div>` : `<div class="paper-expl muted">Answer hidden — toggle “Show answers” or attempt the paper for full review.</div>`;
        return `
        <article class="paper-question-card">
            <div class="d-flex justify-content-between align-items-start gap-2 mb-2">
                <h6 class="mb-0">Q${idx+1}. ${escapeHTML(q.question)}</h6>
                <span class="topic-pill" style="flex:0 0 auto;">Q${idx+1}/${qs.length}</span>
            </div>
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
