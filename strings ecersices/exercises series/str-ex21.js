//  function to convert a given string to all uppercase if it contains at least
//  2 uppercase characters in the first 4 characters.
let str = "JavaSrcipt";
let count = 0;
let big = str.toUpperCase();
for (let i = 0; i < 4; i++) {
  if (str[i] == big[i]) {
    count++;
    if (count >= 2) {
      str = str.toUpperCase();
    }
  }
}
console.log(str);
