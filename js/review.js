document.addEventListener("DOMContentLoaded", () => {

    const data = JSON.parse(localStorage.getItem("tm_review"));

    if (!data) {
        window.location.href = "dashboard.html";
        return;
    }

    const container = document.getElementById("reviewContainer");

    data.questions.forEach((q, index) => {

        const userAnswer = data.userAnswers[index];

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
                    ${opt}
                </p>
            `;
        });

        container.innerHTML += `
            <div class="glass-card p-4 mb-4">
                <div class="d-flex justify-content-between align-items-center">
                    <h5 class="fw-bold">Question ${index + 1}</h5>
                    <span class="topic-pill">${q.topic || "General"}</span>
                </div>
                <p class="mb-3">${q.question}</p>
                ${optionsHTML}

                <div class="mt-3 p-3 rounded bg-light text-dark">
                    <strong>Explanation:</strong>
                    <p class="mb-0">${q.explanation}</p>
                </div>
            </div>
        `;
    });

});
