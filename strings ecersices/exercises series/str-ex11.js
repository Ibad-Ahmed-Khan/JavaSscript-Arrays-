// program to remove characters that have odd index values in a given string.
let str = "123456789";
for (let i = 0; i < str.length; i++) {
  if (str[i] % 2 == 0) {
    console.log(str[i]);
  }
}
