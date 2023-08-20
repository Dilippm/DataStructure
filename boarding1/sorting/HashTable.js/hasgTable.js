 // without collision handling


//  class HashTable{
//     constructor(size){
//         this.table = new Array(size);
//         this.size= size; 
//     };
//     hash(key){
//         let total= 0;
//         for(let i=0;i<key.length;i++){
//             total += key.charCodeAt(i)
//         }
//         return total % this.size;
//     }
//     set(key,value){
//         const index = this.hash(key);
//         this.table[index] = value;

//     }
//     get(key){
//         const index= this.hash(key);
//         return this.table[index];
//     }
//     remove(key){
//         const index= this.hahsh(key);
//         this.table[index] =undefined;
//     } 
//     display(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i]);
//             }

//         }
//     }
//  }
//  const table = new HashTable(50);


// table.set("name","ajmal");

// table.set("works","developer")
// table.set("age",20);
// table.display()


// with collission handling

// class HashTable {
//     constructor(size) {
//         this.table = new Array(size);
//         this.size = size;
//     }

//     hash(key) {
//         let total = 0;
//         for (let i = 0; i < key.length; i++) {
//             total += key.charCodeAt(i);
//         }
      
//         return total % this.size;
//     }

//     set(key, value) {
//         const index = this.hash(key);
//         let bucket = this.table[index];
//         if (!bucket) {
//             bucket = [[key, value]];
//         } else {
//             const samekeyItem = bucket.find(item => item[0] === key);
//             if (samekeyItem) {
//                 samekeyItem[1] = value;
//             } else {
//                 bucket.push([key, value]);
//             }
//         }
//         this.table[index] = bucket;
//     }

//     get(key) {
//         const index = this.hash(key);
//         const bucket = this.table[index];
//         if (bucket) {
//             const samekeyItem = bucket.find(item => item[0] === key);
//             if (samekeyItem) {
//                 return samekeyItem[1];
//             }
//         }
//         return undefined;
//     }

    // remove(key) {
    //     const index = this.hash(key);
    //     const bucket = this.table[index];
    //     if (bucket) {
    //         const samekeyItem = bucket.find(item => item[0] === key);
    //         if (samekeyItem) {
    //             bucket.splice(bucket.indexOf(samekeyItem), 1);
    //         }
    //     }
    // }

//     display() {
//         for (let i = 0; i < this.table.length; i++) {
//             if (this.table[i]) {
//                 console.log(i, this.table[i]);
//             }
//         }
//     }
// }


// class HashTable{
//     constructor(size){
//         this.table = new Array(size);
//         this.size= size;
//     }
//     hash(key){
//         let total= 0;
//         for(let i=0;i<key.length;i++){
//             total += key.charCodeAt(i);
//         }
//         return total % this.size;
//     }
//     set(key,value){
//         const index= this.hash(key);
//         let bucket = this.table[index];
//         if(!bucket){
//            bucket =[[key,value]];
//         }else{
//             const samekeyItem = bucket.find(item => item[0]=== key);
//             if(samekeyItem){
//                 samekeyItem[1] =value;
//             }else{
//                 bucket.push([key,value])
//             }
//         }
//         this.table[index] = bucket

//     }
//     get(key){
//         const index = this.hash(key);
//         const bucket= this.table[index];
//         if(bucket){
//             const samekeyItem = bucket.find(item=> item[0]=== key);
//             if(samekeyItem){
//                   return  samekeyItem[1]
//             }
//         }
//         return undefined
//     }
//     remove(key) {
//         const index = this.hash(key);
//         const bucket = this.table[index];
//         if (bucket) {
//             const samekeyItem = bucket.find(item => item[0] === key);
//             if (samekeyItem) {
//                 bucket.splice(bucket.indexOf(samekeyItem), 1);
//             }
//         }
//     }
//     display(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log((i,this.table[i]));
//             }
//         }
//     }
// }
class hashTable{
    constructor(size){
        this.table= new Array(size)
        this.size= size;
       
    }
    hash(key){
        let total =0;
        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i);
        }
        return total% key.length

    }
    set(key,value){
        const index= this.hash(key);
        const bucket =this.table[index];
        if(!bucket){
            bucket =[[key,value]]
        }else{
            let samekeyItem = bucket.find(item => item[0]===key);
            if(!samekeyItem){
                bucket.push([key,value])
            }else{
                samekeyItem[1] =value
            }
        }
        this.table[index] =bucket

    }
    get(key){
        const index = this.hash(key);
        const bucket = this.table[index];
        if(bucket){
            const samekeyItem =bucket.find(item=>item[0]===key);
            if(samekeyItem){
                return samekeyItem[1]
            }
        }
        return undefined
    }
    remove(key){
        const index = this.hash(key);
        const bucket = this.table[index]
        if(bucket){
            let samekeyItem = bucket.find(item=>item[0]===key);
            if(samekeyItem){
                bucket.splice(bucket.indexOf(samekeyItem),1)
            }
        }

    }
}
const table = new HashTable(50);
table.set("name", "ajmal");
table.set("nema", "amar");
table.set("mane", "shiva");






