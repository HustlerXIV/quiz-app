const quizData = [
  {
    question: " Father of ‘C’ programming language",
    a: "Dennis Ritchie",
    b: "Prof Jhon Kemeny",
    c: "Thomas Kurtz",
    d: "Bill Gates",
    correct: "a",
  },
  {
    question: "SMPS stands for",
    a: "Start mode power supply",
    b: "Single mode power supply",
    c: "Switched mode power supply",
    d: "Store mode power supply",
    correct: "c",
  },
  {
    question: "The lowest form of Computer language is called",
    a: "BASIC",
    b: "FORTRAN",
    c: "COBOL",
    d: "Machine Language",
    correct: "d",
  },
];

const quiz = document.getElementById("quiz");
const answersEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;
loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;
  answersEls.forEach((answersEl) => {
    if (answersEl.checked) {
      answer = answersEl.id;
    }
  });

  return answer;
}

function deselectAnswers() {
  answersEls.forEach((answersEl) => {
    answersEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      if (score == 0) {
        quiz.innerHTML = `<h2>You can try it again, don't give up (${score}/${quizData.length})</h2>
      <button onclick="location.reload()">Do it!!</button>`;
      } else if (score == 1) {
        quiz.innerHTML = `<h2>Keep Fighting (${score}/${quizData.length})</h2>
      <button onclick="location.reload()">Do it!!</button>`;
      } else if (score == 2) {
        quiz.innerHTML = `<h2>Almost there!! (${score}/${quizData.length})</h2>
      <button onclick="location.reload()">Do it again</button>`;
      } else if (score == 3) {
        quiz.innerHTML = `<h2>Well done, you can do it!! (${score}/${quizData.length})</h2>
      <button onclick="location.reload()">Wanna do it again?</button>`;
      }
    }
  }
});
