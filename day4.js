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

function MultipliesAllNumbers(AllMultiplicants){
    let results = 1; // Initializes the result of the multiplication to 1
    for (let i=0; i < AllMultiplicants.length; i++){ // A for loop to iterate the numbers in the array
        results *= AllMultiplicants[i] // Multiplies all the multipicants in the array
    }
    return results;
}
let AllMultiplicants = [2,4,6,8,10,12];
console.log(MultipliesAllNumbers(AllMultiplicants));