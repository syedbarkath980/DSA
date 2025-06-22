/* STATEMENT:

Given an integer n, return true if it is a power of two. 
Otherwise, return false.
An integer n is a power of two, if there exists an integer x such that n == 2x. 
(Q231)

*/

function isPowerOfTwo(n){
    
    if (n == 1) return true     // Base Case

    else if(n <= 0 || n % 2 !== 0 ){
        return false
    }

    return isPowerOfTwo(n/2)     // Dividing n Until it reaches 1
}

console.log(isPowerOfTwo(n))