// // class Stack{
// //     constructor(){
// //         this.items=[];

// //     }


// //     push(element){
// //         this.items.push(element)
// //     }
// //     pop(){
// //        return  this.items.pop()
// //     }
// //     pek(){
// //         return this.items[this.items.length-1];

// //     }
// //     isEmpty(){
// //         return this.length==0
// //     }
// //     size(){
// //         return this.items.length
// //     }
// //     print(){
        
// //             console.log(this.items.toString());

        
        
// //     }
// // }

// // const stack =new Stack()
// // //console.log(stack.isEmpty());
// // stack.push(2);
// // stack.push(3);
// // stack.push(8)
// // //console.log("size:",stack.size());
// // stack.print()
// // stack.pop()
// // console.log("after pop");
// // stack.print()
// // console.log(stack.pek()); 


// // class Node{
// //     constructor(value){
// //         this.value =value;
// //         this.next=null;

// //     }
// // }
// // class Stack{
// //     constructor(){
// //         this.top =null;
// //     }
// //     push(value){
// //             let node =new Node(value);
// //             if(!this.top){
// //                 this.top =node;
// //             }else{
// //                 node.next=this.top;
// //                 this.top= node
// //             }
// //     }
// //     pop(){
// //         if(!this.top){
// //             console.log("stack underflow");
// //         }else{
// //             this.top =this.top.next
// //         }
// //     }
// //     middle(){
// //         if(!this.top){
// //             console.log("stack underflow");
// //         }else{
// //             let slow= this.top;
// //             let fast=this.top;
// //             let prev=null;
// //             while(fast && fast.next){
// //                 prev =slow;
// //                 slow=slow.next
// //                 fast=fast.next.next;
// //             }
// //             if(fast){
// //                 console.log(slow.value);

// //             }else{
// //                 console.log(slow.value , prev.value);
// //             }
            
// //         }
// //     }
// //     popmiddle(){
// //         if(!this.top){
// //             console.log("stack underflow");
// //         }else{
// //             let slow= this.top;
// //             let fast=this.top;
// //             let prev=null;
// //             let sprev =null;
// //             while(fast && fast.next){
// //                 sprev=prev;
// //                 prev =slow;
// //                 slow=slow.next
// //                 fast=fast.next.next;
// //             }
// //             if(fast){
// //                 prev.next= slow.next
                
// //             }else{
// //                 sprev.next = slow.next;
              
// //             }

// //     }
// // }
// //     print(){
// //         if(!this.top){
// //             console.log("no top")
// //         }else{
// //             let temp=this.top;
// //             while(temp){
                
// //                 console.log(temp.value);
// //                 temp=temp.next;
// //             }
// //         }
// //     }
// // }
// // let stack =new Stack();

// // stack.push(3);
// // stack.push(67);
// // stack.push(78);
// // stack.push(8);
// // stack.push(7);
// // stack.push(50);
// // stack.print();
// // // console.log("after pop");
// // // stack.pop();

// // // stack.print()
// // //stack.middle()
// // stack.popmiddle();
// // console.log("after popmiddle");
// // stack.print()

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
//         let node = new Node(x)
//         if(!this.top){
//             this.top=node;
            
//         }else{
//             node.next = this.top;
//             this.top= node;
//         }
//     }
//     pop(){
//         if(!this.top){
//             return 
//         }else{
//             this.top=this.top.next
//         }
//     }
//     middle(){
//         if(!this.top){
//             return
//         }else{
//             let slow= this.top;
//             let fast=this.top;
//             let prev=null;
//             let sprev =null
//             while(fast && fast.next){
//                 sprev=prev;
//                 prev=slow;
//                 slow=slow.next;
//                 fast=fast.next.next
//             }
//             if(fast){
//                 return slow
//             }else{
//                 return { prev,slow}
//             }
//         }
//     }
//     middlepop(){
//         if(!this.top){
//             return
//         }else{
//             let slow= this.top;
//             let fast=this.top;
//             let prev=null;
//             let sprev =null
//             while(fast && fast.next){
//                 sprev=prev;
//                 prev=slow;
//                 slow=slow.next;
//                 fast=fast.next.next
//             }
//             if(fast){
//               prev.next=slow.next
//             }else{
//                 sprev.next=slow.next
//             }
//         }
        
//     }
//     print(){
//         if(!this.top){
//             console.log("stack underflow")
//         }else{
//             let temp=this.top
//             let stack=""
//             while(temp){
//               stack+= " "+ temp.value
//                 temp=temp.next
//             }
//              console.log(stack)
//         }
       
//     }
// }
// class Stacks{
//     constructor(){
//         this.item =[]
//     }
//     push(x){
//          this.item.push(x)
         
//     }
//     pop(){
//         this.item.pop()
//     }
//     print(){
//         // if(this.item){
//         //     for(let i=0;i<this.item.length;i++){
//         //         console.log(this.item[i])
//         //     }
//         // }
//         console.log(this.item.toString());
//     }
    
// }
// let stack =new Stack();
// let stacks =new Stacks()
// stack .push(3)
// stacks .push(3)
// stack .push(7)
// stacks .push(7)
// stacks .push(9)
// stack .push(9)
// stacks .push(45)
// stack .push(45)
// stack.print()
// stacks.print()
// // // stack.pop()
// // stack.print()
// // console.log(stack.middle())
// // stack.middlepop()
// // stack.print()

// class Node{
//     constructor(value){
//         this.value=value;
//         this.next=null;
//     }
// }
// class Stack{
//     constructor(){
//         this.top =null;
//     }
//     push(x){
//         let node = new Node(x)

//         if(!this.top){
//             this.top =node;
//         }else{
//           node.next=this.top;
//            this.top=node;
//         }
//     }
//     pop(){
//         if(!this.top){
//             return
//         }else{
//             this.top=this.top.next
//         }
//     }
//     middle(){
//         if(!this.top){
//             return
//         }else{
//             let sprev= null;
//             let prev =null;
//             let slow=this.top;
//             let fast =this.top;

          
//             while(fast && fast.next){
//                 sprev=prev;
//                 prev=slow;
//                 slow=slow.next;
//                 fast=fast.next.next;
//             }
//             if(fast){
//                 return slow
//             }else{
//                 return [prev.value,slow.value]
//             }
//         }
//     }
//     print(){
//         if(!this.top){
//             console.log("no top");
//         }else{
//             let temp= this.top;
//             let cur=""
//             while(temp){
//                     cur+= " "+ temp.value;
//                     temp=temp.next;
//             }
//             console.log(cur);
//         }
//     }
// }
class Node{
    constructor(value){
        this.value= value;
        this.next= null;
    }
}
class Stack{
    constructor(){
        this.top= null;
    }
    push(value){
        let node= new Node(value);
        if(!this.top){
            this.top= node;
        }else{
         node.next=this.top;
         this.top= node;

        }
    }
    pop(){
        if(this.top){
         this.top= this.top.next;

        }
    }
    print(){
                if(!this.top){
                    console.log("no top");
                }else{
                    let temp= this.top;
                    let cur=""
                    while(temp){
                            cur+= "<--"+ temp.value;
                            temp=temp.next;
                    }
                    console.log(cur);
                }
            }
}
let stack =new Stack();
stack.push(3)
stack.push(8)
stack.push(78)
stack.push(45)
stack.print()
// stack.pop()
// stack.print()
