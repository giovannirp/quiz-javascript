const formQuiz = document.querySelector(".form-quiz");
const formResult = document.querySelector(".result");

const responseCorrect = ["B", "B", "B", "B"];

formQuiz.addEventListener("submit", (event) => {
  event.preventDefault();

  let score = 0;
  const formQuizArr = [
    formQuiz.question1Input.value,
    formQuiz.question2Input.value,
    formQuiz.question3Input.value,
    formQuiz.question4Input.value
  ];

  formQuizArr.forEach((item, index) => {
    if (item === responseCorrect[index]) {
      score += 25;
    }
  })
  
  scrollTo(0 , 0);
  formResult.classList.remove("d-none");

  let counter = 0;

  const timerId = setInterval(() => {
    if (counter === score) {
      clearInterval(timerId);
    }

    formResult.querySelector("span").textContent = `${counter}%`;
    counter++;
  }, 30);
});