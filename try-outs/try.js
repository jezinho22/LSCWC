let speakButton = document.querySelector("speak");
speakButton.addEventListener("click", function () {
	speechSynthesis.speak(
		new SpeechSynthesisUtterance("Hello, this is your browser speaking.")
	);
});
