class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null
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
    Addlast(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
    }
    AddAfter(pos, value) {
        const node = new Node(value);
        if (this.tail.value == pos) {
            this.tail.next = node;
            this.tail = node
            return
        } else {
            let temp = this.head;
            while (temp) {
                if (temp.value == pos) {
                    node.next = temp.next;
                    temp.next = node;
                    return
                }
                temp = temp.next;

            }
        }
    }
    AddBefore(pos, value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail = node
        } else {
            let temp = this.head;
            while (temp) {
                if (temp.next.value == pos) {
                    node.next = temp.next;
                    temp.next = node;
                    return
                }
                temp = temp.next;
            }
        }
    }
    replace(pos, value) {
        const node = new Node(value);
        if (this.head.value == pos) {
            node.next = this.head.next;
            this.head = node;
        }
        let temp = this.head;
        while (temp) {
            if (temp.next.value == pos) {
                node.next = temp.next.next;
                temp.next = node;
                if (node.next == null) {
                    this.tail = node;
                }
                return

            }
            temp = temp.next;
        }

    }
    FirstDelete() {
        if (!this.head) {
            return
        } else {
            this.head = this.head.next;
            return;
        }
    }
    LastDelete() {
        if (!this.head) {
            return
        } else {
            let temp = this.head;
            while (temp) {
                if (!temp.next.next) {
                    this.tail = temp;
                    temp.next = null;
                    return;

                }
                temp = temp.next;
            }
        }
    }
    AddAtPos(pos, value) {
        let node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail = node;
            return;
        } else {
            let temp = this.head;
            let count = 1;
            if (pos === 1) {
                node.next = this.head;
                this.head = node;
                return;
            }
            while (temp) {
                if (count === pos - 1) {
                    node.next = temp.next;
                    temp.next = node;
                    if (node.next === null) {
                        this.tail = node;
                    }
                    return;
                } else {
                    temp = temp.next;
                    count++;
                }
            }
        }
    }
    DeleteValue(value) {
        if (!this.head) {
            return;
        } else {
            let temp = this.head;
            if (this.head.value == value) {
                this.head = this.head.next;
                return;
            } else {
                while (temp) {
                    if (temp.next.value == value) {
                        temp.next = temp.next.next;
                        if (temp.next == null) {
                            this.tail = temp;
                        }
                        return
                    } else {
                        temp = temp.next;
                    }
                }
            }
        }
    }
    DeleteAfter(value){
        if(!this.head){
            return
        }
        let temp=this.head;
        while(temp){
            if(temp.value==value){
                temp.next=temp.next.next;
                if(temp.next==null){
                    this.tail=temp;
                }
                
                return;

            }
            temp=temp.next;
        }
    }
    deleteBefore(value) {
        if (!this.head) {
          return;
        }
        let current = this.head;
        let prev = null;
        while (current) {
          if (current.next && current.next.value === value) {
            if (prev) {
              prev.next = current.next;
            } else {
              this.head = current.next;
            }
            return;
          }
          prev = current;
          current = current.next;
        }
      }
      reverse(){
        let prev=null;
        let cur=this.head;
        while(cur){
            let next=cur.next;
            cur.next=prev;
            prev=cur;
            cur=next

        }
        this.head=prev;

      }
      middle() {
        let slow = this.head;
        let fast = this.head;
        let prev=null;
    
        if (!this.head) {
            return;
        }
    
        while (fast && fast.next) {
            prev=slow;
            slow = slow.next;
            fast = fast.next.next;
          
        }
    
        if (fast) { 
            console.log(`${slow.value}`);
        } else { 
            console.log(`${slow.value}, ${prev.value}`);
        }
    }
      
linktoarray(head){
    const arr =[];
    let node=head;
    while(node!=null){
        arr.push(node.value);
        node=node.next;

    }
    return arr;

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

let list = new LinkedList()
console.log("add first")
list.AddFirst(10)
list.AddFirst(50)
list.AddFirst(80)
list.print()
console.log("add last");
list.Addlast(100)
list.print()
console.log(("addafter"));
list.AddAfter(100, 500);
list.print()
console.log("addbefore");
list.AddBefore(10, 400)
list.print()
console.log("replace");
list.replace(500, 800);
list.print();
// list.LastDelete() list.FirstDelete();
list.AddAtPos(7, 700)
//console.log(list)
// list.DeleteValue(700)
// console.log("afterdelete by value");
// list.DeleteBefore(100);
// console.log(list);
// list.print()
// list.reverse();
// console.log("reversed list");
list.print()

console.log("after linkedlist to array")
console.log(list.linktoarray(list.head));