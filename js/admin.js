let editingQuestionId = "";
let editingNoteId = "";
let subjectsCache = [{ id: "technical-drawing", name: "Technical Drawing" }];
let teachersCache = [];
let questionsCache = [];
let notesCache = [];
let studentsCache = [];
let eventsCache = [];
let assignmentsCache = [];

document.addEventListener("DOMContentLoaded", async () => {
    document.getElementById("adminLogout").addEventListener("click", () => {
        localStorage.removeItem("tm_staffToken");
        Storage.setAdminSession(null);
        window.location.href = "index.html";
    });
    document.getElementById("appConfigForm").addEventListener("submit", saveAppConfig);
    document.getElementById("subjectForm").addEventListener("submit", addSubject);
    document.getElementById("teacherForm").addEventListener("submit", addTeacher);
    document.getElementById("questionForm").addEventListener("submit", saveQuestion);
    const diagramInput = document.getElementById("questionDiagramFile");
    if (diagramInput) diagramInput.addEventListener("change", handleQuestionDiagramUpload);
    const imagePathInput = document.getElementById("questionImageInput");
    if (imagePathInput) imagePathInput.addEventListener("input", () => updateQuestionDiagramPreview(imagePathInput.value.trim()));
    document.getElementById("cancelQuestionEdit").addEventListener("click", resetQuestionForm);
    document.getElementById("noteForm").addEventListener("submit", saveNote);
    document.getElementById("cancelNoteEdit").addEventListener("click", resetNoteForm);
    document.getElementById("printCertificate").addEventListener("click", () => window.print());
    document.getElementById("approveCertificate").addEventListener("click", approveSelectedCertificate);
    document.getElementById("certificateStudent").addEventListener("change", renderCertificate);
    document.getElementById("certificateSubject").addEventListener("change", renderCertificate);
    document.getElementById("eventForm").addEventListener("submit", saveEvent);
    document.getElementById("assignmentForm").addEventListener("submit", saveAssignment);
    await renderAdminState();
});

async function renderAdminState() {
    const session = Storage.getAdminSession();
    const active = Boolean(session && localStorage.getItem("tm_staffToken"));
    const isAdmin = session?.role === "admin";
    document.getElementById("adminLoginPanel").style.display = active ? "none" : "block";
    document.getElementById("adminPanel").style.display = active ? "block" : "none";
    if (!active) return;

    document.getElementById("adminPanelTitle").textContent = isAdmin ? "Admin Control Room" : "Teacher Studio";
    document.getElementById("adminPanelSubtitle").textContent = isAdmin
        ? "Manage the full app without replacing files."
        : `${session.name} can manage ${session.subject}.`;
    document.querySelectorAll(".admin-only").forEach(el => el.style.display = isAdmin ? "" : "none");
    await loadAdminData();
}

async function loadAdminData() {
    await Promise.allSettled([loadSubjects(), loadConfig(), loadTeachers(), loadQuestions(), loadNotes(), loadStudents(), loadEvents(), loadAssignments()]);
    fillSubjectSelects();
    renderSubjects();
    renderTeachers();
    renderQuestions();
    renderNotes();
    renderStudentOptions();
    renderCertificate();
    renderEvents();
    renderAssignments();
}

async function loadConfig() {
    try {
        const data = await API.adminConfig();
        const config = data.config || Storage.getAppConfig();
        Storage.saveAppConfig(config);
        hydrateConfigForm(config);
    } catch (_) { hydrateConfigForm(Storage.getAppConfig()); }
}

function hydrateConfigForm(config = Storage.getAppConfig()) {
    document.getElementById("configAppName").value = config.appName || "Tech Monster";
    document.getElementById("configCertificateTitle").value = config.certificateTitle || "Certificate of Achievement";
    document.getElementById("configPassingScore").value = config.passingScore || 70;
    document.getElementById("configAnnouncement").value = config.announcement || "";
}

async function saveAppConfig(event) {
    event.preventDefault();
    const config = {
        appName: document.getElementById("configAppName").value.trim() || "Tech Monster",
        certificateTitle: document.getElementById("configCertificateTitle").value.trim() || "Certificate of Achievement",
        passingScore: Number(document.getElementById("configPassingScore").value || 70),
        announcement: document.getElementById("configAnnouncement").value.trim()
    };
    try { await API.adminConfig("POST", { config }); } catch (_) {}
    Storage.saveAppConfig(config);
    hydrateConfigForm(config);
}

async function loadSubjects() {
    try {
        const data = await API.adminSubjects();
        subjectsCache = data.subjects?.length ? data.subjects : subjectsCache;
    } catch (_) {}
}

function fillSubjectSelects() {
    ["teacherSubject", "questionSubject", "noteSubject", "certificateSubject", "eventSubject", "assignmentSubject"].forEach(id => {
        const select = document.getElementById(id);
        if (!select) return;
        const current = select.value;
        select.innerHTML = subjectsCache.map(s => `<option value="${s.name}">${s.name}</option>`).join("");
        if (current && subjectsCache.some(s => s.name === current)) select.value = current;
    });
    const session = Storage.getAdminSession();
    if (session?.role === "teacher") {
        ["questionSubject", "noteSubject"].forEach(id => { document.getElementById(id).value = session.subject; document.getElementById(id).disabled = true; });
    }
}

async function addSubject(event) {
    event.preventDefault();
    const name = document.getElementById("subjectName").value.trim();
    if (!name) return;
    try { await API.adminSubjects("POST", { name }); } catch (_) {}
    subjectsCache.push({ id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()), name });
    event.target.reset();
    fillSubjectSelects();
    renderSubjects();
}

function renderSubjects() {
    const list = document.getElementById("subjectList");
    list.innerHTML = "";
    subjectsCache.forEach(subject => {
        const item = document.createElement("div");
        item.className = "admin-list-item";
        item.innerHTML = `<strong>${subject.name}</strong><button class="secondary-btn nav-action" type="button">Delete</button>`;
        item.querySelector("button").addEventListener("click", async () => {
            if (subject.name === "Technical Drawing") return alert("Technical Drawing is the default subject and cannot be deleted.");
            try { await API.adminSubjects("DELETE", { id: subject.id, name: subject.name }); } catch (_) {}
            subjectsCache = subjectsCache.filter(s => s.id !== subject.id && s.name !== subject.name);
            fillSubjectSelects(); renderSubjects();
        });
        list.appendChild(item);
    });
}

async function loadTeachers() {
    try { teachersCache = (await API.adminTeachers()).teachers || []; }
    catch (_) { teachersCache = Storage.getTeachers(); }
}

async function addTeacher(event) {
    event.preventDefault();
    const teacher = {
        name: document.getElementById("teacherName").value.trim(),
        username: document.getElementById("teacherUsername").value.trim(),
        subject: document.getElementById("teacherSubject").value,
        password: document.getElementById("teacherPassword").value
    };
    try { await API.adminTeachers("POST", teacher); } catch (_) { teachersCache.push({ ...teacher, id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()) }); Storage.saveTeachers(teachersCache); }
    event.target.reset();
    await loadTeachers();
    renderTeachers();
}

function renderTeachers() {
    const list = document.getElementById("teacherList");
    if (!teachersCache.length) { list.innerHTML = `<p class="empty-state">No teachers assigned yet.</p>`; return; }
    list.innerHTML = "";
    teachersCache.forEach(teacher => {
        const item = document.createElement("div");
        item.className = "admin-list-item";
        item.innerHTML = `<div><strong>${teacher.name}</strong><p class="mb-0">${teacher.subject}</p><small>${teacher.username}</small></div><button class="secondary-btn nav-action" type="button">Delete</button>`;
        item.querySelector("button").addEventListener("click", async () => {
            try { await API.adminTeachers("DELETE", { id: teacher.id }); } catch (_) {}
            teachersCache = teachersCache.filter(t => t.id !== teacher.id);
            Storage.saveTeachers(teachersCache); renderTeachers();
        });
        list.appendChild(item);
    });
}

async function loadQuestions() {
    try { questionsCache = (await API.adminQuestions()).questions || []; }
    catch (_) { questionsCache = Storage.getCustomQuestions(); }
}

function updateQuestionDiagramPreview(src = "") {
    const preview = document.getElementById("questionDiagramPreview");
    if (!preview) return;
    if (!src) {
        preview.className = "diagram-preview empty-state";
        preview.innerHTML = "No diagram";
        return;
    }
    preview.className = "diagram-preview";
    preview.innerHTML = `<img src="${src}" alt="Question diagram preview">`;
}

function resizeQuestionDiagram(file, maxSize = 720, quality = 0.82) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        const reader = new FileReader();
        reader.onload = () => { img.src = reader.result; };
        reader.onerror = reject;
        img.onload = () => {
            const canvas = document.createElement("canvas");
            const scale = Math.min(1, maxSize / Math.max(img.width, img.height));
            canvas.width = Math.round(img.width * scale);
            canvas.height = Math.round(img.height * scale);
            const ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            resolve(canvas.toDataURL("image/jpeg", quality));
        };
        img.onerror = reject;
        reader.readAsDataURL(file);
    });
}

async function handleQuestionDiagramUpload(event) {
    const file = event.target.files?.[0];
    if (!file) return;
    updateQuestionDiagramPreview("");
    const input = document.getElementById("questionImageInput");
    input.placeholder = "Preparing uploaded diagram...";
    try {
        const dataUrl = await resizeQuestionDiagram(file);
        input.value = dataUrl;
        updateQuestionDiagramPreview(dataUrl);
        input.placeholder = "Diagram uploaded into this question";
    } catch (_) {
        alert("Could not prepare that diagram. Try a smaller PNG or JPG image.");
    }
}

function collectQuestion() {
    return {
        subject: document.getElementById("questionSubject").value,
        topic: document.getElementById("questionTopicInput").value.trim(),
        question: document.getElementById("questionTextInput").value.trim(),
        image: document.getElementById("questionImageInput").value.trim(),
        options: [0, 1, 2, 3].map(index => document.getElementById(`option${index}`).value.trim()),
        correct: Number(document.getElementById("correctOption").value),
        explanation: document.getElementById("questionExplanation").value.trim()
    };
}

async function saveQuestion(event) {
    event.preventDefault();
    const question = collectQuestion();
    try { await API.adminQuestions(editingQuestionId ? "PUT" : "POST", { id: editingQuestionId, question }); }
    catch (_) {
        if (editingQuestionId) questionsCache = questionsCache.map(q => q.id === editingQuestionId ? { ...question, id: editingQuestionId } : q);
        else questionsCache.push({ ...question, id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()) });
        Storage.saveCustomQuestions(questionsCache);
    }
    resetQuestionForm(); await loadQuestions(); renderQuestions();
}

function loadQuestionIntoForm(question) {
    editingQuestionId = question.id;
    document.getElementById("questionSubject").value = question.subject || "Technical Drawing";
    document.getElementById("questionTopicInput").value = question.topic || "";
    document.getElementById("questionTextInput").value = question.question || "";
    document.getElementById("questionImageInput").value = question.image || "";
    updateQuestionDiagramPreview(question.image || "");
    (question.options || []).forEach((option, index) => document.getElementById(`option${index}`).value = option);
    document.getElementById("correctOption").value = String(question.correct || 0);
    document.getElementById("questionExplanation").value = question.explanation || "";
    document.getElementById("questionSubmitBtn").textContent = "Save Question";
    document.getElementById("cancelQuestionEdit").style.display = "inline-block";
}

function resetQuestionForm() {
    editingQuestionId = "";
    document.getElementById("questionForm").reset();
    updateQuestionDiagramPreview("");
    fillSubjectSelects();
    document.getElementById("questionSubmitBtn").textContent = "Add Question";
    document.getElementById("cancelQuestionEdit").style.display = "none";
}

function renderQuestions() {
    const list = document.getElementById("customQuestionList");
    const session = Storage.getAdminSession();
    const questions = questionsCache.filter(q => session?.role === "admin" || q.subject === session?.subject);
    if (!questions.length) { list.innerHTML = `<p class="empty-state">No questions yet for this role.</p>`; return; }
    list.innerHTML = "";
    questions.forEach(question => {
        const item = document.createElement("div");
        item.className = "admin-list-item";
        const diagramBadge = question.image ? `<span class="diagram-badge">Diagram attached</span>` : "";
        item.innerHTML = `<div><strong>${question.topic}</strong><p class="mb-0">${question.question}</p><small>${question.subject}</small> ${diagramBadge}</div><div class="d-flex gap-2"><button class="secondary-btn nav-action edit-question" type="button">Edit</button><button class="secondary-btn nav-action delete-question" type="button">Delete</button></div>`;
        item.querySelector(".edit-question").addEventListener("click", () => loadQuestionIntoForm(question));
        item.querySelector(".delete-question").addEventListener("click", async () => {
            try { await API.adminQuestions("DELETE", { id: question.id }); } catch (_) {}
            questionsCache = questionsCache.filter(q => q.id !== question.id); Storage.saveCustomQuestions(questionsCache); renderQuestions();
        });
        list.appendChild(item);
    });
}

async function loadNotes() { try { notesCache = (await API.adminNotes()).notes || []; } catch (_) { notesCache = []; } }
function collectNote() { return { subject: document.getElementById("noteSubject").value, title: document.getElementById("noteTitle").value.trim(), content: document.getElementById("noteContent").value.trim() }; }
async function saveNote(event) { event.preventDefault(); const note = collectNote(); try { await API.adminNotes(editingNoteId ? "PUT" : "POST", { id: editingNoteId, note }); } catch (_) { if (editingNoteId) notesCache = notesCache.map(n => n.id === editingNoteId ? { ...note, id: editingNoteId } : n); else notesCache.push({ ...note, id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()) }); } resetNoteForm(); await loadNotes(); renderNotes(); }
function resetNoteForm() { editingNoteId = ""; document.getElementById("noteForm").reset(); fillSubjectSelects(); document.getElementById("noteSubmitBtn").textContent = "Add Note"; document.getElementById("cancelNoteEdit").style.display = "none"; }
function loadNoteIntoForm(note) { editingNoteId = note.id; document.getElementById("noteSubject").value = note.subject; document.getElementById("noteTitle").value = note.title; document.getElementById("noteContent").value = note.content; document.getElementById("noteSubmitBtn").textContent = "Save Note"; document.getElementById("cancelNoteEdit").style.display = "inline-block"; }
function renderNotes() { const list = document.getElementById("noteList"); const session = Storage.getAdminSession(); const notes = notesCache.filter(n => session?.role === "admin" || n.subject === session?.subject); if (!notes.length) { list.innerHTML = `<p class="empty-state">No cloud notes yet.</p>`; return; } list.innerHTML = ""; notes.forEach(note => { const item = document.createElement("div"); item.className = "admin-list-item"; item.innerHTML = `<div><strong>${note.title}</strong><p class="mb-0">${note.subject}</p></div><div class="d-flex gap-2"><button class="secondary-btn nav-action edit-note" type="button">Edit</button><button class="secondary-btn nav-action delete-note" type="button">Delete</button></div>`; item.querySelector(".edit-note").addEventListener("click", () => loadNoteIntoForm(note)); item.querySelector(".delete-note").addEventListener("click", async () => { try { await API.adminNotes("DELETE", { id: note.id }); } catch (_) {} notesCache = notesCache.filter(n => n.id !== note.id); renderNotes(); }); list.appendChild(item); }); }

async function loadStudents() { try { studentsCache = (await API.adminStudents()).students || []; } catch (_) { studentsCache = Storage.getUsers().map(u => Storage.normalizeUser(u)); } }
function renderStudentOptions() { const select = document.getElementById("certificateStudent"); select.innerHTML = ""; if (!studentsCache.length) { select.innerHTML = `<option value="">No students yet</option>`; return; } studentsCache.forEach(user => { const option = document.createElement("option"); option.value = user.id || user.name; option.textContent = `${user.profile?.nickname || user.name} - ${user.class || "General"}`; select.appendChild(option); }); }
function selectedCertificateUser() { const id = document.getElementById("certificateStudent").value; return studentsCache.find(u => (u.id || u.name) === id) || null; }
function renderCertificate() { const preview = document.getElementById("certificatePreview"); const user = selectedCertificateUser(); const config = Storage.getAppConfig(); const subject = document.getElementById("certificateSubject").value || "Technical Drawing"; if (!user) { preview.innerHTML = `<p class="empty-state">Create or select a student first.</p>`; return; } const normalized = Storage.normalizeUser(user); const photo = Storage.photoFor(normalized); const identity = photo ? `<img class="certificate-photo" src="${photo}" alt="${normalized.name} profile photo">` : `<div class="certificate-avatar">${Storage.avatarFor(normalized)}</div>`; preview.innerHTML = `<article class="certificate"><div class="certificate-border"><div class="certificate-top">${config.appName}</div>${identity}<h2>${config.certificateTitle}</h2><p>This certifies that</p><h1>${normalized.profile?.nickname || normalized.name}</h1><p>has completed achievement work in</p><h3>${subject}</h3><div class="certificate-stats"><span>Best Score: ${normalized.bestScore || 0}%</span><span>Level: ${normalized.level || 1}</span><span>Rank: ${normalized.rankTitle}</span></div><p class="certificate-date">${new Date().toLocaleDateString()}</p></div></article>`; }
async function approveSelectedCertificate() { const user = selectedCertificateUser(); if (!user?.id) return alert("Select a cloud student first."); const subject = document.getElementById("certificateSubject").value || "Technical Drawing"; try { await API.approveCertificate(user.id, subject, true); alert("Certificate approved."); } catch (_) { alert("Could not approve certificate. Check your Cloudflare setup."); } }


async function loadEvents() { try { eventsCache = (await API.adminEvents()).events || []; } catch (_) { eventsCache = JSON.parse(localStorage.getItem("tm_events") || "[]"); } }
async function saveEvent(event) {
    event.preventDefault();
    const item = {
        title: document.getElementById("eventTitle").value.trim(),
        type: document.getElementById("eventType").value,
        subject: document.getElementById("eventSubject").value,
        prize: document.getElementById("eventPrize").value.trim(),
        description: document.getElementById("eventDescription").value.trim(),
        question_ids: JSON.stringify(document.getElementById("eventQuestionIds").value.split(",").map(x => x.trim()).filter(Boolean)),
        active: 1
    };
    try { await API.adminEvents("POST", { event: item }); } catch (_) { eventsCache.unshift({ ...item, id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()) }); localStorage.setItem("tm_events", JSON.stringify(eventsCache)); }
    event.target.reset(); await loadEvents(); renderEvents();
}
function renderEvents() {
    const list = document.getElementById("eventList");
    if (!list) return;
    const session = Storage.getAdminSession();
    const items = eventsCache.filter(e => session?.role === "admin" || e.subject === session?.subject);
    list.innerHTML = items.length ? "" : `<p class="empty-state">No live events yet.</p>`;
    items.forEach(e => {
        const item = document.createElement("div"); item.className = "admin-list-item";
        item.innerHTML = `<div><strong>${e.title}</strong><p class="mb-0">${e.subject} • ${String(e.type).replace("_"," ")}</p><small>${e.prize || "No prize set"}</small></div><button class="secondary-btn nav-action" type="button">End</button>`;
        item.querySelector("button").addEventListener("click", async () => { try { await API.adminEvents("DELETE", { id: e.id }); } catch (_) {} eventsCache = eventsCache.filter(x => x.id !== e.id); localStorage.setItem("tm_events", JSON.stringify(eventsCache)); renderEvents(); });
        list.appendChild(item);
    });
}
async function loadAssignments() { try { assignmentsCache = (await API.adminAssignments()).assignments || []; } catch (_) { assignmentsCache = JSON.parse(localStorage.getItem("tm_assignments") || "[]"); } }
async function saveAssignment(event) {
    event.preventDefault();
    const item = { title: document.getElementById("assignmentTitle").value.trim(), subject: document.getElementById("assignmentSubject").value, instructions: document.getElementById("assignmentInstructions").value.trim(), active: 1 };
    try { await API.adminAssignments("POST", { assignment: item }); } catch (_) { assignmentsCache.unshift({ ...item, id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()), submissions: [] }); localStorage.setItem("tm_assignments", JSON.stringify(assignmentsCache)); }
    event.target.reset(); await loadAssignments(); renderAssignments();
}
function renderAssignments() {
    const list = document.getElementById("assignmentList");
    if (!list) return;
    const session = Storage.getAdminSession();
    const items = assignmentsCache.filter(a => session?.role === "admin" || a.subject === session?.subject);
    list.innerHTML = items.length ? "" : `<p class="empty-state">No assignments yet.</p>`;
    items.forEach(a => {
        const submissions = a.submissions || [];
        const item = document.createElement("div"); item.className = "admin-list-item assignment-admin-item";
        item.innerHTML = `<div><strong>${a.title}</strong><p class="mb-0">${a.subject}</p><small>${submissions.length} submission(s)</small>${submissions.slice(0,3).map(s => `<blockquote>${s.student_name || "Student"}: ${String(s.answer || "").slice(0,120)}</blockquote>`).join("")}</div><button class="secondary-btn nav-action" type="button">Close</button>`;
        item.querySelector("button").addEventListener("click", async () => { try { await API.adminAssignments("DELETE", { id: a.id }); } catch (_) {} assignmentsCache = assignmentsCache.filter(x => x.id !== a.id); localStorage.setItem("tm_assignments", JSON.stringify(assignmentsCache)); renderAssignments(); });
        list.appendChild(item);
    });
}
