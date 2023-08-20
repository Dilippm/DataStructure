//  class TrieNode{
//     constructor(){
//         this.children = new Map();
//     }
// }
// class Trie{
// constructor(str){
//     this.root = new TrieNode();
//     this.endSymbol ="*";
//     this.suffixTrie(str)

// }
// suffixTrie(str){
//     for(let i=0;i<str.length;i++){
//         this.insertsubstring(i,str)
//     }
// }
// insertsubstring(index,str){
//     let node=this.root;
//     for(let i=index;i<=str.length;i++){
//         let letter =str.codeAt(i);
//         if(!node.children.has(letter)){
//             node.children.set(letter,new TrieNode())
//         }
// node= node.children.get(letter)
//     }
//     node.chhildren.set(this.endSymbol,null);
// }
// contains(str){
//     let node=this.root
// for(let i=0;i,str.length;i++){
//     let letter =str.codeAt(i);
//     if(!node.children.has(letter)){
//         false;
//     }
//     node= node.children.get(letter)
// }
// return node.children.set(this.endSymbol)
// }
// }
// class TrieNode{
//     constructor(){
//         this.children = new  Map()
//     }

// }
// class Trie{
//     constructor(str){
//         this.root = new TrieNode();
//         this.endSymbol ="*";
//         this.suffixTrie(str)
//     }
//     suffixTrie(str){
//         for(let i=0;i<str.length;i++){
//             this.insertSubString(i,str);

//         }

//     }
//     insertSubString(index,str){
//         let node= this.root;
//         for(let i=0;i<str.length-index;i++){
//             const letter= str.charAt(i)
//             if(!node.children.has(letter)){
//                 node.children.set(letter,new TrieNode)

//             }
//             node= node.children.get(letter)

//         }
//         node.children.set(this.endSymbol,null)
//     }
//     contains(str){
//         let node= this.root;
//         for(let i=0;i<str.length;i++){
//             const letter = str.charAt(i)
//             if(!node.children.has(letter)){
//                 return false
//             }
//             node=node.children.get(letter)

//         }
//         return node.children.has(this.endSymbol)
//     }
//     print(){
//         this.traverse(this.root,"")
//     }
//     traverse(node,currentStr){
//         for(const [letter,childNode] of node.children){
//             const newStr = currentStr +letter;
//             if(letter=== this.endSymbol){
//                 console.log(newStr);
//             }else{
//                 this.traverse(childNode,newStr)
//             }
//         }
//     }

// }
// class Trie{
//     constructor(){
//         this.children = new Map()
//     }

// }
// class TrieNode{
//     constructor(){
//         this.root= new TrieNode();
//         this.endSymbol ="*";
//         this.suffixTrie(str)
//     }
//     suffixTrie(str){
//         for(let i=0;i<str.length;i++){
//             this.insertSubString(i,str);

//         }
//     }
//     insertSubString(index,str){
//         let node= this.root;
//         for(let i=0;i<str.length-index;i++){
//             const letter = str.charAt(i)
//             if(!node.children.has(letter)){
//                 node.children.set(letter,new TrieNode())
//             }
//             node= node.children.get(letter)
//         }
//         node.children.set(this.endSymbol,null)
//     }
//     containes(str){
//         let node= this.root;
//         for(let i=0;i,str.length;i++){
//             const letter= str.charAt(i)
//             if(!node.children.has(letter)){
//                 return false;
//             }
//             node= node.children.get(letter)
//         }
//         return node.children.has(this.endSymbol)
//     }
//     print(){
//         this.traverse(this.root,"")
//     }
//     traverse(node,currentstr){
//         for(const [letter,childNode] of node.children){
//             const newStr = letter +currentstr;
//             if(letter=== this.endSymbol){
//                 console.log(newStr);
//             }else{
//                 this.traverse(childNode,newStr)
//             }
//         }
//     }
// }
class Trie{
    constructor(){
        this.children = new Map()
    }
}
class TrieNode{
    constructor(){
        this.root= new TrieNode()
        this.endSymbol ="*";
        this.suffixTrie(str)
    }
    suffixTrie(str){
        for(let i=0;i<str.length;i++){
            this.insert(i,str)
        }
    }
    insert(index,str){
        let node= this.root;
        for(let i=0;i,str.length-index;i++){
            const letter = str.charAt(i)
            if(!node.children.has(letter)){
                node.children.set(letter)
            }
            node= node.children.get(letter)
        }
        node.children.set(this.endSymbol,null)
    }
    containes(str){
        let node= this.root;
        for(let i=0;i<str.length;i++){
            const letter= str.charAt(i);
            if(!node.children.has(letter)){
                return false;
            }
            node= node.children.get(letter)

        }
       return node.children.has(this.endSymbol,null)
    }
    print(){
        this.traverse(this.root,"")
    }
    traverse(node,currentstr){
        for(const [letter, childNode] of node.children){
            const newStr = letter + currentstr;
            if(letter=== this.endSymbol){
                console.log(newStr);
            }else{
                this.traverse(childNode,newStr)
            }
        }
    }
}