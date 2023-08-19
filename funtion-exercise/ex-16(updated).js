function pangram() {
  let All = "abcdefghijklmnopqrstuvwxyz";
  let str = "The five boxing wizards jump quickly.".toLowerCase();
  for (let i = 0; i < All.length; i++) {
    if (str.indexOf(All[i]) == -1) {
      console.log("its not pangram");
      return;
    }
  }
  console.log("its a pangram");
}
console.log(pangram());
