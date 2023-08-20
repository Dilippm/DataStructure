// class HashTable{     constructor(size){         this.table  =new Array(size)
// }     hash(key){         let total =0;         for(let i
// =0;i<key.length;i++){             total+=key.charCodeAt(i);         }
// return total % this.table.length;     }     set(key,value){             const
// index = this.hash(key);             this.table[index] =value;
// const bucket = this.table[index];            if(!bucket){
// this.table[index] = [[key, value]];            }else{             const
// samekeyitem =bucket.find(item => item[0]===key)             if(samekeyitem){
// samekeyitem.push([key, value]);             }else{
// bucket.push([key,value])             }            }     }     get(key){
// const index = this.hash(key);         return this.table[index];         const
// bucket =this.table[index];         if(bucket){             const samekeyitem
// = bucket.find(item => item[0]===key)             if(samekeyitem){
// return samekeyitem[1]             }         }         return undefined     }
// remove(key){         const index = this.hash(key);         this.table[index]=
// undefined;        const bucket =this.table[index];        if(bucket){
// const samkeyitem =bucket.find(item => item[0]=== key)         if(samkeyitem){
// bucket.splice(bucket.indexOf(samkeyitem), 1);         }        }     }
// display(){         for(let i=0;i<this.table.length;i++){
// if(this.table[i]){                 console.log(i,":",this.table[i]);
// }         }     } } const table =new HashTable(50); table.set('name','Ajmal')
// table.set('age',25);  table.set('name','Amar');  table.display()
// table.set('name','Rahul');  table.display();  console.log(table.get('name'));
// table.remove('name'); table.display()

// class HashTable {
//     constructor(size) {
//         this.size = size;
//         this.table = new Array(size)

//     }
//     hash(key) {
//         let total = 0;
//         for (let i = 0; i < key.length; i++) {
//             total += key.charCodeAt(i);
//         }
//         return total % this.table.length
//     }
//     set(key, value) {
//         const index = this.hash(key);
//         const bucket = this.table[index];
//         if (!bucket) {
//             this.table[index] = [
//                 [key, value]
//             ];
//         } else {
//             let sameitemkey = bucket.find(item => item[0] === key)
//             if (sameitemkey) {
//                 sameitemkey.push([key, value]);
//             } else {
//                 bucket.push([key, value]);
//             }
//         }
//     }
//     get(key) {
//         const index = this.hash(key);
//         const bucket = this.table[index]
//         if (bucket) {
//             let sameitemkey = bucket.find(item => item[0] === key);
//             if (sameitemkey) {
//                 return sameitemkey[1]
//             }
//         }
//         return undefined
//     }
//     remove(key) {
//         const index = this.hash(key);
//         const bucket = this.table[index];
//         if (bucket) {
//             let sameitemkey = bucket.find(item => item[0] === key);
//             if (sameitemkey) {
//                 bucket.splice(bucket.indexOf(sameitemkey), 1);
//             }
//         }

//     }
//     display() {
//         for (let i = 0; i < this.table.length; i++) {
//             if (this.table[i]) {
//                 console.log(this.table[i])

//             }

//         }
//     }
// }

// class HashTable{
//     constructor(size){
//         this.size= size;
//         this.table= new Array(size)
//     }
//     hash(key){
//         let total =0;
//         for(let i=0;i<key.length;i++){
//             total+=key.charCodeAt(i);
//         }
//         return total%this.table.length;
//     }
//     set(key,value){
//         const index= this.hash(key);
//         const bucket= this.table[index];
//         if(!bucket){
//             this.table[index]=[
//                 [key,value]
//             ]
//         }else{
//             let sameitemkey =bucket.find(item=>item[0]===key);
//             if(sameitemkey){
//                 sameitemkey.push([key,value])
//             }else{
//                 bucket.push([key,value])
//             }
//         }
//     }
//     get(key){
//         const index= this.hash(key);
//         const bucket =this.table[index];
//         if(bucket){
//             let sameitemkey =bucket.find(item=>item[0]===key)
//         if(sameitemkey){
//             return sameitemkey[1]
//         }
//         }

//     }
//     remove(key){
//         const index =this.hash(key);
//         const bucket =this.table[index];
//         if(bucket){
//             let sameitemkey =bucket.find(item=>item[0]===key);
//             if(sameitemkey){
//                 bucket.splice(bucket.indexOf(sameitemkey),1)
//             }
//         }
//     }
// }
// class HashTable{
//     constructor(size){
//         let size =size;
//         this.table =new Array(size)
//     }
//     hash(key){
//         let total =0;
//         for(let i=0;i<key.length;i++){
//             total+= key.charAtCode(i)
//         }
//         return total% key.length
//     }
//     set(key,value){
//         const index= this.hash(key);
//         const bucket = this.table[index];
//         if(!bucket){
//                 this.table[index] =[[key,value]];
//         }else{
//             let sameitemkey = bucket.find(item=>item[0]===key);
//             if(!sameitemkey){
//                 bucket.push([key,value])
//             }else{
//                 sameitemkey.push([key,value])
//             }
//         }
//     }
//     get(key){
//         const index= this.hash(key);
//         const bucket = this.table[index];
//         if(bucket){
//             let sameitemkey = bucket.find(item=>item[0]===key);
//             if(sameitemkey){
//                 return sameitemkey[1]
//             }
//         }
//     }
//     remove(key){
//         const index= this.hash(key);
//         const bucket = this.table[index];
//         if(bucket){
//             let sameitemkey = bucket.find(item=>item[0]===key);
//             if(sameitemkey){
//                 bucket.splice(bucket.indexOf(sameitemkey),1)
//             }
//         }
//     }
// // }
// class HashTable {
//   constructor(size) {
//     this.size = size;
//     this.table = new Array(size);
//   }
//   hash(key) {
//     let total = 0;
//     for (let i = 0; i < key.length; i++) {
//       total += charCodeAt(i);
//     }
//     return total % this.table.length;
//   }
//   set(key, value) {
//     let index = this.hash(key);
//     let bucket = this.table[index];
//     if (!bucket) {
//       this.table[[key, index]];
//     } else {
//       let sameitemkey = bucket.find((item) => item[0] === key);
//       if (!sameitemkey) {
//         bucket.push([key, value]);
//       } else {
//         sameitemkey.push([key, value]);
//       }
//     }
//   }
//   get(key) {
//     const index = this.hash(key);
//     const bucket = this.table[index];
//     if (bucket) {
//       let sameitemkey = bucket.find((item) => item[0] === key);
//       if (sameitemkey) {
//         return sameitemkey[1];
//       }
//     }
//   }
//   remove(key){
//     const index= this.hash(key)
//     const bucket= this.table[index]
//     if(bucket){
//         let samekeyitem = bucket.find(item=>item[0]===key);
//         if(samekeyitem){
//             bucket.splice(bucket.indexOf(samekeyitem),1)
//         }
//     }
//   }
// }
class HashTable{
  constructor(size){
this.size =size;
this.table= new Map()
  }
  hash(key){
    let total =0;
    for(let i=0;i<key.length;i++){
      total += key.charCodeAt(i);

    }
    return total % this.table.length
  }
  set(key,value){
let index =this.hash(key)
let bucket = this.table[index]
if(!bucket){
  this.table[[key,value]]
}
let sameitemkey = this.table.find(item => item[0]=== key)
if(!sameitemkey){
  bucket.push([key,value])

}else{
  sameitemkey.push([key,value])
}
  }
  get(key){
    let index= this.hash(key);
    let bucket = this.table[index]
    if(!bucket){
      return false;
    }
    let sameitemkey = this.table.find(item=> item[0]===key)
    if(sameitemkey){
      return sameitemkey[1]
    }
  }
}
let table = new HashTable(50);
table.set("name", "ajmal");

table.set("age", 18);

table.set("name", "amar");
table.set("age", 45);

//table.display() console.log(table.get("name"))
table.remove("age");
table.display();
