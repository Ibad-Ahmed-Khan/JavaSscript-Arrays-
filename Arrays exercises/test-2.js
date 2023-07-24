"string-1", "string-2", "string-3", "string-4", "string-5";
let arr = ["string-1", "string-2", "string-3", "string-4", "string-5"];
for (i = arr.length - 1; i > arr.length - 2; i--) {
  let lastitem = arr[i];
  let arrlength = arr.length;
  console.log(arrlength, " is array length ");
  console.log(lastitem, " is array last item");
}
