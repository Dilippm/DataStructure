//suffix tree

// class TrieNode{
//     constructor(){
//         this.children =new Map();

//     }
// }
// class Trie{
//     constructor(str){
//         this.root =new TrieNode();
//         this.endSymbol= '*';
//         this.SuffixTrie(str)
//     }
//     SuffixTrie(str){
//         for(let i=0;i<str.length;i++){
//             this.insertSubString(i,str)
//         }
//     }
//     insertSubString(index,str){
//         let node= this.root;
//         for(let i=index;i<str.length;i++){
//             const letter= str.charAt(i);
//             if(!node.children.has(letter)){
//                     node.children.set(letter,new TrieNode())
//             }
//             node= node.children.get(letter);
//         }
//         node.children.set(this.endSymbol,null);
//     }
//     contains(str){
//         let node= this.root;
    
//         for(let i=0;i<str.length;i++){
//             const letter= str.charAt(i);
//             if(!node.children.has(letter)){
//                 return false;
//             }
//             node= node.children.get(letter);
         

//         }
//         return node.children.has(this.endSymbol);
//     }
// }
// let str= "arun"
// let trie= new Trie(str);
// trie.SuffixTrie("ashik")

// console.log("kitti:",trie.contains("n"),);
// class TrieNode{
//     constructor(){
//         this.children = new Map()
//     }
// }
// class Trie{
//     constructor(str){
//         this.root= new TrieNode();
//         this.endsymbol = '*';
//         this.suffixTrie(str);
//     }
//     suffixTrie(str){
//         for(let i=0;i<str.length;i++){
//             this.insertSubString(i,str);
//         }
//     }
//     insertSubString(index,str){
//         let node= this.root;
//         for(let i=index;i<str.length;i++){
//             const letter =str.charAt(i);
//             if(!node.children.has(letter)){
//                 node.children.set(letter,new TrieNode());

//             }
//             node=node.children.get(letter);
//         }
//         node.children.set(this.endsymbol,null);
//     }
//     contains(str){
//         let node= this.root;
//         for(let i=0;i<str.length;i++){
//             const letter =str.charAt(i);
//             if(!node.children.has(letter)){
//                 return false;
//             }
//             node=node.children.get(letter);
//         }
//         return node.children.has(this.endsymbol)
     
//     }

// }
class TrieNode{
    constructor(){
        this.children =new Map()
    }
}
class Trie{
    constructor(str){
        this.root =new TrieNode();
        this.endSymbol ="*";
        this.suffixTrie(str)
    }
    suffixTrie(str) {
        for (let i = 0; i < str.length; i++) {
          this.insertSubString(i, str);
        }
    }
      
    insertSubString(index,str){
        let node= this.root;
        for(let i=0;i<str.length-index;i++){
            const letter =str.charAt(i);
            if(!node.children.has(letter)){
                node.children.set(letter,new TrieNode())
            }
            node =node.children.get(letter);
        }
         node.children.set(this.endSymbol,null)
    }
    contains(str) {
        let node = this.root;
        for (let i = 0; i < str.length; i++) {
          const letter = str.charAt(i);
          if (!node.children.has(letter)) {
            return false;
          }
          node = node.children.get(letter);
        }
        return node.children.has(this.endSymbol);
      }
      

    printValues() {
        this._traverse(this.root, "");
      }
      _traverse(node, currentStr) {
        for (const [letter, childNode] of node.children) {
          const newStr = currentStr + letter;
          if (letter === this.endSymbol) {
            console.log(newStr);
          } else {
            this._traverse(childNode, newStr);
          }
        }
      }
}

let str= "vishnu";
let trie =new Trie(str);

 trie.suffixTrie("vismaya")
 trie.suffixTrie("vasu")
trie.suffixTrie(str);

trie.printValues()
