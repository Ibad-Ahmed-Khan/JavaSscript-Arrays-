let store;
let length = 0;
let arr = ["a", "b", "a", "a", "b", "a", "a", "b", "a", "a", "a", "a"];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] == "a") {
    length++;
  }
}
console.log("a is", length, "times in array");
