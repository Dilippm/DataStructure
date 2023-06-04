// class Node{
//     constructor(value){
//         this.value=value;
//         this.left =null;
//         this.right= null;
//     }
// }
// class BST{
//     constructor(){
//         this.root= null
//     }
//     insert(value){
//         let node= new Node(value)
//         if(this.root==null){
//            this.root=node;
//         }else{
//             this.insertion(this.root,node)
//         }
//     }
//     insertion(root,node){
//         if(root.value>node.value){
//             if(root.left==null){
//                 root.left= node;
//             }else{
//                 this.insertion(root.left,node)
//             }
//         }else if(root.value<node.value){
//             if(root.right==null){
//                 root.right=node;
//             }else{
//                 this.insertion(root.right,node)
//             }
//         }
//     }
//    preOrder(root){
//     if(root){
//         console.log(root.value);
//         this.preOrder(root.left);
//         this.preOrder(root.right)

//     }
   
//    }
//    isbst(root){
//     if(root==null){
//         return true;
//     }else{
//         if(root.left!=null && root.left.value>root.value){
//             return false;
//         }
//         if(root.right!=null && root.right.value<root.value){
//             return false;
//         }
//         if(!this.isbst(root.left)|| (!this.isbst(root.right))){
//             return false;
//         }
//         return true;
//     }
   
//    }
//    deletion(value){
   
//         this.root =this.deleteNode(this.root,value)
    
//    }
//    deleteNode(root,value){
//     if(root==null){
//         return root;
//     }else{
//         if(root.value>value){
//           root.left=  this.deleteNode(root.left,value)
//         }
//          if(root.value<value){
//            root.right=  this.deleteNode(root.right,value);
//         }else
//             if(!root.left && !root.right){
//                 return null
//             }else{
//                 if(!root.left){
//                 return root.right;
//             }
//             if(!root.right){
//                 return root.left;
//             }
//             root.value =this.min(root.right);
//             root.right =this.deleteNode(root.right,root.value)

//             }
            
//         }
//         return root
       
        
//     }

   
   
//    min(root){
//     if(root.left==null){
//         return root.value;
//     }else{
//         return this.min(root.left);
//     }
//    }
//    closest(target){
//        let cn = this.root;
//        closest =cn;
//        while(cn){
//         if(Math.abs(target-closest)>Math.abs(target-cn)){
//             closest = cn;
//         }
//         if(target<cn.value){
//             cn=cn.left;
//         }else if(target>cn.value){
//             cn= cn.right;
//         }else{
//             break;
//         }

//        } 
//        return closest;
//    }
// }
// let bst = new BST();
// bst.insert(89);
// bst.insert(9);
// bst.insert(90);
// bst.insert(0);
// bst.insert(190);
// bst.insert(2);
// //bst.preOrder(bst.root)
// //console.log(bst.isbst(bst.root));
// bst.deletion(90);
// bst.preOrder(bst.root)

// class MInHeap{
//     constructor(arr){
//         this.heap =[];
//         if(arr){
//             this.buildheap(arr)
//         }
//     }
//     buildheap(arr){
// this.heap= arr;
// for(let i=this.parent(this.heap.length-1);i>=0;i--){
//     ShiftDown(i);
// }
//     }
//     ShiftDown(cur){
//         let end = this.heap.length-1;
//         let left = this.leftchild(cur);
//         while(left<=end){
//             let right  = this.rightChild(cur);
//             toShift;
//             if(right<=end && this.heap[right]<this.heap[left]){
//                 toShift = right;
//             }else{
//                 toShift =left;
//             }
//             if(this.heap[cur]>this.heap[toShift]){
//                 [this.heap[cur],this.heap[toShift]] =[this.heap[toShift],this.heap[cur]];
//                 cur= toShift;
//                 left = this.leftchild(cur)
//             }
//         }
//     }
//     insert(value){
//         this.heap.push(value);
//         shiftUp(this.heap.length-1)
//     }
//     shiftUp(cur){
//         let parent = this.parent(cur);
//         while(cur>0 && this.heap[cur]< this.heap[parent]){
//             [this.heap[cur],this.heap[parent]] =[this.heap[parent],this.heap[cur]];
//             cur=parent;l
//             parent= this.parent(cur);
//         }
//     }
//     remove(){
//         [this.heap[0],this.heap[this.heap.length-1]] =[this.heap[this.heap.length-1],this.heap[0]];
//         this.heap.pop();
//         this.ShiftDown(0)
//     }
//     sort(){
//         for(i=this.heap.length-1;i>=0;i--){
//             this.sorting(i)
//         }
//     }
//     sorting(cur){
//         [this.heap[0],this.heap[cur]] =[this.heap[cur],this.hepa[0]]
//         console.log(this.heap[cur]);
//         this.heap.pop();
//         this.ShiftDown(0 )
//     }
//     leftchild(i){
//         return (i*2)+1
//     }
//     parent(i){
//         return Math.floor((i-1)/2)
//     }
//     rightChild(i){
//         return (i*2)+2
//     }
// }

// class TrieNode{
//     constructor(){
//         this.children = new Map();
//     }
// }
// class Tri{
//     constructor(str){
//         this.root = new TrieNode();
//         this.endSymbol= "*";
//         this.suffixtrie(str)
//     }
//     suffixtrie(str){
//         for(let i=0;i<str.length;i++){
//             this.insert(i,str)
//         }
//     }
//     insert(index,str){
//         let node=this.root;
//         for(let i=index;i<str.length;i++){
//             let letter =str.charAt(i);
//             if(!node.children.has(letter)){
//                 node.children.set(letter,new TrieNode())
//             }
//             node= node.children.get(letter);

//         }
//         node.children.set(this.endSymbol,null)
//     }
//     consists(str){
//         let node= this.root;
//         for(let i=0;i<str.length;i++){
//             let letter=  str.charAt(i);
//             if(!node.children.has(letter)){
//                 node.children.set(letter,new TrieNode());
//             }
//             node =node.children.get(letter)
//         }
//         return node.children.has(this.endSymbol)
//     }
// }
class Graph{
    constructor(){
        this.graph =new Map()
    }
    addvertex(vertex){
        this.graph.set(vertex,new Array())
    }
    insert(vertex,edge,isBidirectional){
        if(!this.graph.has(vertex)){
            this.addvertex(vertex)
        }
        if(!this.graph.has(edge)){
            this.addvertex(edge)
        }
        this.graph.get(vertex).push(edge);
        if(isBidirectional){
            this.graph.get(edge).push(vertex);

        }
    }
    delete(vertex){
        if(this.graph.has(vertex)){
            let edge = this.graph.get(vertex);
            for(let edges of edge){
                this.graph.get(edges).splice(this.graph.get(edges).inOrder(vertex),1);
            }
            this.graph.delete(vertex);
        }

    }
    bfs(start){
        let visited = new Set();
        let queue =[];
        visited.add(start);
        queue.push(start);
        while(queue.length>0){
            let vertex = queue.shift();
            console.log(vertex);
            let edges = this.graph.get(vertex);
            for(let edge of edges){
                if(!visited.has(edge)){
visited.add(edge);
queue.push(edge)
                }
            }
        }
    }
    dfs(start,visited =new Set()){
        visited.add(start);
        console.log(start);
        for(let edge of this.graph.get(start)){
            if(!visited.has(edge)){
                this.dfs(edge,visited )
            }
        }

    }
}