  
  
  export function setupSidebarNav() {
      const navLinks = document.querySelectorAll("#sidebar-nav a");
      const views = document.querySelectorAll("[data-view]");
      const pageTitle = document.querySelector("#page-title");
      const pageSubtitle = document.querySelector("#page-subtitle");
      const pageCopy = {
        dashboard: ["Dashboard", "Welcome to Quizward! 👋 Looks like you haven't created any quizzes yet."],
        create: ["Create Quiz", "Step-by-step quiz builder."],
        quizzes: ["My Quizzes", "Manage and organize your quizzes."]
      };
      const quizSteps = document.querySelectorAll("[data-step-view]");
      const stepIndicators = document.querySelectorAll(".stepper .step");
      const quizForm = document.querySelector("#quiz-builder-form");
      const questionList = document.querySelector(".question-list");
      const summaryText = document.querySelector("#quiz-summary-text");
      const showQuizStep = (stepName) => {
        quizSteps.forEach((step) => step.classList.toggle("is-visible", step.dataset.stepView === stepName));
        stepIndicators.forEach((step) => {
          const isCurrent = step.dataset.step === stepName;
          step.classList.toggle("is-current", isCurrent);
          step.classList.toggle("is-complete", step.dataset.step === "details" && stepName !== "details" || step.dataset.step === "questions" && stepName === "settings");
        });
      };
      const updateSummary = () => {
        const title = document.querySelector("#quiz-title")?.value.trim() || "Untitled Quiz";
        const category = document.querySelector("#quiz-category")?.value || "None";
        const timeLimit = document.querySelector("#time-limit")?.value || "10";
        const passingScore = document.querySelector(".settings-grid input[type='number']")?.value || "60";
        const visibility = document.querySelector(".visibility-option.is-selected strong")?.textContent.toLowerCase() || "public";
        if (summaryText) summaryText.innerHTML = `Title: ${title}<br>Category: ${category}<br>Questions: ${questionList?.children.length || 1}<br>Time Limit: ${timeLimit} minutes<br>Visibility: ${visibility}<br>Passing Score: ${passingScore}%`;
      };
      const renumberQuestions = () => {
        questionList?.querySelectorAll(".question-item").forEach((item, index) => {
          item.querySelector(".question-chip").textContent = `Question ${index + 1}`;
          item.querySelector(".question-card-heading select").setAttribute("aria-label", `Question ${index + 1} type`);
        });
        updateSummary();
      };
      const showView = (viewName) => {
        views.forEach((view) => {
          view.classList.toggle("is-visible", view.dataset.view === viewName);
        });
        navLinks.forEach((link) => {
          link.parentElement.classList.toggle("is-active", link.dataset.viewTarget === viewName);
        });
        if (pageTitle && pageSubtitle && pageCopy[viewName]) {
          pageTitle.textContent = pageCopy[viewName][0];
          pageSubtitle.textContent = pageCopy[viewName][1];
        }
      };

      navLinks[0]?.setAttribute("data-view-target", "dashboard");
      navLinks[1]?.setAttribute("data-view-target", "create");
      navLinks[2]?.setAttribute("data-view-target", "quizzes");
      navLinks.forEach((navs) => {
        navs.addEventListener("click", (event) => {
          event.preventDefault();
          const viewName = navs.dataset.viewTarget;
          if (viewName) showView(viewName);
        });
      });

      document.querySelectorAll("[data-view-target]").forEach((control) => {
        control.addEventListener("click", () => showView(control.dataset.viewTarget));
      });
      document.querySelectorAll("[data-step-target]").forEach((control) => {
        control.addEventListener("click", () => {
          if (control.dataset.stepTarget === "questions" && control.closest("[data-step-view='details']") && !quizForm?.reportValidity()) return;
          showQuizStep(control.dataset.stepTarget);
          updateSummary();
        });
      });
      stepIndicators.forEach((step) => step.addEventListener("click", () => showQuizStep(step.dataset.step)));
      document.querySelectorAll(".visibility-option").forEach((option) => {
        option.addEventListener("click", () => {
          document.querySelectorAll(".visibility-option").forEach((item) => item.classList.remove("is-selected"));
          option.classList.add("is-selected");
          updateSummary();
        });
      });
      document.querySelector(".add-question-button")?.addEventListener("click", () => {
        const firstQuestion = questionList?.querySelector(".question-item");
        if (!firstQuestion || !questionList) return;
        const newQuestion = firstQuestion.cloneNode(true);
        const questionNumber = questionList.children.length + 1;
        newQuestion.querySelectorAll("input[type='text']").forEach((input) => input.value = "");
        newQuestion.querySelectorAll("input[type='radio']").forEach((radio) => { radio.name = `correct-answer-${questionNumber}`; radio.checked = false; });
        newQuestion.querySelector("input[type='radio']").checked = true;
        questionList.appendChild(newQuestion);
        renumberQuestions();
        newQuestion.querySelector(".question-input")?.focus();
      });
      quizForm?.addEventListener("input", updateSummary);
      quizForm?.addEventListener("submit", (event) => { event.preventDefault(); showQuizStep("settings"); updateSummary(); });

      showView("dashboard");
      showQuizStep("details");
      updateSummary();
    }


