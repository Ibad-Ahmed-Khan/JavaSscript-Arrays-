let arr = [
  2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30,
];
let item;
console.log(2);
console.log(3);
console.log(5);
for (let i = 2; i < arr.length; i++) {
  item = arr[i];
  if (item % 2 !== 0) {
    if (item % 3 !== 0) {
      if (item % 5 !== 0) {
        console.log(item);
      }
    }
  }
}
