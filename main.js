let numDisplay = document.querySelector("#numDisplay").innerText;

function eventAllButtons() {
    let btns = document.getElementsByTagName("button");
    for (i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
            console.log(this.innerText);
            console.log(numDisplay);
        });
    }
}

window.addEventListener("load", function () {
    eventAllButtons();
});

console.log(numDisplay);










/*
document.querySelector(".calc-btn").addEventListener("click", function () {
    this.style.color = "red";
})

console.log(numDisplay.innerText);
*/