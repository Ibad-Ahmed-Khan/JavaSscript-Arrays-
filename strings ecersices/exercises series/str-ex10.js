//  program to change a given string to a newly string where the first and last chars
// have been exchanged.
let str = "Nasir";
str = str[str.length - 1] + str.substring(1, str.length - 1) + str[0];
console.log(str);
