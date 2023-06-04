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
class Graph{
    constructor(){
        this.graph =new Map()
    }
    addvertex(vertex){
        this.graph.set(vertex,new Array())
    }
    insert(vertex,edge,isBidirectional){
        if(!this.graph.has(vertex)){
            this.addvertex(vertex);
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
            let edges= this.graph.get(vertex);
            for(let edge of edges){
                this.graph.get(edge).splice(this.graph.get(edge).indexOf(vertex),1)
            }
            this.graph.delete(vertex)
        }
    }
    bfs(start){
        let visited =new set();
        let queue=[];
        visited.add(start);
    queue.push(start);
    while(queue.length>0){
        let vertex= queue.shift();
        console.log(vertex);
        let neighbors =this.graph.get(vertex);
        for(let neighbor of neighbors){
            visited.add(neighbor);
            queue.push(neighbor)
        }
    }

    }
    dfs(start,visited =new set()){
        visited.add(start);
        for(let neighbor of this.graph.get(start)){
            if(!visited.has(neighbor)){
                this.dfs(neighbor,visited)
            }
        }
    }
}
  const gp = new Graph();
  
  
  gp.insert(1,22,true)
  gp.insert(4,66,true)
  gp.insert(1,44,true)
  gp.display();
  console.log("after delte");
  gp.delete(22)
  gp.display();