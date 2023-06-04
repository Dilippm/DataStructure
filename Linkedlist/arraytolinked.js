class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }


}

class ArrayToLinked{
    constructor(){
        this.head=null
        this.tail=null
    }
    arrtolink(arr){
        if(arr.length==0) return 0;
        this.head= new Node(arr[0]);
        let current =this.head
        
         for(let i=1;i<arr.length;i++){
            current.next=new Node(arr[i]);
            current=current.next
         }
         this.tail=current;

    }
    

    print(){
        if(!this.head){
            console.log("no head");
        }else{
            let temp = this.head
            let list ="--->";
            while(temp){
                list+= temp.value+"--->"
                 temp = temp.next
            } 
            console.log(list)
        }
    }
}
let link = new ArrayToLinked()
const arr=[1,2,3,4]
link.arrtolink(arr);
link.print()
console.log(link)