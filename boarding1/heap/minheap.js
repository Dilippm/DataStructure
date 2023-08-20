

// class MinHeap{
//     constructor(arr){
//         this.heap =[];
//         if(arr){
//             this.buildHeap(arr)
//         }
//     }
//     buildHeap(arr){
//         this.heap =arr;
//         for(let i= this.parent(this.heap.length-1);i>=0;i--){
//             this.shiftDown(i)
//         }
//     }

//     shiftDown(cur){
//         let end=  this.heap.length-1;
//         let left= this.leftChild(cur);
//         while(left<=end){
//             let right = this.rightchild(cur);
//             let toShift;
//             if(right<=end && this.heap[right]< this.heap[cur]){
//                 toShift = right;
//             }else{
//                 toShift=left;
//             }
//             if(this.heap[cur]>this.heap[toShift]){
//                 [this.heap[cur],this.heap[toShift]] =[this.heap[toShift],this.heap[cur]]
//                 cur= toShift;
//                 left= this.leftChild(cur);
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
//         let parent= this.parent(cur);
//         while(cur>0 && this.heap[cur]<this.heap[parent]){
//             [this.heap[cur],this.heap[parent]] =[this.heap[parent],this.heap[cur]];
//             cur= parent;
//             parent=this.parent(cur)
//         }
//     }
//     parent(i){
//         return Math.floor((i-1)/2)
//     }
//     leftChild(i){
//         return (i*2)+1
//     }
//     rightchild(i){
//         return (i*2)+2
//     }
//     display(){
//         for(let heap of this.heap){
//             console.log(heap);
//         }
//     }
// }
// let array=[6,2,8]
// let heap=new MinHeap(array)
//  heap.insert(3)
// heap.display()

// class MinHeap{
//     constructor(arr){
//         this.heap= [];
//         if(arr){
//             this.buildHeap(arr)
//         }
//     }
//     buildHeap(arr){
//         this.heap= arr;
//         for(let i= this.parent(this.heap.length-1);i>=0;i--){
//             this.shiftDown(i);
//         }
//     }
//     shiftDown(cur){
//         let end = this.heap[this.heap.length-1];
//         let left= this.leftChild(cur);
//         while(left<=end){
//             let right = this.rightChild(cur);
//             let toShift;
//             if(right<=end && this.heap[right]<this.heap[cur]){
//                     toShift=right
//             }else{
//                 toShift=left
//             }
//             if(this.heap[cur]>this.heap[toShift]){
//                 [this.heap[cur],this.heap[toShift]] =[this.heap[toShift],this.heap[cur]]
//                 cur= toShift;
//                 left= this.leftChild(cur)
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
//         let parent=  this.parent(cur);
//         while(cur>0 && this.heap[cur]<this.heap[parent]){
//             [this.heap[cur],this.heap[parent]] =[this.heap[parent],this.heap[cur]];
//             cur= parent;
//             parent= this.parent(cur)
//         }
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
//         for(let heap of this.heap){
//             console.log(heap);
//         }
//     }
// }
// class MinHeap{
//     constructor(arr){
//         this.heap=[];
//         if(arr){
//             this.buildHeap(arr)
//         }
//     }
//     buildHeap(arr){
//         this.heap=arr;
//         for(let i= this.parent(this.heap.length-1);i>=0;i--){
//             this.shiftDown(i)
//         }
//     }
//     shiftDown(cur) {
//         let end = this.heap.length - 1;
//         let left = this.leftchild(cur);
//         while (left <= end) {
//             let right = this.rightChild(cur);
//             let toShift;
//             if (right <= end && this.heap[right] <this.heap[cur]) {
//                 toShift = right;
//             } else {
//                 toShift = left;
//             }
//             if (this.heap[cur] > this.heap[toShift]) {
//                 [this.heap[cur], this.heap[toShift]] = [this.heap[toShift], this.heap[cur]];
//                 cur = toShift; 
//                 left = this.leftchild(cur);
//             } else {
//                 return;
//             }
//         }
//     }
    
//     insert(value){
//         this.heap.puah(value);
//         this.shiftUp(this.heap.length-1);
//     }
//     shiftUp(cur){
//         let parent= this.parent(cur);
//         while(cur>=0 && this.heap[cur]>this.heap[parent] ){
//             [this.heap[cur],this.heap[parent]]  =[this.heap[parent],this.heap[cur]];
//             cur= parent;
//             parent= this.parent(cur)
//         }
//     } 
//     remove(){
//         if(this.heap.length){
//             [this.heap[this.heap.length-1],this.heap[0]] =[this.heap[0],this.heap[this.heap.length-1]];
//             this.heap.pop();
//             this.shiftDown(0)
//         }
//     }
//     removeValue(value){
//         let idx = this.heap.findIndex((element) => element === value); 
//         if(!idx) return -1;
//             [this.heap[idx],this.heap[this.heap.lenght-1]] = [this.heap[this.heap.length-1],this.heap[idx]];
//             this.heap.pop();
//             this.shiftDown(idx)
//     }
//     parent(i){
//         return Math.floor((i-1)/2)
//     }
//     leftchild(i){
//         return (i*2)+1
//     }
//     rightChild(i){
//         return (i*2)+2
//     }
//     display(){
//         for(let heap of this.heap){
//             console.log(heap);
//         }
// }
// }
// class MinHeap{
//     constructor(arr){
//         this.heap= [];
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
//         let end = this.heap.lenght-1;
//         let left=  this.leftChild(cur)
//         while(left<=end){
//             let right= this.rightChild(cur);
//             let toShift;
//             if(right<=end && this.heap[right]<this.heap[cur]){
//            toShift=right
//             }else{
//                  toShift= left
//             }
//             if(this.heap[cur]>this.heap[toShift]){
//                 [this.heap[cur],this.heap[toShift]] =[this.heap[toShift],this.heap[cur]]
//                 cur= toShift;
//                 left= this.leftChild(cur)
//             }
//         }
//     }
//     insert(value){
//         this.heap.push(value);
//         this.shiftUp(this.heap.length-1)
//     }
//     shiftUp(cur){
//         let parent =this.parent(cur);
//         while(cur>0 && this.heap[cur]>this.heap[parent]){
//             [this.heap[cur],this.heap[parent]] =[this.heap[parent],this.heap[cur]];
//             cur= parent;
//             parent = this.parent(cur);
//         }
//     }
// remove(value){
//     const idx= this.heap.indexOf(value);
//     if(!idx){
//         return -1;
//     }
//     let last= this.heap.length-1;
//     [this.heap[idx],thsi.heap[last]] =[thsi.heap[last],thsi.heap[idx]]
//     this.heap.pop();
//     this.shiftDown(idx)
// }
//     parent(i){
//         return Math.floor((i-1)/2);
//     }
//     leftChild(i){
//         return (i*2)+1
//     }
//     rightChild(i){
//         return (i*2)+2
//     }
// }
// class MinHeap{
//     constructor(arr){
//             this.heap=[];
//             if(arr){
//                 this.buildHeap(arr)
//             }
//     }
//     buildHeap(arr){
//         this.heap =arr;
//         for(let i= this.parent(this.heap.length-1);i>=0;i--){
//             this.shiftDown(i)
//         }
//     }
//     shiftDown(cur){
//         let end = this.heap.length-1;
//         let left= this.leftChild(cur);
//         while(left<=end){
//             let right= this.rightChild(cur);
//             let toShift;
//             if(right<=end && this.heap[right]<this.heap[cur]){
//                 toShift =right
//             }else{
//                 toShift=left
//             }
//             if(this.heap[cur]>this.heap[toShift]){
//                 [this.heap[cur],this.heap[toShift] ]=[this.heap[toShift],this.heap[cur] ]
//                 cur= left;
//                 left= this.leftChild(cur)
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
//         let parent =this.parent(cur);
//         while(cur>=0 && this.heap[cur]>this.heap[parent]){
//             [this.heap[cur],this.heap[parent]] =[this.heap[parent],this.heap[cur]]
//             cur=parent;
//             parent =this.parent(cur)
//         }
//     }
//     leftChild(i){
//         return (i*2)+1
//     }
//     rightChild(i){
//         return (i*2)+2
//     }
//     parent(i){
//         return Math.floor((i-1)/2)
//     }
// }
// class MinHeap{
//     constructor(){
//         this.heap =[]
//         if(arr){
//             this.buildHeap(arr)
//         }
//     }
//     buildHeap(arr){
//         this.heap =arr;
//         for(let i=this.parent(this.heap.length-1);i>=0;i--){
//                     this.shiftDown(i)
//         }
//     }
//     shiftDown(cur){
//         let end = this.heap.length-1;
//         let left = this.leftChid(cur)
//         while(left<=end){
//             let right= this.rightChild(cur)
//             let toShift;
//             if(right<=end && this.heap[right]<this.heap[cur]){
//                 toShift =right;
//             }else{
//                 toShift =left;
//             }
//             if(this.heap[toShift]<this.heap[cur]){
//                 [this.heap[toShift],this.heap[cur]] =[thsi.hepa[cur],this.heap[toShift]]
//                 cur= toShift;
//                 left= this.leftChid(cur);
//             }

//         }
//     }
//     insert(value){
//         this.heap.push(value);
//         this.shiftUp(this.heap.length-1)
//     }
//     shiftUp(cur){
//         let parent= this.parent(cur);
//         while(cur>0 && this.heap[parent]<this.heap[cur] ){
//             [this.heap[parent],this.heap[cur]] =[this.heap[cur],this.heap[parent]]
//             cur= parent;
//             parent= this.parent(cur)
//         }
//     }
//     remvoe(value){
//         const idx= this.heap.indexOf(value);
//           if(!idx){
//                 return -1;
//            }
//            let last= this.heap.length-1;
//            [this.heap[idx],this.heap[last]] =[this.heap[last],this.heap[idx]]
//            this.heap.pop()
//           this.toShiftDown(idx)
//     }
//     parent(i){
//         return Math.floor((i-1)/2)
//     }
//     leftChid(i){
//         return (i*2)+1
//     }
//     rightChild(i){
//         return (i*2)+2
//     }
// }
// class MinHeap{
//     constructor(arr){
//         this.heap=[]
//         if(arr){
//             this.buildHeap(arr)
//         }
//     }
//     buildHeap(arr){
//         this.heap = arr;
//         for(let i= this.parent(this.heap.length-1);i>=0;i--){
//             this.shiftDown(i)
//         }
//     }
//     shiftDown(cur){
//         let end = this.heap.length-1;
//         let left= this.leftChild(cur)
//         while(left<=end){
//             let right = this.rightChild(cur)
//             let toShift
//             if(right<=end && this.heap[right]<this.heap[cur]){
//                 toShift =right
//             }else{
//                 toShift=left;
//             }
//             if(this.heap[cur]<this.heap[toShift]){
//                 [this.heap[cur],this.heap[toShift]] =[this.heap[toShift],this.heap[cur]]
//                 cur= toShift
//                 left= this.leftChild(cur)
//             }else{
//                 break;
//             }
//         }
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
//         for(let num of this.heap){
//             console.log(num);
//         }
//     }
// }
// class MinHeap{
//     constructor(arr){
//         this.heap=[]
//         if(arr){
//             this.buildHeap(arr)
//         }

//     }
//     buildHeap(arr){
//         this.heap=arr;
//         for(let i= this.parent(this.heap.length-1);i>=0;i--){
//             this.shiftDown(i)
//         }
//     }
//     shiftDown(cur){
//         let end = this.heap.length-1;
//         let left= this.leftChild(cur)
//         while(left<=end){
//             let right = this.rightChild(cur)
//             let toShift
//             if(right<=end && this.heap[right]<this.heap[cur]){
//                 toShift = right
//                }else{
//                 toShift=left
//                }
//                if(this.heap[cur]>this.heap[toShift]){
//                 [this.heap[cur],this.heap[toShift]] =[this.heap[toShift],this.heap[cur]]
//                 cur= toShift;
//                 left= this.leftChild(cur)
//                }else{
//                 break
//                }
//         }
//     }
//     insert(value){
//         this.heap.push(value)
//         this.shiftUp(this.heap.length-1)
//     }
//     shiftUp(cur){
//         let parent = this.parent(cur)
//         while(cur>=0 && this.heap[parent]<this.heap[cur]){
//             [this.heap[parent],this.heap[cur]] =[thsi.heap[cur],this.heap[parent]]
//             cur= parent;
//             parent = this.parent(cur)
//         }
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
//            for(let num of this.heap){
//                     console.log(num);
//                }
// }
// }
class MinHeap{
    constructor(arr){
        this.heap =[]
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
    shiftDown(cur){
let end = this.heap.length-1;
let left = this.leftChild(cur)
while(left<end){
    let right = this.rightChild(cur)
    let toShift
    if(right<=end && this.heap[right]<this.heap[left]){
        toShift =right
    }else{
        toShift =left
    }
    if(this.heap[cur]>this.heap[toShift]){
        [this.heap[cur],this.heap[toShift]] =[this.heap[toShift],this.heap[cur]]
        cur= toShift;
        left= this.leftChild(cur)
    }else{
        break;
    }
}

    }
    insert(value){
        this.heap.push(value)
        this.shiftUp(this.heap.length-1)
    }
    shiftUp(cur){
        let parent = this.parent(cur)
        while(cur>=0 && this.heap[parent]<this.heap[cur]){
            [this.heap[cur],this.heap[parent]] =[this.heap[parent],this.heap[cur]]
            cur= parent;
            parent =this.parent(cur)
        }
    }
    parent(i){
        return Math.floor((i-1)/2)
    }
    leftChild(i){
        return (i*2)+1
    }
    rightChild(i){
        return (i*2)+2
    }
}
const arr= [12,1,3,2,5,100]
let heap=new MinHeap(arr)

console.log(heap);
