// function result(arr) {
//     let pair = [];
//     for (let i = 0; i < arr.length - 1; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === 10) {
//                 pair.push(arr[i], arr[j]);
//                 return pair;
//             }
//         }
//     }
    // return "No pair found";     
                                            //  complexity Time: O(n^2) and space : O(1)
// }

// let arr = [6, 5, 4, 3, 9, 8, 0];
// console.log(result(arr))
/*----------------------------------------------------------------------------------------------------------------*/
                                        // Hash Table
// function result(arr,tar) {
//     const numSet = new Set();
//     for (let i = 0; i < arr.length; i++) {
//         const complement = tar - arr[i];
//         if (numSet.has(complement)) {
//             return [complement, arr[i]];
//         }
//         numSet.add(arr[i]);
//     }
//     return "No pair found";
// }

// let arr = [6, 5, 4, 3, 9, 8, 0];
// console.log(result(arr,10));

//string

let string = "this is my car";
let n = 3;
let str = string.split('');

for (let i = 0; i < str.length; i++) {
    if(str[i]!=" ")
  str[i] = String.fromCharCode(str[i].charCodeAt(0)+n)
}

console.log(str.join(''));
