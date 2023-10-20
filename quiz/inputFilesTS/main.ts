class QuizForm{
    
    private form: HTMLFormElement | null;
    private question: HTMLElement | null;
    private message!: HTMLParagraphElement ;
    private submit: HTMLElement | null ;
    private answerButtons : NodeListOf<Element>;
    private categories: { [key: string]: string[] };
    private questions: { [key: string]: QuestionAndAnswers[] };
    private isCorrect: boolean;
    private correctAnswer: number;
    private failedAnswer: number;
    private currentCategory: string;
    
    constructor(){
        
  this.form = document.getElementById("myForm") as HTMLFormElement;
  this.question = document.getElementById("question") as HTMLElement;
  this.message = document.getElementById("isCorrect") as HTMLParagraphElement;
  this.submit = document.getElementById("submit");
  this.answerButtons = document.querySelectorAll(".answer");
  this.categories = { 
    geography: ["Nilo", "Camberra","Pacific Ocean","South America"],
    science: ["Au", "Jupiter","6", "Oxygen"],
    entertainment: ["The lion king", "Daniel Craig", "Leonardo DiCaprio", "Frozen"],
    story: ["The first world war", "1776", "116 years", "1917"],
  };
  this.questions = {
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
  

  this.isCorrect = false;
  this.correctAnswer = 0;
  this.failedAnswer = 0;
  this.currentCategory = "";

  if (this.form) {
    this.updateQuestion();
    this.form.addEventListener("click", this.handleFormClick.bind(this));
    this.clickButton();
}

}

private handleFormClick(event:Event) : void{
    event.preventDefault();
    const selectedButton = document.querySelector(".answer.active") as HTMLInputElement;
    
    if (selectedButton) {
        const answerSelected = selectedButton.value;
        this.isCorrect = this.checkAnswer(answerSelected);
        this.showMessage(this.isCorrect);
    }
    this.updateScore();
    this.updateQuestion();
}
private checkAnswer(answer:string):boolean{
    const category = this.currentCategory;
    const correctAnswers = this.categories[category];

    if (correctAnswers && correctAnswers.includes(answer)) {
        return true;
    } else {
        return false;
        
    }
}

private showMessage(isCorrect: boolean): void{
    if (isCorrect) {
        this.message.textContent = "La respuesta es correcta 💥💥💥";
        this.correctAnswer += 1;
        
    }
    else{
        this.message.textContent = "La respuesta es incorrecta 😭😭😭";
        this.failedAnswer += 1;
        
    }
}
private clickButton(){
    this.answerButtons.forEach((button) => {
      button.addEventListener("click", () => {
        console.log("Botón clicado");
        this.answerButtons.forEach((b) => b.classList.remove("active"));
        button.classList.add("active");
      });
    });

}
private randomCategory(): string {
  const categoryKeys = Object.keys(this.categories);
  const randomCategoryKey = categoryKeys[Math.floor(Math.random() * categoryKeys.length)];
  this.currentCategory = randomCategoryKey;
  return randomCategoryKey;
}
private randomQuestion(category: string): QuestionAndAnswers {
  if (!this.questions[category]) {
    return { question: "Categoría no encontrada", answers: [] };
  }
  const categoryQuestions = this.questions[category];
  const randomIndex = Math.floor(Math.random() * categoryQuestions.length);
  const questionRandom = categoryQuestions[randomIndex];
  return questionRandom;
}

private updateScore() {
  const scorrect = document.getElementById("correct") as HTMLParagraphElement;
  const sfail = document.getElementById("fail") as HTMLParagraphElement;
  scorrect.textContent = this.correctAnswer.toString();
  sfail.textContent = this.failedAnswer.toString();
}

private updateQuestion() {
  const questionElement = document.getElementById("question");

  if (questionElement instanceof HTMLParagraphElement) {
    const answerButtons = document.querySelectorAll(".answer");

    // Obtén una categoría y pregunta aleatoria
    const category = this.randomCategory();
    const question = this.randomQuestion(category);

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
}


interface QuestionAndAnswers {
  question: string;
  answers: string[];
}



const q1 = new QuizForm(); 