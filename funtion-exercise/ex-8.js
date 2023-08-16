// function to check whether a number falls within a given range.
function test__range(a, n, b) {
  if (a < n) {
    if (n < b) {
      return n + " " + "is in range";
    } else {
      return n + " " + "is not in" + " range";
    }
  }
  if (a > n) {
    if (n > b) {
      return n + " " + "is in range";
    } else {
      return n + " " + "is not in" + " range";
    }
  }
}
let Result = test__range(10, 9, 2);
console.log(Result);
