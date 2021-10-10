

function swap(array,i,j){
    const temp=array[i];
    array[i]=array[j];
    array[j]=temp;
}

function bubbleSort(array){
    
    for(let i in array){
        for(let j=0;j<array.length-1;j++){
            
            if(array[j]>array[j+1]){
                swap(array,j,j+1)
            }
        }
    }

}

function selectionSort(array){
    for(let i in array){
        
        let minIndex=i;
        for(let j=Number(i)+1;j<array.length;j++){
            
            if(array[j]<array[i]){
                minIndex=j;
            }
        }
        swap(array,i,minIndex)
    }
    
}

function insertionSort(array){
    
    for(var i=1;i<array.length;i++){
        const value=array[i];
        const index=i-1;
        for(var j = index;j >= 0 && array[j] > value;j--){
        
            array[j+1]=array[j];
        }
        
        array[j+1] = value 
    }
}

const a = [12,34,5,1,3,5623,2];

insertionSort(a);

console.log(a);