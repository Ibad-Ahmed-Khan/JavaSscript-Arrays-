//  function that takes a list of words and return the longest word and the length
//  of the longest one.
// Sample Output:
// Longest word: Exercises
// Length of the longest word: 9
let str =
  " that function takes a list of words and return the longest word and the length".split(
    " "
  );
let max = 0;
let longestWord;
for (let i = 0; i < str.length; i++) {
  if (str[i].length > max) {
    max = str[i].length;
    longestWord = str[i];
  }
}
console.log(longestWord, max);
