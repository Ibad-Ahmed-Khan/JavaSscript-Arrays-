console.log(2);
console.log(3);
console.log(5);
for (let i = 2; i <= 30; i++) {
  item = i;
  if (item % 2 !== 0) {
    if (item % 3 !== 0) {
      if (item % 5 !== 0) {
        console.log(item);
      }
    }
  }
}
