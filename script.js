// The first part
// Convert C to F
var outputToC = document.getElementById("outp-toC"); // outputToC was created
var btnConvToC = document.getElementById("btn-toC"); // btnConvToC was created

btnConvToC.addEventListener("click", showToC);

function showToC() {
  let F = document.getElementById("inp-inF").value;
  let C = ((F - 32) * 5) / 9;
  C = C.toFixed(1);
  outputToC.innerHTML = "Temperature in Celsius: " + C;
}

// Cleaning the input 1 (by btn "convert")
var F = document.getElementById("inp-inF"); // F was created

btnConvToC.addEventListener("click", showCleanInp1);

function showCleanInp1() {
  F.value = "";
}

// Change the background of the 1st input
btnConvToC.addEventListener("click", showNewBackgr1);

function showNewBackgr1() {
  F.style.background = "#26d978";
}

// Refreshing the 1st part
// Refresh output
var refresh = document.getElementById("refr"); // Refresh was created

refresh.addEventListener("click", showFreshOutp1);

function showFreshOutp1() {
  outputToC.innerHTML = "Temperature in Celsius: ----";
}

// Refresh the background1
refresh.addEventListener("click", showFreshBackgr1);

function showFreshBackgr1() {
  F.style.background = "rgb(255, 255, 255)";
}

// The second part
// Convert F to C
var outputToF = document.getElementById("outp-toF"); // outputToF was created
var btnConvToF = document.getElementById("btn-toF"); // btnConvToF was created

btnConvToF.addEventListener("click", showToF);

function showToF() {
  let C1 = document.getElementById("inp-inC").value;
  F1 = (C1 * 9) / 5 + 32;
  F1 = F1.toFixed(1);
  outputToF.innerHTML = "Temperature in Fahrenheit: " + F1;
}

// Cleaning the input 2 (by btn "convert")
var C1 = document.getElementById("inp-inC"); // C1 was created

btnConvToF.addEventListener("click", showCleanInp2);

function showCleanInp2() {
  C1.value = "";
}

// Change the background of the 2nd input
btnConvToF.addEventListener("click", showNewBackgr2);

function showNewBackgr2() {
  C1.style.background = "#26d978";
}

// Refreshing the 2st part
// Refresh output
refresh.addEventListener("click", showFreshoutp2);

function showFreshoutp2() {
  outputToF.innerHTML = "Temperature in Fahrenheit: ----";
}

// Refresh the background2
refresh.addEventListener("click", showFreshBackgr2);

function showFreshBackgr2() {
  C1.style.background = "rgb(255, 255, 255)";
}
