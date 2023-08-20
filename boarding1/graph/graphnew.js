// class Graph{
//     constructor(){
//         this.graph = new Map()
//     }
//     addVertex(vertex){
//         this.graph.set(vertex,[])
//     }
//     insert(vertex,edge,isBIDirectional){
//         if(!this.graph.has(vertex)){
//             this.addVertex(vertex)
//         }
//         if(!this.graph.has(edge)){
//             this.addVertex(edge)
//         }
//         let edges= this.graph.get(vertex)
//         if(!edges.includes(edge)){
//             this.graph.get(vertex).push(edge)
//         }
//         if(isBIDirectional){
//             this.graph.get(edge).push(vertex)
//         }
//     }
//     delete(vertex){
//         if(this.graph.has(vertex)){
//             let edges= this.graph.get(vertex)
//             for(let edge of edges){
//                 this.graph.get(edge).splice(this.graph.get(edge).indexOf(vertex),1)
//             }
//             this.graph.delete(vertex)
//         }
//     }
//     bfs(start){
//         let visited= new Set();
//         let queue =[]
//         visited.add(start)
//         queue.push(start)
//         while(queue.length){
//             let vertex=  queue.shift()
//             console.log(vertex);
//             let edges= this.graph.get(vertex)
//             for(let edge of edges){
//                 if(!visited.has(edge)){
//                     visited.add(edge)
//                     queue.push(edge)
//                 }
//             }
//         }
//     }
//     dfs(start){
//         let visited= new Set();
//         let stack = [];
//         stack.push(start)
//         while(stack.length){
//             const vertex= stack.pop()
//             if(!visited.has(vertex)){
//                 visited.add(vertex)
//                 console.log(vertex);
//             }
//             const edges = this.graph.get(vertex)
//             for(let edge of edges){
//                 if(!visited.has(edge)){
//                     stack.push(edge)
//                 }
//             }
//         }
//     }
//     display(){
//         for(let vertex of this.graph.keys()){
//             let edges = this.graph.get(vertex)
//             console.log(vertex,edges);
//         }
//     }
// }
// class Graph{
//     constructor(){
//         this.graph = new Map()
//     }
//     addVertex(vertex){
//         this.graph.set(vertex,[])
//     }
//     insert(vertex,edge,isBIDirectional){
//         if(!this.graph.has(vertex)){
//             this.addVertex(vertex)
//         }
//         if(!this.graph.has(edge)){
//             this.addVertex(edge)
//         }
//         let edges = this.graph.get(vertex)
//         if(!edges.includes(edge)){
//             this.graph.get(vertex).push(edge)
//         }
//         if(isBIDirectional){
//             this.graph.get(edge).push(vertex)
//         }
//     }
//     delete(vertex){
//         if(this.graph.has(vertex)){
//             let edges= this.graph.get(vertex)
//             for(let edge of edges){
//                 this.graph.get(edge).splice(this.graph.get(edge).indexOf(vertex),1)

//             }
//             this.graph.delete(vertex)

//         }
//     }
//     bfs(start){
//         let visited =new Set()
//         let queue =[]
//         visited.add(start)
//         queue.push(start)
//         while(queue.length){
//             let vertex = queue.shift()
//             console.log(vertex);
//             let edges= this.graph.get(vertex)
//             for(let edge of edges){
//                 if(!visited.has(edge)){
//                     visited.add(edge)
//                     queue.push(edge)
//                 }
//             }
//         }
//     }
//     dfs(start){
//         let visited =new Set();
//         let stack =[]
//         stack.push(start)
//         while(stack.length){
//             let vertex= stack.pop()
//             if(!visited.has(vertex)){
//                 visited.add(vertex)
//                 console.log(vertex);

//             }
//             const edges= this.graph.get(vertex)
//             for(let edge of edges){
//                 if(!visited.has(edge)){
//                     stack.push(edge)
//                 }
//             }

//         }
//     }
// }
class Graph{
    constructor(){
        this.graph = new Map()
    }
    addVertex(vertex){
        this.graph.set(vertex,[])
    }
    insert(vertex,edge,isBIDirectional){
        if(!this.graph.has(vertex)){
            this.addVertex(vertex)
        }
        if(!this.graph.has(edge)){
            this.addVertex(edge)
        }
        let edges= this.graph.get(vertex)
        if(!edges.includes(edge)){
            this.graph.get(vertex).push(edge)
        }
        if(isBIDirectional){
            this.graph.get(edge).push(vertex)
        }


    }
    bfs(start){
        let visited =new Set()
        let queue =[]
        visited.add(start)
        queue.push(start)
        while(queue.length){
            let vertex =queue.shift()
            console.log(vertex);
            let edges = this.graph.get(vertex)
            for(let edge of edges){
                if(!visited.has(edge)){
                    visited.add(edge)
                    queue.push(edge)
                }
            }
        }
    }
    dfs(start){
        let visited = new Set()
        let stack =[]
        stack.push(start)
        while(stack){
            let vertex = stack.pop();
            if(!visited.has(vertex)){
                visited.add(vertex)
                    console.log(vertex);
                    }
                    let edges = this.graph.get(vertex)
                    for(let edge of edges){
                        if(!visited.has(edge)){
                            stack.push(edge)
                        }
                    }
        }
    }
}
const gp = new Graph();
  
gp.insert(1,22,false)
gp.insert(22,66,false)
gp.insert(66,100,false)
gp.insert(3,12,false)
gp.insert(3,766,true)
gp.insert(3,31,true)
gp.insert(12,431,true)


gp.display()
console.log("bfs");
gp.bfs(3)
console.log("dfs");
gp.dfs(3)