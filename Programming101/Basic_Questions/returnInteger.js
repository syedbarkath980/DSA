// Reverse an Integer

let reverse = 0


function reverseInteger(n){
    let originalval = n         //Storing original value for future use
    if(n < 0)   
        {n = Math.abs(n)}      // Handling the corner case

    while(n > 0){
        let lastDigit = n % 10
        reverse = (reverse * 10) + lastDigit
        n = Math.floor(n / 10)
    }

    return (originalval > 0) ?  reverse : -reverse    //Using ternary operator
}

console.log(reverseInteger(201))

/* Corner Case: 
- What if the number is negative?
*/
