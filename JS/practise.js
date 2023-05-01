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
// set voice to use - seems to change
let voicesAvailable = speechSynthesis.getVoices();
function textToSpeech(message) {
	utterance = new SpeechSynthesisUtterance(message);
	// voicesAvailable[0] is make English
	// [1] and [2] are female English, [13] is Japanese
	utterance.voice = voicesAvailable[2];
	speechSynthesis.speak(utterance);
}

// actions on submitting each attempt at a word
function textSubmit(event) {
	event.preventDefault();
	let textbox = event.target.textInput.value;
	// compare attempt with actual word
	if (textbox.toLowerCase() === currentWordList[wordIndex][0]) {
		// if attempt is right remove card from pack
		currentWordList.shift();
		textToSpeech(
			"That is correct. I will remove it from the pack. The next word is"
		);
		alert("That is correct. I will remove it from the pack");

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
		alert(
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
