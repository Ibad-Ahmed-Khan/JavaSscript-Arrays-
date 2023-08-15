let count = 0;
let table = 11;
for (let i = table; i <= table * 10; i = i + table) {
  count++;
  console.log(table, " *", count, "=", i);
}
