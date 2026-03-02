const generateBtn = document.getElementById('generate-btn');
const numbersDisplay = document.querySelector('.numbers-display');
const themeToggle = document.getElementById('theme-toggle');

// Theme toggle logic
themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    themeToggle.textContent = newTheme === 'dark' ? 'Light Mode' : 'Dark Mode';
    localStorage.setItem('theme', newTheme);
});

// Load saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeToggle.textContent = savedTheme === 'dark' ? 'Light Mode' : 'Dark Mode';
}

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
