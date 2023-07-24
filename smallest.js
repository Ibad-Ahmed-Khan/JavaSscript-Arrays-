let arr = [-99, 113, -902, 4, 5, 6, 7, -118, 99];
let min = 0;
for (let i = 0; i < arr.length; i++) {
  let n = arr[i];
  if (n < min) {
    min = n;
  }
}
console.log(min, "is the smallest value in arr");
