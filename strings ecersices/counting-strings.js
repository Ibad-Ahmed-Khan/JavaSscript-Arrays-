let arr = ["bbbsfojfhahhajnj"];
let string = arr[0].split("");
for (let i = 0; i < string.length; i++) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] > string[i + 1]) {
      [string[i], string[i + 1]] = [string[i + 1], string[i]];
    }
  }
}
let count = 1;
for (i = 0; i < string.length; i++) {
  if (string[i] == string[i + 1]) {
    count++;
  } else {
    let value = [count, string[i]];
    count = 1;
    console.log(value);
  }
}
