function Word(language, word, strategy, speak, compare) {
	this.language = language;
	this.word = word;
	this.strategy = strategy;
	this.speak = speak;
	this.compare = compare;
}

Word.prototype.chooseSpeaker = function () {
	if (this.language == "Japanese") {
		utterance.voicesAvailable[13];
	} else if (this.language == "English") {
		utterance.voicesAvailable[2];
	} else if (this.language == "Spanish") {
		utterance.voicesAvailable[7];
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
	speechSynthesis.speak(utterance);
}
