// class Node{
//     constructor(value){
//         this.value=value;
//         this.left=null;
//         this.right=null;
//     }
// }
// class BinarySearchTree{
//     constructor(){
//         this.root =null;
//     }
//     isEmpty(){
//         return this.root=== null;
//     }
//     insert(value){
//         let node=  new Node(value);
//         if(!this.root){
//             this.root =node;
//         }else{
//          this.insertNode(this.root,node)    
//         }
//     }
//     insertNode(root,newNode){
//         if(newNode.value<root.value){
//             if(root.left==null){
//                 root.left= newNode;
//             }else{
//                 this.insertNode(root.left,newNode)
//             }
//         }else{
//            if(root.right===null){
//             root.right= newNode;
//            } else{
//             this.insertNode(root.right,newNode)
//            }
//         }

//     }
//     searchNode(root,target){
//        if(!root){
//         return false;
//        }else{
//         if(root.value=== target){
//             return true;;
//         }else{
//             if(target<root.value){
//                return this.searchNode(root.left,target)
//             }else{
//               return  this.searchNode(root.right,target)
//             }
//         }
//        }
//     }
//      preOrder(root){
//         if(root){
//             console.log(root.value);
//             this.preOrder(root.left);
//             this.preOrder(root.right);
//         }
//      }
//      inOrder(root){
//         if(root){
//             this.inOrder(root.left);
//             console.log(root.value);
//             this.inOrder(root.right);
//         }
//      }
//      postOrder(root){
//         if(root){
//             this.postOrder(root.left);
//             this.postOrder(root.right)
//             console.log(root.value);
//         }
//      } 
//      levelOrder(root){
//         const queue =[];
//         queue.push(root);
//         while(queue.length){
//             let cur = queue.shift();
//             console.log(cur.value);
//             if(cur.left){
//                 queue.push(cur.left)
//             }
//             if(cur.right){
//                 queue.push(cur.right);
//             }
//         }
//      }
//      min(root){
//         if(!root.left){
//             return root.value
//         }else{
//             return this.min(root.left)
//         }
        
//      }
//      max(root){
//         if(!root.right){
//             return root.value
//         }else{
//             return this.max(root.right)
//         }
//      }
//      delete(value){
//         this.root= this.deleteNode(this.root,value)
//      }
//      deleteNode(root,value){
//         if(root===null){
//             return root
//         }
//         if(value<root.value){
//             root.left= this.deleteNode(root.left,value)
//         }else if(value> root.value){
//             root.right = this.deleteNode(root.right,value)
//         }else{
//             if(!root.left && !root.right){
//                 return null;
//             }
//             if(!root.left){
//                 return root.right;
//             }else if(!root.right){
//                 return root.left;
//             }
//             root.value= this.min(root.right);
//             root.right =this.deleteNode(root.right,root.value)
//         }
//         return root;
//      }

// }
// class Node {
//     constructor(value) {
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }

// class BinarySearchTree {
//     constructor() {
//         this.root = null;
//     }

//     isempty() {
//         return this.root === null;
//     }

//     insert(value) {
//         const node = new Node(value);
//         if (!this.root) {
//             this.root = node;
//         } else {
//             this.insertNewNode(this.root, node);
//         }
//     }

//     insertNewNode(root, node) {
//         if (node.value < root.value) {
//             if (root.left === null) {
//                 root.left = node;
//             } else {
//                 this.insertNewNode(root.left, node);
//             }
//         } else {
//             if (root.right === null) {
//                 root.right = node;
//             } else {
//                 this.insertNewNode(root.right, node);
//             }
//         }
//     }

//     searchNode(root, target) {
//         if (!root) {
//             return false;
//         } else {
//             if (root.value === target) {
//                 return true;
//             } else {
//                 if (root.value < target) {
//                     return this.searchNode(root.right, target);
//                 } else {
//                     return this.searchNode(root.left, target);
//                 }
//             }
//         }
//     }
//     preOrder(root){
// if(root){
//     console.log(root.value);
//     this.preOrder(root.left);
//     this.preOrder(root.right)
// }
//     }
//     inOrder(root){
//         if(root){
//             this.inOrder(root.left);
//             console.log(root.value);
//             this.inOrder(root.right)
//         }
//     }
//     postOrder(root){
//         if(root){
//             this.postOrder(root.left)
//             this.postOrder(root.right)
//             console.log(root.value);
//         }
//     }
//     min(root){
//         if(!root.left){
//                 return root.value
//         }
//            return  this.min(root.left)
        
       
//     }
//     max(root){
//         if(!root.right){
//             return root.value
//         }
//     return this.max(root.right)
//     }
//     delete(value){
// this.root = this.deleteNode(this.root,value)
//     }
//     deleteNode(root,value){
//         if(!root){
//             return root
//         }
//         if(root.value>value){
//             root.left = this.deleteNode(root.left,value)
//         }else if(root.value<value){
//             root.right=  this.deleteNode(root.right,value)
//         }else{
//             if(!root.left && !root.right){
//                 return null
//             }
//             if(!root.left){
//                 return root.right;
//             }else 
//             if(!root.right){
//                 return root.left;
//             }
//             root.value = this.min(root.right)
//             root.right = this.deleteNode(root.right,root.value)
//         }
//         return root;
//     }
// }

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }

// class BinarySearchTree {
//     constructor() {
//         this.root = null;
//     }

//     insert(value) {
//         const node = new Node(value);
//         if (!this.root) {
//             this.root = node;
//         } else {
//             this.insertNewNode(this.root, node);
//         }
//     }

//     insertNewNode(root, node) {
//         if (node.value < root.value) {
//             if (root.left === null) {
//                 root.left = node;
//             } else {
//                 this.insertNewNode(root.left, node);
//             }
//         } else {
//             if (root.right === null) {
//                 root.right = node;
//             } else {
//                 this.insertNewNode(root.right, node);
//             }
//         }
//     }

//     search(root, target) {
//         if (!root) {
//             return false;
//         } else {
//             if (root.value === target) {
//                 return true;
//             } else {
//                 if (root.value > target) {
//                     return this.search(root.left, target);
//                 } else {
//                     return this.search(root.right, target);
//                 }
//             }
//         }
//     }
//     preOrder(root){
//         if(root){
//             console.log(root.value);
//             this.preOrder(root.left)
//             this.preOrder(root.right)
//         }
//     }
//     inorder(root){
//         if(root){
//             this.inorder(root.left);
//             console.log(root.value);
//             this.inorder(root.right)
//         }
//     }
//     postorder(root){
//         if(root){
//             this.postorder(root.left)
//             this.postorder(root.right)
//             console.log(root.value);
//         }
//     }
//     min(root){
//         if(!root.left){
//             return root.value

// }
//    return this.min(root.left)

//        }
//     max(root){
//         if(!root.right){
//             return root.value;
//         }
//         return this.max(root.right);
//        }
//     delete(target){
        
//         this.root = this.deleteNode(this.root,target);
//     }
//     deleteNode(root,value){
//         if(!this.root){
//             return this.root;
//         }
//         if(root.value>value){
//             root.left= this.deleteNode(root.left,value);
//         }else if(root.value<value){
//             root.right = this.deleteNode(root.right,value)
//         }else{
//             if(!root.left && !root.right){
//                 return null;
//             }
//             if(!root.left){
//                 return root.right;
//             }else if(!root.right){
//                 return root.left
//             }
//             root.value = this.min(root.right);
//             root.right= this.deleteNode(root.right,root.value)
//         }
//         return root;
//     }
//     }

// class Node{
//     constructor(value){
//         this.value= value;
//         this.left= null;
//         this.right= null
//     }
// }
// class BinarySearchTree{
//     constructor(){
//         this.root =null;
//     }
//     isEmpty(){
//         return this.root=== null
//     }
//     insert(value){
//         const node= new Node(value)
//         if(!this.root){
//          this.root= node;
//         }
//         this.insertNode(this.root,node)

//     }
//     insertNode(root,node){
//         if (root.value === node.value) {
           
//             return;
//           }
//         if(root.value>node.value){
//             if(root.left===null){
//                 root.left= node;
//             }else{
//                 this.insertNode(root.left,node)
//             }
//         }else{
//             if(root.right===null){
//                 root.right= node;
//             }else{
//                 this.insertNode(root.right,node)
//             }
//         }
//     }
//     search(root,target){
//         if(!root){
//             return false;
//         }else{
//             if(root.value==target){
//                     return true;
//             }else{
//                 if(root.value>target){
//                    return this.search(root.left,target)
//                 }else{
//                     return this.search(root.right,target)
//                 }
//             }
//         }
//     }
//     preOrder(root){
//         if(root){
//             console.log(root.value);
//             this.preOrder(root.left);
//             this.preOrder(root.right);
//         }
//     }
//     inOrder(root){
//         if(root){
//             this.inOrder(root.left);
//             console.log(root.value);
//             this.inOrder(root.right);
//         }
//     }
//     postOrder(root){
//         if(root){
//             this.postOrder(root.left)
//             this.postOrder(root.right)
//             console.log(root.value);
//         }
//     }
//     min(root){
//         if(!root.left){
//                         return root.value
            
//              }
//         if(root.left){
//             return this.min(root.left)
//         }
//     }
//     max(root){
//         if(!root.right){
//             return root.value;
//         }
//         return this.max(root.right)
//     }
//     delete(target){
//         this.root=  this.deleteNode(this.root,target)
        
//     }
//     deleteNode(root,target){
//         if(!this.root){
//             return this.root;
//         }
//         if(root.value>target){
//            root.left= this.deleteNode(root.left,target)
//         }else if(root.value<target){
//             root.right= this.deleteNode(root.right,target)
//         }else{
//             if(!root.left && !root.right){
//                 return null;
//             }
//              if(!root.left){
//                 return root.right
//              }else if(!root.right) {
//                     return root.left;
//              }
//              root.value= this.min(root.right)
//              root.right = this.deleteNode(root.right,root.value)
//         }
//         return root;
//     }
//     isBST(root, prev = { value: Number.MIN_SAFE_INTEGER }) {
//         if (!root) {
//           return true;
//         }
//         if (!this.isBST(root.left, prev)) {
//           return false;
//         }
//         if (root.value < prev.value) {
//           return false;
//         }
//         prev.value = root.value;
//         return this.isBST(root.right, prev);
//       }
// }
// class Node{
//     constructor(value){
//         this.value= value;
//         this.left= null;
//         this.right= null;
//     }
// }
// class BinarySearchTree{
//     constructor(){
//         this.root =null;
//     }
//     isEmpty(){
//       return this.root===null
    
// }
// insert(value){
//     const node= new Node(value);
//     if(!this.root){
//         this.root=node;
//     }
//     this.insertNode(this.root,node)
// }
// insertNode(root,node){
//     if(root.value===node.value){
//         return;
//     }
//     if(root.value>node.value){
//         if(root.left==null){
//             root.left= node;
//         }else{
//             this.insertNode(root.left,node)
//         }
//     }else{
//         if(root.right==null){
//             root.right= node;
//         }else{
//             this.insertNode(root.right,node)
//         }

//     }
// }
// search(root,value){
//     if(!root){
//         return false;

//     }
//     if(root.value=== value){
//         return true;
//     }else{
//         if(root.value>value){
//             return this.search(root.left,value)
//         }else{
//             return this.search(root.right,value)
//         }
//     }
// }
// preOrder(root){
//     if(root){
//         console.log(root.value);
//         this.preOrder(root.left);
//         this.preOrder(root.right);
//     }
// }
// inOrder(root){
//     if(root){
//         this.inOrder(root.left)
//         console.log(root.value);
//         this.inOrder(root.right);
//     }
// }
// postOrder(root){
//     if(root){
//         this.postOrder(root.left);
//         this.postOrder(root.right)
//         console.log(root.value);
//     }
// }
// min(root){
//     if(!root.left){
//         return root.vlaue
//     }else{
//         return this.min(root.left);

//     }
// }
// max(root){
//     if(!root.right){
//         return root.vlaue
//     }else{
//         return this.min(root.right);
        
//     }
// }
// delete(target){
//     this.root= this.deleteNode(this.root,target);

// }
// deleteNode(root,target){
//     if(!this.root){
//         return this.root;
//     }
//     if(root.value>target){
//         root.left = this.deleteNode(root.left,target)
//     }else if(root.value<target){
//         root.left =this.deleteNode(root.right,target);

//     }else{
//         if(!root.left && !root.right){
//             return null;
//         }
//         if(!root.left){
//             return root.right;
//         }else if(!root.right){
//             return root.left
//         }
//         root.value= this.min(root.right);
//         root.right= this.deleteNode(root.right,root.value)
//     }
// }
// isBst(root,prev ={value: Number.MIN_SAFE_INTEGER}){
//     if(!root){
//         return true;
//     }
//     if(!this.isBst(root.left,prev)){
//         return false;
//     }
//     if(root.value<prev.value){
//         return false;
//     }
//     prev.value= root.value;
//     return this.isBst(root.right,prev);
// }
// closest(root, target) {
//     let closest = root.value;
//     let temp = root;
  
//     while (temp !== null) {
//       if (Math.abs(temp.value - target) < Math.abs(closest - target)) {
//         closest = temp.value;
//       }
//       if (temp.value > target) {
//         temp = temp.left;
//       } else if (temp.value < target) {
//         temp = temp.right;
//       } else {
//         break;
//       }
//     }
  
//     return closest;
//   }
// }

// class Node{
//     constructor(value){
//         this.value= value;
//         this.left= null;
//         this.right= null;
//     }
// }
// class BinarySearchTree{
//     constructor(){
//         this.root= null;
//     }
//     isEmpty(){
// return this.root === null;
//     }
//     insert(value){
//         let node= new Node(value);
//         if(!this.root){
//             this.root= node;
//         }else{
//           this.insertNode(this.root,node)
//         }

//     }
//     insertNode(root,node){
//         if(root.value>node.value){
//           if(root.left==null){
//             root.left= node;
//           }else{
//             this.insertNode(root.left,node)
//           }
//         }else{
//             if(root.right===null){
//                 root.right= node;
//             }else{
//                 this.insertNode(root.right,node)
//             }
//         }
//     }
//     search(root,value){
//         if(!root){
//             return false
//         }else{
//             if(root.value==value){
//                 return true;
//             }else if(root.value>value){
//               return  this.search(root.left,value)
//             }else{
//                return this.search(root.right,value)
//             }
//         }
//     }
//     preOrder(root){
//         if(root){
//             console.log(root.value);
//             this.preOrder(root.left)
//             this.preOrder(root.right)
//         }
//     }
//     inOrder(root){
//         if(root){
//             this.inOrder(root.left);
//             console.log(root.value);
//             this.inOrder(root.right)
//         }
//     }
//     postOrder(root){
//         if(root){
//             this.postOrder(root.left)
//             this.postOrder(root.right)
//             console.log(root.value);
//         }
//     }
//     min(root){
//         if(root.left==null){
//             return root.value
//         }else{
//           return  this.min(root.left)
//         }
//     }
//     max(root){
//         if(root.right==null){
//             return root.value
//         }else{
//           return  this.max(root.right)
//         }
//     }
//     delete(value){
//        this.root = this.deleteNode(this.root,value)
//     }
//     deleteNode(root,value){
//        if(!root){
//         return root;
//        }else{
//         if(root.value>value){
//         root.left = this.deleteNode(root.left,value)
//         }else if(root.value<value){
//             root.right = this.deleteNode(root.right,value)
//         }else{
//             if(!root.left && !root.right){
//                 return null
//             }else if(!root.left){
//                 return root.right
//             }else if(!root.right){
//                 return root.left
//             }
//             root.value = this.min(root.right);
//             root.right= this.deleteNode(root.right,root.value)
//         }
//        }
//        return root
//     }
//     isbst(root,prev={value: Number.MIN_SAFE_INTEGER}){
//         if(!root){
//             return true
//         }else{
//             if(!this.isbst(root.left,prev)){
//                 return false;
//             }
//             if(root.value<prev.value){
//                 return false;
//             }
//             prev.value =root.value;
//             return this.isbst(root.right,prev)
//         }
//     }
//     closest(target){
//         let closest = this.root;
//         let temp = this.root;
//         while(temp){
//             if(Math.abs(closest.value-target)> Math.abs(temp.value-target)){
//                 closest= temp;
//             }
//             if(temp.value>target){
//                 temp=temp.left;
//             }else{
//                 temp= temp.right;
//             }
//         }
//         return closest.value;
//     }
// }
// class Node{
//     constructor(value){
//         this.value= value;
//         this.left= null;
//         this.right=null;
//     }
// }
// class BinarySearchTree{
//     constructor(){
//         this.root= null;
//     }
//     isEmpty(){
//         return this.root===null
//     }
//     insert(value){
//         let node= new Node(value)
//         if(!this.root){
//             this.root= node;
//         }else{
//             this.insertNode(this.root,node)
//         }
//     }
//    insertNode(root,node){
//     if(root.value==node.value){
//         return;
//     }
//     if(root.value>node.value){
//         if(root.left==null){
//             root.left= node;
//         }else{
//             this.insertNode(root.left,node)
//         }
//     }else{
//         if(root.right===null){
//             root.right=node;
//         }else{
//             this.insertNode(root.right,node)
//         }
//     }
//    }
//    search(root,target){
//     if(!root){
//         return false;
//     }else{
//         if(root.value==target){
//             return true;
//         }else{
//             if(root.value>target){
//               return  this.search(root.left,target)
//             }else{
//                 return this.search(root.right,target)
//             }
//         }
//     }

//    }
//    preOrder(root){
//     console.log(root.value);
//     this.preOrder(root.left)
//     this.preOrder(root.right)
//    }
//    min(root){
//     if(!root.left){
//         return root.value;

//     }
//     return this.min(root.left)
//    }
//    delete(target){
//     this.root = this.deleteNode(this.root,target)
//    }
//    deleteNode(root,value){
//     if(!this.root){
//         return root;
//     }
//     if(root.value>value){
//         root.left =this.deleteNode(root.left,value)
//     }else if(root.value<value){
//         root.right = this.deleteNode(root.right,value)
//     }else{
//         if(!root.left && !root.right){
//             return null;
//         }
//         if(!root.left){
//             return root.right
//         }else if(!root.right){
//             return root.left;
//         }
//         root.value = this.min(root.right)
//         root.right = this.deleteNode(root.right,value)
//     }
//     return root;

//    }

// }
class Node{
    constructor(value){
        this.value= value;
        this.left= null;
        this.right =null
    }
}
// class BinarySearchTree{
//     constructor(){
//         this.root= null;
//     }
//     isempty(){
//         return this.root===null
//     }
//     insert(value){
//     let node = new Node(value);
//     if(!this.root){
//         this.root= node;
//     }else{
//         this.insertNode(this.root,node);
//     }
//     }
//     insertNode(root,node){
//         if(root.value>node.value){
//             if(root.left==null){
//                 root.left= node;
//             }else{
//                 this.insertNode(root.left,node)
//             }
//         }else {
//             if(root.right===null){
//                 root.right= node;
//             }else{
//                 this.insertNode(root.right,node)
//             }
//         }
//     }
//     search(root,value){
//         if(!root){
//             return false

//         }
//   if(root.value==value){
//     return true;
// }else{
//     if(root.value>value){
//        return this.search(root.left,value)
//     }else{
//         return this.search(root.right,value)
//     }
// }
//     }
//     preOrder(root){
//         console.log(root.value)
//         this.preOrder(root.left)
//         this.preOrder(root.right)
//     }
//     inOrder(root){
//         this.preOrder(root.left)
//         console.log(root.value)
       
//         this.preOrder(root.right)
//     }
//     postOrder(root){
//         this.preOrder(root.left)
     
       
//         this.preOrder(root.right)
//         console.log(root.value)
//     }
//     min(root){
//         if(root.left){
//            return this.min(root.left)
//         }else{
//             return root.value
//         }
//     }
//     max(root){
//         if(root.right==null){
//             return this.max(root.right)
//         }else{
//             return root.value
//         }
//     }
//     delete(value){
//       this.root= this.deleteNode(this.root,value);

//     }
//     deleteNode(root,value){
//         if(!root){
//             return root;
//         }else{
//             if(root.value>value){
//                 root.left= this.deleteNode(root.left,value)
//             }else if (root.value<value){
//                 root.right= this.deleteNode(root.right,value);
//             }else{
//                 if(!root.left && !root.right){
//                     return null;
//                 }else if(!root.left){
//                     return root.right
//                 }else if(!root.right){
//                     return root.left
//                 }
//                 root.value = this.min(root.right)
//                 root.right= this.deleteNode(root.right,root.value)
//             }
//         }

//     }
//     isbst(root,prev={value:Number.MIN_SAFE_INTEGER}){
//         if(!root){
//             return true;
//         }else{
//             if(!this.isbst(root.left,prev)){
//                 return false;
//             }
//             if(root.value<prev.value){
//                 return false;
//             }
//             prev.value= root.value;
//             return this.isbst(root.right,prev);
//         }

//     }
// }
class BinarySearchTree{
    constructor(){
        this.root = null;

    }
    insert(value){
        let node = new Node(value)
        if(!this.root){
            this.root =node;
        }else{
            this.insertNode(this.root,node)
        }
    }
    insertNode(root,node){
        if(root.value>node.value){
            if(root.left==null){
                root.left= node
            }else{
                this.insertNode(root.left,node)
            }
        }else{
            if(root.right==null){
                root.right= node
            }else{
                this.insertNode(root.right,node)
            }
        }
    }
    search(root,value){
      if(!root){
        return false;
      }else{
        if(root.value== value){
            return true;
        }else if(root.value>value){
            return this.search(root.left,value)
        }else{
            return this.search(root.right,value)

        }
      }
   
    }
    min(root){
        if(root){
            if(!root.left){
                return root.value;
            }else{
                return this.min(root.left)
            }
        }
    }
    max(root){
        if(root){
            if(!root.right){
                return root.value;
            }else{
                return this.max(root.right)
            }
        }
    }
    delete(value){
        this.root= this.deletenode(this.root,value)
    }
    deletenode(root,value){
        if(root===null){
            return root
        }
        if(root.value>value){
                root.left =this.deleteNode(root.left,value)
             }else if(root.value<value){
                 root.right = this.deleteNode(root.right,value)
              }else{
            if(!root.left && !root.right){
                return null;
            }else if(!root.right){
                return root.left;
            }else if(!root.right){
                return root.left;
            }
              root.value= this.min(root.right)
              root.right= this.deleteNode(root.right,root.value)
            
        }
    }
    }

const bst = new BinarySearchTree();

bst.insert(10)
bst.insert(1)
bst.insert(80)
bst.insert(13)

bst.preOrder(bst.root)
let clso = bst.closest(12)
console.log(clso);