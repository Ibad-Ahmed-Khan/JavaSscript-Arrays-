// Given an array of objects, use the map function to extract a specific property from
//  each object.And change the names in Capitalize. Expected Output (for "name" property): ["John", "Jane", "Doe"]

let arr = [
  { name: "john", age: 25 },
  { name: "jane", age: 30 },
  { name: "doe", age: 28 },
];

let checkname = arr.map((arr) => arr.name);
let Output = checkname.map(
  (checkname) => checkname.charAt(0).toUpperCase() + checkname.slice(1)
);
console.log(Output);
