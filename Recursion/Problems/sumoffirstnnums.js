// Find sum of first N numbers:

let n = 5

function sum(n){
    if(n == 0) return 0      // Base Case
    return n + sum(n-1)      // Modifying Large problems into sub problems
}

console.log(sum(n))

/* DRY RUN: 

5 + sum(4)
    4 + sum(3)
        3 + sum(2)
            2 + sum(1)
                1 + sum(0)
                    0   

- after return 0, the recursion tree goes back and:

1. 1 + 0 = 1
2. 2 + 1 = 3
3. 3 + 3 = 6
4. 4 + 6 = 10
5. 5 + 10 = 15

OUTPUT: 15
*/
