// Reversinganarray

const count = [1, 2, 3, 4, 5];
const countReverse = [];
const satCountReverse = [];

function reverseArra() {
  for (let i = count.length; i >= 0; i--) {
    countReverse.push(i);
  }
  console.log(countReverse);
  }
  reverseArra();

// Any array passes in as x

function reverseArrayInPlace(x) {
  for (let i = x.length; i >= 0; i--) {
    satCountReverse.push(i);
}
console.log(satCountReverse);
}
reverseArrayInPlace(count);
