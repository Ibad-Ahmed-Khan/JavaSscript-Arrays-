arr = [7, 5, , 1, 3, 5, 2, 4, 8, 9, 6, 10];
for (let i = 0; i < arr.length; i++) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    }
  }
}
console.log(arr);
for (let i = 0; i < arr.length / 2; i++) {
  [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
}
