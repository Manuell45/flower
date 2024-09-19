document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('container');

  function createFlower() {
    const flower = document.createElement('div');
    flower.className = 'flower';
    flower.style.left = `${Math.random() * 100}vw`;
    flower.style.animation = `popUp ${Math.random() * 2 + 3}s ease-in-out forwards`;
    container.appendChild(flower);

    // Remove the flower from the DOM after animation
    flower.addEventListener('animationend', () => {
      flower.remove();
    });
  }

  // Create flowers at random intervals
  setInterval(createFlower, 500);
});
