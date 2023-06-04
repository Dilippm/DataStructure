// fibonacci

// function fibonacci(n){
//     if(n<2){
//         return n;
//     }
//    return fibonacci(n-1)+fibonacci(n-2);
// }
// function print(n){
// for(i=0;i<=n;i++){
//     console.log(fibonacci(i))
// }
// }
// print(7)
//console.log(fibonacci(7));

/* factorial*/

// function factorial (n){
//     if(n<=1){
//         return n;
//     }
//     return n* factorial(n-1)

// }

// console.log(factorial(5))


// Write a function to replace each alphabet in the given string with another alphabet occurring at the n-th position from each of them.

// let str ="this is my name";
// let string = str.split("");
// //console.log(string);
// let n=3
// for(let i=0;i<string.length;i++){
//     if(string[i]!= " "){

    
//         let code =string[i].charCodeAt(0)
//     if(code+n<=90){
//         string[i] = String.fromCharCode(code+n)
//     }else{
//         let size= (code + n)-90;
//         string[i] = String.fromCharCode(64+size)

//     }
  
//     }
// }
// console.log(string.join(''));

// let a=[1,5,-1,7];
// let left =  0;
// let right  =  a.length-1;
// while(left<right){
//     [a[left],a[right]]= [a[right],a[left]]
//     left++;
//     right--;
// }
// console.log(a);
let str = "zzz";
let string = str.split("");
let n = 3;

for (let i = 0; i < string.length; i++) {
  if (string[i] !== " ") {
    let code = string[i].charCodeAt(0);
    let isUpperCase = code >= 65 && code <= 90;
    let shiftedCode = code + n;

    if (isUpperCase) {
      if (shiftedCode > 90) {
        shiftedCode = 64 + (shiftedCode - 90);
      }
    } else {
      if (shiftedCode > 122) {
        shiftedCode = 96 + (shiftedCode - 122);
      }
    }

    string[i] = String.fromCharCode(shiftedCode);
  }
}

console.log(string.join(""));
