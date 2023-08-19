//  program to reverse a string.
// Sample String : "1234abcd"
// Expected Output : "dcba4321"
// function reverse() {}
function reverseString(a) {
  return a.split("").reverse().join("");
}
z = reverseString("1234abcd");
console.log(z);
