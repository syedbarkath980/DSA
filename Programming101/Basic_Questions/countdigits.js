/* Count the number of digits in a number
Example: 546

Algorithm: 
1. Divide the number by 10 repeatedly until we get zero as a remainder.
2. Count the number of times you divided that number and print it. */


function countDigits(num){
    let count = 0     // variable to keep track digits

    // Handles first corner case: 
    if (num == 0)  return 1

    num = Math.abs(num)      // Converts a number to positive - Handles Second Corner Case.

    while (num > 0){
        num = Math.floor(num/10)    // Rounds off the number using Math.floor func
        count++      // Increment the count by 1
        
    }
    return count
}

console.log(countDigits(-354564656465))

/* Corner Cases: 
1. What if the number is zero?
2. What if the number is negative? 
*/