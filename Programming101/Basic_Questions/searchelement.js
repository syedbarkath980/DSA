/* Write a function that search for an element in an array and returns the index,
   if the element is not found return -1 */

let firstArray = [5, 10, 6, -2, 0, 20]
let secondArray = [100, 5200, 4, 2000]

function searchElement (arr, elem){
    //Loop through the array: 
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === elem){     // Comparing the elem with the arr[i]
            return i
        }
        
    }
    return -1
}

// Passing the array as an arguement along with elem to be searhed.
console.log(searchElement(firstArray, 10)) 
console.log(searchElement(secondArray, 2000))

