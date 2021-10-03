

const sortestPath=(graph,source,target)=>{

    const visited = new Set(source);
    const queue = [[source,0]];

    while (queue.length>0) {
        
        console.log(queue)
        const current = queue.shift()

        //console.log("de ",current[0]);

        if(current[0]==target) return current[1];
        
        for (const neighbor of graph[current[0]]) {
            
            
            if(!visited.has(neighbor)){
                visited.add(neighbor);
                queue.push([neighbor,current[1]+1]);
                
            }
        }
    }
    return -1;
}



const graph ={
    "a":["b","c"],
    "b":["a","d","f"],
    "c":["a","e"],
    "d":["b","f"],
    "f":["d"],
    "e":["c"]
}


console.log(sortestPath(graph,"b","c"));