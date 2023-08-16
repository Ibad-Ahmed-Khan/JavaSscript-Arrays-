// function that takes a list and returns a new list with distinct elements from
//  the first list.
// Sample List : [1,2,3,3,3,3,4,5]
// Unique List : [1, 2, 3, 4, 5]
function union() {
  let union = [];
  arr = [1, 2, 3, 3, 3, 3, 4, 5];
  for (let i = 0; i < arr.length; i++) {
    if (union.indexOf(arr[i]) == -1) {
      union.push(arr[i]);
    }
  }
  return union;
}
console.log(union());
