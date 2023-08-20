

const arr = [4,3,7,2,9,45]

// function BinarySearch(arr,target){
//     let left =0;
//     let right =arr.length-1;
  
//     if(arr.length==0){
//         return -1;
//     }else{
//         while(left<=right){
//             let mid = Math.floor((left+right)/2);
//             if(target==arr[mid]){
//                 return mid;
//             }
//              if(target<arr[mid]){
//                 right =mid-1
//             }else{
//                 left= mid+1
//             }
//             }

//     }
    
//     return -1;

// }
// function BinarySearch(arr,target){
//     let left= 0;
//     let right = arr.length-1
//     while(left<right){
//         let mid= (right-left)/2;
//         if(arr[mid]==target){
//             return true;
//         }else{
//             if(arr[mid]<target){
//                 right= mid-1
//             }else{
//                 left= mid+1
//             }
//         }
//     }
// }
// function binarySearchRecursive(arr, target, left, right) {
//     if (left > right) {
//         return false;
//     }

//     let mid = Math.floor((left + right) / 2);

//     if (arr[mid] === target) {
//         return true;
//     } else if (arr[mid] < target) {
//         return binarySearchRecursive(arr, target, mid + 1, right);
//     } else {
//         return binarySearchRecursive(arr, target, left, mid - 1);
//     }
// }

// function binarySearch(arr, target) {
//     return binarySearchRecursive(arr, target, 0, arr.length - 1);
// }
// function binarySearch(arr,target){
//     let left= 0;
//     let right = arr.length-1;
//     while(left<right){
//         let mid = (right-left)/2
//         if(arr[mid]==target){
//             return true;
//         }else{
//             if(arr[mid]<target){
//                 right =mid-1;
//             }else{
//                 left =mid+1
//             }
//         }
//     }
// }
function binarySearch(arr,target){
    let left =0;
    let right = arr.length-1;
    while(left<right){
        let mid= (right-left)/2;
        if(arr[mid]== target){
            return true;
        }else{
            if(arr[mid]<target){
                right =mid-1;
            }else{
                left= mid+1
            }
        }
    }
    return false;
}
// Example usage
const array = [1, 3, 5, 7, 9, 11, 13];
const target = 89;
console.log(binarySearch(array, target)); // Output: true
