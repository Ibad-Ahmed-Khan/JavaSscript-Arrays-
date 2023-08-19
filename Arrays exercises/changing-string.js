//  program to get a string from a given string where all occurrences of its first char
//  have been changed to '$', except the first char itself.

let str = "restart".split("");
for (let i = 0; i < str.length; i++) {
  if (str[0] == str[i + 1]) {
    str[i + 1] = "$";
  }
}
console.log(str.toString());
