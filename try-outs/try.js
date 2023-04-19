// let speakButton = document.querySelector("speak");
// speakButton.addEventListener("click", function () {
// 	speechSynthesis.speak(
// 		new SpeechSynthesisUtterance("Hello, this is your browser speaking.")
// 	);
// });
console.log("js working");
let clickMe = document.querySelector("#clickMe");
console.log(clickMe);

clickMe.addEventListener("change", function (event) {
	console.log("change event fired");
	console.log(event.target.value);
	console.log(document.querySelector("#name").value);
});
