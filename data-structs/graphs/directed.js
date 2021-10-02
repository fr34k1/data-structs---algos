


const graph ={
    "a":["b","c"],
    "b":["d"],
    "c":["e"],
    "d":["f"],
    "f":[],
    "e":[]
}

/**
 * recursive dephfirst search
 */
const dephfirstRecursive = (graph,node)=>{

    console.log(node);

    for (const neightbor of graph[node]) {
        dephfirstRecursive(graph,neightbor);
    }
}

dephfirstRecursive(graph,"a");

/**
 * depth first can be aproached with a stack structure and loops
 */


 const graph ={
    "a":["c","b"],
    "b":["d"],
    "c":["e"],
    "d":["f"],
    "f":[],
    "e":[]
}
const depthFirst = (graph,node,)=>{

    const stack = [];
    stack.push(node);
    while(stack.length>0){
        const current = stack.pop();
        console.log(current);

        for (const neighbor of graph[current]) {
            stack.push(neighbor)
        }
    }
}

depthFirst(graph,"a")
