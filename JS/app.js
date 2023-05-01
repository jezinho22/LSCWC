function Word(language, word, strategy, speak, compare) {
	this.language = language;
	this.word = word;
	this.strategy = strategy;
	this.speak = speak;
	this.compare = compare;
}

Word.prototype.sayWord = function () {
	if (this.language == "Japanese") {
		utterance.voicesAvailable[13];
	} else if (this.language == "English") {
		utterance.voicesAvailable[2];
	} else if (this.language == "Spanish") {
		utterance.voicesAvailable[2];
	}
};

function Turn(name, list) {
	this.name = name;
	this.list = list;
	this.misspelled = [];
}

Turn.prototype.addMisspelled = function (misspelled) {
	this.misspelled.push(misspelled);
};

// set voice to use - seems to change
let voicesAvailable = speechSynthesis.getVoices();
function textToSpeech(message) {
	utterance = new SpeechSynthesisUtterance(message);
	// voicesAvailable[0] is make English
	// [1] and [2] are female English, [13] is Japanese
	utterance.voice = voicesAvailable[2];
	speechSynthesis.speak(utterance);
}

for (let x = 0; x < voicesAvailable.length; x++) {
	console.log("My voice " + voicesAvailable[x]);
}
