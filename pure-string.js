let str1 = "AAABBB";
let count = 0;
for (let i = 0; i < str1.length; i++) {
  if (str1[i] == str1[i + 1]) {
    count++;
  }
}
console.log(count, "delections");
