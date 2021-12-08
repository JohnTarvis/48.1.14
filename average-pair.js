// add whatever parameters you deem necessary
function averagePair(arr,target) {
    const length = arr.length;
    let number = 0;
    for(let i = 0; i < length; i++){
        for(let j = i; j < length; j++){
            if(i != j){
                const avg = (arr[i] + arr[j]) / 2;
                if(avg = target)number++;
            }
        }
    }
    return number;
}
