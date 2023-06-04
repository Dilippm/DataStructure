//  const a= [8,20,-2,4,-6]
//  // ascending order

// let n= a.length
// for(let i=0;i<n;i++){
//     for(let j=0;j<n-i-1;j++){
//             if(a[j]>a[j+1]){
//                 [a[j],a[j+1]]= [a[j+1],a[j]]
//             }
//     }
//     console.log(a)
// }
// console.log("final array",a)


// decsending order

// for(let i=0;i<n;i++){
//     for(let j=0;j<n-i-1;j++){
//         if(a[j]<a[j+1]){
//             [a[j],a[j+1]] =[a[j+1],a[j]]
//         }
//     }
// }
// console.log(a)

// let str = "hello world";
// let arr = str.split('');


// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr.length - i - 1; j++) {
//     if (arr[j] > arr[j + 1]) {
//       const temp = arr[j];
//       arr[j] = arr[j + 1];
//       arr[j + 1] = temp;
//     }
//   }
// }

// str = arr.join('');
// console.log(str);


const a =[-2,5,1,7,-8];

for(let i=0;i<a.length;i++){
    for(let j=0;j<a.length-i-1;j++){
        if(a[j]>a[j+1]){
            // let temp=a[j];
            // a[j]=a[j+1];
            // a[j+1]=temp
            [a[j],a[j+1]]= [a[j+1],a[j]]
        }
}

}

console.log(a)