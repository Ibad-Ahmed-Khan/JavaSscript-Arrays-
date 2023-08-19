//  Given an array of objects, use the map function to transform the objects
// based on specific rules. For example, for each object, you should:
// Double the id property
// Reverse the name property
// Remove the gender property
let arr = [
  { id: 1, name: "John", gender: "male" },
  { id: 2, name: "Jane", gender: "female" },
];

let output = arr.map((change) => {
  return {
    id: change.id * 2,
    name: change.name.split("").reverse().join(""),
  };
});
console.log(output);
