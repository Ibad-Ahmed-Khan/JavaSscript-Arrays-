let item = 0;
let arr = [1, 2, 3, 4, 5, 6, 7];
let sub__array = [1, 3, 5, 8];
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < sub__array.length; j++)
    if (arr[i] == sub__array[j]) {
      item = arr[i];
    }
  if (arr[i] != item) {
    console.log("intersection are", arr[i]);
  }
}
