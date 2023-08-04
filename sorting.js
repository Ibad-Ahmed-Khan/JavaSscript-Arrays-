let arr = [5, 3, 4, 1, 2, 10, 9, 7, 8, 6];
for (let i = 0; i < arr.length; i++) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    }
  }
}
for (let i = 0; i < arr.length / 2; i++) {
  [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
}
console.log(arr);
