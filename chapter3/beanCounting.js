// Beancounting

let x = 0;

//Put in a sting and count how many of a char it has
function countChar(string, y) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] == y) {
      x++
    }
  }
  console.log(x);
  console.log(string);
}

countChar("BoBoby", "y");
