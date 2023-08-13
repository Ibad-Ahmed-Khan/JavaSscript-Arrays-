// program to print the following numbers up to 2 decimal places.
let str = 136.652;
str = str.toString();
for (let i = 0; i < str.length; i++) {
  if (str[i] == ".") {
    let content = str.substring(0, [i - 1]);
    if (str[i + 1] >= 5) {
      let incriment = ~~str[i - 1] + 1;
      console.log(content + incriment);
    } else {
      let content = str.substring(0, [i]);
      console.log(content);
    }
  }
}
