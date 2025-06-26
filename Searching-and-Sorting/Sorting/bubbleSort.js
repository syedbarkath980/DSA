/* Bubble Sort: 
    Bubble Sort compares and swaps adjacent elements to sort the array, 
    pushing the largest values to the end in each pass. It's 
    Simple but inefficient, with a worst-case time complexity of O(n²).
*/

let arr = [-5, 5, -8587, 84, 455, 9654816, 4, 0, 1]
let n = arr.length

for(let i = 0; i < n - 1; i++){
    let isSwapped = false  // To start the loop
    
    for(let j = 0; j < n - 1 - i; j++)
        if(arr[j] > arr[j + 1]){
            // Swap:
            let temp = arr[j]
            arr[j] = arr[j + 1]
            arr[j + 1] = temp

            isSwapped = true  // assign true if swapping happens 
        }
    if(!isSwapped) break    // If no swap then brake.
}

console.log(arr)




// We can also solve this using nested while loops: 

// Original unsorted array: 
let arr = [-5, 5, -8587, 84, 455, 9654816, 4, 0, 1];

// Flag to check if any swapping happened in a pass
let isSwapped = true;

// Outer loop: Keep running passes until the array is sorted
while (isSwapped) {
    isSwapped = false; // Assume the array is sorted at the start of this pass

    let i = 0; // Start comparing from the beginning of the array

    // Inner loop: Go through the array and swap adjacent elements if needed
    while (i < arr.length - 1) {
        // Compare current element with the next one
        if (arr[i] > arr[i + 1]) {
            // Swap the two elements
            let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;

            // A swap happened, so array wasn't sorted yet
            isSwapped = true;
        }
        i++; // Move to the next pair
    }

    // If no swaps happened in this entire pass, isSwapped stays false,
    // and the outer loop breaks, meaning the array is sorted.
}

// Print the sorted array
console.log(arr);










