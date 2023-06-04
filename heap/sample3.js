class MinHeap{
    constructor(arr){
        this.heap=[]
        if(arr){
            buildheap(arr)
        }
    }
    buildheap(arr){
        this.heap=arr;
        for(let i=this.parent(this.heap.length-1);i>=0;i--){
                shiftDown(i)
        }
    }
    parent(i){
        return Math.floor((i-1)/2)
    }
    shiftdown(cur){
        let end = this.heap.length-1;
        let left=  this.leftChild(cur)
        while(left<=end){
            let right = this.rightChild(cur)
            let toShift;
            if(right<=end && this.heap[right]<this.heap[left]){
                toShift =right;
            }else{
                toShift =left;
            }
            if(this.heap[cur]>this.heap[toShift]){
                [this.heap[cur],this.heap[toShift]] =[this.heap[toShift],this.heap[cur]];
                cur= toShift;
                left=this.leftChild(cur)
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
        while(cur>=0 && this.heap[cur]<this.heap[parent]){
            [this.heap[cur],this.heap[parent]] =[this.heap[parent],this.heap[cur]];
            cur=parent;
            parent= this.parent(cur);
        }
    }
    remove(){
        [this.heap[0],this.heap[this.heap.length-1]]= [this.heap[this.heap.length-1],this.heap[0]];
        this.heap.pop()
        this.shiftDown(0)
    }
    sort(){
        for(let i=this.heap.length-1;i>=0;i--){
            this.sorting(i)
        }
    }
    sorting(cur){
        [this.heap[0],this.heap[cur]] =[this.heap[cur],this.heap[0]];
        console.log(this.heap[cur]);
        this.heap.pop();
        this.shiftDown(0)
    }
    leftChild(i){
        return (i*2)+1
    }
    rightChild(i){
        return (i*2)+2
    }
}