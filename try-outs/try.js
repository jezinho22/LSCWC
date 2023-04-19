// let speakButton = document.querySelector("speak");
// speakButton.addEventListener("click", function () {
// 	speechSynthesis.speak(
// 		new SpeechSynthesisUtterance("Hello, this is your browser speaking.")
// 	);
// });

// toggle class of card container to get flip
let card = document.getElementById("flip-card");
card.addEventListener("click", cardFlip);

function cardFlip(event) {
	card.classList.toggle("flip-me");
}
