// MERGE SORT:

let nums = [2, 7, 9, 4, 8, 17]

var sortArray = function(nums) {
    
    if(nums.length <= 1) return nums

    let m = Math.floor(nums.length/2)
    let left = sortArray(nums.slice(0, m))
    let right = sortArray(nums.slice(m))

    return merge(left, right)
};

// Merge Two Arrays:


function merge(left, right){
    let res = []
    let i = 0  //indextracker for 1st array
    let j = 0  //indextracker for 2nd array


    while(i < left.length && j < right.length){   // Run a loop until i and j reaches every element
        if(left[i] < right[j]){
            res.push(left[i])
            i++
        }
        else{
            res.push(right[j])
            j++
        }
    }
    
// What if either any one array is exhausted? and remaining elems are still left to be merged?
// We copy the remaining elements as it is like this:
        return [...res, ...left.slice(i), ...right.slice(j)]
}

let result = sortArray(nums)
console.log(result)

/*
TIME COMPLEXITY: O(n log n)
Dividing = log n
Merging = n

SPACE COMPLEXITY: O(n)
Because: res and slice
*/