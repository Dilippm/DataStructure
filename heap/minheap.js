// class MinHeap{
//     constructor(array){
//         this.heap=[];
//         if(array){
//             this.buildheap(array)
//         }
//     }
//     buildheap(array){
//         this.heap=array;
//         for(let i=this.parent(this.heap.length-1);i>=0;i--){
//             this.shiftDown(i)
//         }
//     }
//     shiftDown(cur){
//         let end = this.heap.length-1;
//         let left = this.leftChild(cur)
//         while(left<=end){
//             let right =this.rightChild(cur);
//             let toShift;
//             if(right<=end && this.heap[right]<this.heap[left]){
//                 toShift=right;
//             }else{
//                 toShift=left;
//             }
//             if(this.heap[cur]>this.heap[toShift]){
//                 [this.heap[cur],this.heap[toShift]] =[this.heap[toShift],this.heap[cur]];
//                 cur= toShift;
//                 left=this.leftChild(cur);
//             }else{
//                 return;
//             }
//         }
//     }
//     parent(i){
//         return Math.floor((i-1)/2);
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
// let array=[8,6,2]
// let heap=new MinHeap(array);
// heap.display()
// class MinHeap{
//     constructor(arr){
//         this.heap=[];
//         if(arr){
//             this.toBuild(arr)
//         }
//     }
//     toBuild(arr){
//         this.heap =arr;
//         for(let i=this.parent(this.heap.length-1);i>=0;i--){
//                 this.shiftDown(i)
//         }
//     }
//     shiftDown(cur){
//         let end = this.heap.length-1;
//         let left = this.leftChild(cur);
//         while(left<=end){
//             let right =this.rightChild(cur)
//             let toShift;
//             if(right<=end && this.heap[right]<this.heap[left]){
//                 toShift=right;
//             }else{
//                 toShift=left;
//             }
//             if(this.heap[cur]>this.heap[toShift]){
//                 [this.heap[cur],this.heap[toShift]]= [this.heap[toShift],this.heap[cur]];
//                 cur=toShift;
//                 left=this.leftChild(cur)
//             }else{
//                 return;
//             }
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
//     display(){
//         for(let i=0;i<this.heap.length;i++){
//             console.log(this.heap[i]);
//         }
//     }
// }
// let array = [8,6,2]
// let heap=new MinHeap(array)
// heap.display()
class MInHeap{
    constructor(arr){
        this.heap=[];
        if(arr){
            this.buildHeap(arr)
        }
    }
    buildHeap(arr){
        this.heap=arr;
        for(let i=this.parent(this.heap.length-1);i>=0;i--){
            this.showDown(i)
        }
    }
    showDown(cur){
        let end =this.heap.length-1;
        let left=this.leftChild(cur);
        while(left<=end ){
            let right =this.rightChild(cur);
            let toShift;
            if(right<=end && this.heap[right]<this.heap[cur]){
                toShift= right;
            }else{
                toShift= left;
            }
            if(this.heap[cur]>this.heap[toShift]){
                [this.heap[cur],this.heap[toShift]]=[this.heap[toShift],this.heap[cur]];
                cur= toShift;
                left =this.leftChild(cur)
            }else{
                return;
            }

        }
    }
    insert(value){
        this.heap.push(value);
        this.shiftUp(this.heap.length-1)
    }
    shiftUp(cur){
        let parent =this.parent(cur);
        while(cur>0 && this.heap[cur]<this.heap[parent]){
            [this.heap[cur],this.heap[parent]] =[this.heap[parent],this.heap[cur]];
            cur=parent;
            parent =this.parent(cur);
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
    display(){
        for(let i=0;i<this.heap.length;i++){
            console.log(this.heap[i]);
        }
    }
}
let array=[100,6,2,8]
let heap=new MInHeap(array)
heap.display()
console.log("after insertion");
heap.insert(3)
heap.display()