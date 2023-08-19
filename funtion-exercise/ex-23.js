let arr = ["zoo-@example.com", "noway", "zoo-@lala.com", "zoo-@shanto.com"];

let check__address = arr.filter((arr) => !arr.includes(".com"));
console.log(check__address);
