// function to calculate the resultorial of a number (a non-negative integer).
//  The function accepts the number as an argument.
// resultorial of 4 is 24.
function factorial(n) {
  let result = n;
  for (let i = result - 1; i > 1; i--) {
    result = result * i;
  }
  return "factorail of" + " " + n + " " + "is " + result;
}
console.log(factorial(5));
