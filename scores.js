const image = document.querySelector('img');
const spinButton = document.querySelector('#spin-button');
const counterInput = document.querySelector('#num-spins');
const message = document.querySelector('#message');
let spinCount = 0;

function rotateImage() {
  spinCount++;
  counterInput.value = spinCount;

  const isLoser = Math.floor(Math.random() * 6) === 0;

  if (isLoser) {
    const failMessage = 'Fail';
    message.appendChild(document.createTextNode(failMessage));

    // Get player name
    const playerName = prompt('Enter your name:');
    if (playerName) {
      // Get current date
      const currentDate = new Date();
      const formattedDate = currentDate.toLocaleDateString();
      
      // Print player score
      const scoreMessage = `${playerName} scored ${spinCount} spins before receiving a ${failMessage} on ${formattedDate}.`;
      message.appendChild(document.createElement('br'));
      message.appendChild(document.createTextNode(scoreMessage));
    }

    spinButton.disabled = true;
    counterInput.disabled = true;
  } else {
    image.classList.add('spin');
    setTimeout(() => {
      const currentRotation = parseInt(image.style.transform.replace(/[^0-9\-]/g,''));
      const newRotation = (currentRotation + 30) % 360;
      image.style.transform = `rotate(${newRotation}deg)`;
      image.classList.remove('spin');

      document.body.appendChild(document.createTextNode('Winner '));
    }, 1000);
  }
}

spinButton.addEventListener('click', rotateImage);