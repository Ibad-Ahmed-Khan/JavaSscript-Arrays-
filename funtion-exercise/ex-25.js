// Given an array of strings (names), return a new array where each name is capitalized.
let arr = ["ibad", "ahmed", "khan", "pahan", "lala", "batan"];

let check = arr.map((arr) => arr.charAt(0).toUpperCase() + arr.slice(1));
console.log(check);
