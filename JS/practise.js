// global variables
let currentWordList = [];
let wordIndex = 0;
let myTurn = {};
const resultsButton = document.getElementById("results");
const typeIn = document.getElementById("typeIn");
const flipCard = document.getElementById("cardContainer");
const submitButton = document.querySelector("#submit");

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
	myTurn = new Turn(name, words);
	resultsButton.style.visibility = "hidden";
	submitButton.style.visibility = "visible";
	displayWord();
}
function displayWord() {
	// add word to word box
	let wordBox = document.getElementById("word");
	wordBox.textContent = currentWordList[wordIndex][0];
	// add strategy to strategy box
	let strategyBox = document.getElementById("strategy");
	// check there is a second value to add to the card eg strategy
	if (currentWordList[wordIndex][1]) {
		strategyBox.innerHTML = currentWordList[wordIndex][1];
	}
	// clear textInput box
	document.getElementById("textInput").value = "";
	flipCard.classList = "flip-card card-flip";
	textToSpeech(currentWordList[wordIndex][0]);
}

function textToSpeech(message) {
	utterance = new SpeechSynthesisUtterance(message);
	voicesAvailable = speechSynthesis.getVoices();
	// voicesAvailable[0] is make English
	// [1] and [2] are female English, [13] is Japanese
	utterance.voice = voicesAvailable[2];
	speechSynthesis.speak(utterance);
}

//
function textSubmit(event) {
	event.preventDefault();
	let textbox = event.target.textInput.value;
	if (textbox === currentWordList[wordIndex][0]) {
		currentWordList.shift();
		if (currentWordList.length === 0) {
			alert("That was the last card.");
			resultsButton.style.visibility = "visible";
			submitButton.style.visibility = "hidden";
			document.getElementById("textInput").value = "";
		} else {
			displayWord();
		}
	} else {
		let wrongItem = currentWordList.shift();
		myTurn.addMisspelled(wrongItem[0]);
		alert("you are wrong, i will put this to the back, try again in a minute!");
		currentWordList.push(wrongItem);
		displayWord();
	}
}

typeIn.addEventListener("submit", textSubmit);

flipCard.addEventListener("click", flipHandler);
function flipHandler(event) {
	flipCard.classList.toggle("card-flip");
}

resultsButton.addEventListener("click", resultsButtonHandler);
function resultsButtonHandler(event) {
	let stringified = JSON.stringify(myTurn);
	localStorage.setItem("results", stringified);
	window.location.href = "result.html";
}
