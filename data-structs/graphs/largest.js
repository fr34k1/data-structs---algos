
graph ={
    0:[7,1,4],
    1:[2,7,0,4],
    4:[0,1,2],
    7:[0,1],
    6:[2],
    2:[6]
}


/**
 * find the largest component in a graph!!
 * @param {*} graph 
 * @param {*} node 
 * @param {*} visited 
 * @returns 
 */

const explore = (graph,node,visited)=>{

    console.log("nodo "+node);

    if(visited.has(node)) return 0;
    
    visited.add(node);

    let size =1;

    for (const neighbor of graph[node]) {
        
        size+=explore(graph,neighbor,visited);
    }
    
    console.log("size "+size)
    return size;
}



const largest =(graph)=>{

    let largest=0;
    const visited = new Set()
    for (const key in graph) {
        const size = explore(graph,key,visited)
        if(size>largest) largest=size;
    }

    return largest;
}

console.log(largest(graph));