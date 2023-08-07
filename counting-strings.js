let arr = ["aababcbbbccc"];
let string = arr[0].split("").sort();
let count = 1;
for (let i = 0; i < string.length; i++) {
  if (string[i] == string[i + 1]) {
    count++;
  } else {
    value = [count, string[i]];
    count = 1;
    console.log(value);
  }
}
