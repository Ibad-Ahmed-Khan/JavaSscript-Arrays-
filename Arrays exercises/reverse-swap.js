let arr = [4, 3, 1, 2, 7, 6, 5, 1, 6];
for (let i = 0; i < arr.length / 2; i++) {
  [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
}
for (let j = 0; j < arr.length; j++) {
  console.log(arr[j]);
}
