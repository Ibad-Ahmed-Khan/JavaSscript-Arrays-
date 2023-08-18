// Given an array of numbers, first filter out even numbers, then use the
//  map function to double the remaining even numbers.

let arr = [1, 2, 3, 4, 5];
let even = arr.filter((arr) => arr % 2 == 0);
output = even.map((even) => even * 2);
console.log(output);
