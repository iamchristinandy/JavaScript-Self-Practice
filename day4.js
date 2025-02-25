// Arrays
// Declaring an array containing the names of my favourite fruits

let fruits = ['Banana' , 'Apple' , 'Orange' , 'Coconut'];
console.log(fruits);

// Function that takes an array of numbers as an argument and returns the sum of all the numbers in the array

function addAllNumbers (AllNumbers){
    let sum = 0;
    for (let i = 0; i<AllNumbers.length; i++){
        sum += AllNumbers[i] // Same as sum = sum + AllNumbers [i]
    }
    return sum;
}

let AllNumbers = [4,8,12,16]
console.log(addAllNumbers(AllNumbers));


// Function that multiplies all the numbers in an array
function MultipliesAllNumbers(AllMultiplicants){
    let results = 1; // Initializes the result of the multiplication to 1
    for (let i=0; i < AllMultiplicants.length; i++){ // A for loop to iterate the numbers in the array
        results *= AllMultiplicants[i] // Multiplies all the multipicants in the array
    }
    return results;
}
let AllMultiplicants = [2,4,6,8,10,12];
console.log(MultipliesAllNumbers(AllMultiplicants));

// Function that takes an array of strings as an argument and returns the longest string in the array
function returntheLongestString (names){
    let longestname = "";
    for (let i=0; i< names.length; i++){
        if(names[i].length > longestname.length){
            longestname = names[i];
        }
    } 
    return longestname;
}
let names = ['Andrews', 'Melissa', 'Jephthah', 'Japheth', 'Gideon', 'Aquila', 'Mary', 'Salomey', 'Abigail'];
console.log(returntheLongestString(names));

// Going through arrays

// An array to print numbers from 1 to 20
let numbers = [];
// Declaring the array variable
for (let i = 1; i<=20; i++){
    // For loop to reiterate the numbers from 1 to 20
    numbers.push(i);
    // Populating the array with the numbers from 1 to 20
}
console.log(numbers);

// Function to rearrange mixed up array of numbers from the biggest to the smallest
let mixedNumbers = [14, 12, 5, 64, 23, 15,18, 22];
// Declaring the mixed up array of numbers
function rearrangeNumbers (mixedNumbers){
    // Function to rearrange the mixed up array of numbers
    return mixedNumbers.sort(function(a,b){
        // Using the sort method to rearrange numbers in the array
        return b-a;
        // If the second number is bigger than the first number, it is placed before the first number
        // The iteration goes on and on until the biggest number is placed first and the total numbers in the array has all been sorted out
    });
}
console.log(rearrangeNumbers(mixedNumbers));
// Print the rearranged array of numbers

// Function to check if a string is a palindrome or not
function checkPalindrome (string){
    let reversedstring = string.split('').reverse().join('');
    // Splitting the word into an array of characters, reversing the array and joining the array back into a string
    if (string === reversedstring){
        // Check if the word is the same as the reversed word
        return `Yes, "${string}" is a palindrome`;
    } else {
        return `No, "${string}" is not a palindrome`;
    }
}
console.log(checkPalindrome('madam'));
console.log(checkPalindrome('answer'));
console.log(checkPalindrome('script'));

// Been a while. I'll be back very very soon 🤨

// Creating a function to generate random Hex codes
function randomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    // Explanation of the template string
    // # - Usually used at the beginning of hexadecimal colour codes
    // Math.floor - Rounds off the decimal number to the nearest whole number. It has been put in a bracket because at the end of the computation, we should get a hexadecimal code
    // Math.random - Generates a random number between 0 and 1
    // 16777215 - The highest number in hexadecimal code. That is #ffffff, representing white
    // toString(16) - Converts the number to a hexadecimal code
}
console.log(randomHexColor()); // Output: #f0a1b2 (random)

// Function to convert celcius to fahrenheit
function convertCelciusToFahrenheit (celcius){
    // Declaring the function
    let fahrenheit = (celcius * 9/5) + 32;
    // Stating the formula for converting celcius to fahrenheit
    return fahrenheit;
    // Print the value of the Fahrenheit temperature
}

console.log(convertCelciusToFahrenheit(100));

// Function to generate random password
function generatePassword(length) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    // Declaring the characters that will be used to generate the password
    let password = "";
    // Initialising the password to print out in the end as a string
    for (let i = 0; i < length; i++) {
        // For loop to iterate the length of the password
        password += chars[Math.floor(Math.random() * chars.length)];
        // can be written as password = password + chars[Math.floor(Math.random() * chars.length)];
    }
    return password;
}
console.log(generatePassword(15));
