
//Bubble sort works by repeatedly swapping adjacent elements if they are in the wrong order, causing larger elements to "bubble" to the end of the array in each pass. This process is repeated until the array is fully sorted, with the largest element at the end.
//using NUmber


 const a= [4,2,8,90,78];
// let n= a.length
// for(let i=0;i<a.length-1;i++){
//     for(let j=0;j<n-i-1;j++){
//         if(a[j]>a[j+1]){
//             [a[j],a[[j+1]]] = [a[j+1],a[j]]
//         }
//     }
// }
// console.log(a);


//using string

// let str= "hello world";
// let a = str.split("");

// for(let i=0;i<a.length-1;i++){
//     for(let j=0;j<a.length-i-1;j++){
//         if(a[j]>a[j+1]){
//             [a[j],a[j+1]] = [a[j+1],a[j]]
//         }
//     }
// }
// console.log(a.join(" "));


// for(let i= 0 ;i<a.length;i++){
//     for(let j=0;j<a.length-i-1;j++){
//         if(a[j]>a[j+1]){
//             [a[j],a[j+1]] =[a[j+1],a[j]]
//         }
//     }
// }
for(let i=0;i<a.length;i++){
    for(let j=0;j<a.length-i-1;j++){
        if(a[j]>a[j+1]){
            [a[j],a[j+1]] =[a[j+1],a[j]]
        }
    
    }
}
console.log(a);
