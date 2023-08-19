// function to create and print a list where the values are the squares
//  of numbers between 1 to 20 (both included).

function square() {
  for (let i = 1; i <= 20; i++) {
    let old_number = i;
    let number = i * i;
    console.log("square of", old_number, ":", number);
  }
}
console.log(square());
