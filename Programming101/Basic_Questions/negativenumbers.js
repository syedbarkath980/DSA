// Write a function that returns the number of negative elements in an array.

let arr = [5, 10, -4, 6, -8, -2]

let count = 0; //Initializing a variable to keep track of number of negative numbers.

function negativeNumbers (){
    // Loop through the array: 
    for (let i = 0; i < arr.length; i++){
        if(arr[i] < 0){  // Logic to check negative numbers
            count = count + 1  // Incrementing count by 1
        }
    }
    return count
}

let res = negativeNumbers()
console.log(res)

