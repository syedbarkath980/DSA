// SUM OF ALL NUMBERS IN AN ARRAY USING RECURSION:

let arr = [2, 10, 15, 1, 3]

function sum(n){

    if(n == 0) return arr[n]      // Base Case
    return arr[n] + sum(n - 1)

}

sum(arr.length - 1)    // i.e,..   arr[4]

/* DRY RUN: 
sum(arr[4]) CALLED:

       3 + sum(arr[3])
           1 + sum(arr[2])
               15 + sum(arr[1])
                    10 + sum(arr[0])
                         2    

1. 2 + 0 = 2
2. 10 + 2 = 12
3. 12 + 15 = 27
4. 27 + 1 = 28
5. 28 + 3 = 31

OUTPUT: 31
*/