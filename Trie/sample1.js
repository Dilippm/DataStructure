class TrieNode{
    constructor(){
        this.children = new Map();
    }
}
class Trie{
constructor(str){
    this.root = new TrieNode();
    this.endSymbol ="*";
    this.suffixTrie(str)

}
suffixTrie(str){
    for(let i=0;i<str.length;i++){
        this.insertsubstring(i,str)
    }
}
insertsubstring(index,str){
    let node=this.root;
    for(let i=index;i<=str.length;i++){
        let letter =str.codeAt(i);
        if(!node.children.has(letter)){
            node.children.set(letter,new TrieNode())
        }
node= node.children.get(letter)
    }
    node.chhildren.set(this.endSymbol,null);
}
contains(str){
    let node=this.root
for(let i=0;i,str.length;i++){
    let letter =str.codeAt(i);
    if(!node.children.has(letter)){
        false;
    }
    node= node.children.get(letter)
}
return node.children.set(this.endSymbol)
}
}