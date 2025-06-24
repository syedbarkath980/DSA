/* LINEAR SEARCH : A Technique to search an element in an Array by Iterating
                   using a loop.
    It searches for a target and returns the index of that target, if target is
    not present then will just return -1
*/

let arr = [5, 12, -9, 4, 2]
let target = 12

function linearSearch(arr, target){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == target){
            return i
        }
    }
    return -1
}

let result = linearSearch(arr, target)

console.log(result)
