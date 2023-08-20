const a = [8, 20, -2, 4, -6];

// function quicksort(a) {
//   if (a.length <= 1) {
//     return a;
//   }

//   const pivot = a[0];
//   const left = [];
//   const right = [];

//   for (let i = 1; i < a.length; i++) {
//     if (a[i] < pivot) {
//       left.push(a[i]);
//     } else {
//       right.push(a[i]);
//     }
//   }

//   return [...quicksort(left), pivot, ...quicksort(right)];
// }

// console.log(quicksort(a));

// function quicksort(a){
//     if(a.length<=1){
//         return a;
//     }
//     const pivot =a[a.length-1];
//     let left=[]

//     let right=[]
//     for(let i=0;i<a.length-1;i++){
//         if(a[i]<pivot){
//             left.push(a[i])
//         }else{
//             right.push(a[i])
//         }
//     }
//     return [...quicksort(left),pivot,...quicksort(right)]

// }
// console.log(quicksort(a));
// function quicksort(a){
//     if(a.length<=1){
//      return a
//     }
    
//     let pivot =a[0];
//     const left =[];
//     const right =[];
    
//     for(let i=1;i<a.length;i++){
//         if(a[i]<pivot){
//             left.push(a[i])
//         }else{
//             right.push(a[i])
//         }
//     }
//     return [...quicksort(left),pivot,...quicksort(right)]

// }
// const b = [-2,5,1,7,-8];
// console.log(quicksort(b))
// function quicksort(a){
//     if(a.length<=1){
//         return a
//     }else{
//         let pivot=a[0];
//         let left=[];
//         let right =[];
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
    if(a.length<1){
        return a
    }
    let pivot =a[0]
    let left = []
    let right =[]
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