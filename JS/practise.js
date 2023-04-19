let dropdownList = document.getElementById("dropdownList");
console.log("practise JS working");

for (let key in wordList) {
    console.log("working " + key);
    let opt = document.createElement("option");
    opt.value = key;
    opt.textContent = key;
    dropdownList.appendChild(opt);
}
