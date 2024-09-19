const target = document.getElementById('target');
const gameContainer = document.querySelector('.game-container');

function moveTarget() {
    const containerWidth = gameContainer.clientWidth;
    const containerHeight = gameContainer.clientHeight;

    const x = Math.random() * (containerWidth - 50);
    const y = Math.random() * (containerHeight - 50);

    target.style.transform = `translate(${x}px, ${y}px)`;
}

target.addEventListener('click', () => {
    moveTarget();
});

// Move the target for the first time
moveTarget();
