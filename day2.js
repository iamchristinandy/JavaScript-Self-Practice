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