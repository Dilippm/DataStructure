class Queue{
    constructor(){
        this.items =[]
    }
    enqueue(element){
        this.items.push(element)
    }
    dequeue(){
       return this.items.shift()
    }
    isempty(){
        return this.items.length === 0
    }
    peek(){
        if(!this.isempty()){
            this.items[0]
        }else{
            return null
        }
    }
    size(){
        return this.items.length
    }
    print(){
        // console.log(this.items.toString());
        let itemss =""
        for(let i=0;i<this.items.length;i++){
            itemss+=" "+this.items[i]
           
        }
        console.log(itemss);

    }
}

const queue = new Queue();
//console.log(queue.isempty());
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(80)
console.log("size: ",queue.size());
queue.print()
console.log("deletion");
console.log(queue.dequeue()); 

queue.print()
