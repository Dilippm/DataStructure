// let n=3;
// let i=2;
// let first=0;
// let second=1;
// console.log(first);
// console.log(second);
// while(i<n){
//     let sum=0;
//     sum=first+second
//     console.log(sum);
//     first =second;

//     second =sum;
//     i++;
// }

function fibonacci(n) {
    if (n <= 1) {
      return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  function printFibonacciSequence(count) {
    for (let i = 0; i < count; i++) {
      console.log(fibonacci(i));
    }
  }
  
  printFibonacciSequence(2);