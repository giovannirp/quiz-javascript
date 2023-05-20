const form = document.querySelector(".form-quiz");
const finalScoreContainer = document.querySelector(".result");

const responseCorrect = ["A", "B", "A", "B"];
let score = 0;

// obtem as resposta do usuario
const getAnswers = () => responseCorrect.map((_, index) => 
  form[`inputQuestion${index + 1}`].value);

// calcula a pontuação
const calculateUserScore = (questionInput) => {
  questionInput.forEach((itemCorrect, index) => {
    if (itemCorrect === responseCorrect[index]) {
      score += 25;
    }
  });
}

// aninama a pontuação
const animateFinalScore = () => {
  let counter = 0;

  const timerId = setInterval(() => {
    if (counter === score) {
      clearInterval(timerId);
    }

    finalScoreContainer.querySelector("span").textContent = `${counter}%`;
    counter++;
  }, 20)
}

const showFinalScore = () => {
  finalScoreContainer.classList.remove("d-none");
  scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const userAnswers = getAnswers()
  calculateUserScore(userAnswers);
  showFinalScore();
  animateFinalScore();
})