// program to count the occurrences of each word in a given sentence.
let str = "the quick brown fox jumps brown over the lazy dog".split(" ").sort();
let count = 1;
for (let i = 0; i < str.length; i++) {
  if (str[i] == str[i + 1]) {
    count++;
  } else {
    value = [str[i], count].toString();
    count = 1;
    console.log(value);
  }
}
