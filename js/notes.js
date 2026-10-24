document.addEventListener("DOMContentLoaded", async () => {
    const user = Storage.getCurrentUser();
    if (!user) { window.location.href = "index.html"; return; }
    document.body.dataset.accent = user.profile?.accent || "blue";
    await hydrateSubjects();
    await renderNotes();
    document.getElementById("notesSubject").addEventListener("change", async e => {
        localStorage.setItem("tm_selectedSubject", e.target.value);
        await renderNotes();
    });
});

function escapeHTML(value) {
    return String(value ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
}
function renderList(title, items) {
    if (!Array.isArray(items) || !items.length) return "";
    return `<div class="study-section"><h6>${escapeHTML(title)}</h6><ul>${items.map(x => `<li>${escapeHTML(x)}</li>`).join("")}</ul></div>`;
}
// Render a "Term: definition" list item with the term bold + theme colour.
function renderDefItem(text) {
    const raw = escapeHTML(String(text ?? "").trim());
    const colon = raw.indexOf(":");
    if (colon > 0) {
        const term = raw.slice(0, colon).trim();
        const rest = raw.slice(colon).trim();
        return `<li><span class="term-def">${term}:</span> ${rest}</li>`;
    }
    return `<li>${raw}</li>`;
}
function renderDefList(title, items) {
    if (!Array.isArray(items) || !items.length) return "";
    return `<div class="study-section"><h6>${escapeHTML(title)}</h6><ul>${items.map(renderDefItem).join("")}</ul></div>`;
}
// English syllabus detail overlay (data/english-notes-detail.js).
function englishDetail(source) {
    const map = (typeof window !== "undefined" && window.englishNotesDetail) || {};
    if (!source || !source.title) return null;
    return map[source.title] || null;
}
function englishMergedTopic(topic) {
    const detail = englishDetail(topic);
    if (!detail) return topic || {};
    const merged = Object.assign({}, topic || {});
    ["explanation", "points", "definitions", "rules", "examples", "waecFocus", "memoryTip"].forEach(key => {
        const value = detail[key];
        if (value && (!Array.isArray(value) || value.length)) merged[key] = value;
    });
    return merged;
}
// Worked examples carry ✗ / ✓ markers - wrong form red, corrected form green.
function renderExampleText(value) {
    const raw = String(value ?? "").trim();
    if (!raw) return "";
    const parts = raw.split(/(✗|✓)/).filter(p => p !== "");
    let html = "";
    let cls = "";
    parts.forEach(part => {
        if (part === "✗" || part === "✓") {
            cls = part === "✗" ? "ex-bad" : "ex-good";
            html += `<span class="ex-mark ${cls}">${part}</span> `;
        } else {
            const text = escapeHTML(part.trim());
            html += cls ? `<span class="${cls}">${text}</span> ` : text;
        }
    });
    return html.trim();
}
function renderExampleList(title, items) {
    if (!Array.isArray(items) || !items.length) return "";
    return `<div class="study-section"><h6>${escapeHTML(title)}</h6><ul class="example-list">${items.map(x => `<li>${renderExampleText(x)}</li>`).join("")}</ul></div>`;
}
// Every note picture goes through the shared resolver, so replacing a file
// in images/notes/ (or the registry in data/note-images.js) is enough.
function noteArt(subject, note) {
    if (typeof NoteImages === "undefined") {
        return note.image
            ? `<img src="${escapeHTML(note.image)}" alt="${escapeHTML(note.title)}" class="study-image">`
            : `<div class="study-placeholder"><span>${escapeHTML(note.icon || "📘")}</span><p>${escapeHTML(note.imageNote || "Insert diagram here later.")}</p></div>`;
    }
    return NoteImages.html({
        key: NoteImages.noteKey(subject, note.grade, note.topicNumber),
        fallback: note.image,
        alt: note.title,
        cls: "study-image",
        icon: note.icon,
        imageNote: note.imageNote
    });
}
function renderTDNote(note) {
    const image = noteArt("Technical Drawing", note);
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
// Book topics are keyed by topic id (topic:<id>) in the image registry.
function topicArt(subject, topicId, alt) {
    if (typeof NoteImages === "undefined") return "";
    return NoteImages.html({
        key: NoteImages.topicKey(topicId),
        alt: alt || "Diagram",
        cls: "study-image"
    });
}
function renderEnglishNote(note) {
    const image = noteArt("English", note);
    const view = englishMergedTopic(note);
    return `<article class="study-card monster-note">
        <div class="study-art">${image}</div>
        <div class="study-content">
            <p class="mini-label">${escapeHTML(note.grade)} • Topic ${escapeHTML(note.topicNumber)} • Aki Ola / WAEC Focus</p>
            <h4>${escapeHTML(note.title)}</h4>
            <p>${escapeHTML(view.explanation)}</p>
            ${renderList("Key Points", view.points)}${renderDefList("Definitions", view.definitions)}${renderList("Rules to Remember", view.rules)}${renderExampleList("Worked Examples", view.examples)}${renderList("WAEC Focus", view.waecFocus)}
            <div class="memory-tip">💡 ${escapeHTML(view.memoryTip || "Revise this before quiz time.")}</div>
        </div>
    </article>`;
}
function mathsQuizTopic(note) { return note.quizTopic || "Number and Numeration"; }
function mathsQuestionCount(quizTopic) {
    try { return typeof MathsQuestions === "undefined" ? 0 : MathsQuestions.filter(q => q.topic === quizTopic).length; }
    catch (_) { return 0; }
}
function scienceQuizTopic(note) { return note.quizTopic || note.title; }
function scienceQuestionCount(quizTopic) {
    try { return typeof ScienceQuestions === "undefined" ? 0 : ScienceQuestions.filter(q => q.topic === quizTopic).length; }
    catch (_) { return 0; }
}
function renderMathsNote(note) {
    const image = noteArt("Maths", note);
    const quizTopic = mathsQuizTopic(note);
    let n = 0;
    try { n = mathsQuestionCount(quizTopic); } catch (_) {}
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
            ${renderList("Key Points", note.points)}${renderDefList("Definitions", note.definitions)}${renderList("Formulas", note.formulas)}${renderList("Rules to Remember", note.rules)}${renderList("Examples", note.examples)}${renderList("WAEC Focus", note.waecFocus)}
            <div class="memory-tip">💡 ${escapeHTML(note.memoryTip || "Revise this before quiz time.")}</div>
            ${n ? `<div class="topic-quiz-cta"><strong>${n} questions</strong> in the quiz bank for <strong>${escapeHTML(quizTopic)}</strong> (minimum 10 guaranteed).<a class="glass-btn mt-2" href="${practiceUrl}">🎯 Practice now</a></div>` : ""}
        </div>
    </article>`;
}
function renderScienceNote(note, subject) {
    const image = noteArt(subject || "Science", note);
    const quizTopic = scienceQuizTopic(note);
    const n = scienceQuestionCount(quizTopic);
    const practiceUrl = `quiz.html?mode=topic&subject=Science&topic=${encodeURIComponent(quizTopic)}`;
    return `<article class="study-card monster-note">
        <div class="study-art">${image}</div>
        <div class="study-content">
            <p class="mini-label">${escapeHTML(note.grade)} • Topic ${escapeHTML(note.topicNumber)} • Aki Ola Science / BECE Focus</p>
            <h4>${escapeHTML(note.title)}</h4>
            <p>${escapeHTML(note.explanation)}</p>
            <div class="d-flex flex-wrap gap-2 mb-2">
                <a class="glass-btn" href="${practiceUrl}">🎯 Practice ${escapeHTML(quizTopic)}${n ? ` (${n} questions)` : ""}</a>
            </div>
            ${renderList("Key Points", note.points)}${renderDefList("Definitions", note.definitions)}${renderList("Formulas", note.formulas)}${renderList("Rules to Remember", note.rules)}${renderList("Examples", note.examples)}${renderList("WAEC Focus", note.waecFocus)}
            <div class="memory-tip">💡 ${escapeHTML(note.memoryTip || "Revise this before quiz time.")}</div>
            ${n ? `<div class="topic-quiz-cta"><strong>${n} questions</strong> in the quiz bank for <strong>${escapeHTML(quizTopic)}</strong>.<a class="glass-btn mt-2" href="${practiceUrl}">🎯 Practice now</a></div>` : ""}
        </div>
    </article>`;
}
async function hydrateSubjects() {
    const select = document.getElementById("notesSubject");
    const currentUser = Storage.getCurrentUser();
    let subjects = ["Technical Drawing", "English", "Maths", "Science", "SES"].map(name => ({ name }));
    try { const data = await API.subjects(); for (const s of (data.subjects || [])) { if (!subjects.some(x => x.name.toLowerCase() === String(s.name).toLowerCase())) subjects.push(s); } } catch (_) {}
    subjects = Storage.filterAllowedSubjects(currentUser, subjects);
    const selected = localStorage.getItem("tm_selectedSubject") || subjects[0]?.name || "";
    select.innerHTML = subjects.map(s => `<option value="${escapeHTML(s.name)}">${escapeHTML(s.name)}</option>`).join("");
    select.value = subjects.some(s => s.name === selected) ? selected : (subjects[0]?.name || "");
}
async function renderNotes() {
    const container = document.getElementById("notesContainer");
    const subject = document.getElementById("notesSubject").value || "Technical Drawing";
    container.innerHTML = `<div class="empty-state">Loading notes...</div>`;
    let notes = [];
    try { const data = await API.notes(subject); notes = data.notes || []; } catch (_) {}
    if (subject === "Technical Drawing" && (!notes || notes.length === 0)) {
        container.innerHTML = (window.technicalDrawingNotes || []).map(renderTDNote).join("");
        return;
    }
    if (subject === "English" && (!notes || notes.length === 0)) {
        const topics = [];
        (window.englishBook || []).forEach(g => (g.themes || []).forEach(th => (th.topics || []).forEach(t => topics.push({ grade: g.grade, theme: th.title, ...t }))));
        if (!topics.length) {
            container.innerHTML = (window.englishNotes || []).map(renderEnglishNote).join("");
            return;
        }
        container.innerHTML = `<div class="alert mb-3" style="background:rgba(37,99,235,.08);border:1px solid rgba(37,99,235,.15);border-radius:14px;">📝 English notes live in the <strong>Library bookshelf</strong> — <a href="library.html">open the English Book</a> for Grades 7–9 shelves, each chapter with 10+ practice questions.</div>`
              + topics.slice(0, 60).map(t => {
                    const view = englishMergedTopic(t);
                    return `<article class="study-card monster-note"><div class="study-art">${topicArt("English", t.id, t.title)}</div><div class="study-content"><p class="mini-label">${escapeHTML(t.grade)} • ${escapeHTML(t.theme)}</p><h4>${escapeHTML(t.title)}</h4><p>${escapeHTML(view.explanation)}</p>${renderList("Key Points", view.points)}${renderDefList("Definitions", view.definitions)}${renderList("Rules to Remember", view.rules)}${renderExampleList("Worked Examples", view.examples)}${renderList("Exam Focus", view.waecFocus)}<div class="memory-tip">💡 ${escapeHTML(view.memoryTip || "")}</div><a class="glass-btn mt-2" href="library.html?note=${encodeURIComponent(t.id)}">📖 Open in English Book</a></div></article>`;
                }).join("");
        return;
    }
    if (subject === "Maths" && (!notes || notes.length === 0)) {
        const quizTopics = ["Number and Numeration", "Ratio and Proportion", "Algebra", "Geometry", "Mensuration", "Statistics & Probability", "Money & Interest"];
        const topicButtons = quizTopics.map(t => {
            let n = 0;
            try { n = mathsQuestionCount(t); } catch (_) {}
            return `<a class="secondary-btn chapter-btn" href="quiz.html?mode=topic&subject=Maths&topic=${encodeURIComponent(t)}">🎯 ${escapeHTML(t)} • ${n} Qs</a>`;
        }).join("");
        const intro = `<div class="alert mb-3" style="background:rgba(37,99,235,.08);border:1px solid rgba(37,99,235,.15);border-radius:14px;">📘 <strong>Maths revision arena</strong> — ${(window.mathsNotes || []).length} comprehensive notes (JSS 1–3) with diagrams, each linked to practice. Every practice topic has <strong>minimum 10 questions</strong>.<div class="d-flex flex-wrap gap-2 mt-2">${topicButtons}</div></div>`;
        container.innerHTML = intro + (window.mathsNotes || []).map(renderMathsNote).join("");
        return;
    }
    if (subject === "Science" && (!notes || notes.length === 0)) {
        const intro = `<div class="alert mb-3" style="background:rgba(37,99,235,.08);border:1px solid rgba(37,99,235,.15);border-radius:14px;">📗 <strong>Foundation Science textbook</strong> — the official textbook now lives in the <strong>Library bookshelf</strong>: <a href="library.html?book=foundation">open the textbook</a> for Grades 7–9, unit by unit with the real diagrams. The revision notes below are the quick-study summaries.</div>`;
        container.innerHTML = intro + (window.scienceNotes || []).map(renderScienceNote).join("");
        return;
    }
    if (subject === "SES" && (!notes || notes.length === 0)) {
        const topics = [];
        (window.sesBook || []).forEach(g => (g.themes || []).forEach(th => (th.topics || []).forEach(t => topics.push({ grade: g.grade, theme: th.title, ...t }))));
        if (!topics.length && window.sesNotes) {
            container.innerHTML = (window.sesNotes || []).map(n => renderScienceNote(n, "SES")).join("");
            return;
        }
        container.innerHTML = topics.length
            ? `<div class="alert mb-3" style="background:rgba(37,99,235,.08);border:1px solid rgba(37,99,235,.15);border-radius:14px;">📚 SES notes live in the <strong>Library bookshelf</strong> — <a href="library.html">open the SES Book</a> for Grades 7–9 shelves.</div>`
              + topics.slice(0, 60).map(t => `<article class="study-card monster-note"><div class="study-content"><p class="mini-label">${escapeHTML(t.grade)} • ${escapeHTML(t.theme)}</p><h4>${escapeHTML(t.title)}</h4><p>${escapeHTML(t.explanation)}</p>${renderList("Key Points", t.points)}${renderList("Exam Focus", t.waecFocus)}<div class="memory-tip">💡 ${escapeHTML(t.memoryTip || "")}</div><a class="glass-btn mt-2" href="library.html?note=${encodeURIComponent(t.id)}">📖 Open in SES Book</a></div></article>`).join("")
            : `<div class="empty-state">No SES notes yet. Open the <a href="library.html">Library</a>.</div>`;
        return;
    }
    if (!notes.length) { container.innerHTML = `<div class="empty-state">No notes available for ${escapeHTML(subject)} yet. Admin or teacher can add notes from the control center.</div>`; return; }
    container.innerHTML = notes.map((note, index) => `<article class="study-card monster-note"><div class="study-content"><p class="mini-label">${escapeHTML(subject)} • Cloud Note</p><h4>${escapeHTML(note.title)}</h4><div>${note.content}</div></div></article>`).join("");
}
