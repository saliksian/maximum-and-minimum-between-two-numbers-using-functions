let number1 = 100;
let number2 = 90;

maximum(number1, number2);
minimum(number1, number2);

function maximum(num1, num2) {
  if (num1 > num2) {
    return console.log("1st number is grater: " + num1);
  } else if (num1 == num2) {
    console.log("Both numbers are equal: " + num1 + " & " + num2);
  } else if (num1 < num2) {
    return console.log("2nd number is graeter: " + num2);
  }
}
function minimum(num1, num2) {
  if (num1 < num2) {
    return console.log("1st number is smaller: " + num1);
  } else if (num1 == num2) {
    console.log("Both numbers are equal: " + num1 + " & " + num2);
  } else if (num1 > num2) {
    return console.log("2nd number is smaller: " + num2);
  }
}


