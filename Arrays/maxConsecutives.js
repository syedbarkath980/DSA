/* STATEMENT: Max Consecutive Ones (Q485)
Given a binary array nums, return the maximum number of consecutive 1's in the array.
*/

/* Approach: 
1. Maintain two counts: a. maxCount  b. currentCount
2. loop through array
3. check arr[i] == 1
4. increment count by 1
5. else: assign maxCount to whichever is max
6. reset currentCount
7. return Math.max(currentCount, maxCount) final check in case the array ends 
    with 1s and else block didn’t update maxCount
*/


let arr = [1,1,0,1,1,1]
function mostConsecutives(arr){

let currentCount = 0
let maxCount = 0

for(let i = 0; i < arr.length; i++){
    if(arr[i] == 1){
        currentCount++
    }
    else{
        maxCount = Math.max(currentCount, maxCount)    // Update maxCount and assign whichever is bigger
    }
}

return Math.max(currentCount, maxCount) 
//final check in case the array ends with 1s and else block didn’t update maxCount

};

console.log(mostConsecutives(arr))