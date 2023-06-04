class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
class firstlinked{
    constructor(){
        this.head=null;
        this.tail=null;
    }
    AddFirst(value) {
        const node = new Node(value)
        if (!this.head) {
            this.head = node;
            this.tail = node;

        } else {
            node.next = this.head;
            this.head = node;
        }
       
    }
    Addmerge(list) {
        if (!list.head) {
            return;
        }
        if (!this.head) {
            this.head = list.head;
            this.tail = list.tail;
        } else {
            this.tail.next=list.head;
            this.tail=list.tail;
            // list.tail.next = this.head;
            // this.head = list.head;
        }
    }
    print() {
        if (!this.head) {
            console.log("no head")
        } else {
            let list = "";
            let temp = this
                .head
            while (temp) {
                list += " " + temp.value;
                temp = temp.next;
            }
            console
                .log(list)
        }
    }
}
class secondlinked{
    cosntructor(){
        this.head=null;
        this.tail=null;
    }
    AddFirst(value) {
        const node = new Node(value)
        if (!this.head) {
            this.head = node;
            this.tail = node;

        } else {
            node.next = this.head;
            this.head = node;
        }
    }
    
    print() {
        if (!this.head) {
            console.log("no head")
        } else {
            let list = "";
            let temp = this
                .head
            while (temp) {
                list += " " + temp.value;
                temp = temp.next;
            }
            console
                .log(list)
        }
    }
}

l1= new firstlinked()
l2= new secondlinked()

l1.AddFirst(1)
l1.print()
console.log("second");
l2.AddFirst(5)
l2.print()
console.log("merged");
l1.Addmerge(l2)
l1.print()
console.log(l1);

