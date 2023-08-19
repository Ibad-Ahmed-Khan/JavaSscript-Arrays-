let arr = [10, 29, "khana", 37, "mango", 49, 40, "food"];
for (i = 0; i < arr.length; i++)
  if (typeof arr[i] == "number") {
    if (arr[i] % 2 == 0) {
      console.log(arr[i], "even");
    } else {
      console.log(arr[i], "odd");
    }
  } else {
    console.log(arr[i], "is a string ");
  }
