function binary(arr,t){
let left=0;
let right=arr.length-1;
if(arr.length==0){
    return -1
}else{
    while(left<=right){
        let mid=Math.floor((left+right)/2);
        if(t==arr[mid]){
            return mid;
        }
        if(t<arr[mid]){
            right=mid-1
        }else{
            left = mid+1
        }
    }

}
return -1;

}

console.log(binary([1,2,3,4,5,6,7,8,9,10],4));
