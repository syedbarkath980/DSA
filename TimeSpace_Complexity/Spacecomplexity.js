// ----------------------------------
// 📌 What is Space Complexity?
// ----------------------------------

/*
Space Complexity = Auxiliary Space + Input Space

But usually, we focus on **Auxiliary Space** only 
    — which means extra space (variables, data structures, call stack, etc.) used by the algorithm.
*/


// ----------------------------------
// 🧠 Big O - Space Complexity Overview
// ----------------------------------

/*
From best to worst (usually):

1. O(1)      → Constant Space
2. O(log n)  → Logarithmic Space
3. O(n)      → Linear Space
4. O(n²)     → Quadratic Space

These come up depending on whether the algorithm uses recursion, arrays, nested loops, etc.
*/


// ----------------------------------
// ✅ O(1) — Constant Space Example
// ----------------------------------

function getSum(arr) {
  let sum = 0; // Only one variable
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
// Output space does not depend on input size → O(1)


// ----------------------------------
// ✅ O(n) — Linear Space Example
// ----------------------------------

function duplicateArray(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i]);
  }
  return result;
}
// We store a new array of size n → O(n)


// ----------------------------------
// ✅ O(log n) — Logarithmic Space Example (recursion)
// ----------------------------------

function logDivide(n) {
  if (n <= 1) return;
  logDivide(Math.floor(n / 2));
}
// Recursive calls cut input in half → O(log n) call stack


// ----------------------------------
// ❗ O(n) — Recursive Stack Example
// ----------------------------------

function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
// Call stack grows with n → O(n)


// ----------------------------------
// ❗ O(n²) — 2D Array Example
// ----------------------------------

function makeMatrix(n) {
  let matrix = [];
  for (let i = 0; i < n; i++) {
    let row = [];
    for (let j = 0; j < n; j++) {
      row.push(i * j);
    }
    matrix.push(row);
  }
  return matrix;
}
// We store n rows each of size n → O(n²)


// ----------------------------------
// ✅ In-place Space Saving Example
// ----------------------------------

function reverseInPlace(arr) {
  let left = 0, right = arr.length - 1;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr;
}
// No extra array created → still O(1) space

