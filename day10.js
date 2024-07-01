// Array Manipulation
// A function that reverses an array

function arrayReversal(arr){
    return arr.reverse();
}

// Use in example
let arr = [14, 15, 16, 17, 18];
let reversedArray = arrayReversal(arr);
console.log(reversedArray);

// A function that removes duplicates from an array without using built-in functions
function RemoveDuplicated(array){
    // Initiatilisng the function
    let result = [];
    // Setting the result of the removing of array elements iteration to zero
    for (let i=0; i<array.length; i++){
        // Iterate over each element in the array
        let duplicated = false;
        // Set duplicated array to false in its initial state
        for (j = 0; j<result.length; j++){
            if (array[i] === result[j]){
                duplicated = true;
                break;
                // A for loop to break the code if there is duplication of the code
            }
        }
        if (!duplicated){
            result.push(array[i]);
            // Now, if the duplicated array is found, take one and push it in the array
            // And then, add it to the array
        }
    }
    return result;
    // After that, return the result of the array
}

// Used in an example
let arrays = [2,2,4,5,6,7,8,9,9,10,11,12,13,13,25,30,25];
let arrayWithoutDuplicates = RemoveDuplicated(arrays);
console.log(arrayWithoutDuplicates);