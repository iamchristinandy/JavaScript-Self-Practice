// Writing a funtion that dynamically adds elements to a list based on userinput
function addItem(){
    // Get input element and its value
    const input = document.getElementById('userInput');
    const inputValue = input.value;
}

// Checking of the property isn't empty
if (inputValue.trim() !==''){
    // Create a new list
    const newItem = document.createElement('li');
    newItem.textContent = inputValue;

    // Clear the input field
    input.value = '';
} else {
    alert('Please enter something')
}

// Attach an event listener to the button
document.getElementById('addButton').addEventListener('click', addItem);