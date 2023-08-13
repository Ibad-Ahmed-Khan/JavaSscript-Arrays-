// program to remove existing indentation from all of the lines in a given text.
let str =
  "'''Python is a widely used high-level, general-purpose, interpreted,dynamic programming language. Its design philosophy emphasizescode readability, and its syntax allows programmers to expressconcepts in fewer lines of code than possible in languages suchas C++ or Java.'''";
str = str.replaceAll("'", "");
console.log(str);
