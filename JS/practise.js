// global variables
let currentWordList = [];
let wordIndex = 0;
let myTurn = {};

console.log("practise.js link working");

// populate dropdown list
let dropdownList = document.getElementById("dropdownList");
// use keys in wordList object in fifty-worst to provide names of lists
for (let key in wordList) {
  console.log("working " + key);
  let opt = document.createElement("option");
  opt.value = key;
  opt.textContent = key;
  dropdownList.appendChild(opt);
}

// set up event for choosing a list
dropdownList.addEventListener("change", listSelectHandler);

// uses selected list of words and puts it into an array on its own
function listSelectHandler(event) {
  let words = event.target.value;
  let name = document.getElementById("name").value;
  // fetch the word list from wordList
  currentWordList = wordList[words];
  // create a new turn at the activity
  myTurn = new Turn(name, words[0]);
  displayWord();
}
function displayWord() {
  // add word to word box
  let wordBox = document.getElementById("word");
  wordBox.textContent = currentWordList[wordIndex][0];
  // add strategy to strategy box
  let strategyBox = document.getElementById("strategy");
  strategyBox.innerHTML = currentWordList[wordIndex][1];

  console.log(wordBox.textContent, strategyBox.innerHTML);
}

//
function textSubmit(event) {
  event.preventDefault();
  let textbox = event.target.textInput.value;
  if (textbox === currentWordList[wordIndex][0]) {
    currentWordList.shift();
    displayWord();
  } else {
    let wrongItem = currentWordList.shift();
    myTurn.addMisspelled(wrongItem[0]);
    alert("you are wrong, i will put this to the back, try again in a minute!");
    currentWordList.push(wrongItem);
    displayWord();
  }
}
let typeIn = document.getElementById("typeIn");

typeIn.addEventListener("submit", textSubmit);

let flipCard = document.getElementById("cardContainer");
flipCard.addEventListener("click", flipHandler);
function flipHandler(event) {
  flipCard.classList.toggle("card-flip");
}
