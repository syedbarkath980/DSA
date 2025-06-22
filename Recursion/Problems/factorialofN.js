// FACTORIAL OF 'N'

let n = 5
function factorial(n){

    if(n == 1) return n  // Base Case
    
   return n * factorial(n - 1)  // Factorial formula
}

console.log(factorial(n))