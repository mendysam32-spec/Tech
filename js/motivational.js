const motivationalPhrases = {
    balanced: [
        "Your next quiz can unlock a stronger version of this account.",
        "Small wins stack. Take one clean round today.",
        "Progress is visible here, and you are building it."
    ],
    calm: [
        "No rush. Learn one idea well and the score will follow.",
        "Steady practice beats panic practice.",
        "Review, retry, improve. That is the rhythm."
    ],
    competitive: [
        "The Hall of Fame is close enough to chase.",
        "One sharper round can move your rank today.",
        "Beat your best score. That is the real rival."
    ]
};

function showMotivation(style = "balanced") {
    const phrases = motivationalPhrases[style] || motivationalPhrases.balanced;
    const phrase = phrases[Math.floor(Math.random() * phrases.length)];
    document.getElementById("motivationText").textContent = phrase;
}
