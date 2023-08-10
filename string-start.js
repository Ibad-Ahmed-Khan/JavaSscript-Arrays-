// program to get a string made of the first 2 and last 2 characters of a given string.
// If the string length is less than 2, return the empty string instead.
let str = "w3resource";
let length = str.length;
if (str.length < 2) {
  console.log("empty string");
} else {
  console.log(str.substring(0, 2), str.substring(length - 2));
}
