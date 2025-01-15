// Conditional Statements
/* #2 A function that takes a number as an argument and returns "Even" if the number is an even number
and odd if the number is odd */

function checkEvenorOdd(num){
    if (num % 2 === 0) {
        // Explained as 'if the number divided by 2 doesn't give a remainder'
        // Or if the number modulo 2 returns a 0
        return "The number is an even number"
    } else {
        return "The number is odd"
    }
}
console.log(checkEvenorOdd(14));
// returns "The number is even"
console.log(checkEvenorOdd(15));
// returns "The number is odd"

// Loops
// Function that takes a number `n` as an argument and prints all numbers from 1 to `n`
function printAllNumberstoN(n){
    for (let i = 1; i<= n; i++){
        console.log(i)
    }
}
printAllNumberstoN(15);

// Function to take a number `n` as an argument and prints even numbers to `n`
function printEvenNumberstoN(n){
    for (let i = 1; i<=n; i++){
        if (i % 2 === 0){
            console.log(i)
        }
    }
}
printEvenNumberstoN(14);

// Function that takes a number `n` as an argument and calculates the factorial of `n`
function factorialCalc(n){
   if (n === 0 || n ===1){
    return 1; // This code is for executing that the factorial of both 0 and 1 is 1
   } else {
    let result = 1;
    for (let i = 1; i<=n; i++){
        result *= i; //Multiplies result by each number from 2 to n 
        // The above statement is also the same as result = result * i
    }
    return result;
   }
}
console.log(factorialCalc(7));

// Welcoming myself back after a while
// Function to print the Fibonacci series less than 100
// The Fibonacci series is a series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers.
function fibonacciSequence(){
    // Declaring the function
    let x = 0, y = 1, z;
    // Declaring variables
    console.log(x);
    // Printing first Fibonacci number
    console.log(y);
    // Printing second Fibonacci number
    z = x + y;
    // Adding the first and second Fibonacci numbers to generate the third
    while (z < 100){
        // Loop to generate the rest of the Fibonacci sequence less than 100
        console.log(z);
        // Printing the rest of the Fibonacci sequence from the third to the number less than 100
        x = y;
        // After each loop, the value of the first Fibonacci number is replaced by the second
        y = z;
        // The value of the second Fibonacci number is replaced by the third also
        z = x + y;
        // Loop continues to generate the rest of the Fibonacci sequence
    }
}
fibonacciSequence();