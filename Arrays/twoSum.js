// Two Sum:

let arr = [3, 2, 3]
let target = 6
let p1 = 0

function twoSum(arr, target){

        for(let i = 0; i < arr.length; i++){
            for(let j = i + 1; j < arr.length; j++){
                if(arr[i] + arr[j] == target){
                    return [i, j]
                }
            }
        }
}

console.log(twoSum(arr, target))