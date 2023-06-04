// let a="this is is my name";
// let b= a.split(" ")
// console.log(b);
// for(let i=0;i<b.length-1;i++){
//     for(j=i+1;j<b.length;j++){
//         if(b[i]==b[j]){
//             for(let k=j;k<b.length;k++){
//                 b[k]=b[k+1];
//             }
//             j--;
//             b.length--
//         }
//     }
// }
// console.log(b);
// console.log(b.join(' '))

//bubble sort
// let a =[3,5,1,8]
// for(let i=0;i<a.length;i++){
//     for(let j=0;j<a.length-i-1;j++){
//         if(a[j]>a[j+1]){
//             [a[j],a[j+1]] =[a[j+1],a[j]]
//         }
//     }
// }

// console.log(a);
// //quicksort

// function quicksort(a){
//     if(a.length<1){
//         return a
//     }else{

//         let pivot =a[0];
//         let left =[];
//         let right =[];
//         for(let i=1;i<a.length;i++){
//             if(a[i]<pivot){
//                 left.push(a[i])
    
//             }else{
//                 right.push(a[i])
//             }
    
//         }
//         return [...quicksort(left),pivot,...quicksort(right)]
//     }
   
   
// }

// console.log(quicksort(a))

// //insertion sort

// for(let i=1;i<a.length;i++){
//     let t= a[i];
//     j=i-1;
//     while(j>=0 && t<a[j]){
//         a[j+1]=a[j];
//         j=j-1
//     }
//     a[j+1]=t
// }
// console.log(a);

// //merge sort

// function mergesort(a){
//     if (a.length <= 1) {
//         return a;
//       }
//     let mid= Math.floor(a.length/2);
//     let left = a.slice(0,mid);
//     let right =a.slice(mid);
//     return merge(mergesort(left),mergesort(right))
    
// }
// function merge(left,right){
//     let sorted =[];
//     while(left.length && right.length){
//         if(left[0]>=right[0]){
//             sorted.push(left.shift())
//         }else{
//             sorted.push(right.shift())
//         }
//     }
//     return [...sorted,...left,...right]
// }
// console.log(mergesort(a));

// class Node{
//     constructor(value){
//         this.value=value;
//         this.next=null
//     }
// }
// class Stack{
//     constructor(){
//         this.top=null
//     }
//     push(x){
//         let node =new Node(x);
//         if(!this.top){
//             this.top=node;
//         }else{
//             node.next=this.top;
//             this.top=node
//         }
//     }
//     pop(){
//         if(!this.top){
//             return
//         }else{
//         this.top=this.top.next
//         }
//     }
//     middle(){
//         if(!this.top){
//             return
//         }else{
//             //let sprev=null;
//             let prev =null;
//             let slow= this.top;
//             let fast= this.top;
//             while(fast && fast.next){
//                // sprev=prev;
//                 prev=slow;
//                 slow=slow.next;
//                 fast= fast.next.next;
//             }
//             if(fast){
//                 return slow.value
//             }
//              else{
//               return   [prev.value,slow.value];
//             }
//         }
//     }
//     middlepop(){
//         if(!this.top){
//             return
//         }else{
//             let sprev=null;
//             let prev =null;
//             let slow= this.top;
//             let fast= this.top;
//             while(fast && fast.next){
//                 sprev=prev;
//                 prev=slow;
//                 slow=slow.next;
//                 fast= fast.next.next;
//             }
//             if(fast){
//                 prev.next= slow.next
//             }else{
//                 sprev.next=slow.next
//             }

//     }
// }
//     display(){
//         if(!this.top){
//             console.log("no top");
//         }else{
//             let temp=this.top;
//             let cur ="";
//             while(temp){
//                 cur+=" "+temp.value
//                 temp=temp.next;
//             }
//             console.log(cur);
//         }
//     }
// }
// let stack= new Stack();
// stack.push(45)
// stack.push(4)
// stack.push(5)
// //stack.push(89)
// stack.display()
// // stack.pop();
// // stack.display()
// console.log(stack.middle());
// stack.middlepop();
// stack.display()

//Queue

// class Node{
//     constructor(value){
//         this.value = value;
//         this.next=null
//     }
// }
// class Queue{
//     constructor(){
//         this.front =null;
//         this.rear =null
//     }
//     Enqueue(x){
//         let node =new Node(x)
//         if(!this.front){
//             this.front= node
//             this.rear = node;
//         }else{
//             this.rear.next=node;
//             this.rear=node;
//         }
//     }
//     Dequeue(){
//         if(!this.front){
//             return
//         }else{
//             this.front = this.front.next;
//         }
//     }
//     middle(){
//         if(!this.front){
//             return
//         }else{
//             let sprev= null;
//             let prev= null;
//             let slow=this.front;
//             let fast= this.front
//             while(fast && fast.next){
//                 sprev=prev;
//                 prev=slow;
//                 slow=slow.next;
//                 fast=fast.next.next;
//             }
//             if(fast){
//                prev.next= slow.next
//             }else{
//                 sprev.next=slow.next
//             }
//         }

//     }
//     display(){
//         if(!this.front){
//             console.log("no front");
//         }else{
//             let temp= this.front;
//             let cur = ""
//             while(temp){
//                     cur+= " "+temp.value;
//                     temp=temp.next;
//             }
//             console.log(cur);
             
//         }
//     }
// }
// let queue = new Queue();
// queue.Enqueue(56);
// queue.Enqueue(8);
// queue.Enqueue(6);
// queue.Enqueue(456);
// queue.display()
// queue.Dequeue();
// //queue.display();
// //queue.middle();
// queue.display()

// implement queue using two stack


// class Queue{
//     constructor(){
//         this.s1=[]
//         this.s2=[]
//     }
//     enqueue(x){
//         this.s2.push(x);

//     }
//     pop(){
//         if(this.s1.length==0){
//           while(this.s2.length>0){
//             this.s1.push(this.s2.pop())
//           }
//         }
//           return this.s1.pop()
            
           
//         }
        
//         display(){
//             const queue =[...this.s2].reverse().concat(this.s1)
//             console.log(queue.join(" "));
//         }
    
// }

// let stack =new Queue();
// stack.enqueue(4);
// stack.enqueue(89);
// stack.enqueue(74);
// stack.enqueue(56);
// stack.display()
// console.log(stack.pop()); 
// stack.display()


// implement a stack using two queue

// class Stack{
//     constructor(){
//         this.q1=[];
//         this.q2 =[]
//     }
//     push(x){
//         this.q1.push(x)
//     }
//     pop(){
//         if(this.q1.length==0){
//             while(this.q2.length>0){
//                 this.q1.push(this.q1.pop())
//             }
//         }
//         return this.q1.pop()
//     }
//     display(){
//         let stack = [...this.q1].reverse().concat(this.q2)
//         console.log(stack);
//     }
// }

// let stack = new Stack();
// stack .push(45);
// stack .push(4);
// stack .push(5);
// stack .push(545);
// stack.display();
// stack.pop();
// stack.display();

//HashTable

// class HashTable{
//     constructor(size){
//         this.size=size;
//         this.table =new Array(size)
//     }
//     hash(key){
// let total =0;
// if(typeof key==="string"){


// for(let i=0;i<key.length;i++){
//     total+= key.charCodeAt(i);
// }
// return total% this.size
// }
// return key% this.size
//     }
//     set(key,value){
//         const index = this.hash(key);
//         this.table[index] = [key,value]
//     }
//     get(key){
//         const index = this.hash(key);
//         return this.table[index];
//     }
//     remove(key){
//         const index =this.hash(key);
//         this.table[index] = undefined
//     }
//     display(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(this.table[i]);
//             }
//         }
//     }
// }

// let hash =new HashTable(50);

// hash.set("name","ajmal");
// hash.set("age",85);

// console.log(hash.get("age"));
// hash.display()
// hash.remove("age");
// hash.display()

// hash table  with collision'
class HashTable{
    constructor(size){
        this.size =size;
        this.table =new Array(size);
    }
    hash(key){
        let total =0;
    if(typeof key ==='string'){
        for(let i=0;i<key.length;i++){
            total += key.charCodeAt(i);
        }
        return total % this.size;
    }
    return key % this.size;

    }
    set(key,value){
        const index = this.hash(key);
        let bucket = this.table[index];
        if(!bucket){
            this.table[index] =[[key,value]]
        }else{
            let samekeyitem = bucket.find(item => item[0]===key);
            if(samekeyitem){
                samekeyitem[1] =value;
            }else{
                bucket.push([key,value])
            }
        }

    }
    get(key){
        const index =this.hash(key);
        let bucket = this.table[index];
        if(bucket){
            let samekeyitem = bucket.find(item => item[0]===key)
            if(samekeyitem){
                return samekeyitem[1];
            }
        }
        return undefined;
    }
    remove(key){
        const index = this.hash(key);
        let bucket  = this.table[index];
        if(bucket){
            let samekeyitem =  bucket.find(item => item[0]===key)
            if(samekeyitem){
                bucket.splice(bucket.indexOf(samekeyitem),1)
            }
        }
    }
    display(){
        for(let i=0;i<this.size;i++){
            if(this.table[i]){
                console.log(this.table[i]);
            }
        }
    }
}

let table  = new HashTable(50);

table.set("name","ajmal");
table.set("name","amar");
table.set("name","rahul");
table.set("mane","shiva");
table.set("age",78);
//console.log(table.get("name"))

table.display()
table.remove("name");
table.display()
