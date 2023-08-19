// program to sort a string lexicographically.
let str = "javascript".split("");
for (let i = 0; i < str.length; i++) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] > str[i + 1]) {
      [str[i], str[i + 1]] = [str[i + 1], str[i]];
    }
  }
}
console.log(str.toString().replaceAll(",", " "));
