let currentIndex = 0;
let timerInterval;
let timeLeft = 300;
let selectedQuestions = [];
let userAnswers = [];
let quizUser = null;
let selectedSubject = "Technical Drawing";

function shuffle(array) { return array.sort(() => Math.random() - 0.5); }

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

    selectedSubject = localStorage.getItem("tm_selectedSubject") || "Technical Drawing";
    const profile = quizUser.profile || TM_DEFAULT_PROFILE;
    let cloudQuestions = [];
    try {
        const data = await API.questions(selectedSubject);
        cloudQuestions = data.questions || [];
    } catch (_) {}

    const baseQuestions = (selectedSubject === "Technical Drawing")
        ? Questions.map(q => ({ subject: "Technical Drawing", ...q }))
        : [];
    let questionBank = [...baseQuestions, ...cloudQuestions].filter(q => !q.subject || q.subject === selectedSubject);
    try {
        const ev = await API.events(selectedSubject);
        const active = (ev.events || []).find(e => e.type === "test_week" || e.type === "exam");
        if (active?.question_ids) {
            const ids = JSON.parse(active.question_ids || "[]");
            if (ids.length) questionBank = questionBank.filter(q => ids.includes(q.id));
        }
    } catch (_) {}

    if (!questionBank.length) {
        document.querySelector(".glass-card").innerHTML = `
            <h4>No questions available for ${selectedSubject}</h4>
            <p>Ask the admin or assigned teacher to add questions for this subject.</p>
            <a href="dashboard.html" class="glass-btn">Back to Dashboard</a>`;
        document.getElementById("timer").textContent = "No quiz";
        return;
    }

    const questionCount = Math.max(1, Math.min(Number(profile.quizLength || 15), questionBank.length));
    selectedQuestions = shuffle([...questionBank]).slice(0, questionCount);
    userAnswers = new Array(selectedQuestions.length).fill(null);
    timeLeft = timerSeconds(profile.timerMode);

    updateTimerDisplay();
    if (timeLeft > 0) startTimer();
    loadQuestion();
    document.getElementById("nextBtn").onclick = nextQuestion;
    document.getElementById("prevBtn").onclick = prevQuestion;
    document.getElementById("submitBtn").onclick = submitQuiz;
});

function loadQuestion() {
    const q = selectedQuestions[currentIndex];
    const topic = topicForQuestion(q);
    document.getElementById("questionNumber").textContent = `Question ${currentIndex + 1} of ${selectedQuestions.length}`;
    document.getElementById("questionTopic").textContent = `${selectedSubject} • ${topic}`;
    document.getElementById("questionText").textContent = q.question;
    updateQuizProgress();

    const imageContainer = document.getElementById("questionImage");
    if (q.image && q.image.trim() !== "") {
        imageContainer.innerHTML = `<img src="${q.image}" class="img-fluid rounded shadow" style="max-height:300px;" alt="Question image">`;
        imageContainer.style.display = "block";
    } else {
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
        button.textContent = opt;
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
    if (mood) mood.textContent = answerPercent >= 100 ? "Ready to submit like a legend" : answered >= selectedQuestions.length / 2 ? "Keep attacking the questions" : "Monster Arena Live";
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
    if (timeLeft <= 0) { document.getElementById("timer").textContent = "Relaxed"; return; }
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById("timer").textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
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
    await updateUserStats(percentage, topicResults);
    localStorage.setItem("tm_review", JSON.stringify({ questions: selectedQuestions.map(q => ({ ...q, topic: topicForQuestion(q) })), userAnswers }));
    localStorage.setItem("tm_lastScore", percentage);
    localStorage.setItem("tm_lastTopicResults", JSON.stringify(topicResults));
    window.location.href = "result.html";
}

async function updateUserStats(score, topicResults) {
    const beforeUser = Storage.getCurrentUser();
    const beforeUnlocked = Storage.unlockedAvatars(beforeUser).map(a => a.id);
    localStorage.removeItem("tm_lastAvatarUnlock");
    try {
        const data = await API.saveScore(score, topicResults);
        Storage.setCurrentUser(data.user);
    } catch (_) {
        Storage.updateLocalStats(score, topicResults);
    }
    const afterUser = Storage.getCurrentUser();
    const afterUnlocked = Storage.unlockedAvatars(afterUser).map(a => a.id);
    const newAvatarId = afterUnlocked.find(id => !beforeUnlocked.includes(id));
    if (newAvatarId) {
        const avatar = TM_AVATARS.find(item => item.id === newAvatarId);
        localStorage.setItem("tm_lastAvatarUnlock", JSON.stringify(avatar || { id: newAvatarId, name: newAvatarId }));
    }
}
