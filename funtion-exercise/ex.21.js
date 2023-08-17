// Filter out numbers that aren't prime
let check__prime = (n) => {
  let count = 0;
  for (let i = n - 1; i >= 1; i--) {
    if (n % i == 0) {
      count += i;
    }
  }
  if (count !== 1) {
    console.log("its not a prime number");
  } else {
    return "its a prime number";
  }
};
console.log(check__prime(2));
