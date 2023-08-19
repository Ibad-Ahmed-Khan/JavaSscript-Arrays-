let string = "a'a'aaa'a'aa'a'a";
string = string.split().toString();
let count = 0;
for (let i = 0; i < string.length; i++) {
  if (string[i] !== "a") {
    count++;
  }
}
let totallength = string.length - count;
console.log(totallength);
// coma's are no more
