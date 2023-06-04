class MyQueue{
constructor(){
    this.s1=[];
    this.s2=[];
}
    Push(x){
        this.s1.push(x)
    }
  pop(){
    if(this.s2.length==0){
        while(this.s1.length>0){
            this.s2.push(this.s1.pop())
        }
    }
    return this.s2.pop()
  }
  peek(){
    console.log(this.s2[this.s2.length-1]);
  }
    print(){
        console.log(this.s1.toString());
        console.log(this.s2.toString());
    }


}
let obj =new MyQueue();
obj.Push(3);
obj.Push(8);
obj.Push(6);
 obj.Push(7);
 obj.Push(2);
obj.print()

console.log("after pop");
obj.pop()
obj.print()
console.log("peek");
obj.peek()


