//  function to get a string made of 4 copies of the last two characters of a specified string.
// (length must be at least 2).
// Sample function and result :
// insert_end('Python') -> onononon
// insert_end('Exercises') -> eseseses
let str = "Exercises";
let last_letters = str[str.length - 2] + str[str.length - 1];
console.log(last_letters + last_letters + last_letters + last_letters);
