let total = 0;
let amount = 0;
const words = ["adventure", "technology", "happiness", "internet", "javascript", "html", "mountain", "pool", "King", "Dreadlocks"];
let randomWord = words[Math.floor(Math.random() * words.length)];
const wordDisplay = document.getElementById("word");
const guessInput = document.getElementById("guessInput");
const submitBtn = document.getElementById("submitLetter");
const spinBtn = document.getElementById("onclick")
const guessesDisplay = document.getElementById("guesses");
let currentWord = randomWord.split('');
let guessedLetters = [];
let incorrectGuesses = 0;

wordDisplay.textContent = currentWord.map(() => '_').join(' '); 

submitBtn.disabled = true

submitBtn.addEventListener("click", function() {
    const guess = guessInput.value;
    handleInput(guess);
});

function handleInput() {
    guess();
}

function updateWordDisplay() {
  wordDisplay.textContent = currentWord.map(letter => guessedLetters.includes(letter) ? letter : '_').join(' ');
}

function updateGuessesDisplay() {
  console.log(guessedLetters);
  guessesDisplay.textContent = `Used Letters: ${guessedLetters.join()}`;
}

function checkWin() {
  if (!currentWord.includes('')) {
    alert('Congratulations! You won!');
    resetGame();
  } else if (incorrectGuesses === 6) {
    alert(`Game over! The word was "${randomWord}"`);
    resetGame();
  }
}

function guess() {
  const letter = guessInput.value.toLowerCase();
  
  if (letter && guessedLetters.indexOf(letter) === -1) {
    guessedLetters.push(letter);
    
    if (!currentWord.includes(letter)) {
      incorrectGuesses++; 
    }
    console.log(guessedLetters);

    let result = amount;
  
    if (randomWord.indexOf(guessInput.value) >-1) {
      result = amount + total;
    } else {
      result = total - amount;
    }
    
    total = result;

    const totalElement = document.getElementById("total-display");
    totalElement.textContent = `$${total}`;
    

    updateWordDisplay();
    updateGuessesDisplay();
    
  }
  
  guessInput.value = '';

  submitBtn.disabled = true

}

function resetGame() {
  randomWord = words[Math.floor(Math.random() * words.length)];
  currentWord = randomWord.split('');
  guessedLetters = [];
  incorrectGuesses = 0;
  updateWordDisplay();
  updateGuessesDisplay();
}

function spin() {
  amount = Math.floor(Math.random() * 100) + 10;
  
  const resultElement = document.getElementById("amount-display");
  resultElement.textContent = `$${amount}`;
  
  submitBtn.disabled = false

}
