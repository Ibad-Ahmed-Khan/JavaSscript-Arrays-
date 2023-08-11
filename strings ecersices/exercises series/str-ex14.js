// program that accepts a comma-separated sequence of words as input and prints
// the distinct words in sorted form (alphanumerically).
// Sample Words : red, white, black, red, green, black
// Expected Result : black, green, red, white,red
let str = "red white black red green black".split(",").sort();
console.log(str.toString());
