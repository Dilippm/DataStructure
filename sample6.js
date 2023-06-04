class Stack{
    constructor(){
        this.s1=[];
        this.s2=[]
    }
    push(x){
   
        this.s1.push(x);

    
    }
    pop(){
        let mid =Math.floor(this.s1.length/2);
        console.log(mid);
        while(this.s1.length>mid){
            this.s2.push(this.s1.pop())
        }
        this.s1.pop();
        while(this.s2.length>0){
            this.s1.push(this.s2.pop())
        }
    }
    display(){
        console.log(this.s1);
        console.log(this.s2);
    }
}

let stack =new Stack();
stack.push(4);
stack.push(45);
stack.push(54);
stack.push(89);

stack.display();
stack.pop();
stack.display()