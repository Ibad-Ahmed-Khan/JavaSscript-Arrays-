let arr = [7, 2, 3, 4, 5, 6, 2222, 1];
let max = 0;
for (i = 0; i < arr.length; i++)
  if (arr[i] < max) {
    max = arr[i];
  }
console.log(max);
