const set =new Set([1,2,3]);
set.add(6)

console.log(set.has(3));
set.delete(3)
 console.log("size:",set.size);
 set.clear()
for(const item of set){
    console.log(item);
}