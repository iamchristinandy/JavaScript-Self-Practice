// Moving to objects

// Creating an object representing a person with properties

let person = {
    firstName: "Andrews",
    middleName: "Kwafo",
    surname: "Baah",
    age: 23,
    profession: "frontend Developer with UI background",
}
// console.log(person);

//Combining the names properties in the object to form a sentence
console.log(`${person.firstName} ${person.middleName} ${person.surname} is my full name`);

// Function that takes an object as an argument and prints out all its properties and values
function printAllProperties(employee){
    for (let property in employee){
        if(employee.hasOwnProperty(property)){
            console.log(`${property}: ${employee[property]}`);
        }
    }
}

let employee = {
    name: "Aning Obed",
    age: 23,
    city: "Accra Ghana",
};
printAllProperties(employee);