for (let i = 5; i >= 1; i--) {
  let fact = i * (i - 1);
  for (let j = i - 2; j >= 1; j--) {
    fact = fact * j;
  }
  console.log(fact);
  break;
}

// 5  * 4 = 20;
// 20 * 3  = 60;
// 60 * 2  = 120;
//120 * 1  = 120;
