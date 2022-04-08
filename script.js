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
function operate(num1, operator, num2) {
  switch (operator) {
    case "+":
      return add(num1, num2);
      break;
    case "-":
      return subtract(num1, num2);
      break;
    case "*":
      return multiply(num1, num2);
      break;
    case "/":
      return divide(num1, num2);
      break;
    default:
      console.log("Wrong input for OPERATE function");
  }
}

/**
 * Function to update the calculator screen value
 * @param {Number} value indicates the value of the button
 */
function populateDisplay(value) {
  if (displayValue == "0" && value == "0") {
    displayValue = "0";
  } else if (value == "." && displayValue.includes(".")) {
    return
  } else {
    displayValue += value;
  }
  screenCurrent.textContent = Number(displayValue).toLocaleString("en-US");
}

/**
 * Function to clear and reset the calculator screen
 */
function clear() {
  displayValue = "0";
  screenCurrent.textContent = "0";
  screenPrevious.textContent = "";
}

/**
 * Function to delete the last digit inserted to the calculator
 */
function deleteNum() {
  displayValue = displayValue.slice(0, -1);
  screenCurrent.textContent = Number(displayValue).toLocaleString("en-US");
}

function handleKeyboardInput(e) {
  if (e.key >= 0 && e.key <= 9) populateDisplay(e.key)
  if (e.key === '.') populateDisplay(e.key)
  //if (e.key === '=' || e.key === 'Enter') evaluate()
  //if (e.key === 'Backspace') deleteNumber()
  //if (e.key === 'Escape') clear()
  //if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/')
  //  setOperation(convertOperator(e.key))
}

// Calculator screen objects to represent the screen values
const screenCurrent = document.querySelector("#currentOperationScreen");
const screenPrevious = document.querySelector("#lastOperationScreen");
let displayValue = "";
let equation = "";
let operand = "";

// first row
const zero = document.querySelector("#zero");
const dot = document.querySelector("#dot");
const equal = document.querySelector("#equal");
const addition = document.querySelector("#addition");

// second row
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const subtraction = document.querySelector("#subtraction");

// third row
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const multiplication = document.querySelector("#multiplication");

// fourth row
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const division = document.querySelector("#division");

// buttons bar
const delBtn = document.querySelector("#deleteBtn");
const clearBtn = document.querySelector("#clearBtn");

// delete previous number that inserted
delBtn.addEventListener("click", deleteNum);

// clear the screen
clearBtn.addEventListener("click", clear);

// Numbers event listeners
zero.addEventListener("click", () => populateDisplay("0"));
one.addEventListener("click", () => populateDisplay("1"));
two.addEventListener("click", () => populateDisplay("2"));
three.addEventListener("click", () => populateDisplay("3"));
four.addEventListener("click", () => populateDisplay("4"));
five.addEventListener("click", () => populateDisplay("5"));
six.addEventListener("click", () => populateDisplay("6"));
seven.addEventListener("click", () => populateDisplay("7"));
eight.addEventListener("click", () => populateDisplay("8"));
nine.addEventListener("click", () => populateDisplay("9"));

// Operators event listeners
dot.addEventListener("click", () => populateDisplay("."))
//equal.addEventListener("click")
// Keyboard events listener
window.addEventListener("keydown", handleKeyboardInput)


