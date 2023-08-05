// tenet -> tenet
let arr = ["abc", "cba"];
let string1 = arr[0];
let string2 = arr[1];
string1 = string1.split("").sort();
string2 = string2.split("").sort();

for (let i = 0; i < string2.length; i++) {
  if (string1[i] !== string2[i]) {
    console.log("it's not an anagram");
    break;
    // i want a powerful break here
  } else {
    console.log("yeah it's an anagram");
    break;
  }
}
