let arr = ["AABBCCDDEE"];
let string1 = arr[0];
for (let i = 0; i < string1.length; i++) {
  if (string1[i] !== string1[i + 1]) {
    console.log(string1[i]);
  }
}
