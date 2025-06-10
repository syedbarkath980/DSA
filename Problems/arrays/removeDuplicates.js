/* STATEMENT:  Remove Duplicates from Sorted Array
- Given an integer array nums sorted in non-decreasing order, 
remove the duplicates in-place such that each unique element appears only once. 
The relative order of the elements should be kept the same. 
Then return the number of unique elements in nums.
*/

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4] 
var removeDuplicates = function(nums) {
    let x = 0                             // 'x' stores the index of the last unique element found

    for (let i = 0; i < nums.length; i++) {        
        if (nums[i] > nums[x]) {      // If current number is greater than last unique (means it's a new unique number)
            x = x + 1                 // Move to the next index to place this unique number
            nums[x] = nums[i]         // Copy the new unique number to its correct place
        }
    }

    return x + 1 // Return count of unique elements (because 'x' is index, and index starts at 0)
};

console.log(removeDuplicates(nums)) // Output the number of unique elements found
