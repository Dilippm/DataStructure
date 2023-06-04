class Node {
    constructor(value){
        this.value = value;
        this.next =null
    }
}

class LinkedList{
    constructor(){
        this.head= null;
        this.tail=null
    }

    FirstAdd(value){                        
        const node = new Node(value)
        if(!this.head){  // check if there is head
            this.head = node; // if no node as head as well as tail
            this.tail =node;
        }else {
            node.next = this.head; // if there is head make presnt head to node.next 
        this.head = node; // make node as head we dont need to add tail as we are adding new node tp head
        }
        
        
    }
    LastAdd(value){
        const node = new Node(value);
        if(!this.head){
            this.head=node;
            this.tail=node;
        }else{
           this.tail.next=node;
           this.tail=node;
        }
    }
    AddAtPos(pos,value){  // add before a value
        const node =new Node(value)
        if(this.head.value==pos){
            node.next=this.head;
            this.head=node;
            
            return;
        }
        else
        {
            let temp=this.head;
            while(temp){
                if(temp.next.value==pos){
                    node.next=temp.next;
                    temp.next=node;
                    return;
                    
                }
                temp=temp.next
            }
         }
    }
   // add after a value
   AddAfterPos(pos,value){
     let node =new Node(value);
     if(!this.head){
        this.head=node;
        this.tail=node;
        return;
     }else if( this.head.value==pos){
        node.next=this.head.next;
        this.head.next=node;
        return;

     } else if(this.tail.value==pos){
        this.tail.next=node;
        this.tail=node

     }else {
        let temp=this.head;
        while(temp){
            if(temp.value==pos){
                node.next=temp.next;
                temp.next=node;
                return;
            }
            temp=temp.next;
        }
     }
   }
    DeleteFirst(){
        if(!this.head){ // if no head retrun null
            return null;
        }else{
            this.head =this.head.next; // else changing the head to head.next

            }

        }
        DeleteLast(){
            if(!this.head){
                    return null; // if no head return null
            }else{
                let temp=this.head; 
                while(temp.next.next){  
                    temp=temp.next  
                }
                temp.next=null;
                this.tail=temp;
            }
        }
        DeleteAtPos(data){
            if(!this.head){
                return null;
            }else if(this.head.value==data){
                this.head=this.head.next;
            }else if(this.tail.value==data){
                let temp= this.head;
                while(temp.next.next){
                    temp=temp.next;
                }
                temp.next=null;
                this.tail=temp;

            }else{
                let temp=this.head;
                while(temp.next){
                    if(temp.next.value==data){
                        temp.next=temp.next.next
                        return
                    }
                    temp=temp.next
                }
                return 
            }
            
        }
        deletetarget(value){ // this will delete all nodes after  a target
            let temp=this.head;
            while(temp){
           if(temp.value==value){
                temp.next=null;
                this.tail=temp
                return
            }
            temp=temp.next
        }
        }
    
    print(){
        if(!this.head){
            console.log("no head");
        }else{
            let temp = this.head
            while(temp){
                console.log(temp.value);
                 temp = temp.next
            } 
        }
    }
    


}
list = new LinkedList()


 list.FirstAdd(2)
list.FirstAdd(400)
list.FirstAdd(40)
list.FirstAdd(1)
list.LastAdd(30)
list.print()
// list.DeleteFirst();
//list.DeleteLast()
// list.DeleteAtPos(400)
// console.log("after deletion")

//console.log("afterr add");
// list.AddAtPos(400,8);
// list.deletetarget(400)
list.AddAfterPos(1,10);
console.log("value inserted");

list.print();
