function add(x,y) {
  return x + y
};

function multiply(x,y) {
  return x*y
};

function divide(x,y) {
  return x/y
};

function subtract(x,y) {
  return x - y
};

$(document).ready(function(){
  $(".button").click(function(){
    console.log(this.innerHTML)
  });
});
