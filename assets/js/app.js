function appendDigit(p) {
    var a = document.getElementById("screen").value;
    a = a + p;
    document.getElementById("screen").value = a;
}

function pressDivide() {
    var a = document.getElementById("screen").value;
    a = a + "/";
    document.getElementById("screen").value = a;
}

function pressMultiply() {
    var a = document.getElementById("screen").value;
    a = a + "*";
    document.getElementById("screen").value = a;
}

function pressAdd() {
    var a = document.getElementById("screen").value;
    a = a + "+";
    document.getElementById("screen").value = a;
}

function pressSubtract() {
    var a = document.getElementById("screen").value;
    a = a + "-";
    document.getElementById("screen").value = a;
}

function pressPoint() {
    var a = document.getElementById("screen").value;
    a = a + ".";
    document.getElementById("screen").value = a;
}

function evaluate() {
    var a = document.getElementById("screen").value;
    document.getElementById("result").value = eval(a);
}

function clearScreen() {
    var a = document.getElementById("screen").value;
    document.getElementById("screen").value = null;
}
