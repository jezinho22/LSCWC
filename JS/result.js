let stringy = localStorage.getItem("results");
let parsed = JSON.parse(stringy);

console.log(parsed);
// this should produce an object with key:value pairs for
// the frequency of each mispelled word
function countMisspellings(array) {
	let count = {};
	array.forEach(function (item) {
		count[item] = count[item] + 1 || 1;
	});
	return count;
}

console.log(countMisspellings(parsed.misspelled));

const tbody = document.querySelector("tbody");
let tr = document.createElement("tr");
let td = document.createElement("td");
td.textContent = parsed.name;
let td2 = document.createElement("td");
td2.textContent = parsed.list;

let td3 = document.createElement("td");
// calculate misspellings and frequency
let misspellStats = countMisspellings(parsed.misspelled);
for (let i in Object.keys(misspellStats)) {
	// add misspellings and frequency to string for display
	td3.textContent += i + ": " + misspellStats[i] + ", ";
}

tr.append(td, td2, td3);
tbody.appendChild(tr);
