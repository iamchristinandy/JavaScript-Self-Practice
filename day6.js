// Moving to functions
// Function that takes a string as an argument and prints the reverse of the string

//Declaration of function
function ReverseString(name){
    // Declaring a variable for the reversed string storage
    let reversed = "";
    // A for loop to reverse the string
    // Here's the breakdown
    // i = name.length - 1 means 
    for (i=name.length - 1; i>=0; i--){
        reversed = reversed + name[i]; // or reversed += name[i];
    }
    console.log(reversed);
}
let name = "Andrews"
ReverseString(name);
