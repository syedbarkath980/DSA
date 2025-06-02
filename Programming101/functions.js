/* Functions are blocks of code designed to perform a particular task.
   They can take inputs (parameters) and return output. */

function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Syed");  // Call the function with argument "Syed"

function add(a, b) {
  return a + b;  // Returns sum of a and b
}

let result = add(5, 3);
console.log(result);  // Outputs: 8
