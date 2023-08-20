class Node{
    constructor(value){
        this.value= value;
        this.next= null;
    }
}
class circularLinked{
    constructor(){
        this.head= null;
        this.tail= null
    }
    addNode(value){
        let node= new Node(value);
        if(!this.head){
            this.head= node;
            this.tail =node;
            node.next= this.head;
        }else{
            this.tail.next= node;
            node.next= this.head;
            this.tail= node;
        }

    }

print() {
  if (!this.head) {
    console.log("The circular linked list is empty.");
  } else {
    let current = this.head.next;
    let output = " "+ this.head.value + "->";

    do {
      output += current.value + " -> ";
      current = current.next;
    } while (current != this.head.next);

    console.log(output);
  }
}
}
const list= new circularLinked();
list.addNode(5)
list.addNode(15)
list.addNode(51)
list.addNode(455)
list.print()