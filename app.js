document.write("javascripr connected");
// calculator start
var firstNumber = parseInt(prompt("Enter first Number:"))
var secondNumber = parseInt(prompt("Enter second Number:"))
var operator = prompt("enter operator");

if (operator == "+") {
    alert(firstNumber + secondNumber);
} else if(operator == "-") {
    alert(firstNumber - secondNumber);
} else if(operator =="*") {
    alert(firstNumber * secondNumber);
} else if(operator =="/") {
    alert(firstNumber / secondNumber);
} else {
    alert("sorry you enter string");
}
// calculator end

// var firstNumber = prompt("enter first number:");
// var secondNumber = pronpt("enter second number:");




