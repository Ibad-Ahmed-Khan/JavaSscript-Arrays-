let arr = [30, 10, 20, 20, 10, 10, 30, 50, 10, 50, 50, 50].sort();
let totalpairs = 0;
for (i = 0; i < arr.length; ) {
  let arrayItem = arr[i];
  let nextItem = arr[i + 1];
  if (arrayItem == nextItem) {
    i = i + 2;
    totalpairs++;
  } else {
    i++;
  }
}
console.log("total pairs are", totalpairs);
