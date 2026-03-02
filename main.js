const generateBtn = document.getElementById('generate-btn');
const numbersDisplay = document.querySelector('.numbers-display');

function generateLotteryNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }
    return Array.from(numbers);
}

function renderNumbers(numbers) {
    numbersDisplay.innerHTML = '';
    for (const number of numbers) {
        const ball = document.createElement('div');
        ball.classList.add('number-ball');
        ball.textContent = number;
        numbersDisplay.appendChild(ball);
    }
}

function generateAndRender() {
    const lotteryNumbers = generateLotteryNumbers();
    renderNumbers(lotteryNumbers);
}

generateBtn.addEventListener('click', generateAndRender);

// Initial generation
generateAndRender();
