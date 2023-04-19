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
const wordIndex = 0;

function listSelectHandler(event) {
	let words = event.target.value;
	let name = document.getElementById("name").value;
	// fetch the word list from wordList
	currentWordList = wordList[words];
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
