
var Pro

function squareRoot (number) {
  return  number ** 0.5

  
}
function square (number) {
    return number * number
}
function multiply (number,number1) {
 return number * number1 
}
function divide (number,number1) {
    return number / number1 
   }
   

Pro = prompt("Write the pass")

if(Pro == 1){
    console.log(squareRoot(prompt("the number is")))
}

if(Pro ==2){
    console.log(square(prompt("the number is.")))

}
if (Pro == "please multiply"|| Pro == "Please Multiply" || Pro == 3){
    console.log(multiply(prompt("First number please"),prompt("and the second number")))
}
if ( Pro == 4){
    console.log(divide(prompt("First number please"),prompt("and the second number")))
}
