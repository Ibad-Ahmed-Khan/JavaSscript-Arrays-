// function to check whether a string is a pangram or not.
// Pangrams are words or sentences containing every letter of the alphabet at least once.
// For example : "The quick brown fox jumps over the lazy dog"
function pangram() {
  let letters = [];
  let All = "abcdefghijklmnopqrstuvwxyz".split("");
  let str = "The quick brown fox jumps over the lazy dog"
    .replaceAll(" ", "")
    .replaceAll(".", "")
    .toLowerCase()
    .split("")
    .sort();
  for (let i = 0; i < str.length; i++) {
    if (letters.indexOf(str[i]) == -1) {
      letters.push(str[i]);
    }
  }
  if (JSON.stringify(letters) == JSON.stringify(All)) {
    console.log("Yes this line is pangram");
  } else {
    console.log("It's not a pangram");
  }
}
console.log(pangram());
