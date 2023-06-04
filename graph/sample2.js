// class Graph{
//     constructor(){
//         this.graph= new Map()
//     }
//     addvertex(vertex){
//         this.graph.set(vertex,new Array())
//     }
//     insert(vertex,edge,isBidirectional){
//         if(!this.graph.has(vertex)){
//             this.addvertex(vertex)
//         }
//         if(!this.graph.has(edge)){
//             this.addvertex(edge)
//         }
//         this.graph.get(vertex).push(edge);
//         if(isBidirectional){
//             this.graph.get(edge).push(vertex);
//         }
//     }
//     bfs(start) {
//         let visited = new Set();
//         let queue = [];
//         visited.add(start);
//         queue.push(start);
//         while (queue.length > 0) {
//           let vertex = queue.shift();
//           console.log(vertex);
//           let neighbors = this.graph.get(vertex);
//           for (let neighbor of neighbors) {
//             if (!visited.has(neighbor)) {
//               visited.add(neighbor);
//               queue.push(neighbor);
//             }
//           }
//         }
//       }
//       dfs(start, visited = new Set()) {
//         visited.add(start);
//         console.log(start);
//         for (let edge of this.graph.get(start)) {
//           if (!visited.has(edge)) {
//             this.dfs(edge, visited);
//           }
//         }
//       }
//       delete(vertex){
//         if(this.graph.has(vertex)){
//             let edges=  this.graph.get(vertex);
//             for(let edge of edges){
//                 this.graph.get(edge).splice(this.graph.get(edge).indexOf(vertex),1)
//             }
//             this.graph.delete(vertex)
//         }
//       }
      
//     display() {
//         for (let [vertex, edges] of this.graph) {
//           console.log(vertex, edges);
//         }
//       }
// }
class Graph{
  constructor(){
    this.graph =new Map();

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
    this.graph.get(vertex).push(edge)
    if(isBidirectional){
      this.graph.get(edge).push(vertex)
    }
  }
  bfs(start){
    let visited = new Set();
    let queue =[];
    visited.add(start);
    queue.push(start)
    while(queue.length>0){
      let vertex = queue.shift();
console.log(vertex);
      let edges= this.graph.get(vertex);
      for(let edge of edges){
        if(!visited.has(edge)){
          visited.add(edge)
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
        this.dfs(edge,visited);
      }
      
    }
  }
}
let gp =new Graph();

gp.insert(1,22,true);
gp.insert(45,2,true);
gp.insert(19,78,true);
gp.display()
console.log("bfs......");
//gp.bfs(45);
gp.dfs(45);
console.log("delte");
gp.delete(45)
gp.display()

