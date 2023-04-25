function textToSpeech(message) {
	utterance = new SpeechSynthesisUtterance(message);
	voicesAvailable = speechSynthesis.getVoices();
	// voicesAvailable[0] is make English
	// [1] and [2] are female English, [13] is Japanese
	utterance.voice = voicesAvailable[2];
	speechSynthesis.speak(utterance);
}

function dropHandler(ev) {
	console.log("File(s) dropped");

	// Prevent default behavior (Prevent file from being opened)
	ev.preventDefault();

	if (ev.dataTransfer.items) {
		// Use DataTransferItemList interface to access the file(s)
		[...ev.dataTransfer.items].forEach((item, i) => {
			// If dropped items arent files, reject them
			if (item.kind === "file") {
				const file = item.getAsFile();
				console.log(`… file[${i}].name = ${file.name}`);
			}
		});
	} else {
		// Use DataTransfer interface to access the file(s)
		// go through the files and show in console
		[...ev.dataTransfer.files].forEach((file, i) => {
			console.log(`… file[${i}].name = ${file.name}`);
		});
	}
}

function dragOverHandler(ev) {
	console.log("File(s) in drop zone");

	// Prevent default behavior (Prevent file from being opened)
	ev.preventDefault();
}

const myCSV = "a, b, x\nc, d, y\ne,f, z";

function simplerWay(data, delimiter = ",") {
	// split text into arrays at line breaks
	let allRows = data.split("\n");

	// split row arrays at commas
	let csvArray = allRows.map((row) => row.split(delimiter));

	return csvArray;
}
console.log(simplerWay(myCSV));
