// function to create an HTML string with tags around the word(s).
// Sample function and result :
// add_tags('i', 'Python') -> '<i>Python</i>'
// add_tags('b', 'Python Tutorial') -> '<b>Python Tutorial </b>'
let str = "i javaScript".split(" ");
let left = "<";
let right = ">";
let space = " ";
let final =
  left + str[0] + right + space + str[1] + space + left + str[0] + right;
console.log(final);
