class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class remove{
    constructor(){
        this.head=null;
        this.tail=null
    };
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

    removeduplicate(){
        if(!this.head){
            return 
        }else {
            let current = this.head;
            let prev= null;
            while(current){
                if(prev&&prev.value==current.value){
                    prev.next=current.next;
                    if(prev.next==null){
                        this.tail=prev;
                    }


                }else{
                    prev=current
                }
                current=current.next;
            }
        }

        return this.head;
    }
    print() {
        if (!this.head) {
            console.log("nod head")
        } else {
            let list = "--->";
            let temp = this
                .head
            while (temp) {
                list += temp.value+"--->";
                temp = temp.next;
            }
            console.log(list)
        }
    }
}

let list  = new remove();

list.AddFirst(10);
list.AddFirst(10);
list.AddFirst(20);
list.AddFirst(20);
list.AddFirst(30);
list.AddFirst(31);
list.AddFirst(40);
list.AddFirst(40);
list.print()
list.removeduplicate()
console.log("after removing")
list.print()
console.log(list)
