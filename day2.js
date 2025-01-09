// Arithmetic Operations - Continued

// Function to take two numbers as arguments and return their difference
function subtract (a, b){
    return a - b;
}
console.log(subtract(10, 5));

// Function that takes two numbers as arguments and returns their product
function multiplication (c, d){
    return c * d;
}
console.log(multiplication(13, 34));

// Function that takes two numbers as arguments and returns their quotient
function quotient (e, f){
    return e/f;
}
console.log(quotient(15,3));

// Conditional Statements
/* #1 Function that takes a number an an argument and returns "Greater than 15" if the number is above 15,
"less than 15" if it's below 15 
"Exactly 15" if the number is 15
*/
function checknumber(num){
    if (num > 15) {
        return "Greater than 15"
    } else if (num < 15){
        return "Less than 15"
    } else{
        return "The number is exactly 15"
    }
}
console.log(checknumber(14));
console.log(checknumber(156));
console.log(checknumber(15));

// Writing a function that prints whether a the quotient of a number is even or odd

function checkquotient(a, b){
    if ((a/b) % 2===0){
        return "The quotient of the division is even";
    } else{
            return "The quotient of the division is odd";
        }
    }
console.log(checkquotient(55,11));

// Doing it again, this time, while printing the quotient

function CheckTheQuotient (x,y){
        const quotient = x/y;
        if ((x/y) % 2 === 0){
        return  `${quotient}, the quotient of the division, is an even number`
    } else {
        return `${quotient}, the quotient of the division, is an odd number`
    }
}
console.log (CheckTheQuotient(95, 5));
console.log (CheckTheQuotient(120, 5));

// Function to check if a number is prime or not
function checkPrime (a){
    if (a === 1){
        // Checking if the number inputed is 1
        return `${a} is not a prime number`;
    } else if (a===2){
        // Because 2 is a special prime number, this checks whether the inputed number is 2, hence printing it is an even prime
        return `${a} is a even prime number`;
    } else {
        for (let i=2; i<a; i++){
            // Checking if the number is divisible by any number from 2 to the number itself
            if (a % i === 0){
                return `${a} is not a prime number`;
                // If the number is divisible by any number from 2 to the number itself, it is not a prime number
            }
        }
        // If no divisors are found, the number is prime
        return `${a} is a prime number`;
    }
}
console.log(checkPrime(1));
console.log(checkPrime(2)); 
console.log(checkPrime(17));