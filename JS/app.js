function Word(word, strategy) {
	this.word = word;
	this.strategy = strategy;
}

function Turn(name, list) {
	this.name = name;
	this.list = list;
	this.misspelled = [];
}

Turn.prototype.addMisspelled = function (misspelled) {
	this.misspelled.push(misspelled);
};
