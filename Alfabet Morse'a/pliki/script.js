const dot = document.getElementById("dot");
const dash = document.getElementById("dash");
const text = document.getElementById("znaki");

function wpiszDot() {
    text.innerHTML += dot.value;
}

function wpiszDash() {
    text.innerHTML += dash.value;
}

function resetText() {
    text.innerHTML = "";
}

function spaceBar() {
    text.innerHTML += " ";
}