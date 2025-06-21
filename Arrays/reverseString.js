/* STATEMENT: Write a function that reverses a string. 
The input string is given as an array of characters arr.

- You must do this by modifying the input array in-place with O(1) extra memory.
*/

 
// An Array: 
let arr = ["H", "E", "L", "L", "O"] 


let halflen = Math.floor(arr.length / 2)  // Calclates the half length of the array
let j = 1                                 // To keep track the last element

for (let i = 0; i < halflen; i++){

    let temp = arr[i]                     //Temporary variable to swap values without deleting any
    
    arr[i] = arr[arr.length-j]
    arr[arr.length-j] = temp
    j++                                   // Increment the value of last element to meet the logic
}

console.log(arr)