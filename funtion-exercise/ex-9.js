// function that takes a number as a parameter and checks whether the number is prime or not.
// Updated prime 2.O
function lcm(n) {
  n = 11;
  let count = 0;
  for (let i = n - 1; i >= 1; i--) {
    if (n % i == 0) {
      count += i;
    }
  }
  if (count == 1) {
    return "its a prime number";
  } else {
    return "its not a prime number";
  }
}
console.log(lcm());
