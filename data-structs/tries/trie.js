
/**
 * trie data structure basic implementation
 * 
 */
const  trie={
    "root":{
        "a":{"c":{}},
        "b":{"a":{"d":{}}}
    }
}




function search(word,node){
    /**
     * if there arent more characters to find it means the words is in the trie
     */
    if(word.length==0) return true 
    const [first,...rest]=word
    /*
    *    if the node doesn't have the character it means 
    *   the word isn't in the trie 
    */
    if(!node.hasOwnProperty(first)) return false
    /**
     * just call recursively for the child node 
     */
    return search(rest,node[first]);
    
}


function insert(word,node){
    if(word.length===0) return true;
    const [first,...rest]= word;
    if(!node.hasOwnProperty(first)) node[first]={};

    return insert(rest,node[first])
}


function remove(word,node){
    const [first,...rest]=word
    if(!node.hasOwnProperty(first))return true; 
    
    if(!isEmpty(node[first])) {
        delete node[first]
        return true;
    }

    return remove(rest,node[fisrt])

}


function isEmpty(ob){
    return Object.keys(ob).length===0;
}

insert("chango",trie["root"]);

insert("aba",trie["root"]);
console.log(trie);

console.log(search("aba",trie["root"]));

console.log(search("chan23123go",trie["root"]));


console.log(remove("a",trie["root"]))

console.log(trie)