// Get references to the image, spin button, and counter input elements
const image = document.querySelector('img');
const spinButton = document.getElementById('spin-button');
const counterInput = document.getElementById('num-spins');

// Initialize the spin counter to 0
let spinCount = 0;

// Define a function to rotate the image clockwise
function rotateImage() {
  // Increment the spin counter
  spinCount++;
  
  // Update the counter input value to reflect the new count
  counterInput.value = spinCount;
  
  // Check if the spin is a loser (1 in 6 chance)
  const isLoser = Math.floor(Math.random() * 6) === 0;
  
  if (isLoser) {
    // Print "Fail" on the screen
    document.body.appendChild(document.createTextNode('Fail'));
    
    // Disable the spin button and counter input
    spinButton.disabled = true;
    counterInput.disabled = true;
  } else {
    // Print "Winner" on the screen
    document.body.appendChild(document.createTextNode('Winner'));
    
    // Calculate the current rotation angle of the image (in degrees)
    const currentRotation = parseInt(image.style.transform.replace(/[^0-9\-]/g,''));
    
    // Set the new rotation angle to the current angle plus 30 degrees
    const newRotation = (currentRotation + 30) % 360;
    
    // Rotate the image clockwise by the new angle
    image.style.transform = `rotate(${newRotation}deg)`;
  }
}

// Add a click event listener to the spin button that calls the rotateImage function
spinButton.addEventListener('click', rotateImage);