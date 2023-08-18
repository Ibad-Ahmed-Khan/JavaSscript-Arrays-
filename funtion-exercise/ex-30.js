// Given a matrix (2D array) of numbers, use nested map functions to increment
//  each number by 1.
let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let Output = arr.map((arr) => arr.map((arr) => arr + 1));
console.log(Output);
