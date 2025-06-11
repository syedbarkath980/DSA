/* STATEMENT: Remove Element
- Given an integer array nums and an integer val, remove all occurrences of val in nums in-place.
  The order of the elements may be changed. Then return the number of elements in nums which 
  are not equal to val.

- Consider the number of elements in nums which are not equal to val be k, to get accepted, 
you need to do the following things:
 1. change the array nums such that the first k elements of nums contain the elements which are
  not equal to val. The remaining elements of nums are not important as well as the size of nums.
 2. Return k.
*/


let nums = [0, 1, 2, 2, 3, 0, 4, 2]
let val = 2

function removeElement(nums){
    let k  = 0                    // an Index
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== val){
            nums[k] = nums[i]      // Telling something like: 
            // He array(nums) go to position k = 0 and store nums[i]
            
            k++
        }
    }
    return k
}

console.log(removeElement(nums))