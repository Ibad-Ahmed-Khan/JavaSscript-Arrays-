// function to insert a string in the middle of a string.
// Sample function and result :
// insert_sting_middle('[[]]<<>>', 'Python') -> [[Python]]
// insert_sting_middle('{{}}', 'PHP') -> {{PHP}}
let str = "javaScript";
let left = "[";
let right = "]";
str = left + left + str + right + right;
console.log(str);
