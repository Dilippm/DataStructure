class MInHeap{
    constructor(array){
        this.heap=[];
        if(array){
            this.buildHeap(array)
        }
    }

    buildHeap(array){
        this.heap=array;
        for(let i= this.parent(this.heap.length-1);i>=0;i--){
            this.shiftDown(i)
        }

    }
    shiftDown(cur){
        let end = this.heap.length-1;
        let left= this.leftChild(cur);
        while(left<=end){
            let right= this.rightChild(cur)
                let toShift;
                if(right<=end && this.heap[right]<this.heap[left]){
                    toShift =right;
                }else{
                    toShift=left;
                }
                if(this.heap[cur]>this.heap[toShift]){
                    [this.heap[cur],this.heap[toShift]] = [this.heap[toShift],this.heap[cur]];
                    cur=toShift;
                    left= this.leftChild(cur);
                }else{
                    return;
                }
        }


    }
    shiftUp(cur){
        let parent = this.parent(cur);
        while(cur>0 && this.heap[parent]> this.heap[cur] ){
          [this.heap[cur],this.heap[parent]] =[this.heap[parent],this.heap[cur]]  ;

          cur=parent;
          parent = this.parent(cur)

        }
    }
    peek(){
        return this.heap[0];
    }
    remove(){
        [this.heap[0],this.heap[this.heap.length-1]]= [this.heap[this.heap.length-1],[this.heap[0]]]
        const removes =this.heap.pop()
        this.shiftDown(0);

    }
    insert(value){
        this.heap.push(value);
        this.shiftUp(this.heap.length-1)
    }
    parent(i){
        return Math.floor((i-1)/2)
    }
    leftChild(i){
        return (i*2)+1; 
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
const array =[6,2,8]
let heap= new MInHeap(array);
// heap.insert(1)
// heap.insert(5)
// heap.insert(15)
heap.display()
// console.log("after remove");
// heap.remove()
// heap.display()