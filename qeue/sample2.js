class Queue{
    constructor(){
        this.items ={}
        this.rear= 0;
        this.front= 0;
    }
    enqueue(element){
       this.items[this.rear] = element;
        this.rear++;
        
    }
    dequeue(){
        const items =this.items[this.front]
         delete this.items[this.front];
         this.front ++;
         return items;   
    }
    isEmpty(){
        return this.rear - this.front === 0
    }
    peek(){
        return this.items[this.front];
    }
    size(){
        return this.rear = this.front 
    }
    print(){
        console.log(this.items)
    }


}

let queue =new Queue()
console.log(queue.isEmpty());
queue.enqueue(10)
queue.enqueue(5)
queue.enqueue(7)
queue.print()
console.log("delte");
queue.dequeue();
queue.print()
console.log(queue.peek());