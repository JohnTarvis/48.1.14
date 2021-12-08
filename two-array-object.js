// add whatever parameters you deem necessary
function twoArrayObject(arr1,arr2) {
    const back;
    for(let i = 0; i < arr1.length; i++){
        if(i < arr2.length){
            back[arr1[i]] = arr[i];
        } else {
            back[arr1[i]] = null;
        }
    }
    return back;
}
