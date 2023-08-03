let arr = [4, 3, 1, 2];
let sub__array;
for (i = 0; i < 1; i++) {
  let item1 = ([arr[0], arr[3]] = [arr[3], arr[0]]);
  let item2 = ([arr[1], arr[2]] = [arr[2], arr[1]]);
  let item3 = ([arr[0], arr[1]] = [arr[1], arr[0]]);
  sub__array = [item1, item2, item3];
  console.log(sub__array.length, "swapes");
}
