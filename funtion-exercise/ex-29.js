// Given an array of floating point numbers, use the map function to round up each number.
// Input: [1.2, 2.7, 3.1, 4.6, 5.9]
// Expected Output: [2, 3, 4, 5, 6]

let arr = [1.2, 2.7, 3.1, 4.6, 5.9];

let Output = arr.map((arr) => Math.ceil(arr));
console.log(Output);
