

/**
 *  edges connections between nodes
 */
const edges =[ 
    ["a","b"],
    ["b","c"],
    ["d","a"],
    ["c","d"],
    ["b","d"]
]



/**
 * parsing to an adyacent list of nodes
 */


const parseEdges=(edges)=>{

    const graph={}

    edges.forEach(edge => {
        if(!graph[edge[0]]) graph[edge[0]]=[]; //if the node in edge[0] is not in the graph list just define 
        if(!graph[edge[1]]) graph[edge[1]]=[];//if the node in edge[1] is not in the graph list just define 
        
        graph[edge[0]].push(edge[1]); //adding the node value of edge[1] to graph node
        graph[edge[1]].push(edge[0]); //adding the node value of edge[0] to graph node
    });

    return graph;
}



console.log(parseEdges(edges));