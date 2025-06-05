// Program to find the second largest element in an array

let arr = [10, 15, 7, 9, 18, 25]

// Initialize tracking variables with the lowest possible value
let firstLargest = -Infinity
let secondLargest = -Infinity

// Loop through each element of the array
for (let i = 0; i < arr.length; i++){
    
    // If current element is greater than the current largest, update both first and second largest:

    if(arr[i] > firstLargest){
        secondLargest = firstLargest    // Move the old largest value to secondLargest
        firstLargest = arr[i]           // Update firstLargest with the new largest value
    }

    // If current element is between firstLargest and secondLargest, update secondLargest:

    else if (arr[i] > secondLargest && arr[i] < firstLargest){
        secondLargest = arr[i]   // Update secondLargest with a new in-between value
    }
}


console.log(secondLargest)



/* CORNER CASES: Cases that might be occur except the normal behaviour.
In the above example corner cases are:
1. Array is Empty
2. Array have dulicates.
*/

if (arr.length === null) {
    console.log("Array is Empty")
} 
