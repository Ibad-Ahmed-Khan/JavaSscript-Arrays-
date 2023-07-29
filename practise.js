let arr = [10, 20, 20, 10, 10, 30, 50, 10, 30, 20, 50, 20, 30].sort();
console.log({ arr, len: arr.length });
let totalPairs = 0;
for (let i = 0; i < arr.length; ) {
  let currentItem = arr[i];
  let nextItem = arr[i + 1];
  if (currentItem == nextItem) {
    totalPairs++; // totalPairs = totalPairs + 1
    i = i + 2;
  } else {
    i = i + 1;
  }
}
console.log({ totalPairs });
