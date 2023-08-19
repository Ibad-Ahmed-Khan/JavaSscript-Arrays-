//  program to get the last part of a string before a specified character.
// https://www.w3resource.com/python-exercises
// https://www.w3resource.com/python
let str = "www.w3resource.com / JavaScript - exercises".split(" ");
let final = str
  .slice(0, str.length - 1)
  .toString()
  .replaceAll(",", " ");
console.log(final);
