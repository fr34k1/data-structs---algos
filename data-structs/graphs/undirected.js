

const graph ={
    "a":["b","c"],
    "b":["a","d","f"],
    "c":["a","e"],
    "d":["b","f"],
    "f":["d"],
    "e":["c"]
}

/**
 * recursive dephfirst in a undirected graph
 */
const dephfirstRecursiveUndirected = (graph,node,visited)=>{

    if(visited.has(node)) return false;

    console.log(node);
    
    visited.add(node)

    for (const neightbor of graph[node]) {
        dephfirstRecursive(graph,neightbor);
    }
}

/**
 * in undirected graph we have to save re reference to the
 * previous node visited so in that way we wont enter in an
 * infite loop
 */
dephfirstRecursiveUndirected(graph,"a",new Set());