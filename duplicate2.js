let arr1 = [51, 39, 59, 78];
let arr2 = [59, 39, 78, 51];
let arrays__length = arr1.length + arr2.length;
arr1.sort();
arr2.sort();
for (let i = 0; i < arrays__length; i++) {
  if (arr1.length != arr2.length) {
    console.log("not same");
    break;
  }
  if (arr1[i] != arr2[i]) {
    console.log("not same");
    break;
  }
  if (arr1[i] == arr2[i]) {
    console.log("same");
  }
}
