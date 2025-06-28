// INSERTION SORT:

let arr = [7, 4, 3, 5, 1, 2]
let n = arr.length

for(let i = 1; i < n; i++){  
    let curr = arr[i]
    let prev = i - 1
    
    while(arr[prev] > curr && prev >= 0){
        arr[prev + 1] = arr[prev]
        prev--
    }
    arr[prev + 1] = curr 
}
console.log(arr)


//DOCUMENTED VERSION:
// INSERTION SORT:

let arr = [7, 4, 3, 5, 1, 2]; // Input array
let n = arr.length; // Get the number of elements in the array

// Loop through the array starting from index 1 (since index 0 is considered already sorted)
for (let i = 1; i < n; i++) {
    let curr = arr[i];       // Store the current element to be inserted
    let prev = i - 1;        // Set pointer to the previous index

    // Shift elements of the sorted portion that are greater than curr to the right
    while (arr[prev] > curr && prev >= 0) {
        arr[prev + 1] = arr[prev]; // Shift element one position to the right
        prev--;                    // Move to the previous element
    }

    // Insert the current element into its correct position
    arr[prev + 1] = curr;
}

// Print the sorted array
console.log(arr);
