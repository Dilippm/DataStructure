
// ascending order
// function insertionsort(a){
// for(let i=1;i<a.length;i++){
//     let nti =a[i];
//     let j=i-1;
//     while(j>=0 && a[j]>nti){
//         a[j+1]=a[j]
//         j=j-1;
//     }
//     a[j+1]=nti
// }
// return a;
// }

// const a= [-6,20,8,-2,4];
// console.log(insertionsort(a))

//decsending order

// function insertionsort(a){
//     for(let i=1;i<a.length;i++){
//         let nti =a[i];
//         let j=i-1;
//         while(j>=0 && a[j]<nti){
//             a[j+1]=a[j]
//             j=j-1;
//         }
//         a[j+1]=nti
//     }
//     return a;
//     }
    
//     const a= [-6,20,8,-2,4];
//     console.log(insertionsort(a))

const a =[-2,5,1,7,-8];

// for(let i=1;i<a.length;i++){
//     let t= a[i];
//     j=i-1;
//     while(j>=0 && a[j]>t){
//         a[j+1]=a[j];
//         j=j-1;
//     }
//     a[j+1]=t
// }

// console.log(a)
// for(let i=1;i<a.length;i++){
//     let t= a[i];
//     let j=i-1;
//     while(j>=0 && a[j]>t){
//         a[j+1]=a[j];
//         j=j-1;
//     }
//     a[j+1]=t
// }
// console.log(a);



for(let i=1;i<a.length;i++){
    let t=a[i];
    let j=i-1;
    while(j>=0 && a[j]>t){
        a[j+1]=a[j];
        j=j-1
    }
    a[j+1]=t;
}
console.log(a);