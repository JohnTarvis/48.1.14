// add whatever parameters you deem necessary
function pivotIndex(nums) {
    let leftSum = 0;
    let rightSum = 0;
    let smallestPivot = Infinity;
    let index = -1;
    for(let i = 0; i < nums.length; i++){
        for(let left = 0; left < i; left++){
            leftSum += nums[left];
        }
        for(let right = i; right < nums.length; right++){
            rightSum += nums[right];            
        }
        if(leftSum === rightSum){
            if(leftSum < smallestPivot){
                smallestPivot = leftSum;
                index = i;
            }
        }
    }
    return index;
}
