// function mergesort(a){
//     if(a.length<2){
//         return a
//     }
//     let mid= Math.floor(a.length/2);
  
//     const larray = a.slice(0,mid);

//     const rarray = a.slice(mid);
   
//     return merge(mergesort(larray),mergesort(rarray));
// }
// function merge(larray,rarray){
//     const sorted =[];
//     while(larray.length && rarray.length){
//         if(larray[0]<=rarray[0]){
//             sorted.push(larray.shift())
//         }else{
//             sorted.push(rarray.shift())
//         }
//     }
//   return  [...sorted,...larray,...rarray]
// }

 const a = [8, 20, -2, 4, -6];
// console.log(mergesort(a))

// function mergesort(a){
//     if(a.length<2){
//         return a
//     }
//     let mid= Math.floor(a.length/2);
//     const left = a.slice(0,mid);
//     const right = a.slice(mid);
//     return merge(mergesort(left),mergesort(right))
// }
// function merge(left,right){
//   const sorted =[]; 
//     while(left.length && right.length){
//          if(left[0]>=right[0]){
//              sorted.push(left.shift())
//          }else{
//              sorted.push(right.shift())
//          }
          
//     }
//     return [...sorted,...left,...right]
// }
// console.log(mergesort(a))

function mergesort(a){
    if(a.length<=1){
        return a
    }else{
        let mid= Math.floor(a.length/2);
        const left =a.slice(0,mid);
        const right =a.slice(mid);

        return merge(mergesort(left),mergesort(right))

                                                                                      
    }
}
function merge(left,right){
    const sorted =[];
    while(left.length && right.length){
        if(left[0]>=right[0]){
            sorted.push(left.shift())
        }else{
            sorted.push(right.shift())
        }
    }
    return [...sorted,...left,...right]
}

console.log(mergesort(a));