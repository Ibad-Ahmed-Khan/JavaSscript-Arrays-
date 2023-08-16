// function that takes a number as a parameter and checks whether the number is prime or not.
function primenumber(n) {
  if (n % 2 == 0) {
    if (n == 2) {
      return n + " " + "is prime number";
    }
    return n + " " + "not prime number";
  }

  if (n % 3 == 0) {
    if (n == 3) {
      return n + " " + "is prime number";
    }
    return n + " " + "not prime number";
  }

  if (n % 5 == 0) {
    if (n == 5) {
      return n + " " + "is prime number";
    }
    return n + " " + "not prime number";
  } else {
    return n + " " + "is prime number";
  }
}
let Result = primenumber(111);
console.log(Result);
