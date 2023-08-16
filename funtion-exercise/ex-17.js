// program that accepts a hyphen-separated sequence of words as input and prints the words
//  in a hyphen-separated sequence after sorting them alphabetically.
// Sample Items : green-red-yellow-black-white
// Expected Result : black-green-red-white-yellow
function sorting() {
  let str = "green - red - yellow - black - white"
    .replaceAll(" ", "")
    .split("-")
    .sort();
  return str.join("-");
}
console.log(sorting());
