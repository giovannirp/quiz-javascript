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
  
  formResult.querySelector("span").textContent = `${score}%`;
  console.log(score);
});