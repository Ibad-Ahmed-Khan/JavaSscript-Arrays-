let arr = [1, 2, 3, 4, 5, 6, 7];
for (i = 0; i < 1; i++) {
  let day = arr[6];
  if (day === 1) {
    console.log("monday");
    break;
  }
  if (day === 2) {
    console.log("tuesday");
    break;
  }
  if (day === 3) {
    console.log("wednesday");
    break;
  }
  if (day === 4) {
    console.log("thursday");
    break;
  }
  if (day === 5) {
    console.log("friday");
    break;
  }
  if (day === 6) {
    console.log("saturday");
    break;
  }
  if (day === 7) {
    console.log("sunday");
    break;
  } else {
    console.log("invalid day");
  }
}
