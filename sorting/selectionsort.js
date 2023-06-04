let a = [221,44, 444, 33, 2, 6, 7878, 54, 6];

// ascending sort
/*for(let i=0;i<a.length;i++){
    for(let j=i+1;j<a.length;j++){
        if(a[i]>a[j]){
            [a[i],a[j]] =[a[j],a[i]]
        }
    }
}
console.log(a);*/

// descending sort

// for(let i=0;i<a.length;i++){
//     for(let j=i+1;j<a.length;j++){
//         if(a[i]<a[j]){
//             [a[i],a[j]] =[a[j],a[i]]
//         }
//     }
// }

// console.log(a);

for(let i=0;i<a.length-1;i++){
    for(let j=i+1;j<a.length;j++){
        if(a[i]>a[j]){
            // let temp= a[i];
            // a[i]=a[j];
            // a[j]=temp
            [a[i],a[j]] =[a[j],a[i]]
        }
    }
}

console.log(a)