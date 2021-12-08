// add whatever parameters you deem necessary
function countPairs(pairs,target) {
    let found = 0;
    for(let i = 0; i < pairs.length; i++){
        for(let j = 0; j < pairs.length; j++){
            if(i !== j){
                if(pairs[i] + pairs[j] === target){
                    found++;
                }
            }
        }
    }
    return found;
}
