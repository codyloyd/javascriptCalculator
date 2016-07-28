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
  $(".display").html(temporaryWorkingNumber)
  $(".button").click(function(){
    var input = this.innerHTML
    if (input === "=") {
      calculatorStack.push(temporaryWorkingNumber)
      calculatorStack.push(performOperation(calculatorStack,operator))
      $(".display").html(calculatorStack[calculatorStack.length-1])
      userIsEnteringNumber = false
    } else if (input === "ac"){
      calculatorStack = []
      temporaryWorkingNumber = 0
      userIsEnteringNumber = true
      $(".display").html(temporaryWorkingNumber)
    } else {
      if (!isNaN(parseInt(input))) {
        if (userIsEnteringNumber) {
          temporaryWorkingNumber = (temporaryWorkingNumber * 10) + parseInt(input)
        } else {
          userIsEnteringNumber = true
          temporaryWorkingNumber = parseInt(input)
        }
        $(".display").html(temporaryWorkingNumber)
      } else {
        if (userIsEnteringNumber) {
          calculatorStack.push(temporaryWorkingNumber)
          operator = input
          temporaryWorkingNumber = 0
          userIsEnteringNumber = false
        } else {
          userIsEnteringNumber = true
          operator = input
          temporaryWorkingNumber = 0
        }
      }
    }
  });
});
