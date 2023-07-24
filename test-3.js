// <!--  we provide you with a starting array, and you will work in somewhat the opposite direction. You need to:
// Remove the last item in the array.
// Add two new names to the end of the array.
// Go over each item in the array and add its index number after the name inside parentheses, for example Ryu (0). Note that we don't teach how to do this in the Arrays article, so you'll have to do some research.
// Finally, join the array items together in a single string called myString, with a separator of "-". -->

let arr = [1, 2, 3, 4, 5];
arr.shift();
arr.unshift("new-name 1");
arr.unshift("new-name 2");
for (i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]);
}
