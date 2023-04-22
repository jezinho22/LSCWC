function textToSpeech(message) {
	utterance = new SpeechSynthesisUtterance(message);
	voicesAvailable = speechSynthesis.getVoices();
	// voicesAvailable[0] is make English
	// [1] and [2] are female English, [13] is Japanese
	utterance.voice = voicesAvailable[2];
	speechSynthesis.speak(utterance);
}
