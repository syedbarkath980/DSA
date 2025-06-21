// SUM OF ALL ODD NUMBERS IN AN ARRAY USING RECURSION

let arr = [2, 10, 15, 1, 3]

function sumOfOddnum(n){
    let isOdd = arr[n] % 2 != 0    //Returns TRUE or FALSE based of calculation

    if(n == 0){
        return isOdd ? arr[n]: 0
    }

   if(isOdd){
    return arr[n] + sumOfOddnum(n - 1)
   }
   else{
    return 0 + sumOfOddnum(n - 1)
   }

}

console.log(sumOfOddnum(arr.length - 1))

/* DRY RUN:
sumOfOddnum(4) CALLED:
     3  + sumOfOddnum(3)   ← arr[4] is odd
         1  + sumOfOddnum(2)   ← arr[3] is odd
             15 + sumOfOddnum(1)   ← arr[2] is odd
                  0  + sumOfOddnum(0)   ← arr[1] is even
                      0     ← arr[0] is even (base case)

Step-by-step:
1. arr[0] = 2   → even → 0
2. arr[1] = 10  → even → 0 + 0 = 0
3. arr[2] = 15  → odd  → 15 + 0 = 15
4. arr[3] = 1   → odd  → 1 + 15 = 16
5. arr[4] = 3   → odd  → 3 + 16 = 19

OUTPUT: 19
*/