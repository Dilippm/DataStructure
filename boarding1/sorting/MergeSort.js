

// function mergesort(a){
//     if(a.length<=1){
//     return a;
//     }else{
//         let mid = Math.floor(a.length/2);
//         const left= a.slice(0,mid);
//         const right =a.slice(mid);
//         return merge(mergesort(left),mergesort(right))
//     }
// }
// function merge(left,right){
// const sorted = [];
// while(left.length && right.length){
//     if(left[0]>=right[0]){
//         sorted.push(left.shift())
//     }else{
//         sorted.push(right.shift())
//     }
// }
// return [...sorted, ...left,...right]
// }
// function mergesort(a){
//     if(a.length<=1){
//         return a;
//     }else{
//         let mid = a.length/2;
//         let left = a.slice(0,mid);
//         let right =a.slice(mid);
//         return merge(mergesort(left),mergesort(right))
//     }
// }
// function merge(left,right) {
//     const sorted =[];
//     while(left.length && right.length){
//         if(left[0]<=right[0]){
//             sorted.push(left.shift())
//         }else{
//             sorted.push(right.shift())
//         }
//     }
//     return [...sorted,...left,...right]
    
// }
// function mergesort(a){
//     if(a.length<=1){
//         return a;
//     }else{
//         let mid=  a.length/2;
//         let left = a.slice(0,mid);
//         let right = a.slice(mid);

//         return merge(mergesort(left),mergesort(right))
//     }
// }
// function merge(left,right){
//     const sorted =[];
//     while(left.length && right.length){
//         if(left[0]<=right[0]){
//             sorted.push(left.shift())
//         }else{
//             sorted.push(right.shift())
//         }
//     }
//     return [...sorted,...left,...right]
// }
// function mergesort(a){
//     if(a.length<=1){
//         return a
//     }else{
//             let mid = a.length /2;
//             let left = a.slice(0,mid);
//             let right = a.slice(mid);
//             return merge(mergesort(left),mergesort(right))
// }    
// }
// function merge(left,right){
//     const sorted  =[]
//     while(left.length && right.length){
//         if(left[0]>right[0]){
//             sorted.push(left.shift())
//         }else{
//             sorted.push(right.shift())
//         }
//     }
//     return  [...sorted,...left,...right]
// }
function mergesort(a){
    if(a.length<=1){
        return a

    }
    let mid = a.length/2
    let left= a.slice(0,mid)
    let right =a.slice(mid)
    return merge(mergesort(left),mergesort(right))
}
function merge(left,right){
    const sorted =[]
    while(left.length && right.length){
        if(left[0]<right[0]){
            sorted.push(left.shift())
          }else{
            sorted.push(right.shift())
          }
    }
  
  return [...sorted,...left,...right]
}
const a = [8, 20, -2, 4, -6];

console.log(mergesort(a));