// <!-- // Here you are provided with a string to work with. We'd like you to:
// Convert the string into an array, removing the + characters in the process. Save the result in a variable called myArray.
// Store the length of the array in a variable called arrayLength.
// Store the last item in the array in a variable called lastItem. -->

"string-1", "string-2", "string-3", "string-4", "string-5";
let arr = ["string-1", "string-2", "string-3", "string-4", "string-5"];
for (i = arr.length - 1; i > arr.length - 2; i--) {
  let lastitem = arr[i];
  let arrlength = arr.length;
  console.log(arrlength, " is array length ");
  console.log(lastitem, " is array last item");
}
