document.addEventListener("DOMContentLoaded", function () {
    const questions = [
        {
            question: "Sushi or Indian Food?",
            options: ["Sushi", "Indian"]
        },
        {
            question: "Go out or Stay in?",
            options: ["Go out", "Stay in"]
        },
        {
            question: "What day are you coming?",
            options: ["Tuesday", "Wednesday", "Thursday", "Friday"]
        },
        {
            question: "Movie series?",
            options: ["Pirates of the Caribbean", "Hunger Games"]
        }
    ];

    const answers = {};
    let currentQuestion = 0;

    const questionBox = document.getElementById("questionBox");
    const questionTitle = document.getElementById("questionTitle");
    const finalItinerary = document.getElementById("finalItinerary");
    const dinnerChoice = document.getElementById("dinnerChoice");

    function showQuestion() {
        const q = questions[currentQuestion];
        questionTitle.textContent = q.question;
        questionBox.innerHTML = "";

        q.options.forEach(option => {
            const btn = document.createElement("button");
            btn.textContent = option;
            btn.className = "option-btn";
            btn.onclick = () => {
                answers[currentQuestion] = option;
                currentQuestion++;
                if (currentQuestion < questions.length) {
                    showQuestion();
                } else {
                    showItinerary();
                }
            };
            questionBox.appendChild(btn);
        });
    }

    function showItinerary() {
        questionBox.style.display = "none";
        questionTitle.style.display = "none";
        finalItinerary.style.display = "block";
        dinnerChoice.textContent = answers[0]; // Sushi or Indian
    }

    showQuestion();
});
