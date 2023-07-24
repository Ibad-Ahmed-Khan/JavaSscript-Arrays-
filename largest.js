let arr = [-99, 113, 2, 4, 5, 6, 7, 8, 99];
let max = 0;
for (let i = 0; i < arr.length; i++) {
  let n = arr[i];
  if (n > max) {
    max = n;
  }
}
console.log(max, "is the largest value in arr");
