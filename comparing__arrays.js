let arr1 = [51, 39, 59, 78];
let arr2 = [59, 39, 51];
arr1.sort();
arr2.sort();
console.log(arr1, arr2);
// for (let i = 0; i < arr1.length; i++) {
//   if (arr1[i] != arr2[i]) {
//     console.log("not same");
//     // i want a break here if the condition is true.
//   } else {
//     console.log("same");
//   }
// }

for (let i = 0; i < 1; i++) {
  if (arr1[i] == arr2[i]) {
    console.log("same");
  }
}
