/* STATEMENT: The Fibonacci numbers, commonly denoted F(n) form a sequence,
 called the Fibonacci sequence, such that each number is the sum of 
 the two preceding ones, starting from 0 and 1. That is,

F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
Given n, calculate F(n).
*/

let n = 3
function fib(n){
    if(n <= 1) return n     // BASE CASE
    return fib(n-1) + fib(n-2)    
    // RECURSIVE CASE: Calls the same function two times
}

console.log(fib(n));

