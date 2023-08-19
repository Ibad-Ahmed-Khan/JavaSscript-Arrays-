// 1st function start
function hi(space, firstname, space, lastname) {
  return "Hello" + space + firstname + space + lastname;
}
let c = hi(" ", "Nasir ", " ", "Bhai");
// 2nd function start
function minus(currentyear, birthyear) {
  return "i m" + " " + (currentyear - birthyear) + " " + "years old";
}
let d = minus(2023, 2002);
// output
console.log(c, d);
