const a = [6, 1, 6, 8, 10, 4, 15, 6, 3, 9, 6];
const n = 6;

let left = 0;
let right = a.length - 1;

while (left < right) {
  if (a[left] !== n) {
    left++;
  } else if (a[right] === n) {
    right--;
  } else {
    [a[left], a[right]] = [a[right], a[left]];
    left++;
    right--;
  }
}

console.log(a);