let arr = [1, 2, 3, 4, 5, 6, 7];
let sub__array = [1, 3, 5, 6, 8];
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (arr[i] == sub__array[j]) {
      console.log("union are", arr[i]);
    }
  }
}
