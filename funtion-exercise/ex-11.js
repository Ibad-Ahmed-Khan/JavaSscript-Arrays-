// function that accepts a string and counts the number of upper and lower case letters.
// Sample String : 'The quick Brow Fox'
// Expected Output :
// No. of Upper case characters : 3
// No. of Lower case Characters : 12
function counts() {
  let count__lowercase = 0;
  let count__uppercase = 0;
  let string = "The quick Brow Fox"
    .split("")
    .toString()
    .replaceAll(" ", "")
    .replaceAll(",", "");
  for (let i = 0; i < string.length; i++) {
    if (string[i] == string[i].toUpperCase()) {
      count__uppercase++;
    }
    if (string[i] == string[i].toLowerCase()) {
      count__lowercase++;
    }
  }
  return (
    "No of Uppercase Are" +
    " " +
    count__uppercase +
    " and" +
    " " +
    "no of lowercase are" +
    " " +
    count__lowercase
  );
}
console.log(counts());
