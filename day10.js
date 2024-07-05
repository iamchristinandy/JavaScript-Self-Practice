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

// A function that takes an object as input and returns an array of its keys
function TakeArrayKeys(object){
    let keys = [];
    for (let key in object){
        if (object.hasOwnProperty(key)){
            keys.push(key);
        }
    }
    return keys;
}
// Using in an example
let object = {
    firstname: 'Andrews',
    middlename: 'Kwafo',
    lastname: 'Baah',
    age: 23
}

let keysArray = TakeArrayKeys(object);
console.log(keysArray);

// Writing a function to merge two objects into one
function MergeObject(obj1, obj2){
        let mergedObjects = {};
        for (let key in obj1){
            if (obj1.hasOwnProperty(key)){
                mergedObjects[key] = obj1[key];     
            }
        }
        for (let key in obj2){
            if (obj2.hasOwnProperty(key)){
                mergedObjects[key] = obj2[key];
            }
        }
    return mergedObjects;
}

// Usage in an example
let object1 = {
    name: 'Andrews',
    middle: 'Kwafo',
    last: 'Baah'
}
let object2 = {
    names: 'Dora',
    middles:'Melissa',
    lasts: 'Aryee'
}
let mergedObjects = MergeObject(object1, object2);
console.log (mergedObjects);

// Writing a function that deep clone an object
function deepClone(item){
    if (item === null || typeof item !== 'object'){
        return item;
    }

    // An array to hold values
    let clonedObj = Array.isArray(item) ? [] : {};

    // Recursively copy properties
    for (let key in item){
        if (item.hasOwnProperty(key)){
            clonedObj[key]= deepClone(item[key]);
        }
    }
    return clonedObj;
}

// Use in an example
let employer1 = {
    name: 'Andrews Baah Kwafo',
    age: 23,
    employmentdate: '23rd January 2024'
}
let employer2 = deepClone(employer1);
console.log(employer2); // Deep clone of employer 1
console.log(employer1);

employer2.name = 'Dora Melissa Aryee';

console.log(employer1);
console.log(employer2);

// Writing a higher-order function that takes a callback and applies it to every element in an array

function appplyToEach(arr, callback){
    for (let i = 0; i<arr.length; i++){
        // Making sure the callback affects each element of the array
        arr[i] = callback(arr[i]);
    }
    // Return the modified array
    return arr; 
}

// Definining the callback
function cubenumbers(num){
    return num * num * num;
}

let numbers = [4, 5, 6, 7, 8]
let cubednumbers = appplyToEach(numbers, cubenumbers);
console.log(cubednumbers);