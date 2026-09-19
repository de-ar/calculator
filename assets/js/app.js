function appendToScreen(symbol) {
    const screen = document.getElementById("screen");
    screen.value += symbol;
}

function appendDigit(digit) {
    appendToScreen(digit);
}

function pressDivide() {
    appendToScreen("/");
}

function pressMultiply() {
    appendToScreen("*");
}

function pressAdd() {
    appendToScreen("+");
}

function pressSubtract() {
    appendToScreen("-");
}

function pressPoint() {
    appendToScreen(".");
}

function evaluate() {
    document.getElementById("result").value = eval(document.getElementById("screen").value);
}

function clearScreen() {
    document.getElementById("screen").value = "";
}
