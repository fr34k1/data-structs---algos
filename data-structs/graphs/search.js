

const graph ={
    "a":["c","b"],
    "b":["d"],
    "c":["e"],
    "d":["f"],
    "f":[],
    "e":[]
}

/**
 * 
 * @param {} graph 
 * @param {*actual node} node 
 * @param {*target node} target 
 * @returns 
 */
const hasRecursive=(graph,node,target)=>{

    if(node == target) return true;

    for (const neighbor of graph[node]) {
        
        if(has(graph,neighbor,target)) return true
    }
    return false;
}

console.log(hasRecursive(graph,"a","e"));

/**
 * has iterative way
 * @param {*} graph 
 * @param {*} node 
 * @param {*} target 
 * @returns 
 */
const has=(graph,node,target)=>{

    const queue = [node];

    while(queue.length>0){
        const current = queue.unshift();
        if(current===target) return true

        for (const neighbor of graph[node]) {
            queue.push(neighbor);
        }
    }

    return false;
}

console.log(has(graph,"a","e"));