// Function to find the maximum of three numbers.
function maximum(a, b, c) {
  if ((a > b) & (a > c)) {
    return a;
  }
  if ((b > a) & (b > c)) {
    return b;
  }
  if ((c > a) & (c > b)) {
    return c;
  }
}
let d = maximum(1, 2, 3);
console.log(d);
