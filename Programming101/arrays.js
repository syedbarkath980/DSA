/* Collection of homogenous and heterogeneous elements,
    is called as an array.
An array can store n number of values of anytype of data as well as 
as well as it can store an array within an array. */

let numbers = [5, 10, 20, 30]
let contactDetails = ["Syed", 20]

//Accessing an Array: 
console.log(contactDetails[0], contactDetails[1])

//Nested Array: 
let arr = ["Syed", 20, [50, 6.5]]

//Accessing of nested array: 
console.log(arr[2][1])