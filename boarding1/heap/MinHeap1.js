class MinHeap{
    constructor(arr){
        this.heap=[]
        if(arr){
            this.buildHeap(arr)
        }

    }
    buildHeap(arr){
        this.heap=arr;
        for(let i= this.parent(this.heap.length-1);i>=0;i--){
            this.shiftDown(i)
        }
    }
    shiftDown(cur){
        let end = this.heap.length-1;
        let left= this.leftChild(cur)
        while(left<=end){
            let right = this.rightChild(cur)
            let toShift
            if(right<=end && this.heap[right]<this.heap[left]){
                toShift = right
               }else{
                toShift=left
               }
               if(this.heap[cur]>this.heap[toShift]){
                [this.heap[cur],this.heap[toShift]] =[this.heap[toShift],this.heap[cur]]
                cur= toShift;
                left= this.leftChild(cur)
               }else{
                break
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
            [this.heap[parent],this.heap[cur]] =[thsi.heap[cur],this.heap[parent]]
            cur= parent;
            parent = this.parent(cur)
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
           for(let num of this.heap){
                    console.log(num);
               }
}
}
const arr= [150,1,3,2,5,100]
let heap=new MinHeap(arr)

console.log(heap);
