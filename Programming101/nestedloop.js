/* Multiplication table of 2 using nested loops */

let num = 2;  // Number to generate the table for

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    // Prints the multiplication result, e.g., "2 x 1 = 2"
    console.log(num + " x " + j + " = " + (num * j));  
  }
}

/* Output:
2 x 1 = 2
2 x 2 = 4
2 x 3 = 6
*/
