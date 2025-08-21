const actualGuess = Math.floor(Math.random() * 100 + 1)
const userGuesses = new Array()

const input = document.querySelector('#number')
const container = document.querySelector('.container')
const button = document.querySelector('.submit')
const result = document.querySelector('#result')
const rem = document.querySelector('.remaining')
const prev = document.querySelector('.previous')

button.addEventListener('click', (e) => {
    e.preventDefault()
    const remaining = 7 - userGuesses.length
    const guess = parseInt(input.value);
    if (isNaN(guess) || guess < 1 || guess > 100) {
        result.textContent = "Please enter a valid number between 1 and 100."
        result.style.display = "block";
        result.style.color = 'red';
    }
    else if (guess != actualGuess) {
        userGuesses.push(guess)
        prev.textContent = `Previous guesses: ${userGuesses.join(' ')}`;
        prev.style.display = 'block';
        rem.textContent = `Remaining guesses: ${remaining-1}`;
        result.textContent = `Your guess is wrong! Try again. Your Guess is ${guess < actualGuess ? 'Lower than the actual number' : 'Higher than the actual number'}`;
        result.style.display = 'block';
        result.style.color = 'red';
    }
    else {
        result.textContent = `Congratulations! You guessed the correct number..!! It was ${actualGuess}.`
        prev.textContent = `Previous guesses: ${userGuesses.join(' ')}`
        rem.textContent = `Remaining guesses: ${remaining - 1}`
        prev.style.display = 'block';
        rem.style.display = 'none';
        result.style.display = 'block';
        result.style.color = 'green';
        button.style.display = 'none';
    }

});
