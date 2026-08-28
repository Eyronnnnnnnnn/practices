let currentQuestionIndex = 0;
let Quiz_Score = 0;

const Quiz_Questions = [
  {
    id: 1,
    Question:
      "What is the structured sequence of stages in software development called?",
    Options: ["SDLC", "Agile", "Scrum", "Waterfalls"],
    Answer: "SDLC",
  },

  {
    id: 2,
    Question: "Which SDLC phase involves actual coding?",
    Options: ["Planning", "Implementation", "Testing", "Maintenance"],
    Answer: "Implementation",
  },

  {
    id: 3,
    Question: "What is the main purpose of Software Testing?",
    Options: [
      "Add new features",
      "Find errors/bugs",
      "Deploy the system",
      "Design the UI",
    ],
    Answer: "Find errors/bugs",
  },
];

let questionlenght = Quiz_Questions.length;
const getQuestion = document.querySelector(".question");
const getButtons = document.querySelectorAll(".options button");
const getScore = document.getElementById("score");
const getResetBtn = document.querySelector("#resetbtn");

export function displayQuestion() {
  //   console.log(Quiz_Questions);
  getQuestion.textContent = Quiz_Questions[currentQuestionIndex].Question;
  getButtons.forEach((btn, index) => {
    btn.innerHTML = Quiz_Questions[currentQuestionIndex].Options[index];
    btn.addEventListener("click", (event) => {
      if (
        event.target.textContent === Quiz_Questions[currentQuestionIndex].Answer
      ) {
        console.log("correct");
        Quiz_Score++;
        btn.style.backgroundColor = "#00a608";
        getScore.textContent = `Score: ${Quiz_Score} / 3`;
        setTimeout(() => {
          UpdateQuestion();
        }, 2000);
      } else {
        btn.style.backgroundColor = "red";
        console.log("Wrong Answer!!");
        btn.classList.add("shake");

        setTimeout(() => {
          btn.style.backgroundColor = "#1e3c72";
        }, 300);
      }
    });
  });

  getResetBtn.addEventListener("click", () => {
    resetQuiz();
    console.log("hello");
  });
}

function UpdateQuestion() {
  console.log(currentQuestionIndex);
  currentQuestionIndex++;
  if (currentQuestionIndex >= questionlenght) {
    console.log("your quiz is finish");
    getButtons.forEach((btn, index) => {
      btn.disabled = true;
    });
  } else {
    getQuestion.textContent = Quiz_Questions[currentQuestionIndex].Question;
    getButtons.forEach((btn, index) => {
      btn.style.backgroundColor = "#1e3c72";
      btn.innerHTML = Quiz_Questions[currentQuestionIndex].Options[index];
    });
  }
}

function resetQuiz() {
  currentQuestionIndex = 0;
  Quiz_Score = 0;

  getButtons.forEach((btn, index) => {
    btn.innerHTML = Quiz_Questions[currentQuestionIndex].Options[index];
    btn.disabled = false;
     btn.style.backgroundColor = "#1e3c72";
  });

  getQuestion.innerHTML = Quiz_Questions[currentQuestionIndex].Question;
  getScore.textContent = `Score: ${Quiz_Score} / 3`;
}
