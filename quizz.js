const questions = [
    {
        question: "1.JavaScript is a ___ -side programming language.",
        choices: [" Client", "Server", "Both", "None"],
        correctAnswer: "Both"
    },
    {
    question: "2.Which of the following will write the message “Hello DataFlair!” in an alert box?",
    choices: [" alertBox(“Hello DataFlair!”);", " alert(Hello DataFlair!);"," msgAlert(“Hello DataFlair!”);"," alert(“Hello DataFlair!”);"],
    correctAnswer: " alert(“Hello DataFlair!”);"
    },
    {
        question: "3.How do you find the minimum of x and y using JavaScript?",
        choices: ["min(x,y);", " Math.min(x,y)", " Math.min(xy)", " min(xy);"],
        correctAnswer: " Math.min(x,y)"
    },
    {
        question: "4.Which JavaScript label catches all the values, except for the  ones specified?",
        choices: ["catch", "label", "try", "default"],
        correctAnswer: "default"
    },
    {
        question: "5.JavaScript File Has An Extension of:",
        choices: ["java", "js", "javascript", "xml"],
        correctAnswer: "js"
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const scoreElement = document.getElementById("score");
const submitButton = document.getElementById("submit");

function loadQuestion() {
    const current = questions[currentQuestion];
    questionElement.textContent = current.question;
    choicesElement.innerHTML = '';

    current.choices.forEach(choice => {
        const li = document.createElement("li");
        li.textContent = choice;
        li.addEventListener("click", () => checkAnswer(choice));
        choicesElement.appendChild(li);
    });
}
function checkAnswer(choice) {
    const current = questions[currentQuestion];

        if (choice === current.correctAnswer) {
        score++;
        }
        currentQuestion++;
        if (currentQuestion < questions.length) {
           loadQuestion();
    } else {
       endQuiz();
    }
}
function endQuiz() {
    questionElement.textContent = "Quiz Complete!";
    choicesElement.innerHTML = '';
    submitButton.style.display = "none";
    scoreElement.textContent = `Your Score: ${score} / ${questions.length}`;
}
    loadQuestion();
    submitButton.addEventListener("click", () => {
    checkAnswer(null);
});       