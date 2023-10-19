const form = document.getElementById("myForm");
const question = document.getElementById("question") as HTMLElement;
const message = document.getElementById("isCorrect") as HTMLParagraphElement;
const submit = document.getElementById("submit");
const answerButtons = document.querySelectorAll(".answer");
const categories: { [key: string]: string[] } = {
  geography: ["Nilo", "Camberra","Pacific Ocean","South America"],
  science: ["Au", "Jupiter","6", "Oxygen"],
  entertainment: ["The lion king", "Daniel Craig", "Leonardo DiCaprio", "Frozen"],
  story: ["The first world war", "1776", "116 years", "1917"],
};
const questions: { [key: string]: QuestionAndAnswers[] } = {
  geography: [
    {
      question: "What is the longest river in the world?",
      answers: ["Amazonas", "Nilo", "Misisipi", "Yangtsé"],
    },
    {
      question: "What is the capital of Australia?",
      answers: ["Camberra", "Sydney", "Melbourne", "Brisbane"],
    },
    {
      question: "What is the largest ocean in the world?",
      answers: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Brisbane"],
    },
    {
      question: "In which continent is the Amazon Rainforest located?",
      answers: ["Europe", "Asia", "Africa", "South America"],
    },
],
science: [
    {
        question: "What is a symbol for gold? ",
        answers: ["Ag", "Au", "Fe", "Hg"],
    },
    {
        question: "What is the largest planet in the solar system? ",
        answers: ["Earth", "Mars", "Jupiter", "Venus"],
    },
    {
      question: "What is the atomic number of carbon?",
      answers: ["6", "12", "22", "44"],
    },
    {
      question: "What is the most abundant element in the Earth's crust?",
      answers: ["Iron", "Oxygen", "Aluminum", "Silicon"],
    },
],
entertainment: [
    {
      question: "Which film features the main character Simba?",
      answers: ["Aladino", "Beauty and the Beast", "The lion king", "Mulan"],
    },
    {
      question: "Who played James Bond in the film Skyfall?",
      answers: [
        "Sean Connery",
        "Daniel Craig",
        "Pierce Brosnan",
        "Roger Moore",
      ],
    },
    {
      question: "In which Disney movie does the character Elsa appear?",
      answers: [
        "Moana",
        "Inside Out",
        "Frozen",
        "Up",
      ],
    },
    {
      question: "Who played the role of Jack Dawson in the movie Titanic?",
      answers: [
        "Johnny Depp",
        "Leonardo DiCaprio",
        " Brad Pitt",
        "Tom Hanks",
      ],
    },
  ],
  story: [
    {
      question: "Which was the first world war?",
      answers: [
        "the Spanish civil war ",
        "the Vietnam war",
        "The first world war",
        "The Hundred Years War ",
      ],
    },
    {
      question: "In which year did the United States gain independence?",
      answers: ["1492", "1776", "1865", "1945"],
    },
    {
      question: "What was the approximate duration of the Hundred Years' War?",
      answers: [" 80 years", "120 years", "100 years", "116 years"],
    },
    {
      question: "In what year did the Russian Revolution begin?",
      answers: ["1923", " 1905", "1917", "1945"],
    },
  ],
};

interface QuestionAndAnswers {
  question: string;
  answers: string[];
}

let isCorrect = false;
let correctAnswer = 0;
let failedAnswer = 0;
let currentCategory: string = "";
let currentAnswer: string = "";

answerButtons.forEach((button) => {
  button.addEventListener("click", function () {
    answerButtons.forEach((b) => b.classList.remove("active"));
    button.classList.add("active");
  });
});

form?.addEventListener("click", function (event) {
  event.preventDefault();
  const selectedButton = document.querySelector(".answer.active") as HTMLInputElement;

  if (selectedButton) {
    const answerSelected = selectedButton.value;
    const category = currentCategory;
    const correctAnswers = categories[category];

    if (correctAnswers && correctAnswers.includes(answerSelected)) {
      message.textContent = "La respuesta es correcta 💥💥💥";
      isCorrect = true;
      correctAnswer += 1;
    } else {
      message.textContent = "La respuesta es incorrecta 😭😭😭";
      isCorrect = false;
      failedAnswer += 1;
    }

    updateScore();
    updateQuestion();
  }
});

function randomCategory(): string {
  const categoryKeys = Object.keys(categories);
  const randomCategoryKey = categoryKeys[Math.floor(Math.random() * categoryKeys.length)];
  currentCategory = randomCategoryKey;
  return randomCategoryKey;
}

function randomQuestion(category: string): QuestionAndAnswers {
  if (!questions[category]) {
    return { question: "Categoría no encontrada", answers: [] };
  }
  const categoryQuestions = questions[category];
  const randomIndex = Math.floor(Math.random() * categoryQuestions.length);
  const questionRandom = categoryQuestions[randomIndex];
  return questionRandom;
}

function updateScore() {
  const scorrect = document.getElementById("correct") as HTMLParagraphElement;
  const sfail = document.getElementById("fail") as HTMLParagraphElement;
  scorrect.textContent = correctAnswer.toString();
  sfail.textContent = failedAnswer.toString();
}

function updateQuestion() {
  const questionElement = document.getElementById("question");

  if (questionElement instanceof HTMLParagraphElement) {
    const answerButtons = document.querySelectorAll(".answer");

    // Obtén una categoría y pregunta aleatoria
    const category = randomCategory();
    const question = randomQuestion(category);

    // Verifica si la categoría es válida
    if (question.question !== "Categoría no encontrada") {
      questionElement.textContent = question.question;

      // Actualiza los botones de respuesta con las opciones correctas
      for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].setAttribute("value", question.answers[i]);
      }
    }
  }
}

// Al inicio, muestra la primera pregunta
updateQuestion();
