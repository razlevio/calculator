/**
 * Addition function
 * @param {Number} num1
 * @param {Number} num2
 * @returns sum of num1 and num2
 */
function add(num1, num2) {
  return num1 + num2;
}

/**
 * Subtraction function
 * @param {Number} num1
 * @param {Number} num2
 * @returns subtraction of num2 from num1
 */
function subtract(num1, num2) {
  return num1 - num2;
}

/**
 * Multiplication function
 * @param {Number} num1
 * @param {Number} num2
 * @returns the product of num1 and num2
 */
function multiply(num1, num2) {
  return num1 * num2;
}

/**
 * Division function
 * @param {Number} num1
 * @param {Number} num2
 * @returns the division of num1 by num3
 */
function divide(num1, num2) {
  return num1 / num2;
}

/**
 * Math operation function
 * @param {Number} num1
 * @param {String} operator
 * @param {Number} num2
 * @returns Return calculation of num1 operator num2 whereas operator could be + / - *
 */
function operate(operator, num1, num2) {
  num1 = Number(num1);
  num2 = Number(num2);
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "−":
      return subtract(num1, num2);
    case "×":
      return multiply(num1, num2);
    case "÷":
      return divide(num1, num2);
    default:
      return null;
  }
}

/**
 * Function to update the calculator screen value
 * @param {Number} value indicates the value of the button
 */
function appendNumber(number) {
  if (currentOperationScreen.textContent === "0" || shouldResetScreen)
    resetScreen();
  currentOperationScreen.textContent += number;
}

/**
 * Function to clear the calculator screen
 */
function clear() {
  currentOperationScreen.textContent = "0";
  lastOperationScreen.textContent = "";
  firstOperand = "";
  secondOperand = "";
  currentOperation = null;
}

/**
 * Function to reset the calculator screen
 */
function resetScreen() {
  currentOperationScreen.textContent = "";
  shouldResetScreen = false;
}

/**
 * Function to delete the last digit inserted to the calculator
 */
function deleteNumber() {
  currentOperationScreen.textContent = currentOperationScreen.textContent
    .toString()
    .slice(0, -1);
}

/**
 * Function to set the intended math operation +, -, /, or * and evaluate the equation
 * @param {String} operator
 */
function setOperation(operator) {
  if (currentOperation !== null) evaluate();
  firstOperand = currentOperationScreen.textContent;
  currentOperation = operator;
  lastOperationScreen.textContent = `${firstOperand} ${currentOperation}`;
  shouldResetScreen = true;
}

/**
 * Function to append a dot to the calculator screen input
 */
function appendDot() {
  if (shouldResetScreen) resetScreen();
  if (currentOperationScreen.textContent === "")
    currentOperationScreen.textContent = "0";
  if (currentOperationScreen.textContent.includes(".")) return;
  currentOperationScreen.textContent += ".";
}

/**
 * Function to handle when input inserted from keyboard instead clicking on the buttons
 * @param {event object} e
 */
function handleKeyboardInput(e) {
  if (e.key >= 0 && e.key <= 9) appendNumber(e.key);
  if (e.key === ".") appendDot();
  if (e.key === "=" || e.key === "Enter") evaluate();
  if (e.key === "Backspace") deleteNumber();
  if (e.key === "Escape") clear();
  if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/")
    setOperation(convertOperator(e.key));
}

/**
 * Function to round the equation result
 * @param {Number} number
 * @returns rounded number
 */
function roundResult(number) {
  return Math.round(number * 1000) / 1000;
}

/**
 * Function to evaluate the equation and make the intended calculation
 */
function evaluate() {
  if (currentOperation === null || shouldResetScreen) return;
  if (currentOperation === "÷" && currentOperationScreen.textContent === "0") {
    alert("You can't divide by 0!");
    return;
  }
  secondOperand = currentOperationScreen.textContent;
  currentOperationScreen.textContent = roundResult(
    operate(currentOperation, firstOperand, secondOperand)
  );
  lastOperationScreen.textContent = `${firstOperand} ${currentOperation} ${secondOperand} =`;
  currentOperation = null;
}

/**
 * Function to convert the regular math operators into their corresponding unicode operators
 * Like from * -> ×
 * @param {String} keyboardOperator
 * @returns Unicode representation of the operator
 */
function convertOperator(keyboardOperator) {
  if (keyboardOperator === "/") return "÷";
  if (keyboardOperator === "*") return "×";
  if (keyboardOperator === "-") return "−";
  if (keyboardOperator === "+") return "+";
}

// Calculator screen objects to represent the screen values
const lastOperationScreen = document.getElementById("lastOperationScreen");
const currentOperationScreen = document.getElementById("currentOperationScreen");
let firstOperand = "";
let secondOperand = "";
let currentOperation = null;
let shouldResetScreen = false;

// Buttons
const zero = document.querySelector("#zero");
const dot = document.querySelector("#dot");
const equal = document.querySelector("#equal");
const addition = document.querySelector("#addition");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const subtraction = document.querySelector("#subtraction");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const multiplication = document.querySelector("#multiplication");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const division = document.querySelector("#division");
const delBtn = document.querySelector("#deleteBtn");
const clearBtn = document.querySelector("#clearBtn");

// Clear the screen and delete previous number that inserted
clearBtn.addEventListener("click", clear);
delBtn.addEventListener("click", deleteNumber);

// Numbers event listeners
zero.addEventListener("click", () => appendNumber(zero.textContent));
one.addEventListener("click", () => appendNumber(one.textContent));
two.addEventListener("click", () => appendNumber(two.textContent));
three.addEventListener("click", () => appendNumber(three.textContent));
four.addEventListener("click", () => appendNumber(four.textContent));
five.addEventListener("click", () => appendNumber(five.textContent));
six.addEventListener("click", () => appendNumber(six.textContent));
seven.addEventListener("click", () => appendNumber(seven.textContent));
eight.addEventListener("click", () => appendNumber(eight.textContent));
nine.addEventListener("click", () => appendNumber(nine.textContent));

// Operators event listeners
addition.addEventListener("click", () => setOperation(addition.textContent));
subtraction.addEventListener("click", () =>
  setOperation(subtraction.textContent)
);
multiplication.addEventListener("click", () =>
  setOperation(multiplication.textContent)
);
division.addEventListener("click", () => setOperation(division.textContent));
equal.addEventListener("click", evaluate);
dot.addEventListener("click", appendDot);

// Keyboard events listener
window.addEventListener("keydown", handleKeyboardInput);
