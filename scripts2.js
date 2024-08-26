// Function to handle keydown events

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