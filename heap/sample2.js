

// class MinHeap{
//     constructor(arr){
//         this.heap=[];
//         if(arr){
//             this.buildHeap(arr)
//         }
//     }
//     buildHeap(arr){
//         this.heap= arr;
//         for(let i= this.parent(this.heap.length-1);i>=0;i--){
//             this.shiftDown(i)
//         }
//     }
    
//     shiftDown(cur){
//         let end = this.heap.length-1;
//         let left =this.leftChild(cur)
//         while(left<=end){
//             let right = this.rightChild(cur);
//             let toShift;
//             if(right<=end && this.heap[right]<this.heap[left]){
//                 toShift= right;
//             }else{
//                 toShift = left;
//             }
//             if(this.heap[cur]>this.heap[toShift]){
//                 [this.heap[toShift],this.heap[cur]] =[this.heap[cur],this.heap[toShift]]
//                 cur= toShift;
//                 left =this.leftChild(cur)
//             }else{
//                 return;
//             }
//         }
//     }
//     insert(value){
//         this.heap.push(value);
//         this.shiftUp(this.heap.length-1)
//     }
//     shiftUp(cur){
//         let parent = this.parent(cur);
//         while(cur>0 && this.heap[cur]<this.heap[parent]){
//             [this.heap[cur],this.heap[parent]] =[this.heap[parent],this.heap[cur]];
//             cur= parent;
//             parent=this.parent(cur)
//         }
//     }
//     remove(){
//         [this.heap[0],this.heap[this.heap.length-1]]=[this.heap[this.heap.length-1],this.heap[0]];
//         this.heap.pop();
//         this.shiftDown(0)
//     }
//     sorting(){
//         for(let i=this.heap.length-1;i>=0;i--){
//             this.sort(i);
//         }
//     }
//     sort(cur){
//         [this.heap[0],this.heap[cur]] =[this.heap[cur],this.heap[0]];
//         console.log(this.heap[cur]);;
//         this.heap.pop()
//         this.shiftDown(0)
//     }
//     parent(i){
//         return Math.floor((i-1)/2)
//     }
//     leftChild(i){
//         return (i*2)+1
//     }
//     rightChild(i){
//         return (i*2)+2
//     }
//     display(){
//         for(let i=0;i<this.heap.length;i++){
//             console.log(this.heap[i]);
//         }
//     }


// }
// class MinHeap{
//     constructor(arr){
//         this.heap=[];
//         if(arr){
//            this.buildHeap(arr)
//         }
//     }
//     buildHeap(arr){
//         this.heap=arr;
//         for(let i=this.parent(this.heap.length-1);i>=0;i--){
//                 this.shiftDown(i)

//         }
//     }
//     shiftDown(cur){
//         let end = this.heap.length-1;
//         let left = this.leftChild(cur)
//         while(left<=end){
//             let right =this.rightChild(cur)
//             let toShift;
//             if(right<=end && this.heap[right]<this.heap[left]){
//                 toShift =right;
//             }else{
//                 toShift= left
//             }
//             if(this.heap[cur]>this.heap[toShift]){
//                 [this.heap[cur],this.heap[toShift]]=[this.heap[toShift],this.heap[cur]]
//                 cur= toShift;
//                 left= this.leftChild(cur);

//             }else{
//                 return
//             }
//         }
//     }
//     insert(value){
//         this.heap.push(value);
//         this.shiftUp(this.heap.length-1)
//     }
//     shiftUp(cur){
//         let parent= this.parent(cur);
//         while(cur>0 && this.heap[cur]<this.heap[parent]){
//             [this.heap[cur],this.heap[parent]] =[this.heap[parent],this.heap[cur]]
//              cur= parent;
//              parent= this.parent(cur);
//         }
//     }
//     remove(){
//         [this.heap[0],this.heap[this.heap.length-1]] =[this.heap[this.heap.length-1],this.heap[0]];
//         this.heap.pop();
//         this.shiftDown(0)
//     }
//     sort(){
//         for(let i=this.heap.length-1;i>=0;i--){
//             this.sorting(i)
//         }
//     }
//     sorting(cur){
//         [this.heap[0],this.heap[cur]] =[this.heap[cur],this.heap[0]];
//         console.log(this.heap[cur]);
//         this.heap.pop();
//         this.shiftDown(0)
//     }

//     parent(i){
//         return (Math.floor((i-1)/2))
//     }
//     leftChild(i){
//         return (i*2)+1
//     }
//     rightChild(i){
//         return(i*2)+2
//     }
//     display(){
//         for(let i=0;i<this.heap.length;i++){
//             console.log(this.heap[i]);
//         }
//     }
// }

class MinHeap{
    constructor(arr){
        this.heap=[];
        if(arr){
            this.buildHeap(arr)
        }
    }
    buildHeap(arr){
       
            this.heap =arr;
            for(let i=this.parent(this.heap.length-1);i>=0;i--){
                this.shiftDown(i)
            }
        
    }
    parent(i){
        return Math.floor((i-1)/2)
    }
    shiftDown(cur){
        let end=this.heap.length-1;
        let left =this.leftChild(cur)
        while(left<=end){
            let right = this.rightChild(cur);
            let toShift;
            if(right<=end && this.heap[right]< this.heap[left]){
                toShift = right;
            }else{
                toShift =left;
            }
            if(this.heap[cur]>this.heap[toShift]){
                [this.heap[cur],this.heap[toShift]] =[this.heap[toShift],this.heap[cur]];
                cur=toShift;
                left =this.leftChild(cur)
            }else{
                return;
            }

        }
    }
    insert(value){
        this.heap.push(value);
        this.shiftUp(this.heap.length-1);
    }
    shiftUp(cur){
        let parent= this.parent(cur);
        while(cyr>0 && this.heap[cur]<this.heap[parent]){
            [this.heap[cur],this.heap[parent]] = [this.heap[parent],this.heap[cur]];
            cur=parent;
            parent= this.parent(cur)
        }
    }
    remove(){
        [this.heap[0],this.heap[this.heap.length-1]]= [this.heap[this.heap.length-1],this.heap[0]]
        this.heap.pop();
        this.shiftDown(0)
    }
    sorting(){
        for(let i=this.heap.length-1;i>=0;i--){
            this.sort(i)
        }
    }
    sort(i){
        [this.heap[0],this.heap[i]] =[this.heap[i],this.heap[0]];
        console.log(this.heap[0]);
        this.heap.pop();
        this.shiftDown(0);
    }
    leftChild(i){
        return (i*2)+1
    }
    rightChild(i){
        return (i*2)+2
    }
}
const array = [7,5,6,3,8,9,10,12,32,2,23]
 let heap = new MinHeap(array);
heap.display()

   console.log("after insert");
 heap.insert(78);
  heap.display();
 //heap.remove()
 // console.log("after remove");
  //heap.display()
   console.log("after sorintg");
  heap.sort()