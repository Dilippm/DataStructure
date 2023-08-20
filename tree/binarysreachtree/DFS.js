
//Depth First Search
// class Node{
//     constructor(value){
//         this.value =value;
//         this.left= null;
//         this.right =null;
//     }
// }

// class BST{
//     constructor(){
//         this.root= null;
//     }
//     isEmpty(){
//         if(!this.root){
//             return true
//         }
//     }
//     insert(value){
//         const node =new Node(value);
//         if(!this.root){
//             this.root= node;
//         }else{
//               this.insertnode(this.root,node)
//         }

//     }
//     insertnode(root,node){
//         if(node.value<root.value){
//             if(root.left==null){
//                 root.left =node;
//             }else{
//                this.insertnode(root.left,node) 
//             }
//         }else{
//             if(root.right==null){
//                 root.right =node;
//             }else{
//                 this.insertnode(root.right,node)
//             }
//         }
//     }
//     search(root,value){
//         if(!root){
//             return false;
//         }else{
//               if(root.value==value){
//                 return true;
//               }  else{
//                 if(value<root.value){
//                     return this.search(root.left,value)
//                 }else{
//                     return this.search(root.right,value)
//                 }
//               }
//         }
//     }
//     //DFS
//     //preorder Traversal
//     preorder(root){
//         if(root){
//             console.log(root.value);
//             this.preorder(root.left);
//             this.preorder(root.right);
//         }
//     }
//     //inOrder Traversal
//     inorder(root){
//         if(root){
//             this.inorder(root.left)
//             console.log(root.value);
//             this.inorder(root.right)
  
//         }
//     }
//     //postorder Traversal
//     postorder(root){
//         if(root){
//             this.postorder(root.left);
//             this.postorder(root.right);
//             console.log(root.value);
//         }
//     }
//     min(root){
//        if(!root.left){
//         return root.value;
//        }else{
//         return this.min(root.left);
//        }
//     }
//     max(root){
//         if(!root.right){
//             return root.value;

//         }else{
//             return this.max(root.right)
//         }
//     }
//     delete(value){
//         this.root =this.deletenode(this.root,value)
//     }
//     deletenode(root,value){
//         if(root==null){
//             return root;
//         }else{
//             if(value<root.value){
//                 root.left=this.deletenode(root.left,value)
//             }else if(value>root.value){
//                 root.right =this.deletenode(root.right,value)
//             }else{
//                 if(!root.left && !root.right){
//                     return null;
//                 }
//                 if(!root.left){
//                     return root.right
//                 }else if(!root.right){
//                     return root.left
//                 }
//                 root.value =this.min(root.right);
//                 root.right =this.deletenode(root.right,root.value)
//             }
//             return root;
//         }
//     }
     
// }

// let bst =new BST();
// console.log(bst.isEmpty());
// bst.insert(10);
// bst.insert(5);
// bst.insert(15);
// bst.insert(3);
//bst.insert(7);
//bst.insert(18);
// console.log(bst.search(bst.root,10));
// console.log(bst.search(bst.root,5));
// console.log(bst.search(bst.root,15)); 
//bst.preorder(bst.root)
//bst.inorder(bst.root)
//bst.postorder(bst.root)
//console.log("min:",bst.min(bst.root));
//console.log("max:",bst.max(bst.root));


// class Node{
//     constructor(value){
//         this.value=value;
//         this.left=null;
//         this.right=null;
//     }

// }
// class BST{
//     constructor(){
//         this.root=null
//     }
//     isEmpty(){
//         if(!this.root){
//             return true;
//         }else{
//             return false
//         }
//     }
//     insert(value){
//         let node =new Node(value);
//         if(!this.root){
//             this.root=node;
//         }else{
//             this.insertnode(this.root,node)
//         }

//     }
//     insertnode(root,node){
//             if(node.value<root.value){
//                 if(root.left==null){
//                         root.left= node;
//                 }else{
//                     return this.insertnode(root.left,node)
//                 }
//             }else{
//                 if(root.right==null){
//                     root.right=node;
//                 }else{
//                     return this.insertnode(root.right,node)
//                 }
//             }
//     }
//     search(root,value){
//         if(!root){
//             return false;
//         }else{
//             if(value==root.value){
//                 return true;
//             }else if(value<root.value){
//                 return this.search(root.left,value)
//             }else{
//                 return this.search(root.right,value)
//             }
//         }
//     }
//     //DFS 
//     //preorder traversing
//     preOrder(root){
//         if(root){
//             console.log(root.value);
//             this.preOrder(root.left);
//             this.preOrder(root.right)
//         }
//     }
//     inorder(root){
//         if(root){
//            this.inorder(root.left);
//            console.log(root.value);
//             this.inorder(root.right)
//         }
//     }
//     postOrder(root){
//         if(root){
//             this.postOrder(root.left)
//             this.postOrder(root.right);
//             console.log(root.value);
//         }
//     }
//     min(root){
//         if(!root.left){
//             return root.value;
//         }else{
//             return this.min(root.left);
//         }
//     }
//     max(root){
//         if(!root.right){
//             return root.value
//         }else{
//             return this.max(root.right);
//         }
//     }
//     delete(value){
//         this.root =this.deletenode(this.root,value)
//     }
//     deletenode(root,value){
//         if(root==null){
//             return root;
//         }else{
//             if(value<root.value){
//                 root.left=this.deletenode(root.left,value)
//             }else if(value>root.value){
//                 root.right =this.deletenode(root.right,value)
//             }else{
//                 if(!root.left && !root.right){
//                     return null;
//                 }else if(!root.left){
//                     return root.right;
//                 }else if(!root.right){
//                     return root.left
//                 }
//                 root.value= this.min(root.right);
//                 root.right =this.deletenode(root.right,value)
//             }
//             return root;
//         }
//     }
// }
// let bst = new BST();
// //console.log(bst.isEmpty());
// bst.insert(10);
// bst.insert(8);
// bst.insert(20);
// bst.insert(89);
// bst.insert(4);
// bst.insert(25);
// // console.log(bst.search(bst.root,10));
// // console.log(bst.search(bst.root,89));
// // console.log(bst.search(bst.root,7));

// bst.preOrder(bst.root)
// console.log("after delete");
// //bst.postOrder(bst.root)
// // console.log("min:",bst.min(bst.root));
// // console.log("min:",bst.max(bst.root));
// bst.delete(89);
// bst.postOrder(bst.root)

// class Node{
//     constructor(value){
//         this.value=value;
//         this.left=null;
//         this.right=null;
//     }
// }
// class BST{
//     constructor(){
//         this.root =null;
//     }
//     isEmpty(){
//         if(this.root==null){
//             return true
//         }
//         return false;
//     }
//     insert(value){
//         let node =new Node(value)
//         if(!this.root){
//             this.root = node;
//         }else{
//             return this.insertion(this.root,node)
//         }
//     }
//     insertion(root,node){
//         if(node.value<root.value){
//             if(root.left==null){
//                 root.left= node;
//             }else{
//                 return this.insertion(root.left,node)
//             }
//         }else{
//             if(root.right==null){
//                 root.right =node;
//             }else{
//                 return this.insertion(root.right,node)
//             }
//         }
//     }
//     search(root,value){
//         if(!root){
//             return false
//         }else{
//             if(value==root.value){
//                 return true;
//             }else if(value<root.value){
//                 return this.search(root.left,value)
//             }else{
//                 return this.search(root.right,value)
//             }
            
            
//         }
       
//     }
//     //preOrder traversal
//     preOrder(root){
//         if(root){
//             console.log(root.value);
//             this.preOrder(root.left);
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
//             this.inOrder(root.left);
//             this.inOrder(root.right);
//             console.log(root.value);
//         }
//     }
//     min(root){
//         if(!root.left){
//             return root.value;
//         }else{
//             return this.min(root.left);
//         }
//     }
//     max(root){
//         if(!root.right){
//             return root.value;
//         }
//         return this.max(root.right)
//     }
//     delete(value){
//         this.root = this.deletenode(this.root,value)
//     }
//     deletenode(root,value){
//         if(root==null){
//             return root;
//         }else{
//             if(value<root.value){
//                 root.left= this.deletenode(root.left,value)
//             }else if(value>root.value){
//                 root.right=this.deletenode(root.right,value)
//             }else{
//                 if(!root.left && !root.right){
//                     return null
//                 }else if(!root.left){
//                         return root.right
//                 }else if(!root.right){
//                     return root.left
//                 }
           
//                 root.value =this.min(root.right);
//                 root.right= this.deletenode(root.right,root.value)
//             }
//             return root;
//         }
//     }
//     isbst(root){
//         if(root===null){
//             return true;
//         }
//         if(root.left !=null && root.left.value > root.value){
//             return false
//         }
//         if(root.right !=null && root.right.value < root.value){
//             return false;
//         }
//         if((!this.isbst(root.left))|| (!this.isbst(root.right))){
//             return false
//         }
//         return true;
//     }
//     closest(target){
//         let currentnode= this.root;
//         let closest =currentnode.value;
//         while(currentnode){
//             if((Math.abs(target-closest))>((Math.abs(target-currentnode.value)))){
//                 closest=currentnode.value
//             }
//             if(target<currentnode.value){
//                 currentnode=currentnode.left
//             }else if(target>currentnode.value){
//                 currentnode =currentnode.right
//             }else{
//                 break;
//             }
//         }
//         return closest;
//     }
// }
// let bst =new BST();
// let a= bst.isEmpty()
// //console.log(a);
// bst.insert(10)
// bst.insert(8)
// bst.insert(4)
// bst.insert(20)
// bst.insert(89)
// bst.insert(25)
// bst.insert(90)
// //console.log(bst.search(bst.root,10));

// // console.log("min:",bst.min(bst.root));
// // console.log("max:",bst.max(bst.root));
// //bst.delete(89);
// bst.preOrder(bst.root)
// console.log(bst.isbst(bst.root))
// console.log("closest:",bst.closest(7))

// class Node{
//     constructor(value){
//         this.value=value;
//         this.left=null;
//         this.right=null;
//     }
// }
// class BST{
//     constructor(){
//         this.root=null
//     }
//     isEmpty(){
//         if(this.root==null){
//             return true
//         }else{
//             return false;
//         }
//     }
//     insertion(value){
//         let node = new Node(value);
//         if(!this.root){
//             this.root= node;
//         }else{
//            return  this.insertion(this.root,node)
//         }
//     }
//     insert(root,node){
//         if(root.value>node.value){
//             if(root.left==null){
//                 root.left=node
//             }else{
//                 return this.insert(root.left,node)
//             }
            
//         }else if(root.value<node.value){
//             if(root.right==null){
//                 root.right=node
//             }else{
//                 return this.insert(root.right,node)
//             }
           
//         }
//     }
//     search(root,value){
//         if(!root){
//             return false;
//         }else{
//             if(value==root.value){
//                 return true;            
//              }else if(root.value>value){
//                 return this.search(root.left,value);
//             }else{
//                 return this.search(root.right,value)
//             }
//         }
        
//     }
//     preOrder(root){
//         console.log(root.value);
//         this.preOrder(root.left);
//         this.preOrder(root.right)
// ;    }
// inOrder(root){
//     this.inOrder(root.left);
//     console.log(root.value);
//     this.inOrder(root.right)
// }
// postOrder(root){
//     this.postOrder(root.left)
//     this.postOrder(root.right)
//     console.log(root.value);
// }
// delete(value){
//     this.root =this.deletenode(this.root,value)
// }
// deletenode(root,value){
//     if(root==null){
//         return root;
//     }else{
//         if(value<root.value){
//             return this.deletenode(root.left,value)
//         }else if(value>root.value){
//             return this.deletenode(root.right,value)
//         }else{
//             if(!root.left && !root.right){
//                 return null;
//             }else if(!root.left){
//                 return root.right;
//             }else if(!root.right){
//                 return root.left
//             }
//             root.value=this.min(root.right);
//             root.right =this.deletenode(root.right,root.value)
//         }
//     }
// }
// min(root){
//     if(!root.left){
//         return root.value;
//     }else{
//         return this.min(root.left)
//     }
// }
// max(root){
//     if(!root.right){
//         return root.value;
//     }else{
//         return thismax(root.right);
//     }
// }
// isbst(root){
//     if(root==null){
//         return true;
//     }
//     if(root.left!=null && root.left.value>root.value){
//         return false
//     }
//     if(root.right!=null && root.right<root.value){
//         return false
//     }
//     if((!this.isbst(root.left)) || (!this.bst(root.right))){
//         return false;
//     }
//     return true;
// }
// closest(target){
//     let curnode= this.root;
//     let closest =curnode.value;
//     while(curnode){
//         if((Math.abs(target-closest))>((Math.abs(target-curnode.value)))){
//             closest= curnode.value
//         }
//         if(target<curnode.value){
//             curnode= curnode.left;
//         }else if(target.curnode){
//             curnode=curnode.right
//         }else{
//             break;
//         }
//     }
//     return closest;
// }
// }
class Node{
    constructor(value){
        this.value =value;
        this.left =null;
        this.right =null;
    }

}
// class BST{
//     constructor(){
//         this.root = null;
//     }
//     isEmpty(){
//         if(this.root==null){
//             return true;
//         }else{
//             return false;
//         }
//     }
//     insert(value){
//         let node= new Node(value);
//         if(this.root==null){
//             this.root =node;
//         }else{
//             return this.insertion(this.root,node)
//         }
        
//     }
//     insertion(root,node){
//         if(root.value>node.value){
//             if(root.left ==null){
//                 root.left= node
//             }else{
//                 return this.insertion(root.left,node)
//             }
//         }else if(root.value<node.value){
//             if(root.right==null){
//                 root.right =node;
//             }else{
//                 return this.insertion(root.right,node);
//             }
//         }
//     }
//     search(root,value){
//         if(!root){
//             return false;
//         }else if(root.value==value){
//            return true;
//         }else if(root.vale>value){
//            return  this.search(root.left,value)
//         }else if(root.value<value){
//            return  this.search(root.right,value)
//         }
//     }
//     //traversal 
//     //preorder
//     preorder(root){
//         if(root==null){
//             return root
//         }
//         console.log(root.value);
//         this.preorder(root.left);
//         this.preorder(root.right);
//     }
//     inorder(root){
//         if(root==null){
//             return root;
//         }
//         this.inorder(root.left);
//         console.log(root.value);
//         this.inorder(root.right)
//     }
//     postorder(root){
//         if(root==null){
//             return null;
//         }
//         this.postorder(root.left);
//         this.postorder(root.right);
//         console.log(root.value);
//     }
//     min(root){
//         if(!root.left){
//             return root.value;
//         }else {
//             return this.min(root.left)
//         }
//     }
//     max(root){
//         if(!root.right){
//             return root.value;
//         }else{
//             return this.min(root.right);
//         }
//     }
//     delete(value){
//         this.root =this.deletenode(this.root,value);
//     }
//     deletenode(root,value){
//         if(root==null){
//             return root;
//         }else{
//             if(root.value>value){
//                 this.deletenode(root.left,value);
//             }
//             if(root.value<value){
//                 this.deletenode(root.right,value);
//             }
//             if(!root.left && !root.right){
//                 return null;
//             }
//             if(!root.left){
//                 return root.right
//             }
//             if(!root.right){
                
//                 return root.left;
//             }
//            root.value =this.min(root.right);
//            root.right =this.deletenode(root.right,root.value)
//         }
//     }
//     isbst(root){
//         if(root==null){
//             return true;
//         }else{
//             if(root.left!=null && root.left.value>root.value){
//                 return false;
//             }
//             if(root.right!=null && root.right<root.value){
//                 return false;

//             }
//             if((!this.isbst(root.left))||(!this.isbst(root.right))){
//                 return false;
//             }
//             return true;
//         }
//     }
//     closest(num){
//         let currentnode =this.root;
//         let closest =currentnode.value;
//         while(currentnode){
//             if((Math.abs(num-closest))>((Math.abs(num-currentnode.value)))){
//                 closest =currentnode.value;

//             }
//             if(num<currentnode.value){
//                 currentnode =currentnode.left
//             }else if(num>currentnode.value){
//                 currentnode= currentnode.right;
//             }else{
//                 break;
//             }
//         }
//         return closest;

//     }
// }
class BST{
    constructor(){
        this.root = null
    }
    insert(value){
        let node= new Node(value)
        if(this.root===null){
            this.root= node;
        }else{
            this.insertNode(this.root,node)
        }
    }
    insertNode(root,node){
        if(root.value>node.value){
            if(!root.left){
                root.left= node;
            }else{
                this.insertNode(root.left,node)
            }
        }else{
            if(!root.right){
                root.right= node;
            }else{
                this.insertNode(root.right,node)
            }
        }
    }
    search(root,target){
        if(!root){
            return false;
        }else{
            if(root.value== target){
                return true;
            }else{
                if(root.value<target){
                    return this.search(root.right,target)
                }else{
                    return this.search(root.left,target)
                }
            }
        }
    }
    preOrder(root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value);
            this.inOrder(root.right)
        }
    }
    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value);
        }
    }
}
let bst= new BST()
//console.log(bst.isEmpty());

 bst.insert(45);
 bst.insert(5);
 bst.insert(4);
 bst.insert(78);

//console.log(bst.search(bst.root,45));
//bst.postorder(bst.root);
//console.log(bst.max(bst.root));
console.log(bst.isbst(bst.root));