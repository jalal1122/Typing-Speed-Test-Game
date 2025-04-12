const paraGraph =
  "Success is not final, failure is not fatal: it is the courage to continue that counts. Practice makes progress, and every keystroke gets you closer to mastery. Keep typing, stay focused, and let your fingers fly!";

const paraWordArray = paraGraph.split(" ");
const paraWordCount = paraWordArray.length;
let textContainer = document.getElementsByClassName("text-container")[0];
let currentWordIndex = 0;
let currentInput = "";

function showData() {
  for (let i = 0; i < paraWordArray.length; i += 10) {
    const paraWord = paraWordArray.slice(i, i + 10);
    let p = document.createElement("p");
    p.classList.add("paraLine");
    paraWord.forEach((word) => {
      let span = document.createElement("span");
      span.innerText = word + " ";
      p.appendChild(span);
      span.classList.add("word");
    });
    let inputText = document.createElement("input");
    inputText.type = "text";
    inputText.classList.add("inputLine");
    textContainer.appendChild(p);
    textContainer.appendChild(inputText);
    inputText.style.width = `${p.offsetWidth}px`;
  }
}

function handleEnter(inputLine, e) {
  e.preventDefault();
  inputLine.blur();
  if (inputLine.nextElementSibling) {
    let nextto = inputLine.nextElementSibling;
    let nextInputLine = nextto.nextElementSibling;
    inputLine.focus();
    // currentInput = nextInputLine.previousElementSibling;
    document.querySelector(".inputLine").style.display = "none";
  }
}

function handleSpace(inputLine, e) {
  let inputText = inputLine.value.trim();
  let inputTextArray = inputText.split(" ");
  console.log(inputTextArray[currentWordIndex]);
  console.log(words[currentWordIndex].innerText);

  if (
    words[currentWordIndex].innerText.trim() ===
    inputTextArray[currentWordIndex]
  ) {
    console.log("correct word");
    words[currentWordIndex].classList.add("correctWord");

    currentWordIndex++;
  } else {
    console.log("wrong word");
    words[currentWordIndex].classList.add("wrongWord");
    currentWordIndex++;
  }
}

showData();

document.querySelector(".inputLine").focus();

const inputLine = document.querySelector(".inputLine");
const paraLines = Array.from(document.querySelectorAll(".paraLine"));
const words = Array.from(document.querySelectorAll(".word"));

function keyDown(inputLine) {
  inputLine.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      handleEnter(inputLine, e);
    }
    if (e.key === " ") {
      handleSpace(inputLine, e);
    }
  });
}

keyDown(inputLine);