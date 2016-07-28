function add(x,y) {
  return x+y
}

function multiply(x,y) {
  return x*y
};

function divide(x,y) {
  return x/y
};

function subtract(x,y) {
  return x - y
};

function performOperation(calculatorStack, operator) {
  if (operator == "+") {
    return add(calculatorStack[calculatorStack.length-2],calculatorStack[calculatorStack.length-1]);
  } else if (operator == "-") {
    return subtract(calculatorStack[calculatorStack.length-2],calculatorStack[calculatorStack.length-1]);
  } else if (operator == "×"){
    return multiply(calculatorStack[calculatorStack.length-2],calculatorStack[calculatorStack.length-1]);
  } else if (operator == "÷") {
    return divide(calculatorStack[calculatorStack.length-2],calculatorStack[calculatorStack.length-1]);
  }
};

var calculatorStack = []
var userIsEnteringNumber = true
var temporaryWorkingNumber = 0
var operator = ""

$(document).ready(function(){
  $(".button").click(function(){
    var input = this.innerHTML
    if (input === "=") {
      calculatorStack.push(temporaryWorkingNumber)
      calculatorStack.push(performOperation(calculatorStack,operator))
      console.log(calculatorStack)
      temporaryWorkingNumber = 0
    } else {
      if (!isNaN(parseInt(input))) {
        temporaryWorkingNumber = (temporaryWorkingNumber * 10) + parseInt(input)
      } else {
        calculatorStack.push(temporaryWorkingNumber)
        operator = input
        temporaryWorkingNumber = 0
      }
    }
  });
});
