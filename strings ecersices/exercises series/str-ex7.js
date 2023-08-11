// program to find the first appearance of the substrings 'not' and 'poor' in a given string.
//  If 'not' follows 'poor', replace the whole 'not'...'poor' substring with 'good'.
//  Return the resulting string.
// Sample String : 'The lyrics is not that poor!'
// 'The lyrics is poor!'
// Expected Result : 'The lyrics is good!'
// 'The lyrics is poor!'

let str = "The lyrics is not that poor!";
let str_updated = str.replace("not that ", "");
str_updated = str_updated.replace("poor", "good");
console.log(str_updated);
