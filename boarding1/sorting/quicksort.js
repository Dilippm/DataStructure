

// function quicksort(a){
//     if(a.length<=1){
//         return a;
//     }else{
//         let pivot =a[0];
//         let left= [];
//         let right =[];
//         for(let i=1;i<a.length;i++){
//                 if(a[i]<pivot){
//                     left.push(a[i]);
//                 }else{
//                     right.push(a[i])
//                 }
//         }
//         return [...quicksort(left),pivot,...quicksort(right)]
//     }
   
// }
// function quicksort(a){
//     if(a.length<=1){
//         return a;
//     }else{
//         let pivot =a[0];
//         let left = [];
//         let right =[];
//         for(let i=1;i<a.length;i++){
//             if(a[i]>pivot){
//                 left.push(a[i]);
//             }else{
//                 right.push(a[i]);
//             }
//         }
//         return [...quicksort(left),pivot,...quicksort(right)]
//     }
// }
// function quicksort(a){
//     if(a.length<=1){
//         return a;
//     }else{
//         let left =[];
//         let right =[];
//         let pivot = a[0];
//         for(let i=1;i<a.length;i++){
//             if(a[i]<pivot){
//                 left.push(a[i])
//             }else{
//                 right.push(a[i])
//             }
//         }
//         return [...quicksort(left),pivot,...quicksort(right)]
//     }
    
  
// }
function quicksort(a){
    if(a.length<=1){
        return a
    }
    let left =[]
    let right =[]
    let pivot = a[0]
   for(let i=1;i<a.length;i++){
    if(a[i]<pivot){
        left.push(a[i])
    }else{
        right.push(a[i])
    }
   }
   return [...quicksort(left),pivot,...quicksort(right)]
}
const b = [-2,5,-2,7,-8];
console.log(quicksort(b));