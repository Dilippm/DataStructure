//Selection sort works by dividing the array into two portions: sorted and unsorted. It repeatedly selects the smallest element from the unsorted portion and swaps it with the element at the beginning of the unsorted portion, gradually building up the sorted portion of the array until the entire array is sorted.

// using Numbers

// function selectionSort(arr){
//     for(let i=0;i<arr.length-1;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i]>arr[j]){
//                 [arr[i],arr[j]] =[arr[j],arr[i]]
//             }
//         }
//     }
//     return arr;
// }


// using String

// let str = "hello world";
// let arr= str.split("")

// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]>arr[j]){
//             [arr[i],arr[j]] =[arr[j],arr[i]]
//         }
//     }

// }
// console.log(arr.join(""));
const a = [4,2,10,45,1];
// function selectionSort(a) {
//     for(let i =0;i<a.length-1;i++){
//         for(let j=i+1;j<a.length;j++){
//             if(a[i]>a[j]){
//                 [a[i],a[j]] =[a[j],a[i]]
//             }
//         }
//     }
//     return a
    
// }
// function selectionSort(a){
//     for(let i=0;i<a.length;i++){
//             for(let j=i+1;j<a.length;j++){
//                 if(a[i]>a[j]){
//                     [a[i],a[j]] =[a[j],a[i]]
//                 }
//             }
//     }
//     return a
// }
// console.log((selectionSort(a)));
// function BubbleSort(a){
//     for(let i=0;i<a.length;i++){
//         for(let j=0;j<a.length-i-1;j++){
//             if(a[j]>a[j+1]){
//                 [a[j],a[j+1]] =[a[j+1],a[j]]
//             }
//         }
//     }
//     return a
// }
// console.log((BubbleSort(a)));
// function insertionSort(a){
//     for(let i=1;i<a.length;i++){
//         let t=a[i];
//         let j=i-1;
//         while(j>=0 && a[j]>t){
//             a[j+1]=a[j];
//             j=j-1
//         }
//         a[j+1]=t
//     }
//     return a
// }
// console.log(insertionSort(a));
// function quickSort(a){
//     if(a.length<=1){
//         return a
//     }
//     let pivot=a[0]
//     let left=[]
//     let right=[]
//     for(let i=1;i<a.length;i++){
//             if(a[i]<pivot){
//                 left.push(a[i])
//             }else{
//                 right.push(a[i])
//             }
//     }
//     return [...quickSort(left),pivot,...quickSort(right)]
// }
// console.log(quickSort(a));
// function mergeSort(a){
//     if(a.length<=1){
//         return a;
//     }else{
//         let mid =a.length/2;
//         const left =a.slice(0,mid);
//         const right = a.slice(mid);
//         return merge(mergeSort(left),mergeSort(right))
//     }
// }
// function merge(left,right){
//     let sorted =[];
//     while(left.length && right.length){
//         if(left[0]<right[0]){
//             sorted.push(left.shift())
//         }else{
//             sorted.push(right.shift())
//         }
//     }
//     return [...sorted,...left,...right]
// }
// function mergeSort(a){
//     if(a.length<=1){
//         return a
//     }
//     let mid= a.length/2;
//     const left =a.slice(0,mid)
//     const right =a.slice(mid)
//     return merge(mergeSort(left),mergeSort(right))
// }
// function merge(left,right){
//     const sorted =[];
//     while(left.length && right.length){
//         if(left[0]<right[0]){
//             sorted.push(left.shift())
//         }else{
//             sorted.push(right.shift())
//         }
//     }
//     return[...sorted,...left,...right]
// }
// console.log(mergeSort(a));  