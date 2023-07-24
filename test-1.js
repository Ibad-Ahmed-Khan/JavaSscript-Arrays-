// <!-- // In this task we'd like you to create an array of three items, stored inside a variable called myArray.
// Next, modify the first two items in the array using simple bracket notation and assignment. Then add a new item to the beginning of the array. -->

let arr = ["item-1", "item-2", "item-3"];
arr[0] = "modified - item - 1";
arr[1] = "modified - item - 2";
arr.unshift("new-item");
for (i = 0; i < arr.length; i++) {
  {
    console.log(arr[i]);
  }
}
