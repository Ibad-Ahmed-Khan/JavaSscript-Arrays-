// tenet -> tenet
let arr = ["abcefg", "gfecba"];
let string1 = arr[0].split("").sort().toString();
let string2 = arr[1].split("").sort().toString();
for (let i = 0; i < 1; i++) {
  if (string1 === string2) {
    console.log("yeah it's an anagram");
  } else {
    console.log("it's not an anagram");
  }
}
