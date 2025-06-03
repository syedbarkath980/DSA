// Write a function that returns a largest and smallest element in an array.

//LARGEST: 
let arr = [5, 10, 25, 0, 200]

let largest = -Infinity

function largestNum (){

    // Loop through the array:
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > largest){
            largest = arr[i]
        }
    }
    return largest
}

console.log(largestNum())


/* LOGIC: 
  1. -Infinity is the least value in numbers
  2. Writing a true condition first, in other words writing the condition
     in such a way that it is true atleast once.
  3. is 5 greater than -Infinity ? TRUE
  4. Store the value 5 in largest variable.
  5. Do the same repeatedly until the largest element got found.
*/  


//SMALLEST:

let Nums = [8, 40, -95, 60, 0]
let smallest = Infinity

function smallestNum (){
    // Loop through the array:
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < smallest){
            smallest = arr[i]
        }
    }
    return smallest
}

console.log(smallestNum())

/*LOGIC: Asks first 8 < infinity? = yes then smallest = 8, 
2. Asks 40 < 8 ? = no, goes to -95
3. is -95 < 8 = yes then smallest = -95
4. is 60 < -95 ? = no, goes to 0
5. is 0 < -95 = no 
OUTPUT: -95.
*/