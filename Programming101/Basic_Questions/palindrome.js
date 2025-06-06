// Check whether a number is palindrome and return true, if number is not palindrome return false.

/* LOGIC:
 - Reverse of a number is a palindrome number: 1221
 - To reverse a number we keep interchange the last digit to first digit
 - To get the last digit: number % 10
 - Delete the interchanged digit to compute further
 - To delete a number: number / 10
*/

let trackVariable = 0  // Variable to store reversed number


function checkPalindrome (num){

    if(num < 0) return false      // Handles Corner Case.

    let originalNum = num        // Assinging num value to a variable for future use.

    while(num > 0){
        let lastDigit = num % 10
        trackVariable = (trackVariable * 10) + lastDigit 
        num = Math.floor(num / 10) 
    }
      return trackVariable === originalNum    //Single statement for if and else.
      // Returns TRUE if condition is correct, FALSE if condition in not correct.
}

console.log(checkPalindrome(1221))


// CORNER CASE: Number is Negative