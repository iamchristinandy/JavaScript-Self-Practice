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

// Writing a function that returns a closure, which encapsulates private data
function CreateCounter(){
    // Variable for private data
    let count = 11;

    // Closure that interacts with the privacy data
    function increment(){
        count ++
        return count;
    }
    // Return the closure
    return increment;
}
// Create a counter instance
const counter = CreateCounter();

console.log(counter());
console.log(counter());
console.log(counter());

// Second function that returns a closure, which encapsulates private data

function PrintAddedNames(){
    // Object for names
    var names = ['Andrews', 'Dora', 'Israel', 'Priscilla', 'Obed'];
    
    // Closure that interacts with private data
    function AddName(){
        var newName = 'Dave';
        names.push(newName);
    console.log(names);
    }
    AddName();
}
PrintAddedNames();

// Creating a function that makes anAJAX request using promises
function fetchData(url){
    // Returning promises from the fetch API
    return fetch(url)
    .then(response =>{
        // Check if the response is ok
        if (!response.ok){
            throw new Error('Network response was okay ' + response.status);
        }
        // Parse the JSON from the response
        return response.json();
    })
    .then(data => {
        // Handle the data
        console.log(data);
        return data; // Return the data to allow further chaining if needed
    })
    .catch(error =>{
        // Handle any errors that occured during the fetch
        console.error("There has been a problem with your fetch operation: ", error);
    });
}

// Using async/await with a parameterized fetchData function
async function fetchData(apiURL) {
    try {
        const response = await fetch(apiURL);
        if (!response.ok) {
            throw new Error('Network response was not okay');
        }
        const data = await response.json();
        console.log('Fetched Data:', data); // Logging fetched data
        return data; // Optionally return data for further processing
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        // Optionally re-throw the error to propagate it further
        throw error;
    }
}

// Example usage: Fetching data from a public API
const apiURL = 'https://api.example.com/data';
fetchData(apiURL)
    .then(data => {
        // Do something with the fetched data
        console.log('Fetched Data:', data);
    })
    .catch(error => {
        // Handle errors from fetchData
        console.error('Error in fetching data:', error);
    });

    // Hi, been a long time here
    // Just testing my skills today to have a feel of what I've missed for a while due to my brother's wedding vibes 😁
    var MyFirstName = 'Andrews'
    console.log(MyFirstName);

    // Okay, so, back to work
    // Implementing a modal dialog that opens and closes based on user interactions
    // That's my next JavaScript Exercise to be done hopefully tomorrow
    // You can follow through in the subsequent commits I'll make on this repository.
    // Have a blast 🤗