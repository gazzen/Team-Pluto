window.onload()



var whitePlayer = document.getElementById("button1");
var blackPlayer = document.getElementById("button2");

function whitePlayer(){
  const numberElement = document.getElementById("WhiteNumber");
  const number = parseInt(numberElement.innerHTML, 10) + 1;
  numberElement.innerHTML = number;
}

function blackPlayer(){
  const numberElement = document.getElementById("blackNumber");
  const number = parseInt(numberElement.innerHTML, 10) + 1;
  numberElement.innerHTML = number;
}



/*if(numberFunction < numFunction){
  return ("White Wins");

} 
else if (numFunction < numberFunction)
{
  return ("Blacks Wins");
} 
else
{
  return("nothing")
}*/

