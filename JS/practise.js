let dropdownList = document.getElementById("dropdownList");
console.log("practise JS working");

for (let key in wordList) {
	console.log("working " + key);
	let opt = document.createElement("option");
	opt.value = key;
	opt.textContent = key;
	dropdownList.appendChild(opt);
}

let currentWordList = [];
let wordIndex = 0;
let myTurn = {};

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

dropdownList.addEventListener("change", listSelectHandler);

let typeIn = document.getElementById("typeIn");

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

typeIn.addEventListener("submit", textSubmit);
