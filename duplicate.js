let arr = [22, 53, 22, 69, 71, 53];
for (let i = 0; i < arr.length; i++) {
  let sub_array = arr.slice(i + 1);
  for (let j = 0; j < sub_array.length; j++) {
    if (arr[i] == sub_array[j]) {
      console.log("duplicate", arr[i]);
    }
  }
}

// i   item   sub_array
// 0   22     53, 22, 69, 71, 53, 53, 69, 53
// 1   53     22, 69, 71, 53, 53, 69, 53
// 2   22     69, 71, 53, 53, 69, 53
// 3   69     71, 53, 53, 69, 53
// 4   71     53, 53, 69, 53
// 5   53     53, 69, 53
// 6   69     53
// 7   53
