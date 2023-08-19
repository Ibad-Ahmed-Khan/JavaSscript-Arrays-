let str = "123456789".split("");
//       1,2,3,4,5;
str = str.toString();
let count = 0;
for (let i = str.length - 1; i >= 0; i--) {
  count++;
  if (str[i] / 1) {
    console.log(str[i]);
  }
  if (str[i] == ",") {
    if (count % 6 == 0) {
      console.log(str[i]);
    }
  }
}
// console.log(str);
