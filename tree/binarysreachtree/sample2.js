class Node{
    constructor(value){
        this.value =value;
        this.left =null;
        this.right =null;
    }
}
class BST{
    constructor(){
        this.root =null;
    }
    isEmpty(){
        if(this.root==null){
            return false;
        }else{
            return true;
        }
    }
    insert(value){
        let node= new Node(value)
        if(this.root==null){
            this.root = node;
        }else{
          this.insertion(this.root,node)
        }
    }
    insertion(root,node){
        if(root.value>node.value){
            if(root.left==null){
                root.left = node;
            }else{
                this.insertion(root.left,node)
            }
        }else {
            if(root.right==null){
                root.right =node;
            }else{
                this.insertion(root.right,node);
            }
        }
    }
    search(root,value){
        if(!root){
            return false;
        }
        if(root.value==value){
            return true;
        }else{
            if(root.value>value){
               return this.search(root.left,value)
            }else{
               return this.search(root.right,value)
            }
        }
    }
    preorder(root){
        if(root){
            console.log(root.value);
            this.preorder(root.left);
            this.preorder(root.right);

        }
       
    }
    inorder(root){
        this.inorder(root.left)
        console.log(root.value);
        this.inorder(root.right)
    }
    postorder(root){
        this.inorder(root.left);
        this.inorder(root.right);
        console.log(root.value);
    }
    min(root){
        if(root.left===null){
            return root.left.value
        }else{
            return this.min(root.left)
        }
    }
    max(root){
        if(root.right==null){
            return root.right.value;
        }else{
            return this.max(root.right);
        }
    }
    delete(value){
        this.root = this.deletendoe(this.root,value)
    }
    deletendoe(root,value){
        if(root.value==null){
            return root
        }else{
            if(value<root.value){
                root.left=this.deletendoe(root.left,value)
            }else  if(value>root.value){
              root.right=  this.deletendoe(root.right,value)
            }else{
                if(!root.right && !root.left){
                    return null;
                }
                if(!root.left){
                    return right;
                }
                if(!root.right){
                    return left;
                }
                root.value =this.min(root.right);
                root.right =this.deletendoe(root.right,root.value)
            }
            return root;
        }
    }
    isbst(root){
        if(root==null){
            return true;
        }else{
            if(root.left!=null && root.left.value>root.value){
                return false;
            }
            if(root.right != null && root.right>root.value){
                return false;
            }
            if((!this.isbst(root.left))||(!this.isbst(root.right))){
                return false
            }
            return true;
        }
    }

        closest(target){
            let currentnode =this.root;
            let closest = currentnode;
            while(currentnode){
            
            
            if(Math.abs(target-closest)>Math.abs(target-currentnode.value)){
                closest = currentnode
            }
            if(target<currentnode.value){
                currentnode=currentnode.left
            }else if(target>currentnode.value){
                currentnode =currentnode.right
            }else{
                break;
            }


        }
        return closest;
        }
    
}
let bst =new BST();
console.log(bst.isEmpty());
bst.insert(60)
bst.insert(20)
bst.insert(80)
bst.insert(10)
bst.insert(30)
bst.insert(70)
bst.insert(100)
bst.insert(200)
bst.preorder(bst.root)