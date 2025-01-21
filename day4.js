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