// program to add 'ing' at the end of a given string (length should be at least 3).
//  If the given string already ends with 'ing', add 'ly' instead. If the string
// length of the given string is less than 3, leave it unchanged.
// Sample String : 'abc'
// Expected Result : 'abcing'
// Sample String : 'string'
// Expected Result : 'stringly'
let str = "string";
for (let i = 0; i < 1; i++) {
  lastletters = str.slice([i - 3]);
  if (lastletters == "ing") {
    str = str.concat("ly");
  }
  if (str.length >= 3) {
    if (lastletters !== "ing") {
      str = str.concat("ing");
    }
  }
}
console.log(str.toString());
