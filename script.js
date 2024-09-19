const target = document.getElementById('target');
const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer');
const gameContainer = document.querySelector('.game-container');

let score = 0;
let timeLeft = 30;
let timerId;

function moveTarget() {
    const containerWidth = gameContainer.clientWidth;
    const containerHeight = gameContainer.clientHeight;

    const x = Math.random() * (containerWidth - 50);
    const y = Math.random() * (containerHeight - 50);

    target.style.transform = `translate(${x}px, ${y}px)`;
}

function startTimer() {
    timerId = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = `Time: ${timeLeft}`;

        if (timeLeft <= 0) {
            clearInterval(timerId);
            alert(`Game Over! Your score: ${score}`);
            resetGame();
        }
    }, 1000);
}

function resetGame() {
    score = 0;
    timeLeft = 30;
    scoreDisplay.textContent = `Score: ${score}`;
    timerDisplay.textContent = `Time: ${timeLeft}`;
    moveTarget();
    startTimer();
}

target.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = `Score: ${score}`;
    moveTarget();
});

// Start the game
resetGame();
