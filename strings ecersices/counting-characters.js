// Write a JavaScript program to count the number of characters (character frequency) in a string.
// Sample String : google.com'
let str = "google.com".split("").sort();
let count = 1;

for (let i = 0; i < str.length; i++) {
  if (str[i] == str[i + 1]) {
    count++;
  }
  if (str[i] !== str[i + 1]) {
    let value = [str[i], count++].toString();
    count = 1;
    console.log(value);
  }
}
