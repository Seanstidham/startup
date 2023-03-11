const image = document.querySelector('img');
const spinButton = document.querySelector('#spin-button');
const counterInput = document.querySelector('#num-spins');
let spinCount = 0;

function rotateImage() {
  spinCount++;
  counterInput.value = spinCount;

  const isLoser = Math.floor(Math.random() * 6) === 0;

  if (isLoser) {
    document.body.appendChild(document.createTextNode('Fail'));
    spinButton.disabled = true;
    counterInput.disabled = true;
  } else {
    image.classList.add('spin');
    setTimeout(() => {
      const currentRotation = parseInt(image.style.transform.replace(/[^0-9\-]/g,''));
      const newRotation = (currentRotation + 30) % 360;
      image.style.transform = `rotate(${newRotation}deg)`;
      image.classList.remove('spin');

      document.body.appendChild(document.createTextNode('Winner'));
    }, 1000);
  }
}

spinButton.addEventListener('click', rotateImage);