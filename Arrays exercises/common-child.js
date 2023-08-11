let arr = ["ABCDEF", "FBDAMN"];
let string1 = arr[0].split("");
let string2 = arr[1].split("");
for (let i = 0; i < string1.length; i++) {
  if (string1[i] == string2[i]) {
    console.log(string1[i]);
  }
  if (string1[i] == string2[i - 1]) {
    console.log(string1[i]);
  }
  if (string1[i] == string2[i + 1]) {
    console.log(string1[i]);
  }
}
