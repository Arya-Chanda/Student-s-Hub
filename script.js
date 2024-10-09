let currentQuestionIndex = 0;
let score = 0;
const quizQuestions = [
    {
        question: "What is the energy of a photon with a frequency of 6 x 10^14 Hz? (h = 6.626 x 10^-34 J·s)",
        options: ["3.976 x 10^-19 J", "1.19 x 10^-18 J", "1.32 x 10^-16 J", "2.45 x 10^-20 J"],
        answer: "3.976 x 10^-19 J"
    },
    {
        question: "What is the oxidation state of chlorine in ClO2?",
        options: ["-1", "+1", "+3", "+5"],
        answer: "+4"
    },
    {
        question: "Which law states that the volume of gas is directly proportional to its temperature at constant pressure?",
        options: ["Boyle's Law", "Charles's Law", "Avogadro's Law", "Ideal Gas Law"],
        answer: "Charles's Law"
    },
    {
        question: "What is the integral of sin(x)?",
        options: ["-cos(x) + C", "cos(x) + C", "sin(x) + C", "0"],
        answer: "-cos(x) + C"
    },
    {
        question: "A particle moves in a straight line with an acceleration of 4 m/s². What is the final velocity if it starts from rest after 5 seconds?",
        options: ["10 m/s", "20 m/s", "15 m/s", "25 m/s"],
        answer: "20 m/s"
    },
    {
        question: "In which of the following reactions is the total mass conserved?",
        options: ["Nuclear reactions", "Chemical reactions", "Both A and B", "Neither A nor B"],
        answer: "Chemical reactions"
    },
    {
        question: "The area under the velocity-time graph represents which of the following?",
        options: ["Distance", "Speed", "Acceleration", "Force"],
        answer: "Distance"
    },
    {
        question: "Which of the following is a characteristic of an ideal gas?",
        options: ["It occupies no space", "It has mass", "It can be compressed", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "What is the sum of the interior angles of a hexagon?",
        options: ["720 degrees", "540 degrees", "360 degrees", "180 degrees"],
        answer: "720 degrees"
    },
    {
        question: "What is the solution to the equation x² - 5x + 6 = 0?",
        options: ["1, 6", "2, 3", "3, 2", "0, 5"],
        answer: "2, 3"
    }
];

// Shuffle function to randomize the questions
function shuffleQuestions() {
    for (let i = quizQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [quizQuestions[i], quizQuestions[j]] = [quizQuestions[j], quizQuestions[i]];
    }
}

// Start the quiz
function startQuiz() {
    shuffleQuestions(); // Shuffle questions when starting the quiz
    currentQuestionIndex = 0;
    score = 0; // Reset score
    document.getElementById('quizContainer').style.display = 'block';
    document.getElementById('quizResult').style.display = 'none';
    document.getElementById('scoreDisplay').style.display = 'none';
    showQuestion();
}

// Show the current question
function showQuestion() {
    const question = quizQuestions[currentQuestionIndex];
    document.getElementById('quizQuestion').innerText = question.question;

    const optionsContainer = document.getElementById('quizOptions');
    optionsContainer.innerHTML = ''; // Clear previous options

    question.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.onclick = () => selectAnswer(option);
        optionsContainer.appendChild(button);
    });

    document.getElementById('nextButton').style.display = 'none';
}

// Handle the answer selection
function selectAnswer(selectedOption) {
    const question = quizQuestions[currentQuestionIndex];
    const quizResult = document.getElementById('quizResult');

    if (selectedOption === question.answer) {
        quizResult.innerText = "Correct!";
        score++; // Increment score for correct answer
    } else {
        quizResult.innerText = "Wrong! The correct answer is " + question.answer + ".";
    }
    quizResult.style.display = 'block';

    document.getElementById('nextButton').style.display = 'block';
}

// Go to the next question
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        showQuestion();
    } else {
        document.getElementById('quizContainer').style.display = 'none';
        document.getElementById('scoreDisplay').innerText = `Quiz Completed! Your score is ${score} out of ${quizQuestions.length}.`;
        document.getElementById('scoreDisplay').style.display = 'block';
    }
}

// Show home section by default on page load
window.onload = function() {
    showSection('home');
};

// Handle contact form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const formResponse = document.getElementById('formResponse');
    formResponse.textContent = "Thank you for your message! We'll get back to you soon.";
    formResponse.style.color = "green";

    // Reset form fields
    this.reset();
});

// Show specific section
function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none'; // Hide all sections
    });

    document.getElementById(sectionId).style.display = 'block'; // Show selected section
}
