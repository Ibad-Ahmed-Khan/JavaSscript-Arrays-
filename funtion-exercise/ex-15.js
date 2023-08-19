// Function that prints out the first n rows of Pascal's triangle.
// Sample Output:
// [1]
// [1, 1]
// [1, 2, 1]
// [1, 3, 3, 1]
// [1, 4, 6, 4, 1]
// [1, 5, 10, 10, 5, 1]
function Pascal() {
  let start = 1;
  for (let i = 0; i < 5; i++) {
    console.log(start);
  }
}
console.log(Pascal());
