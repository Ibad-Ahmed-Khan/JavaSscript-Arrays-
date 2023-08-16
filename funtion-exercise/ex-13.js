//  function to check whether a number is "Perfect" or not.
// Example : The first perfect number is 6, because 1, 2, and 3 are its proper
//  positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal
// to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6.
//  The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed
//  by the perfect numbers 496 and 8128.
function perfect__divisors(n) {
  let count = 0;
  for (let i = n - 1; i >= 1; i--) {
    if (n % i == 0) {
      count += i;
    }
  }
  if (n == count) {
    console.log(count + " " + "is a perfect divisors");
  } else {
    console.log(count + " " + "is not a perfect divisors");
  }
}
console.log(perfect__divisors(28));
