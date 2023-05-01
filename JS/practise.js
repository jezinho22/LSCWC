// global variables
let currentWordList = [];
let wordIndex = 0;
let myTurn = {};
const resultsButton = document.getElementById("results");
const typeIn = document.getElementById("typeIn");
const flipCard = document.getElementById("cardContainer");
const submitButton = document.querySelector("#submit");
const wordBox = document.getElementById("word");
const strategyBox = document.getElementById("strategy");

let localWords;

console.log("practise.js link working");
// create word objects
// check local storage
function getLocalWords() {
	if (!localStorage.getItem("localWords")) {
		localStorage.setItem("localWords");
	} else {
		(localWords = localStorage), getItem("localWords");
	}
}
function createWords() {
	for (let key in wordList) {
		for (let subkey in wordList[key]) {
			for (let word in wordList[key][subkey]) {
				console.log(wordList[key][subkey][word]);
			}
			console.log("Working on " + wordList[key][subkey][0]);
		}
		console.log("Working on " + wordList[key]);
		// let createWord = new Word ()
	}
}
createWords();

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
	wordBox.textContent = currentWordList[wordIndex][0];
	// add strategy to strategy box
	// check there is a second value to add to the card eg strategy
	if (currentWordList[wordIndex][1]) {
		strategyBox.innerHTML = currentWordList[wordIndex][1];
	}
	// clear textInput box
	document.getElementById("textInput").value = "";
	flipCard.classList = "flip-card card-flip";
	textToSpeech(currentWordList[wordIndex][0]);
}

// actions on submitting each attempt at a word
function textSubmit(event) {
	event.preventDefault();
	let textbox = event.target.textInput.value;
	// compare attempt with actual word
	if (textbox === currentWordList[wordIndex][0]) {
		// if attempt is right remove card from pack
		currentWordList.shift();
		// check if any more cards and if not ...
		if (currentWordList.length === 0) {
			textToSpeech("That was the last card");
			resultsButton.style.visibility = "visible";
			submitButton.style.visibility = "hidden";
			document.getElementById("textInput").value = "";
			flipCard.classList = "flip-card";
			wordBox.textContent = "Pack finished";
			strategyBox.textContent =
				"That was the last card. Click the results button to see how you did";
		} else {
			displayWord();
		}
		// if attempt is wrong, give feedback and place card at bottom of pack
	} else {
		flipCard.classList = "flip-card";

		let wrongItem = currentWordList.shift();
		myTurn.addMisspelled(wrongItem[0]);
		textToSpeech(
			"That is not correct, I will put this back in the pack. Try again in a minute!"
		);
		currentWordList.push(wrongItem);
		displayWord();
	}
}

// submit attempt at word
typeIn.addEventListener("submit", textSubmit);

// make card flip by changing classname
// repeat if the card is being turned face down
flipCard.addEventListener("click", flipHandler);
function flipHandler(event) {
	flipCard.classList.toggle("card-flip");
	if (flipCard.classList == "flip-card card-flip") {
		textToSpeech(currentWordList[wordIndex][0]);
	}
}
// view results
resultsButton.addEventListener("click", resultsButtonHandler);
function resultsButtonHandler(event) {
	let stringified = JSON.stringify(myTurn);
	localStorage.setItem("results", stringified);
	window.location.href = "result.html";
}
