// add whatever parameters you deem necessary
function longestFall(nums) {
    let longest = [];
    for(let i = 0; i < nums.length; i++){
        let j = i;
        while(nums[j] === nums[i] - (j - i)){
            j++;
        }
        const curr = nums.slice(i,j);
        if(curr.length > longest.length){
            longest = curr;
        }
    }
    return longest;
}
