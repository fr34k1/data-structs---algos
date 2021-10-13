
function mergeSort(array,r,q){
    if(r<q){
        const mid = Math.floor((r+q)/2);
        //console.log(array.slice(r,mid));
        mergeSort(array,r,mid);
        //console.log(array.slice(mid+1,q));
        mergeSort(array,mid+1,r);

        merge(array,r,mid,q);
    }
}

function merge(array,r,mid,q){
    const low=[];
    const high=[]
    for (let i = r; i < mid; i++) {
        low.push(array[i]);
    }
    for (let i = mid+1; i <=q; i++) {
        high.push(array[i]);
        
    }

    let k=r;
    
    for (var i = 0,j=0; i < low.length && j< high.length;) {
        
        if(low[i]<high[j]){

            array[k]=low[i];
            i++;
        }else{
            array[k]=high[j];
            j++;
        }
        k++;
        
    }

    while(i<low.length){
        array[k]=low[i];
        i++;
        k++;
    }

    
    while(j<high.length){
        array[k]=high[j];
        j++;
        k++;
    }
}

const r= [12,5,67,4,898,233,1];
mergeSort(r,0,r.length-1);