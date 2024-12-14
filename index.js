const questions = [
  {
    que: "which of the following is a mark up language?",
    a: "html",
    b: "php",
    c: "js",
    d: "python",
    correct: "a",
  },
  {
    que: "which of the following is a programming language?",
    a: "css",
    b: "html",
    c: "javascript",
    d: "markdown",
    correct: "c",
  },
  {
    que: "which of the following is used to style web pages?",
    a: "html",
    b: "css",
    c: "json",
    d: "php",
    correct: "b",
  },
  {
    que: "which of these is not a programming language?",
    a: "python",
    b: "java",
    c: "html",
    d: "c++",
    correct: "c",
  },
  {
    que: "what does SQL stand for?",
    a: "Structured Query Language",
    b: "Simple Query Language",
    c: "Sequential Query Language",
    d: "Standard Query Language",
    correct: "a",
  },
  {
    que: "which of the following is used for data manipulation in databases?",
    a: "php",
    b: "sql",
    c: "html",
    d: "css",
    correct: "b",
  },
  {
    que: "which language is commonly used for backend development?",
    a: "css",
    b: "javascript",
    c: "python",
    d: "sql",
    correct: "c",
  },
  {
    que: "which of the following is a client-side scripting language?",
    a: "java",
    b: "php",
    c: "javascript",
    d: "ruby",
    correct: "c",
  },
  {
    que: "which of the following is not a database?",
    a: "mysql",
    b: "mongodb",
    c: "sqlite",
    d: "json",
    correct: "d",
  },
  {
    que: "what is the full form of CSS?",
    a: "Cascading Style Sheets",
    b: "Common Style Syntax",
    c: "Computer Style Sheets",
    d: "Creative Style Syntax",
    correct: "a",
  },
  {
    que: "which of the following is used to build mobile applications?",
    a: "react",
    b: "react native",
    c: "node.js",
    d: "express",
    correct: "b",
  },
  {
    que: "which of these is a NoSQL database?",
    a: "mysql",
    b: "mongodb",
    c: "postgresql",
    d: "oracle",
    correct: "b",
  },
  {
    que: "which of these is used for version control?",
    a: "git",
    b: "github",
    c: "npm",
    d: "docker",
    correct: "a",
  },
  {
    que: "which of the following is a JavaScript framework?",
    a: "django",
    b: "flask",
    c: "react",
    d: "laravel",
    correct: "c",
  },
  {
    que: "which protocol is used for secure communication on the web?",
    a: "ftp",
    b: "http",
    c: "https",
    d: "smtp",
    correct: "c",
  },
  {
    que: "which of the following is not a front-end framework?",
    a: "angular",
    b: "vue",
    c: "flask",
    d: "react",
    correct: "c",
  },
  {
    que: "which is the latest version of HTML?",
    a: "HTML4",
    b: "XHTML",
    c: "HTML5",
    d: "HTML6",
    correct: "c",
  },
  {
    que: "which of these is used for containerization?",
    a: "npm",
    b: "docker",
    c: "yarn",
    d: "vscode",
    correct: "b",
  },
  {
    que: "which of these is not an operating system?",
    a: "linux",
    b: "windows",
    c: "macos",
    d: "mongodb",
    correct: "d",
  },
  {
    que: "which tag is used to insert an image in HTML?",
    a: "<img>",
    b: "<image>",
    c: "<picture>",
    d: "<src>",
    correct: "a",
  },
  {
    que: "which is a widely used cloud platform?",
    a: "aws",
    b: "apache",
    c: "npm",
    d: "jenkins",
    correct: "a",
  },
];

let index = 0;
let total = questions.length;
let right = 0;
let wrong = 0;

const queBox = document.getElementById("queBox");
const optionInput = document.querySelectorAll(".options");
const next = () => {
  index++;
  loadQuestion();
  console.log(index);
};
const prev = () => {
  if (index == 0) {
    return;
  }
  index--;
  loadQuestion();
  console.log(index);
};
const loadQuestion = () => {
  if (index == total) {
    return endQuiz();
  }
  reset();

  const data = questions[index];
  queBox.innerText = `${index + 1}) ${data.que}`;
  optionInput[0].nextElementSibling.innerText = data.a;
  optionInput[1].nextElementSibling.innerText = data.b;
  optionInput[2].nextElementSibling.innerText = data.c;
  optionInput[3].nextElementSibling.innerText = data.d;
};

const subbmitQuiz = () => {
  const data = questions[index];
  const ans = getAnswer();
  if (ans == data.correct) {
    right++;
  } else {
    wrong++;
  }
  index++;
  loadQuestion();
  return;
};

const getAnswer = () => {
  let answer;
  optionInput.forEach((input) => {
    if (input.checked) {
      answer = input.value;
    }
  });
  return answer;
};

const endQuiz = () => {
  document.getElementById(
    "bbox"
  ).innerHTML = ` <div class="p-4"> <h3>Thanks for playing the Quiz</h3>
  <h2 >${right}/${total} are correct</h2>
  </div>
  
  `;
};

const reset = () => {
  optionInput.forEach((input) => {
    input.checked = false;
  });
};
loadQuestion();

