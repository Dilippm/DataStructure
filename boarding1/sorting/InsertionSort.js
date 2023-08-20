
// Insertion sort works by iteratively partitioning the array into sorted and unsorted regions, repeatedly picking an element from the unsorted region and inserting it into its correct position within the sorted region until the entire array is sorted.
const a = [-6, 20, 8, -2, 4];

// function insertionSort(a){
// for(let i=1;i<a.length;i++){
//    let t = a[i];
//    j=i-1;
//    while(j>=0 && a[j]>t){
//     a[j+1] =a[j];
//     j=j-1
//    }
//    a[j+1] = t
// }
// return a
// }
console.log(insertionSort(a));

// function insertionSort(a) {
//     for (let i = 1; i < a.length; i++) {
//         let t = a[i];
//         let j = i - 1;
//         while (j >= 0 && a[j] > t) {
//             a[j + 1] = a[j];
//             j = j - 1
//         }
//         a[j + 1] = t;

//     }
//     return a
// }
// function insertionSort(a){
//     for(let i=1;i<a.length;i++){
//         let t =a[i];
//         let j=i-1;
//         while(j>=0 && a[j]>t){
//             a[j+1] =a[j];
//             j=j-1
//         }
//         a[j+1] =t
//     }
//     return a
// }
// function insertionSort(a){
//     for(let i=1;i<a.length;i++){
//         let t =a[i];
//         let j=i-1;
//         while(j>=0 && a[j]>t){
//             a[j+1]=a[j];
//             j=j-1
//         }
//         a[j+1]=t;
//     }
// }
function insertionSort(a){
    for(let i=1;i<a.length;i++){
        let t = a[i]
        let j =i-1;
        while(j>=0 && a[j]>t){
            a[j+1]=a[j]
            j=j-1
        }
        a[j+1] =t
    }
}
console.log(a);