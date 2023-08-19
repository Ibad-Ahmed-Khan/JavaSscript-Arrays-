// program to print the even numbers from a given list.
// Sample List : [1, 2, 3, 4, 5, 6, 7, 8, 9]
// Expected Result : [2, 4, 6, 8]

function even() {
  let add__arr = [];
  for (let i = 2; i <= 20; i++) {
    if (i % 2 == 0) {
      add__arr.push(i + " " + "is even");
    }
  }
  return add__arr;
}
let Result = even();
console.log(Result);
