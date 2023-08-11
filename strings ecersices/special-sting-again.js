let arr = ["mnonopoo"];
let string = arr[0];
let item = 0;
for (let i = 0; i < string.length; i++) {
  console.log(string[i]);
}
for (let i = 0; i < string.length; i++) {
  if (string[i] == string[i + 2]) {
    console.log(string[i], string[i + 1], string[i + 2]);
  }
  if (string[i] == string[i + 1]) {
    console.log(string[i], string[i + 1]);
  }
  if (string[i] == string[i + 3]) {
    console.log(string[i], string[i + 1], string[i + 2], string[i + 3]);
  }
}
