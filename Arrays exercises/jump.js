let item;
let jump = 0;
let arr = [0, 0, 1, 0, 0, 1, 0];
for (i = 0; i < arr.length; ) {
  item = arr[i];
  if (i == 1) {
    i = i + 2;
  }
  if (i == 4) {
    i = i + 2;
  } else {
    i++;
  }
  jump++;
}
console.log(jump);
