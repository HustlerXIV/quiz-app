const quizData = [
  {
    question: "เธอชอบเค้าไหม",
    a: "ไม่ชอบ",
    b: "เฉยๆ",
    c: "ชอบ",
    d: "ชอบมากกกกกกกก",
    correct: "d",
  },
  {
    question: "เธอคิดว่า เค้าคิดว่าเธอน่ารักมั้ย",
    a: "ไม่",
    b: "น่ารักดี",
    c: "น่ารักโคตรๆๆๆๆๆ",
    d: "ปกติ",
    correct: "c",
  },
  {
    question: "เธอรักเค้ามั้ยยยยย",
    a: "ไม่รัก",
    b: "เฉยๆ",
    c: "รัก",
    d: "รักมากกกกก",
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
      if (score == 1) {
        quiz.innerHTML = `<h2>เธอไม่รักเค้าหรออออออออ</h2>
      <button onclick="location.reload()">ทำใหม่เลยนะ!!</button>`;
      } else if (score == 2) {
        quiz.innerHTML = `<h2>เธอรักกันจริงมั้ยน้าาา</h2>
      <button onclick="location.reload()">ลองทำใหม่ไหม</button>`;
      } else if (score == 3) {
        quiz.innerHTML = `<h2>เย้ๆ เธอรักเค้าาาาา ❤️ </h2>
      <button onclick="location.reload()">อยากทำอีกรอบกดเบย</button>`;
      }
      //   quiz.innerHTML = `<h2>You answered correctly ${score}/${quizData.length}</h2>
      //   <button onclick="location.reload()">Reload</button>`;
    }
  }
});
