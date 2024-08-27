// Function to handle keydown events

// This script demonstrates how to get keyboard events in Javascript
function handleKeydown (event){
    // To get the key pressed
    const key = event.key

    // Display the key pressed in the output paragraph
    const output = document.getElementById('output');
    output.textContent = `You pressed: ${key}`;

    // Perform specific actions based on key pressed
    switch (key){
        case 'Enter': 
            alert ('You pressed enter');
            break;
        case 'Escape':
            alert('You pressed Escape!');
            break;
        case ' ':
            alert('You pressed Spacebar!');
            break;
        case 'Shift':
            alert('You pressed Shift');
            break;

        default:
            console.log(`Key pressed is ${key}`);
            break;
    }
}

// Attach the event listener to the window
window.addEventListener('keydown', handleKeydown);

// `keydown`: Fires when a key is pressed down.
// `keyup`: Fires when a key is released.
// `keypress`: Deprecated, but was used to detect keys that produce a character
// `event.key`: Returns the key value as a string. Example: "Enter"
// `event.code`: Returns the physical keycode 9. Example: "KeyB", "ArrowLeft"

// Next up: Rewriting existing functions using arrow functions and template literals.
