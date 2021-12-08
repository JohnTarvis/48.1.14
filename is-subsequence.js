// add whatever parameters you deem necessary
function isSubsequence(sub,seq) {
    let found  = false;
    for(let i = 0; i < seq.length - sub.length; i++){
        if(sub === seq.slice(i,i+sub.length)){
            found = true;
        }
    }
    return found;
}
