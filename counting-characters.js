// Write a JavaScript program to count the number of characters (character frequency) in a string.
// Sample String : google.com'
let str = "google.com".split("");
let count = 1;
for (let i = 0; i < str.length; i++) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] > str[i + 1]) {
      [str[i], str[i + 1]] = [str[i + 1], str[i]];
    }
  }
}
for (let i = 0; i < str.length; i++) {
  if (str[i] == str[i + 1]) {
    count++;
  } else {
    let value = [str[i], count].toString();
    count = 1;
    console.log(value);
  }
}
