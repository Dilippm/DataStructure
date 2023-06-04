class Node{
    constructor(value){
        this.value =value;
        this.left= null;
        this.right =null
    }
}
class BST{
    constructor(){
        this.root =null
    }
    insert(value){
        let node= new Node(value);
        if(this.root==null){
            this.root=node;
        }else{
            this.insertNode(this.root,node)
        }
    }
    insertNode(root,node){
        if(root.value>node.value){
            if(root.left == null){
                root.left =node;
            }else{
                this.insertNode(root.left,node)
            }
        }else{
            if(root.right==null){
                root.right=node;
            }else{
                this.insertNode(root.right,node)
            }
        }
    }
    search(root,value){

        if(root.value==value){
            return true;
        }else 
            if(root.value>value){
            return this.search(root.left,value)
        }else if(root.value<value){
            return this.search(root.right,value)
        }
        
    
    

      
        
    }
    inOrder(root){
        if(root){
            this.inOrder(root.left);

            console.log(root.value);
            this.inOrder(root.right)

        }
       
    }
}
let bst = new BST();
bst.insert(45);
bst.insert(5);
bst.insert(50);
bst.insert(25);
bst.insert(60);
bst.insert(100);
bst.inOrder(bst.root);
console.log(bst.search(6));
