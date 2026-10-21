let currentIndex = 0;
let timerInterval;
let timeLeft = 300;
let selectedQuestions = [];
let userAnswers = [];
let quizUser = null;
let selectedSubject = "Technical Drawing";
let isPaperMode = false;
let paperYear = null;
let isTopicMode = false;
let topicFilter = null;
let passageFilter = null;
let noteFilter = null;
let activePassageTitle = null;

function shuffle(array) { return array.sort(() => Math.random() - 0.5); }

// WASSCE passage rotation: group topic questions by passageId so each
// practice attempt serves ONE full static passage set.
function groupByPassage(questions) {
    const groups = {};
    const order = [];
    questions.forEach(q => {
        const key = q.passageId || "__nopassage__";
        if (!groups[key]) { groups[key] = []; order.push(key); }
        groups[key].push(q);
    });
    return { groups, order };
}

function pickPassageSet(questionBank, requestedId) {
    const { groups, order } = groupByPassage(questionBank);
    const passageKeys = order.filter(k => k !== "__nopassage__");
    if (!passageKeys.length) return null;
    if (requestedId && groups[requestedId]) return { id: requestedId, questions: groups[requestedId] };
    // Rotate: avoid serving the same passage twice in a row.
    let last = null;
    try { last = localStorage.getItem("tm_lastPassage_" + topicFilter); } catch (_) {}
    let pool = passageKeys.filter(k => k !== last);
    if (!pool.length) pool = passageKeys.slice();
    const id = pool[Math.floor(Math.random() * pool.length)];
    try { localStorage.setItem("tm_lastPassage_" + topicFilter, id); } catch (_) {}
    return { id, questions: groups[id] };
}

function topicForQuestion(question) {
    if (question.topic) return question.topic;
    if (question.subject) return question.subject;
    const text = `${question.question} ${question.explanation || ""}`.toLowerCase();
    if (text.includes("projection") || text.includes("view") || text.includes("plane")) return "Projection";
    if (text.includes("dimension") || text.includes("scale") || text.includes("metre") || text.includes("mm")) return "Measurement";
    if (text.includes("line") || text.includes("hatching") || text.includes("hidden")) return "Line Work";
    if (text.includes("triangle") || text.includes("angle") || text.includes("square") || text.includes("protractor")) return "Geometry Tools";
    if (text.includes("letter") || text.includes("graphics") || text.includes("visualization")) return "Drawing Basics";
    return "General";
}

function timerSeconds(mode) {
    if (mode === "relaxed") return 900;
    if (mode === "speed") return 180;
    if (mode === "off") return 0;
    return 300;
}

document.addEventListener("DOMContentLoaded", async () => {
    quizUser = Storage.getCurrentUser();
    if (!quizUser) { window.location.href = "index.html"; return; }
    document.body.dataset.accent = (quizUser.profile || {}).accent || "blue";

    const urlParams = new URLSearchParams(location.search);
    isPaperMode = urlParams.get("mode") === "paper";
    isTopicMode = urlParams.get("mode") === "topic";
    isExamPrep = urlParams.get("mode") === "exam_prep";
    paperYear = urlParams.get("year");
    topicFilter = urlParams.get("topic");
    passageFilter = urlParams.get("passage");
    noteFilter = urlParams.get("note");
    const urlSubject = urlParams.get("subject");

    // Library past-paper / topic-practice mode: subject/year from URL takes priority
    if (urlSubject) {
        selectedSubject = urlSubject;
        localStorage.setItem("tm_selectedSubject", urlSubject);
    } else {
        selectedSubject = localStorage.getItem("tm_selectedSubject") || "Technical Drawing";
    }

    // Topic practice shows dedicated header / untimed
    if (isTopicMode && topicFilter) {
        const moodEl = document.getElementById("quizMood");
        if (moodEl) moodEl.textContent = `${topicFilter} • Practice • Untimed`;
    }
    if (isPaperMode && paperYear) {
        const moodEl = document.getElementById("quizMood");
        if (moodEl) moodEl.textContent = `Past Paper ${paperYear} • ${selectedSubject} • Untimed`;
        const topicEl = document.getElementById("questionTopic");
        // topic will be updated per question to include year
    }

    // ---- SCIENCE SUBJECT: development stage — offline mode only ----
    if (selectedSubject === "Science" && !isOffline()) {
        selectedSubject = "Technical Drawing";
        localStorage.setItem("tm_selectedSubject", selectedSubject);
        const moodEl = document.getElementById("quizMood");
        if (moodEl) moodEl.textContent = "Science is in development (offline mode only) — switched to Technical Drawing";
    }

    if (!isPaperMode && !Storage.canAccessSubject(quizUser, selectedSubject)) {
        const firstAllowed = (Storage.filterAllowedSubjects(quizUser, [{ name: "Technical Drawing" }, { name: "English" }, { name: "Maths" }, { name: "Science" }, { name: "SES" }])[0] || {}).name;
        if (firstAllowed) { selectedSubject = firstAllowed; localStorage.setItem("tm_selectedSubject", firstAllowed); }
        else {
            document.querySelector(".glass-card").innerHTML = `<h4>No subjects available</h4><p>Your admin has not given you access to any subjects yet.</p><a href="dashboard.html" class="glass-btn">Back to Dashboard</a>`;
            document.getElementById("timer").textContent = "No quiz";
            return;
        }
    }

    // ---- EXAM PREP GUARD: locked until purchased with gold coins ----
    if (isExamPrep && !Storage.isFeatureUnlocked(quizUser, "exam_prep")) {
        document.querySelector(".glass-card").innerHTML = `<h4>🔒 Exam Prep is locked</h4><p>Unlock it on your dashboard using gold coins earned from quizzes, then return to start the timed WAEC-style exam.</p><a href="dashboard.html" class="glass-btn">Back to Dashboard</a>`;
        document.getElementById("timer").textContent = "Locked";
        return;
    }

    const profile = quizUser.profile || TM_DEFAULT_PROFILE;
    let questionBank = [];

    // ---- PAPER MODE: load exact year paper via catalog slice ----
    if (isPaperMode && paperYear) {
        try {
            if (typeof getPaperQuestions === "function") {
                const paperQs = getPaperQuestions(selectedSubject, paperYear);
                if (paperQs && paperQs.length) questionBank = paperQs.map(q => ({ subject: selectedSubject, year: Number(paperYear), ...q }));
            }
        } catch (_) {}
        // fallback: if catalog not loaded, try direct slice from Questions
        if (!questionBank.length && selectedSubject === "Technical Drawing" && typeof Questions !== "undefined") {
            if (typeof getPaperMeta === "function") {
                const meta = getPaperMeta(selectedSubject, paperYear);
                if (meta) questionBank = Questions.slice(meta.start, meta.end).map(q => ({ subject: selectedSubject, year: Number(paperYear), ...q }));
            } else {
                questionBank = Questions.map(q => ({ subject: selectedSubject, year: Number(paperYear), ...q }));
            }
        }
        // still empty? fallback to generic bank
    }

    // ---- NORMAL QUIZ MODE ----
    if (!questionBank.length && !isPaperMode && !isExamPrep) {
        let cloudQuestions = [];
        try {
            const data = await API.questions(selectedSubject);
            cloudQuestions = data.questions || [];
        } catch (_) {}

        const localBanks = {
            "Technical Drawing": typeof Questions !== "undefined" ? Questions : [],
            "English": typeof EnglishQuestions !== "undefined" ? EnglishQuestions : [],
            "Maths": typeof MathsQuestions !== "undefined" ? MathsQuestions : [],
            "Science": typeof ScienceQuestions !== "undefined" ? ScienceQuestions : [],
            "SES": typeof SESQuestions !== "undefined" ? SESQuestions : []
        };
        const bankQuestions = localBanks[selectedSubject] || [];
        let baseQuestions = bankQuestions.map(q => ({ subject: selectedSubject, ...q }));
        questionBank = [...baseQuestions, ...cloudQuestions].filter(q => !q.subject || q.subject === selectedSubject);
        try {
            const ev = await API.events(selectedSubject);
            const active = (ev.events || []).find(e => e.type === "test_week" || e.type === "exam");
            if (active?.question_ids) {
                const ids = JSON.parse(active.question_ids || "[]");
                if (ids.length) questionBank = questionBank.filter(q => ids.includes(q.id));
            }
        } catch (_) {}
        // Topic practice: only questions from this exact book topic
        if (isTopicMode && topicFilter) {
            questionBank = questionBank.filter(q => topicForQuestion(q) === topicFilter);
        }
    }

    // ---- EXAM PREP MODE: full-length timed simulation ----
    if (isExamPrep && !questionBank.length) {
        let cloudQuestions = [];
        try {
            const data = await API.questions(selectedSubject);
            cloudQuestions = data.questions || [];
        } catch (_) {}
        const localBanks = {
            "Technical Drawing": typeof Questions !== "undefined" ? Questions : [],
            "English": typeof EnglishQuestions !== "undefined" ? EnglishQuestions : [],
            "Maths": typeof MathsQuestions !== "undefined" ? MathsQuestions : [],
            "Science": typeof ScienceQuestions !== "undefined" ? ScienceQuestions : [],
            "SES": typeof SESQuestions !== "undefined" ? SESQuestions : []
        };
        let baseQuestions = (localBanks[selectedSubject] || []).map(q => ({ subject: selectedSubject, ...q }));
        questionBank = [...baseQuestions, ...cloudQuestions].filter(q => !q.subject || q.subject === selectedSubject);
        if (!questionBank.length) {
            document.querySelector(".glass-card").innerHTML = `<h4>No exam questions available for ${selectedSubject}</h4><p>Ask the admin to add questions for this subject.</p><a href="dashboard.html" class="glass-btn">Back to Dashboard</a>`;
            document.getElementById("timer").textContent = "No exam";
            return;
        }
        selectedQuestions = shuffle([...questionBank]).slice(0, 60);
        userAnswers = new Array(selectedQuestions.length).fill(null);
        // 90 seconds per question (WAEC-style objective pacing)
        timeLeft = selectedQuestions.length * 90;
        updateTimerDisplay();
        startTimer();
        const moodEl = document.getElementById("quizMood");
        if (moodEl) moodEl.textContent = `WAEC Exam Prep • ${selectedSubject} • Timed`;
        loadQuestion();
        document.getElementById("nextBtn").onclick = nextQuestion;
        document.getElementById("prevBtn").onclick = prevQuestion;
        document.getElementById("submitBtn").onclick = submitQuiz;
        const btn = document.getElementById("submitBtn");
        if (btn) btn.textContent = "Submit Exam Prep • Review & Explanations";
        document.getElementById("quizPercent").textContent = "0% answered";
        return;
    }

    // paper fallback if still empty (e.g., other subject without catalog)
    if (!questionBank.length && isPaperMode) {
        const localBanks = {
            "Technical Drawing": typeof Questions !== "undefined" ? Questions : [],
            "English": typeof EnglishQuestions !== "undefined" ? EnglishQuestions : [],
            "Maths": typeof MathsQuestions !== "undefined" ? MathsQuestions : [],
            "Science": typeof ScienceQuestions !== "undefined" ? ScienceQuestions : [],
            "SES": typeof SESQuestions !== "undefined" ? SESQuestions : []
        };
        const pool = localBanks[selectedSubject] || [];
        questionBank = pool.slice(0, 20).map(q => ({ subject: selectedSubject, year: Number(paperYear) || 0, ...q }));
    }

    if (!questionBank.length) {
        const isEmptyTopic = isTopicMode && topicFilter;
        document.querySelector(".glass-card").innerHTML = `
            <h4>${isEmptyTopic ? `No questions in “${escapeHtml(topicFilter)}” yet` : `No questions available for ${selectedSubject}${isPaperMode && paperYear ? ` — ${paperYear}` : ""}`}</h4>
            <p>${isEmptyTopic ? "This topic is in the book but no quiz questions have been written for it yet." : "Ask the admin or assigned teacher to add questions for this subject."}</p>
            <a href="${isTopicMode ? "library.html" : isPaperMode ? "library.html?tab=papers" : "dashboard.html"}" class="glass-btn">Back to Library</a>`;
        document.getElementById("timer").textContent = isPaperMode || isTopicMode ? "Untimed" : "No quiz";
        return;
    }

    if (isTopicMode) {
        // Passage topics (Comprehension / Summary): serve ONE full static
        // passage set per attempt, rotating so each visit brings a new passage.
        // Other topics: every question for the topic, shuffled, untimed.
        const pick = pickPassageSet(questionBank, passageFilter);
        if (pick) {
            // Keep WASSCE passage order (not shuffled): read Q1..Qn in order,
            // Next until the last question, then Submit.
            selectedQuestions = [...pick.questions];
            activePassageTitle = selectedQuestions[0]?.passageTitle || null;
        } else {
            selectedQuestions = shuffle([...questionBank]);
            activePassageTitle = null;
        }
        userAnswers = new Array(selectedQuestions.length).fill(null);
        timeLeft = 0;
        updateTimerDisplay();
        const moodEl = document.getElementById("quizMood");
        if (moodEl && activePassageTitle) moodEl.textContent = `${topicFilter} • ${activePassageTitle} • Untimed`;
    } else if (isPaperMode) {
        // Paper = full set, original order (not shuffled) to mimic real paper
        selectedQuestions = [...questionBank];
        // keep original order for paper realism; optionally shuffle could be toggle but spec says attempt specific paper in order
        userAnswers = new Array(selectedQuestions.length).fill(null);
        timeLeft = 0;
        updateTimerDisplay();
        // show paper info bar
        const bar = document.getElementById("quizProgressBar");
        if (bar) { /* width updated via updateQuizProgress */ }
    } else {
        const questionCount = Math.max(1, Math.min(Number(profile.quizLength || 15), questionBank.length));
        selectedQuestions = shuffle([...questionBank]).slice(0, questionCount);
        userAnswers = new Array(selectedQuestions.length).fill(null);
        timeLeft = timerSeconds(profile.timerMode);
        updateTimerDisplay();
        if (timeLeft > 0) startTimer();
    }

    loadQuestion();
    document.getElementById("nextBtn").onclick = nextQuestion;
    document.getElementById("prevBtn").onclick = prevQuestion;
    document.getElementById("submitBtn").onclick = submitQuiz;
    // paper mode: update submit label
    if (isPaperMode) {
        const btn = document.getElementById("submitBtn");
        if (btn) btn.textContent = `Submit Paper ${paperYear} • Review & Explanations`;
    }
    if (isTopicMode && topicFilter) {
        const btn = document.getElementById("submitBtn");
        if (btn) btn.textContent = activePassageTitle ? `Submit ${activePassageTitle} • Review & Explanations` : `Finish ${topicFilter} • Review & Explanations`;
    }
});

const INSTRUCTION_PREFIXES = [
    "Choose the correct word",
    "Choose the correct form",
    "Choose the correct pronoun",
    "Choose the correct preposition",
    "Choose the correct punctuation",
    "Choose the correct tag",
    "Choose the correct arrangement",
    "Choose the word that best fits",
    "Choose the word that best completes the sentence",
    "Choose the word nearest in meaning",
    "Choose the word opposite in meaning",
    "Choose the best interpretation",
    "Solve for x"
];

function splitInstruction(questionText) {
    for (const prefix of INSTRUCTION_PREFIXES) {
        if (!questionText.startsWith(prefix)) continue;
        // everything up to the first ": " is the instruction, so qualifiers such as
        // "Choose the word that best fits gap 71: ..." are handled too
        const colon = questionText.indexOf(": ");
        if (colon === -1) continue;
        return { instruction: questionText.slice(0, colon + 1), body: questionText.slice(colon + 2) };
    }
    return null;
}

function escapeHtml(str) {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function isOffline() { return navigator.onLine === false; }

function partLabelHtml(text, keywords) {
    if (!keywords || !keywords.length) return text;
    let html = text;
    [...keywords].sort((a, b) => b.length - a.length).forEach(k => {
        if (!k) return;
        const needle = escapeRegex(String(k));
        try {
            const re = new RegExp(`\\b(${needle})\\b`, "gi");
            html = html.replace(re, `<span class="question-part-label">$1</span>`);
        } catch (_) {}
    });
    return html;
}

// Vocabulary-in-passage: every "meaning as used" word for this passage is
// shown bold in the theme colour, so learners can spot it while reading.
// Words are collected from all questions in the current passage set
// (minimum five per comprehension passage).
function passageVocabWords(passageId, fallbackWord) {
    const words = [];
    try {
        (selectedQuestions || []).forEach(q => {
            if (q && q.passageId === passageId && q.targetWord) words.push(q.targetWord);
        });
    } catch (_) {}
    if (!words.length && fallbackWord) words.push(fallbackWord);
    // longest first so phrases win over single words; de-duplicated
    return [...new Set(words)].sort((a, b) => b.length - a.length);
}

function highlightPassageText(passage, words) {
    let html = escapeHtml(passage);
    (words || []).forEach(w => {
        if (!w) return;
        const needle = escapeRegex(escapeHtml(w));
        try {
            const re = new RegExp(`\\b(${needle})\\b`, "gi");
            html = html.replace(re, `<strong class="passage-vocab">$1</strong>`);
        } catch (_) {}
    });
    return html;
}

function renderPassage(question) {
    const box = document.getElementById("questionPassage");
    if (!box) return;
    if (!question.passage) {
        box.innerHTML = "";
        box.style.display = "none";
        return;
    }
    const words = passageVocabWords(question.passageId, question.targetWord);
    box.innerHTML = `<div class="passage-label">Passage</div><div class="passage-text">${highlightPassageText(question.passage, words)}</div>`;
    box.style.display = "block";
}

function renderQuestionText(question) {
    const instructionEl = document.getElementById("questionInstruction");
    const textEl = document.getElementById("questionText");
    const split = splitInstruction(question.question);

    if (!split) {
        if (instructionEl) instructionEl.style.display = "none";
        // Vocabulary-in-context: the tested word stands out bold in theme colour.
        const body = escapeHtml(question.question);
        let highlighted = body;
        if (question.targetWord) {
            const escaped = escapeHtml(question.targetWord);
            const pos = body.indexOf(escaped);
            highlighted = pos !== -1
                ? body.slice(0, pos) + `<span class="question-target">${escaped}</span>` + body.slice(pos + escaped.length)
                : body;
        }
        // Diagram part labels: theme colour + bold + italic, across all subjects.
        highlighted = partLabelHtml(highlighted, question.partKeywords);
        textEl.innerHTML = highlighted;
        return;
    }

    if (instructionEl) {
        instructionEl.textContent = split.instruction;
        instructionEl.style.display = "";
    }

    let body = escapeHtml(split.body);
    if (question.targetWord) {
        const escaped = escapeHtml(question.targetWord);
        const pos = body.indexOf(escaped);
        if (pos !== -1) {
            body = body.slice(0, pos)
                + `<span class="question-target">${escaped}</span>`
                + body.slice(pos + escaped.length);
        }
    }
    // Diagram part labels: theme colour + bold + italic, across all subjects.
    body = partLabelHtml(body, question.partKeywords);
    textEl.innerHTML = body;
}

function loadQuestion() {
    const q = selectedQuestions[currentIndex];
    const topic = topicForQuestion(q);
    document.getElementById("questionNumber").textContent = `Question ${currentIndex + 1} of ${selectedQuestions.length}${isPaperMode && paperYear ? ` • Paper ${paperYear}` : ""}${isTopicMode && activePassageTitle ? ` • ${activePassageTitle}` : ""}`;
    document.getElementById("questionTopic").textContent = `${selectedSubject}${q.year ? ` • ${q.year}` : ""} • ${topic}`;
    renderPassage(q);
    renderQuestionText(q);
    updateQuizProgress();

    // Question diagrams live in the Notes/Library area only, so the quiz
    // shows no image container at all.
    const imageContainer = document.getElementById("questionImage");
    if (imageContainer) {
        imageContainer.innerHTML = "";
        imageContainer.style.display = "none";
    }

    const feedback = document.getElementById("instantFeedback");
    feedback.textContent = "";
    feedback.className = "quiz-feedback";
    const container = document.getElementById("optionsContainer");
    container.innerHTML = "";

    q.options.forEach((opt, index) => {
        const button = document.createElement("button");
        button.className = "option-btn w-100 mb-3 p-3 text-start";
        // Diagram part labels: theme colour + bold + italic, across all subjects.
        button.innerHTML = partLabelHtml(escapeHtml(opt), q.partKeywords);
        if (userAnswers[currentIndex] === index) button.classList.add("selected-option");
        button.onclick = () => {
            userAnswers[currentIndex] = index;
            if ((quizUser.profile || {}).feedbackMode === "instant") {
                showInstantFeedback(q, index);
                markAnsweredOptions(container, q, index);
            } else loadQuestion();
        };
        container.appendChild(button);
    });

    if ((quizUser.profile || {}).feedbackMode === "instant" && userAnswers[currentIndex] !== null) {
        showInstantFeedback(q, userAnswers[currentIndex]);
        markAnsweredOptions(container, q, userAnswers[currentIndex]);
    }
    document.getElementById("prevBtn").disabled = currentIndex === 0;
    document.getElementById("nextBtn").disabled = currentIndex === selectedQuestions.length - 1;
}

function showInstantFeedback(question, answerIndex) {
    const feedback = document.getElementById("instantFeedback");
    const correct = answerIndex === question.correct;
    feedback.textContent = correct ? "Correct. Nice hit." : `Not quite. Correct answer: ${question.options[question.correct]}`;
    feedback.className = `quiz-feedback ${correct ? "good" : "needs-work"}`;
}

function markAnsweredOptions(container, question, answerIndex) {
    [...container.children].forEach((button, index) => {
        button.classList.toggle("selected-option", index === answerIndex);
        button.classList.toggle("correct-option", index === question.correct);
        button.classList.toggle("wrong-option", index === answerIndex && index !== question.correct);
    });
}

function updateQuizProgress() {
    const answered = userAnswers.filter(v => v !== null).length;
    const percent = Math.round(((currentIndex + 1) / selectedQuestions.length) * 100);
    const answerPercent = Math.round((answered / selectedQuestions.length) * 100);
    const bar = document.getElementById("quizProgressBar");
    const label = document.getElementById("quizPercent");
    const mood = document.getElementById("quizMood");
    if (bar) { bar.style.width = percent + "%"; bar.textContent = `${currentIndex + 1}/${selectedQuestions.length}`; }
    if (label) label.textContent = `${answerPercent}% answered`;
    if (mood) {
        if (isExamPrep) mood.textContent = `🎯 WAEC Exam Prep • ${selectedSubject} • ${answerPercent}% answered • Timed`;
        else if (isTopicMode && topicFilter) mood.textContent = activePassageTitle ? `${topicFilter} • ${activePassageTitle} • ${answerPercent}% answered • Untimed` : `${topicFilter} • ${answerPercent}% answered • Untimed`;
        else if (isPaperMode) mood.textContent = paperYear ? `Paper ${paperYear} • ${answerPercent}% answered • Untimed` : `${answerPercent}% answered • Untimed`;
        else mood.textContent = answerPercent >= 100 ? "Ready to submit like a legend" : answered >= selectedQuestions.length / 2 ? "Keep attacking the questions" : "Monster Arena Live";
    }
}

function nextQuestion() { if (currentIndex < selectedQuestions.length - 1) { currentIndex++; loadQuestion(); } }
function prevQuestion() { if (currentIndex > 0) { currentIndex--; loadQuestion(); } }
function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--; updateTimerDisplay();
        if (timeLeft <= 0) { clearInterval(timerInterval); submitQuiz(); }
    }, 1000);
}
function updateTimerDisplay() {
    const el = document.getElementById("timer");
    if (!el) return;
    if (isPaperMode) { el.textContent = paperYear ? `Paper ${paperYear} • Untimed` : "Untimed • No limit"; return; }
    if (isTopicMode) { el.textContent = "Untimed"; return; }
    if (isExamPrep) {
        if (timeLeft <= 0) { el.textContent = "Time's up"; return; }
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        el.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
        return;
    }
    if (timeLeft <= 0) { el.textContent = "Relaxed"; return; }
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    el.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

async function submitQuiz() {
    clearInterval(timerInterval);
    let correctCount = 0;
    const topicResults = selectedQuestions.map((q, index) => {
        const correct = userAnswers[index] === q.correct;
        if (correct) correctCount++;
        return { subject: selectedSubject, topic: topicForQuestion(q), correct };
    });
    const percentage = Math.round((correctCount / selectedQuestions.length) * 100);
    // tag paper result so result.html can show "Past Paper" badge + history
    if (isPaperMode) {
        localStorage.setItem("tm_lastPaper", JSON.stringify({ subject: selectedSubject, year: paperYear, total: selectedQuestions.length, mode: "paper", score: percentage }));
        try {
            const hist = JSON.parse(localStorage.getItem("tm_paperHistory") || "{}");
            hist[`${selectedSubject}__${paperYear}`] = { score: percentage, correct: correctCount, total: selectedQuestions.length, date: new Date().toISOString(), subject: selectedSubject, year: paperYear };
            localStorage.setItem("tm_paperHistory", JSON.stringify(hist));
        } catch {}
    } else {
        localStorage.removeItem("tm_lastPaper");
    }
    await updateUserStats(percentage, topicResults);
    localStorage.setItem("tm_review", JSON.stringify({
        questions: selectedQuestions.map(q => ({ ...q, topic: topicForQuestion(q) })),
        userAnswers,
        meta: {
            mode: isPaperMode ? "paper" : isTopicMode ? "topic" : isExamPrep ? "exam_prep" : "normal",
            subject: selectedSubject,
            year: paperYear,
            topic: topicFilter,
            note: noteFilter || null,
            passage: selectedQuestions[0]?.passageId || passageFilter || null,
            passageTitle: activePassageTitle || null,
            score: percentage,
            at: Date.now()
        }
    }));
    localStorage.setItem("tm_lastScore", percentage);
    localStorage.setItem("tm_lastTopicResults", JSON.stringify(topicResults));
    window.location.href = "result.html";
}

async function updateUserStats(score, topicResults) {
    const beforeUser = Storage.getCurrentUser();
    const beforeUnlocked = Storage.unlockedAvatars(beforeUser).map(a => a.id);
    localStorage.removeItem("tm_lastAvatarUnlock");
    try {
        const data = await API.saveScore(score, topicResults, selectedSubject);
        Storage.setCurrentUser(data.user);
    } catch (_) {
        Storage.updateLocalStats(score, topicResults, selectedSubject);
    }
    const afterUser = Storage.getCurrentUser();
    const afterUnlocked = Storage.unlockedAvatars(afterUser).map(a => a.id);
    const newAvatarId = afterUnlocked.find(id => !beforeUnlocked.includes(id));
    if (newAvatarId) {
        const avatar = TM_AVATARS.find(item => item.id === newAvatarId);
        localStorage.setItem("tm_lastAvatarUnlock", JSON.stringify(avatar || { id: newAvatarId, name: newAvatarId }));
    }

    if (afterUser.level > beforeUser.level) {
        const coins = Storage.levelRewardCoins ? Storage.levelRewardCoins(afterUser.level) : Math.round(75 * afterUser.level);
        if (Storage.addCoins) Storage.addCoins(coins);
        localStorage.setItem("tm_pendingLevelUp", JSON.stringify({
            from: beforeUser.level,
            to: afterUser.level,
            coins
        }));
    }
}
