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