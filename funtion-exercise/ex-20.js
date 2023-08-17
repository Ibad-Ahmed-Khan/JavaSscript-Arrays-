// Suppose you have an array of objects representing people and you want to
// filter out those younger than 18:
let people = [
  { name: "Nasir Bhai", age: 25 },
  { name: "Suleman", age: 15 },
  { name: "Ibad", age: 20 },
  { name: "Waleed", age: 17 },
];

let check = people.filter((people) => people.age >= 18);
console.log(check);
