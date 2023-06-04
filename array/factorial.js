// let n=5;
// let product=1;
// for(let i=1;i<=5;i++){
//     product*=i
// }
// console.log(product);

function factorial(n){
    if(n<=1){
        return n;
    }
    return n * factorial(n-1)
}

console.log(factorial(5));