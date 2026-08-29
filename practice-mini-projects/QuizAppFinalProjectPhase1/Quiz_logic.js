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
  const getScore = document.querySelector(".score p");
  const getResetBtn = document.querySelector("#resetbtn");
  const getClosemodalBtn = document.querySelector(".modal-close");
  const getpopupmodal = document.querySelector(".modal-overlay");
  const getTryAgainBtn = document.querySelector(".btn-modal-TryAgain");
  const getDisplayModal = document.querySelector(".modal-body p");
  const getprevScore = document.querySelector(".score h5");

  // let

  export function displayQuestion() {
    //   console.log(Quiz_Questions);

    //eto is para sa question
    getQuestion.textContent = Quiz_Questions[currentQuestionIndex].Question;
    getButtons.forEach((btn, index) => {
      //dito naman is sineset nia ung button para sa pag pipilian
      btn.innerHTML = Quiz_Questions[currentQuestionIndex].Options[index];
      btn.addEventListener("click", (event) => {
        if (
          event.target.textContent === Quiz_Questions[currentQuestionIndex].Answer
        ) {
          console.log("correct");

          Quiz_Score++;
          btn.style.backgroundColor = "#00a608";
          getButtons.forEach((btn, index) => {
            btn.disabled = true;
          });

          getScore.textContent = `Score: ${Quiz_Score} / 3`;
          setTimeout(() => {
            UpdateQuestion();
          }, 2000);
        } else {
          btn.style.backgroundColor = "red";
          console.log("Wrong Answer!!");
          btn.classList.add("shake");

          // dito is mag papakita ung tamang answer pag wrong pinili mo
          getButtons.forEach((btn, index) => {
            if (btn.textContent === Quiz_Questions[currentQuestionIndex].Answer) {
              btn.style.backgroundColor = "#00a608";
              btn.disabled = true;
            }
            btn.disabled = true;
          });

          setTimeout(() => {
            UpdateQuestion();
            btn.style.backgroundColor = "#1e3c72";
          }, 2000);
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
      showmodal();
      getButtons.forEach((btn, index) => {
        btn.disabled = true;
      });
    } else {
      getQuestion.textContent = Quiz_Questions[currentQuestionIndex].Question;
      getButtons.forEach((btn, index) => {
        btn.disabled = false;
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

  getClosemodalBtn.addEventListener("click", () => {
    console.log("click");
    getpopupmodal.style.display = "none";
  });

  getTryAgainBtn.addEventListener("click", () => {
    getpopupmodal.style.display = "none";
    resetQuiz();
  });

  function showmodal() {
    const savedScore = localStorage.getItem("score");
    localStorage.setItem("score", Quiz_Score);
    if (savedScore === null) {
      getprevScore.textContent = `Previous Score : 0`;
      console.log(`Previous Score : 0`);
    } else {
      getprevScore.textContent = `Previous Score : ${savedScore}`;
      console.log(`Previous Score : ${savedScore}`);
    }

    getpopupmodal.style.display = "flex";
    getDisplayModal.textContent = `Your Total Score is : ${Quiz_Score} out of 3  Congratiolation!!`;
  }
