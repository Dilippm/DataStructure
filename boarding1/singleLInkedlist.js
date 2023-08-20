// class Node{
//     constructor(value){
//         this.value =value;
//         this.next= null;
//     }
// }
// class singleLinkedList{
//     constructor(){
//         this.head= null;
//         this.tail= null;
//     }
//     firstAdd(value){
//         let node= new Node(value);
//         if(!this.head){
//             this.head= node;
//             this.tail= node;
//         }else{
//             node.next= this.head;
//             this.head= node;
//         }
//     }
//     lastAdd(value){
//         let node= new Node(value);
//         this.tail.next= node;
//         this.tail= node;
//     }
//     addAfter(target,value){
//         let node = new Node(value);
//         let temp= this.head;
//         while(temp){
//             if(temp.value==target){
//                 node.next= temp.next;
//                 temp.next= node;
//             }
//             temp=temp.next;
//         }
//     }
//     addBefore(target,value){
//         let node= new Node(value);
//         let temp= this.head;
//         while(temp){
//             if(temp.next.value== target){
//                 node.next= temp.next;
//                 temp.next= node;
//                 return 
//             }
//             temp= temp.next;
//         }
//     }

//     display(){
//         if(!this.head){
//             console.log("no head");
//         }else{
//             let temp = this.head;
//             let str ="";
//             while(temp){
//                 str +=  temp.value +"-->";
//                 temp =  temp.next
//             }
//             console.log(str);
//         }
//     }
// }
// const list= new singleLinkedList();
// list.firstAdd(5)
// list.firstAdd(15)
// list.lastAdd(78)
// list.addAfter(5,47)
// list.addBefore(47,89)
// list.display()

// selection sort
const a= [1,4,2,5]
// for(let i=0;i<a.length;i++){
//     for(let j=i+1;j<a.length;j++){
//         if(a[i]>a[j]){
//             [a[i],a[j]]  = [a[j],a[i]]
//         }
//     }
// }
// console.log(a);
// bubble sort
// for(let i=0;i<a.length;i++){
//     for(j=0;j<a.length-i-1;j++){
//         if(a[j]>a[j+1]){
//             [a[j],a[j+1]] = [a[j+1],a[j]]
//         }
        
//     }
// }
// console.log(a);
//insertion sort
// for(let i=1;i<a.length;i++){
//     let t  = a[i];
//     let j =i-1;
//     while(j>=0 && a[j]>t){
//             a[j+1] =a[j];
//           j=j-1;
//     }
//     a[j+1] =t
// }
// console.log(a);

// quick sort

// function quicksort(a){
//     if(a.length<=1){
//         return a;
//     }
//     let left =[];
//     let right =[];
//     let pivot = a[0];
//     for(let i=1;i<a.length;i++){
//         if(a[i]<pivot){
//             left.push(a[i]);
//         }else{
//             right.push(a[i]);
//         }
//     }
//     return [...quicksort(left),pivot,...quicksort(right)]
// }
// console.log(quicksort(a));

// merge sort
// function mergesort(a) {
//     if(a.length<=1){
//         return a;
//     }
//  let mid = a.length/2;
//  let left = a.slice(0,mid);
//  let right  = a.slice(mid)
//  return merge(mergesort(left),mergesort(right))

    
// }
// function merge(left,right){
//     const sorted= [];
//     while(left.length && right.length){
//         if(left[0]<right[0]){
//             sorted.push(left.shift())
//         }else{
//             sorted.push(right.shift())
//         }

//     }
//     return [...sorted,...left,...right]
// }
// console.log(mergesort(a));

// binary search
// function BinarySearch(a,t){
//     for (let i = 0; i < a.length; i++) {
//         let left =0;
//         let right =a.length-1
//        if(a.length==0){
//     return -1;
//        }else{
//         while(left<=right){
//             let mid= Math.floor((left + right)/2)
//             if(a[mid]==t){
//                 return mid;
//             }else if(a[mid]>t){
//                 right =mid-1;
//             }else{
//                 left = mid+1;
//             }
//            }
            

//        }
       
//     }
//     return -1;
// }
// console.log(BinarySearch(a,5));
// function BinarySearch(a,target){
// let left =0;
// let right =a.length-1;
// while(left<=right){
//     let mid= Math.floor((left+right)/2)
//     if(a[mid]==target){
//         return mid;
//     }else{
//         if(a[mid]>target){
//             right= mid-1;
//         }else{
//             left =mid+1
//         }
//     }
// }
// return -1;
// }
// // const a= [1,4,2,5]
// console.log(BinarySearch(a,8));
class Node{
    constructor(value){
        this.value =value;
        this.next= null
    }
}
class singleLInkedList{
    constructor(){
        this.head= null;
        this.tail= null;
    }
   firstAdd(value){
    const node= new Node(value);
    if(!this.head){
        this.head= node;
        this.tail= node;
    }else{
        node.next= this.head;
        this.head= node;
    }

   }
   lastAdd(value){
    const node= new Node(value);
    if(!this.head){
        this.head= node;
        this.tail=  ndoe;
    }else{
        this.tail.next= node;
        this.tail= node;
    }
   }
   findMid(){
    if(this.head){
        let prev= null;
        let slow= this.head
        let fast= this.head
       
        while(fast && fast.next){
            prev= slow;
            slow= slow.next;
            fast = fast.next.next;
        }
        if(fast){
            console.log(slow.value);
        }else{
            console.log(prev.value,slow.value);
        }
    }
   }
   deleteFirst(){
    if(!this.head){
        return null;
    }else{
        this.head= this.head.next;

    }
   }
   deleteLast(){
    if(this.head){
        let temp= this.head;
        let prev= null;
        while(temp.next){
            prev= temp;
            temp=temp.next
        }
        prev.next=null;
        this.tail= prev
    }
   }
   mergeLinked(l2){
    if(l2.head){
        this.tail.next= l2.head
    }
   }
   addlist(l2){
    if(l2.head && this.head){
        let temp1 = this.head;
        let temp2 = l2.head;
   while(temp1|| temp2){
    if(temp1 && temp2 ){
        temp1.value+=temp2.value
        temp1=temp1.next
        temp2=temp2.next
    } else if(temp1){
        temp1 =temp1.next
    }else{
        this.tail =temp2;
        temp2 =temp2.next
    }
    
   }
    }
   }
   display(){
    if(!this.head){
        return null;
    }else{
        let str =""
        let temp= this.head;
        while(temp){
            str+= temp.value+"-->";
            temp=temp.next
        }
        console.log(str);
    }
  
   }

}
class singleLInkedList2{
    constructor(){
        this.head= null;
        this.tail= null;
    }
   firstAdd(value){
    const node= new Node(value);
    if(!this.head){
        this.head= node;
        this.tail= node;
    }else{
        node.next= this.head;
        this.head= node;
    }

   }
   lastAdd(value){
    const node= new Node(value);
    if(!this.head){
        this.head= node;
        this.tail=  ndoe;
    }else{
        this.tail.next= node;
        this.tail= node;
    }
   }
   findMid(){
    if(this.head){
        let prev= null;
        let slow= this.head
        let fast= this.head
       
        while(fast && fast.next){
            prev= slow;
            slow= slow.next;
            fast = fast.next.next;
        }
        if(fast){
            console.log(slow.value);
        }else{
            console.log(prev.value,slow.value);
        }
    }
   }
   deleteFirst(){
    if(!this.head){
        return null;
    }else{
        this.head= this.head.next;

    }
   }
   deleteLast(){
    if(this.head){
        let temp= this.head;
        let prev= null;
        while(temp.next){
            prev= temp;
            temp=temp.next
        }
        prev.next=null;
        this.tail= prev
    }
   }
   display(){
    if(!this.head){
        return null;
    }else{
        let str =""
        let temp= this.head;
        while(temp){
            str+= temp.value+"-->";
            temp=temp.next
        }
        console.log(str);
    }
  
   }

}
let list= new singleLInkedList();
let list2= new singleLInkedList2();
list.firstAdd(8)
list.firstAdd(7)
list.firstAdd(18)
list.firstAdd(89)
list.lastAdd(74)
list.lastAdd(4)
list.display()
console.log("second");
list2.firstAdd(1)
list2.firstAdd(2)
list2.firstAdd(3)
list2.firstAdd(4)
list2.lastAdd(5)

list2.display()
// console.log("after merge");
// list.mergeLinked(list2)
list.addlist(list2)
list.display()