// class MyStack{
//     constructor(){
//         this.q1=[];
//         this.q2=[];
//     }
//     push(x){
    
//         this.q2.push(x);
      
//         while(this.q1.length>0){

//             this.q2.push(this.q1.shift())
         
//         }
      
//         [this.q1,this.q2] =[this.q2,this.q1]
//     }
    
// pop(){
//     if(this.q1.length==0){
//         return
//     }else{
//         this.q1.shift()
//     }
// }
// top(){
//     return this.q1[0]
// }
// empty(){
//     return this.q1.length===0
// }
//     print(){
//         console.log("q1:",this.q1.toString());
//         console.log("q2:",this.q2.toString());
//     }
// }

// let stack = new MyStack();
// stack.push(1);
// stack.push(2);
// stack.push(3);
// stack.push(4);
// console.log(stack.top());
// stack.print()
// stack.pop();
// console.log("after pop");
// stack.print()
// console.log(stack.top());
// console.log(stack.empty());
// class Stack{
//     constructor(){
//         this.q1 =[];
//         this.q2 =[];
//     };
//     push(x){
//         this.q2.push(x);
//         while(this.q1.length>0){
//             this.q2.push(this.q1.shift())
//         }
//         [this.q1,this.q2] =[this.q2,this.q1]
//     }
//     pop(){
//         if(this.q1.length===0){
//             return
//         }else{
//                return  this.q1.shift()
//         }
        
//     }
//     print(){
//         const combinedQueue = [...this.q2].reverse().concat(this.q1);
//       console.log(combinedQueue.join(", "));
//     }

// }
// let stack = new Stack();
// stack.push(3);
// stack.push(390);
// stack.push(89);
// stack.print()
// console.log( stack.pop())
// stack.print()
class Stack{
    constructor(){
        this.q1 =[];
        this.q2 =[];
    };
    push(x){
        this.q2.push(x);
       
    }
    pop(){
       if(this.q1.length===0){
        while(this.q2.length>0){
            this.q1.push(this.q2.pop())
        }
        

       }
       return this.q1.pop()
        
    }
    print(){
        const combinedQueue = [...this.q2].reverse().concat(this.q1);
      console.log(combinedQueue.join(", "));
    }

}
let stack = new Stack();
stack.push(3);
stack.push(390);
stack.push(89);
stack.print()
console.log(stack.pop())
stack.print()