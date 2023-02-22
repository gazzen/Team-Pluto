function getCurrentNumber(){
  return Number(document.getElementById("counter-display").value);
}

function setCurrentNumber(newValue){
  document.getElementById("counter-display").value = newValue;
}

function addition(){
  var currentValue = getCurrentNumber();
  setCurrentNumber(currentValue + 1);
}

function subtraction(){
  var currentValue = getCurrentNumber();
  setCurrentNumber(currentValue - 1);
}

document.getElementById("decrement").addEventListener("click", subtraction);
document.getElementById("increment").addEventListener("click", addition);
