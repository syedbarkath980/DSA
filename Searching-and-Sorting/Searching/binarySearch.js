/* BINARY SEARCH: Binary search is based on divide-and-conquer rule,
                  in this we divide the whole array and find the middle-
                  element = (left + right / 2).
    if mid == target then we will return mid, if not we check if target is > than
    or < than mid and shift the left and right by left and = mid + 1 and right =
    mid - 1 respectively based on the condition.

- If the element is not found we will just return -1
Base Case: When right becomes less than left we can say target isn't found.

Note: Binary Search only works on Sorted Array.
*/


let arr = [-9, 0, 2, 12, 14, 78, 95]
let target = -9

function binarySearch(arr, target){
    let left = 0
    let right = arr.length - 1

    while(right >= left){
        let mid = Math.floor((left + right)/2)

        if(target === arr[mid]) return mid
        else if(target > arr[mid]){
            left = mid + 1
        }
        else{
            right = mid - 1
        }
    }
    return -1
}

let result = binarySearch(arr, target)
console.log(result)
