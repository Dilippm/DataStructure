// class Node{
//     constructor(value){
//         this.value=value;
//         this.next=null
//     }
// }
// class Queue{
//     construcotr(){
//         this.front =null;
//         this.rear =null
//     }
//     Enqueue(value){
//         let node= new Node(value);
//         if(!this.front){
//             this.front = node;
//             this.rear=node;
//         }else{
//             this.rear.next=node;
//             this.rear=node;
//         }

//     }
//     Dequeue(){
//         if(!this.front){
//             return
//         }else{
//             this.front =this.front.next
//             if(!this.front){
//                 this.rear = null
//             }
//         }
//     }
//     print(){
//         if(!this.front){
//             console.log("queue is empty");
//         }else{
//             let temp= this.front;
//             while(temp){
//                 console.log(temp.value);
//                 temp=temp.next
//             }
//         }
//     }
// }
// let queue =new Queue();
// queue.Enqueue(5);
// queue.Enqueue(10);
// queue.Enqueue(20);
// queue.print()
//  console.log("after dequeue");
//  queue.Dequeue()
//  queue.print()
// class Node{
//     constructor(value){
//         this.value =value;
//         this.next=null
//     }
// }
// class Queue{
//     constructor(){
//         this.front =null;
//         this.rear=null
//     }
//     enqueue(x){
//         let node =new Node(x)
//         if(!this.front){
//             this.front = node;
//             this.rear =node
//         }else{
//             this.rear.next=node;
//             this.rear =node
//         }
//     }
//         dequeue(){
//             if(!this.front){
//                 return
//             }else{
//                 this.front=this.front.next;
                
//             }
//         }
//         middle(){
//             if(!this.front){
//                 return
//             }else{
//                 let prev=null;
//                 let sprev=null;
//                 let slow=this.front;
//                 let fast= this.front;
              
//                 while(fast && fast.next){
//                     sprev=prev;
//                     prev=slow;
//                     slow=slow.next;
//                     fast=fast.next.next
//                 }
//                 if(fast){
//                     return slow
//                 }else{
//                     return {prev,slow}
//                 }
//             }
//         }
//     print(){
//         if(!this.front){
//             console.log("no front")
//         }else{
//             let temp= this.front;
//             let queue =""
//             while(temp){
//                 queue +=" "+ temp.value
//                 temp=temp.next
//             }
//             console.log(queue)
//         }
//     }
// }
// let queue =new Queue();
// queue.enqueue(3)
// queue.enqueue(5)
// queue.enqueue(1)
// queue.print()
// // queue.dequeue()
// // queue.print()
// console.log(queue.middle())
class Node{
    constructor(value){
        this.value =value;
        this.next=null
    }
}
class Queue{
    constructor(){
        this.front =null;
        this.rear=null
    }
    enqueue(x){
        let node =new Node(x)
        if(!this.front){
            this.front = node;
            this.rear =node
        }else{
            this.rear.next=node;
            this.rear =node
        }
    }
        dequeue(){
            if(!this.front){
                return
            }else{
                this.front=this.front.next;
                
            }
        }
        middle(){
            if(!this.front){
                return
            }else{
                let prev=null;
                let sprev=null;
                let slow=this.front;
                let fast= this.front;
              
                while(fast && fast.next){
                    sprev=prev;
                    prev=slow;
                    slow-slow.next;
                    fast=fast.next.next
                }
                if(fast){
                    return slow
                }else{
                    return {prev,slow}
                }
            }
        }
    print(){
        if(!this.front){
            console.log("no front")
        }else{
            let temp= this.front;
            let queue =""
            while(temp){
                queue +=" "+ temp.value
                temp=temp.next
            }
            console.log(queue)
        }
    }
}
let queue =new Queue();
queue.enqueue(3)
queue.enqueue(5)
queue.enqueue(1)
queue.print()
// queue.dequeue()
// queue.print()
console.log(queue.middle())