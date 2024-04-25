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