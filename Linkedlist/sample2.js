class Node{
    constructor(value){
        this.prev=null;
        this.value=value;
        this.next=null;
    }
}

class DoubleLinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
    };
     
    AddFirst(value){
        let node= new Node(value)
        if(!this.head){
            this.head=node;
           

            this.tail =node;
            return
        }else{
            this.head.prev =node;
            node.next= this.head;
            this.head=node;
            return
            
        }
    }
   AddLast(value){
    let node =new Node(value);
    if(!this.head){
        this.head=node;
        this.tail=node;
        return
    }else{
    // let temp=this.head;
    // while(temp){
    //     if(temp.next==null){
    //         temp.next=node;
    //         node.prev= temp;
    //         this.tail=node
    //         return
    //     }
    //     temp=temp.next
    // }
    this.tail.next=node;
    node.prev=this.tail;
    this.tail=node;
    return;
    }
   }
   AddAfter(pos,value){
    let node= new Node(value);
    if(!this.head){
        this.head=node;
        this.tail=node;
        return
    }else{
        let temp=this.head;
        while(temp){
            if(temp.value==pos){
                if(temp.next==null){
                    temp.next=node;
                    node.prev= temp;
                    this.tail=node
                    return

                }
                node.next=temp.next;
                temp.next.prev =node;
                node.prev=temp;
                temp.next=node
                
                return


            }
            temp=temp.next
        }
    }
   }
   AddBefore(pos,value){
    let node= new Node(value);
    if(!this.head){
        this.head=node;
        this.tail=node;
        return
    }else if(this.head.value==pos){
        this.head.prev =node;
            node.next= this.head;
            this.head=node;
            return

    }else{
         let temp= this.head;
         while(temp){
            if(temp.next.value==pos){
                node.next=temp.next;
                temp.next.prev =node;
                node.prev=temp;
                temp.next=node
                
                return
            }
            temp=temp.next;
         }
    }
   }
   /*----------------------Delete----------*/
   FirstDelete(){
    if(!this.head){
        return
    }else{
        this.head=this.head.next;
        this.head.prev =null;
        return
    }
   }
   LastDelete(){
    if(!this.head){
        return;
    }else{
        let temp=this.head;
        while(temp){
            if(temp.next.next==null){
                temp.next.prev=null
                temp.next =null;
                
                this.tail=temp;
                return;
            }
            temp=temp.next
        }
    }
   }
   DeleteAfter(pos){
    if(!this.head){
        return

    }else{
        let temp=this.head
        while(temp){
            if(temp.value==pos){
                temp.next=temp.next.next
                temp.next.next.prev=temp;
                return
                
            }
            temp=temp.next
        }
    }
   }
   DeleteBefore(pos){
    if(!this.head){
        return

    }else{
        let temp =this.head;
        while(temp){
            if(temp.next.next.value==pos){
                temp.next=temp.next.next
                temp.next.next.prev=temp;
                return

            }
            temp=temp.next;
        }

    }
   }
   DeleteAtTarget(tar){
    if(!this.head){
        return
    }else{
        if(this.head.value==tar){
            this.head=this.head.next;
        this.head.prev =null;
            return
        }else if(this.tail.value==tar){
            
           
            this.tail=this.tail.prev
             this.tail.next=null;
            return
        }else{
            let temp=this.head;
            while(temp){
                if(temp.value==tar){
                    temp.prev.next=temp.next;
                    temp.next.prev =temp.prev.next
                    return;
                }
                temp=temp.next
            }
        }
    }
   }
   deleteDuplicate(tar) {
    if (!this.head) {
        return;
    } else {
        let temp = this.head;
        while (temp) {
            if (temp.value == tar) {
                if (temp.value == this.head.value) {
                    this.head = this.head.next;
                    if (this.head) {
                        this.head.prev = null;
                    }
                } else if (temp.value == this.tail.value) {
                    this.tail = this.tail.prev;
                    if (this.tail) {
                        this.tail.next = null;
                    }
                } else {
                    temp.prev.next = temp.next;
                    temp.next.prev = temp.prev;
                }
            }
            temp = temp.next;
        }
        if (!this.head) {
            this.tail = null;
        }
    }
    return this;
}

    print(){
        if(!this.head){
            console.log("no head");
        }else{
            let temp= this.head;
            while(temp){
                console.log(temp.value);
                temp=temp.next
            }
        }
    }
}


const list = new DoubleLinkedList()
//add first
list.AddFirst(1);
list.AddFirst(2);
list.AddFirst(8);
//add last
list.AddLast(5)
// list.AddLast(10)
//add after
//list.AddAfter(10,20)
//add before
//list.AddBefore(20,50)
//first delete
list.print()
// deletebefore
//  console.log("delete");
// // list.DeleteBefore(10)
//  list.deleteDuplicate(5)
//  list.print()
//  console.log(list);




