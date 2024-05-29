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
