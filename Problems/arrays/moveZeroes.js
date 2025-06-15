/* STATEMENT: Move Zeroes (Q283)

Given an integer array nums, move all 0's to the end of it 
while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.
*/


// APPROACH - 1: //
let nums = [0, 1, 0, 3, 12]
    let numsCopy = nums.slice()
    let p1 = nums.length - 1
    let p2 = 0

    for (let i = 0; i < numsCopy.length; i++){
        if(numsCopy[i] > 0 ||numsCopy[i] < 0){
            nums[p2] = numsCopy[i]
            p2++
        }
        else{
            nums[p1] = numsCopy[i]
            p1--
        }
    }
console.log(nums)
// TC = O(n), SC = O(n)



/* APPROACH - 2: 
1. Shift non-zero elems to the front
2. Fill the remaining positions with 0
*/

let arr = [0, 1, 0, 3, 12]
let p = 0

//Place all non-zero elements at front
for(let i = 0; i < arr.length; i++){
    if(arr[i] > 0){
        arr[p] = arr[i]
        p++
    }
}
//Fill the 0s for the remaining elements
for(let i = p; i < arr.length; i++){
    arr[p] = 0
    p++
}
console.log(arr)
// TC = O(n), SC = O(1)
