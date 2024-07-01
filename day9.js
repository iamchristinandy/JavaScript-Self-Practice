// Create a function that takes an array of objects, each representing a student with properties name and score,
//and returns a new array of students who scored above a certain threshold

function ReturnScores(students, passmark){
    return students.filter(student => student.score > passmark);
}

// For example

var students = [
    {name: 'Benjamin', score:71},
    {name: 'Andrews', score:86},
    {name: 'Emmanuel', score:69},
    {name: 'Jeffrey', score:84},
    {name: 'Nana Kusi', score:68}
];
console.log(ReturnScores(students, 75)); // Prints out students who had a score of above 75
console.log(ReturnScores(students, 65)); // Prints out students who had a score of above 65

// Implementing a function that sorts an array of integers using a chosen sorting algorithm
// preferably 'bubble sorting' algorithm

function ArraySort(array){
    let a = array.length;
    // Traverse through all array elements
    for (let i = 0; i < a; i++)
    // Let i elements are already in place
    for (let j = 0; j < a - i; j++){
    // Traverse the array from 0 to a-i-1
    // Swap if the element found is greater than the next element
    if (array[j] > array[j+1]){
        let temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;
    }
 }
 return array;
}

// In an example
// let array = [64, 21, 19, 48, 10];
// let bubblesortedArr = ArraySort(array);
// console.log("Sorted array is ", bubblesortedArr);

// In a second example
let array = [43, 44, 45, 56, 98, 101, 234]
let bubbleSortedArr = ArraySort(array);
console.log("List of the sorted array is", bubbleSortedArr);