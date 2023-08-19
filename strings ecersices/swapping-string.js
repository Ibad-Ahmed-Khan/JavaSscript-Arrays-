// program to get a single string from two given strings, separated by a space and swap
// the first two characters of each string.
// Sample String : 'abc', 'xyz'
// Expected Result : 'xyc abz'
let str = ["abc ", "xyz"];
let str1 = str[0].split("");
let str2 = str[1].split("");
for (let i = 0; i < 1; i++) {
  [str1[0], str1[1], str2[0], str2[1]] = [str2[0], str2[1], str1[0], str1[1]];
}
str1 = str1.toString();
str2 = str2.toString();
console.log(str1, str2);
