/* Time Complexity: 
   Time Complexity tells how fast or slow an algorithm runs, based on input size n.
   It’s measured using Big O notation. 
*/

// ---------------------------------------
//  Big O Complexity (in order of growth)
// ---------------------------------------

/*
From fastest to slowest (best to worst in general):

1. O(1)       - Constant Time
2. O(log n)   - Logarithmic Time
3. O(n)       - Linear Time
4. O(n log n) - Linearithmic Time
5. O(n²)      - Quadratic Time
6. O(2ⁿ)      - Exponential Time
7. O(n!)      - Factorial Time
*/


// ----------------------------------
// ✅ O(1) — Constant Time Example
// ----------------------------------

function getFirstElement(arr) {
  return arr[0]; // Just one operation no matter the array size
}


// ----------------------------------
// ✅ O(n) — Linear Time Example
// ----------------------------------

function printAll(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}


// ----------------------------------
// ✅ O(n²) — Quadratic Time Example
// ----------------------------------

function printPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
}


// ----------------------------------
// ✅ O(log n) — Logarithmic Time Example
// ----------------------------------

function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}


// ----------------------------------
// ✅ O(n log n) — Linearithmic Time Example
// ----------------------------------

let numbers = [3, 1, 4, 1, 5, 9];
numbers.sort(); // In JS, sort is O(n log n) under the hood


// ----------------------------------
// ❗ O(2ⁿ) — Exponential Time Example
// ----------------------------------

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}


// ----------------------------------
// ❗ O(n!) — Factorial Time Example
// ----------------------------------

function permute(str) {
  if (str.length === 0) return [''];
  let result = [];
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let remaining = str.slice(0, i) + str.slice(i + 1);
    let perms = permute(remaining);
    for (let sub of perms) {
      result.push(char + sub);
    }
  }
  return result;
}

// O(1) > O(log n) > O(n) > O(n square) > O(2 power n) > O(n!)

// LOWER TIME COMPLEXITY = BETTER SPEED 

