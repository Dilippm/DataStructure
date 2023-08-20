class Node{
    constructor(value){
        this.value =value;
        this.prev =null;
        this.next= null;
    }
}
class DoubleLinked{
    constructor(){
        this.head= null;
        this.tail= null
    }
    addFirst(value){
        const node = new Node(value)
        if(!this.head){
            this.head= node;
            this.tail= node;
            return;
        }
        node.next= this.head;
        this.head.prev= node;
        this.head= node;
        return;

    }
    addLast(value){
        const node= new Node(value)
        if(!this.head){
            return null
        }
        this.tail.next= node;
        node.prev = this.tail;
        this.tail= node;
        return;

    }
    addAfter(target,value){
        const node= new Node(value);
        if(!this.head){
            return null;
        }
        let temp= this.head;
        while(temp){
            if(temp.value==target){
                node.prev= temp;
                node.next= temp.next;
                if(temp.next){
                    temp.next.prev= node;

                }
                temp.next= node;
                return
            }
            temp= temp.next;
        }
    }
    addBefore(target,value){
        const node = new Node(value);
        if(!this.head){
            return null;
        }
        if(this.head.value==target){
            node.next= this.head;
            this.head.prev= node;
            this.head= node;
            return;
        }
        let temp= this.head;
        while(temp){
            if(temp.value== target){
                node.prev= temp.prev.next;
                temp.prev.next= node
                temp.prev= node;
                node.next= temp;
                return;
            }
            temp=temp.next;
        }
    }
    findMiddle(){
       let slow= this.head;
       let fast= this.head;
       let prev= null;
       while(fast && fast.next){
        prev= slow;
        slow= slow.next;
        fast= fast.next.next;
       }
       if(fast==null){
        console.log(prev.value,slow.value)
       }else{
        console.log((slow.value));
       }
    }
    firstDelete(){
        if(!this.head){
            return null;
        }
        let temp= this.head.next;
        temp.prev= null;
        this.head.next= null;
        this.head = temp;
    }
    deleteLast(){
        this.tail.prev.next= null;
        let temp= this.tail.prev;
        this.tail.prev= null;
        this.tail= temp;
        return;
    }
    deleteAfter(target){
        let temp= this.head;
        while(temp){
            if(temp.value==target){
                let prev= temp.next;
                temp.next= prev.next;
                prev.next.prev = temp;
            }
            temp= temp.next;
        }
    }
    deleteBefore(target){
        if(!this.head){
            return null;
        }
    let temp= this.head;
    while(temp){
        if(temp.value==target){
            let amen = temp.prev;
            temp.prev= amen.prev;
            amen.prev.next= temp

        }
        temp= temp.next;
       
    }
    }
    print(){
        if(!this.head){
            console.log("nod ehad");
        }else{
            let temp = this.head;
            let str= "";
            while(temp){
                str+= temp.value +"<-->";
                    temp= temp.next;
            }
            console.log(str);

        }
    }
}
const list= new DoubleLinked();

list.addFirst(3)
list.addFirst(13)
list.addFirst(30)
list.addLast(89)
list.addLast(9)
// list.addAfter(3,79)
list.addBefore(89,45)
list.print()
list.deleteBefore(3)
list.print();
//list.findMiddle()