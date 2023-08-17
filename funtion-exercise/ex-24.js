let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let not__prime = numbers.filter((numbers) => {
  let count = 0;
  for (let i = numbers - 1; i >= 1; i--) {
    if (numbers % i == 0) {
      count += i;
    }
  }
  if (count !== 1) {
    return "not prime number";
  }
});
console.log(not__prime);
