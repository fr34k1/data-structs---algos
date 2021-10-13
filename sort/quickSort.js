

/**
 * 
 * @param {
 * } array 
 * @param {*} index1 
 * @param {*} index2 
 */

function swap(array,index1,index2){
    const temp = array[index1];
    array[index1]=array[index2];
    array[index2] = temp;
}

function partition(array,p,r){
    let q=p;
    for(let j=p;j<r;j++){
        //array[r] =pivote  comparamos con array[j] si es menor llevamos j al grupo de menores que el pivot
        if(array[j]<=array[r]){
            swap(array,j,q);
            q++;
        }
    }

    //swapeamos ubicamos el pivote despues del grupo menores que el pivote
    swap(array,r,q);
    
    return q;
}

function quickSort(array,p,r){

    if(p<r){
        const pivote=partition(array,p,r);
        quickSort(array,r,pivote-1);
        quickSort(array,pivote+1,r);
    }
}