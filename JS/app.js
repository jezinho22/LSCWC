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
// this should produce an object with key:value pairs for
// the frequency of each mispelled word
Turn.prototype.countMisspelled = function () {
	let x = this.misspelled;
	let count = {};
	this.misspelled.forEach(function (item) {
		count[item] = count[item] + 1 || 1;
	});
	return count;
};
