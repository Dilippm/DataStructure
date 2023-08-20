// class Graph{
//     constructor(){
//       this.graph =new Map();
//     }
//     addvertex(vertex){
//       this.graph.set(vertex,new Array())
//     }
//     insert(vertex,edge,isBidirectional){
//       if(!this.graph.has(vertex)){
//         this.addvertex(vertex)
//       }
//       if(!this.graph.has(edge)){
//         this.addvertex(edge);
//       }
//       this.graph.get(vertex).push(edge);
//       if(isBidirectional){
//         this.graph.get(edge).push(vertex);
//       }
//     }
//     delete(vertex){
//       if(this.graph.has(vertex)){
//         let edges =this.graph.get(vertex);
//         for(let edge of edges){
//           this.graph.get(edge).splice(this.graph.get(edge).indexOf(vertex),1)
//         }
//         this.graph.delete(vertex)
//       }
//     }
//     display(){
//       for(let vertex of this.graph.keys()){
//         let edges =this.graph.get(vertex);
//         console.log(vertex,edges);
//       }
//     }

//   }
// class Graph{
//     constructor(){
//         this.graph =new Map()
//     }
//     addvertex(vertex){
//         this.graph.set(vertex,new Array())
//     }
//     insert(vertex,edge,isBidirectional){
//         if(!this.graph.has(vertex)){
//             this.addvertex(vertex);
//         }
//         if(!this.graph.has(edge)){
//             this.addvertex(edge)
//         }
//         this.graph.get(vertex).push(edge);
//         if(isBidirectional){
//             this.graph.get(edge).push(vertex);
//         }
//     }
//     delete(vertex){
//         if(this.graph.has(vertex)){
//             let edges= this.graph.get(vertex);
//             for(let edge of edges){
//                 this.graph.get(edge).splice(this.graph.get(edge).indexOf(vertex),1)
//             }
//             this.graph.delete(vertex)
//         }
//     }
//     bfs(start){
//         let visited =new set();
//         let queue=[];
//         visited.add(start);
//     queue.push(start);
//     while(queue.length>0){
//         let vertex= queue.shift();
//         console.log(vertex);
//         let neighbors =this.graph.get(vertex);
//         for(let neighbor of neighbors){
//             visited.add(neighbor);
//             queue.push(neighbor)
//         }
//     }

//     }
//     dfs(start,visited =new set()){
//         visited.add(start);
//         for(let neighbor of this.graph.get(start)){
//             if(!visited.has(neighbor)){
//                 this.dfs(neighbor,visited)
//             }
//         }
//     }
// }
//   const gp = new Graph();

//   gp.insert(1,22,true)
//   gp.insert(4,66,true)
//   gp.insert(1,44,true)
//   gp.display();
//   console.log("after delte");
//   gp.delete(22)
//   gp.display();
// class Graph{
//     constructor(){
//         this.graph = new Map()
//     }
//     addVertex(vertex){
//         if (!this.graph.has(vertex)) {
//             this.graph.set(vertex, new Array());

//         }
//     }
//     insert(vertex,edge,isBidirectional){
//         if(!this.addVertex(vertex)){
//             this.addVertex(vertex)
//         }
//         if(!this.addVertex(edge)){
//             this.addVertex(edge)
//         }
//         this.graph.get(vertex).push(edge)
//         if(isBidirectional){
//             this.graph.get(edge).push(vertex)
//         }
//     }
//     delete(vertex){
//         if(this.graph.has(vertex)){
//             let edges= this.graph.get(vertex);
//             for(let edge of edges){
//                 this.graph.get(edge).splice(this.graph.get(edge).indexOf(vertex),1)
//             }
//             this.graph.delete(vertex)
//         }
//     }
//     display(){
//               for(let vertex of this.graph.keys()){
//                 let edges =this.graph.get(vertex);
//                 console.log(vertex,edges);
//               }
// }
// bfs(start){
//     let visited =new Set();
//     let queue =[];
//     visited.add(start);
//     queue.push(start);
//     while(queue.length){
//         let vertex= queue.shift();
//         console.log(vertex);
//         let neighbors =this.graph.get(vertex);
//         for(let neighbor of neighbors){
//             visited.add(neighbor)
//             queue.push(neighbor)
//         }
//     }
// }
// dfs(start,visited= new set()){
//     visited.add(start);
//     for(let neighbor of this.graph.get(start)){
//         if(!visited.has(neighbor)){
//             this.dfs(neighbor,visited)
//         }
//     }
// }
// }

// const gp = new Graph();
// gp.insert(1,22,true)
//   gp.insert(4,66,true)
//   gp.insert(1,44,true)
//   gp.display();
//   console.log("after delte");
//   gp.delete(22)
//   gp.display();
// class Graph {
//   constructor() {
//     this.graph = {};
//   }
//   addVertex(vertex) {
//     if (!this.graph[vertex]) {
//       this.graph[vertex] = [];
//     }
//   }
//   insert(vertex, edge, isBidirectional) {
//     if (!this.graph[vertex]) {
//       this.addVertex(vertex);
//     }
//     if (!this.graph[edge]) {
//       this.addVertex(edge);
//     }
//     this.graph[vertex].push(edge);
//     if (isBidirectional) {
//       this.graph[edge].push(vertex);
//     }
//   }
//   delete(vertex) {
//     if (this.graph[vertex]) {
//       let edges = this.graph[vertex];
//       for (let edge of edges) {
//         let edgeofedge = this.graph[edge];
//         const index = edgeofedge.indexOf(vertex);
//         if (index != -1) {
//           edgeofedge.splice(index, 1);
//         }
//       }
//       delete this.graph[vertex];
//     }
//   }
//   display() {
//     for (let vertex in this.graph) {
//       let edges = this.graph[vertex];
//       console.log(vertex, edges);
//     }
//   }
// }
// const gp = new Graph();
// gp.insert(1, 22, true);
// gp.insert(4, 66, true);
// gp.insert(1, 44, true);
// gp.display();
class Graph {
    constructor() {
      this.graph = {};
    }
  
    addVertex(vertex) {
      if (!this.graph[vertex]) {
        this.graph[vertex] = {};
      }
    }
  
    insert(vertex, edge, weight, isBidirectional) {
      if (!this.graph[vertex]) {
        this.addVertex(vertex);
      }
      if (!this.graph[edge]) {
        this.addVertex(edge);
      }
      this.graph[vertex][edge] = weight;
      if (isBidirectional) {
        this.graph[edge][vertex] = weight;
      }
    }
  
    delete(vertex) {
      if (this.graph[vertex]) {
        let edges = Object.keys(this.graph[vertex]);
        for (let edge of edges) {
          delete this.graph[edge][vertex];
        }
        delete this.graph[vertex];
      }
    }
  
    display() {
      for (let vertex in this.graph) {
        let edges = this.graph[vertex];
        console.log(vertex, edges);
      }
    }
  }
  

  const gp = new Graph();
  gp.insert(1, 22, 3, true);
  gp.insert(4, 66, 7, true);
  gp.insert(1, 44, 5, true);
  gp.display();
  