// class Queue {
//     constructor() {
//       this.stack1 = [];
//       this.stack2 = [];
//     }
  
//     enqueue(element) {
//       this.stack1.push(element);
//     }
  
//     dequeue() {
//       if (this.stack2.length === 0) {
//         if (this.stack1.length === 0) {
//           return "Queue is empty";
//         }
  
//         while (this.stack1.length > 0) {
//           const element = this.stack1.pop();
//           this.stack2.push(element);
//         }
//       }
  
//       return this.stack2.pop();
//     }
  
//     isEmpty() {
//       return this.stack1.length === 0 && this.stack2.length === 0;
//     }
  
//     size() {
//       return this.stack1.length + this.stack2.length;
//     }
  
//     print() {
//       const combinedStack = [...this.stack2].reverse().concat(this.stack1);
//       console.log(combinedStack.join(", "));
//     }
//   }
  
//   const queue = new Queue();
  
//   //console.log(queue.isEmpty()); // Output: true
//   queue.enqueue(20);
//   queue.enqueue(10);
//   queue.enqueue(30);
//   queue.enqueue(80);
// //   console.log(queue.size()); // Output: 4
//   queue.print(); // Output: 20, 10, 30, 80
//    console.log(queue.dequeue()); // Output: 20
//   queue.print()
// //   console.log(queue.dequeue()); // Output: 10
// //   console.log(queue.peek()); // Output: 30

class Queue{
  constructor(){
    this.s1=[]
    this.s2=[]
  }
  push(x){
    this.s2.push(x)

  }
  pop(){
    if(this.s1.length==0){
      if(this.s2.length==0){
        console.log("empty");
      }else{
        while(this.s2.length>0){
          this.s1.push(this.s2.pop())
          
        }
      }
     
    }
    return this.s1.pop()
  }
  print(){
  const combined=[...this.s2].reverse().concat(this.s1)
  console.log(combined);
  }

}
let stack =new Queue();
stack.push(4);
stack.push(1);
stack.push(89);
stack.push(45);
stack.push(34);
stack.print()
console.log(stack.pop());
 stack.print()