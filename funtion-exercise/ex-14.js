// function that checks whether a passed string is a palindrome or not.
// Note: A palindrome is a word, phrase, or sequence that reads the same backward as forward,
//  Examples are civic, radar, level, rotor, kayak, madam, and refer.
function palindrome(name) {
  let forward = [];
  let reverse = [];
  for (let i = 0; i < name.length; i++) {
    forward.push(name[i]);
  }
  for (let j = name.length - 1; j >= 0; j--) {
    reverse.push(name[j]);
  }
  (forward = forward.toString().replaceAll(",", "")),
    (reverse = reverse.toString().replaceAll(",", ""));
  if (forward == reverse) {
    console.log(name + " " + "is palindrome");
  } else {
    console.log(name + " " + "is not palindrome");
  }
}
console.log(palindrome("level"));
