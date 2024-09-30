let curr_input = "0";
let firstElement = null;
let secondElement = null;
let operator = "";


const screenInput = document.getElementById('screen-input');
screenInput.textContent = curr_input;
function clearMem() {
    operator = "";
    firstElement = 0.0;
    secondElement = "";
}

function operate() {
    if (curr_input != "") {
        secondElement = parseFloat(curr_input);
        if (operator == "+") {
            sum = firstElement + secondElement;
            curr_input = sum.toString();
            clearMem();
            screenInput.textContent = curr_input;
        }
        if (operator == "-") {
            difference = firstElement - secondElement;
            curr_input = difference.toString();
            clearMem();
            screenInput.textContent = curr_input;
        }
        if (operator == "x") {
            product = firstElement * secondElement;
            curr_input = product.toString();
            clearMem();
            screenInput.textContent = curr_input;
        }
        if (operator == "div") {
            quotient = firstElement / secondElement;
            curr_input = quotient.toString();
            clearMem();
            screenInput.textContent = curr_input;
        }
    }
}
const numkeys = document.querySelectorAll(".numkey")
numkeys.forEach((numkey) => {
    numkey.addEventListener("click", function (e) {
    const digit = e.target.getAttribute('aria-label');
    if (curr_input == "0") {
        curr_input = "";
    }
    curr_input += digit;
    screenInput.textContent = curr_input;
  })});

  const clearkey = document.querySelector(".clear")
  clearkey.addEventListener("click", function() {
    curr_input = "0";
    screenInput.textContent = curr_input;
    clearMem();
  })

  const dotkey = document.querySelector(".dot")
  dotkey.addEventListener("click", function(){
    if (!curr_input.includes(".")) {
        curr_input += "."
        screenInput.textContent = curr_input;
    }
  })

  const operatorKeys = document.querySelectorAll(".op");
  operatorKeys.forEach((operatorKey) =>
    operatorKey.addEventListener("click", function(e) {
    firstElement = parseFloat(curr_input);
    operator = e.target.getAttribute('aria-label');
    curr_input = "";
    screenInput.textContent = curr_input;
  }))

  const equalKey = document.querySelector(".equals");
  equalKey.addEventListener("click", function() {
    operate();
  })