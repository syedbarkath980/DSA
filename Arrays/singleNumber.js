/* STATEMENT: Single Number (Q136)
- Given a non-empty array of integers nums, every element appears twice except for one.
 Find that single one.

- You must implement a solution with a linear runtime complexity and use only constant extra space.
*/

let nums = [2, 2, 1]

let res = 0

for(let i = 0; i < nums.length; i++){
    res = res ^ nums[i]
}

console.log(res)


// We can also solve it using Object(Hash Map).