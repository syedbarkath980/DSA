/* STATEMENT: Find Missing Number (Q268) 
Given an array nums containing n distinct numbers in the range [0, n], 
return the only number in the range that is missing from the array.
*/

let arr = [3, 0, 1]

function missingNum(arr){
    arr.sort((a,b) => a - b)  // Sorting Array in Asscending Order

    let x = 0             // Variable to Compare Value
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == x){
            x++
        }
        else{
            return x
        }
    }
    return x   // if no mismatch is found
}

console.log(missingNum(arr))