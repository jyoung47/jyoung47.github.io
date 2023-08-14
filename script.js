let total = 0;
let amount = 0;
let lastSpinTime = 0;
const words = ["adventure", "technology", "happiness", "internet", "javascript", "html", "mountain", "pool", "king", "dreadlocks", "brilliant", "computer", "elephant", "fantastic", "gorgeous", "hospital", "hospital", "knowledge", "landscape", "national","overflow", "pictures", "quantity", "rainbow", "symphony", "treasure", "universe"];
let randomWord = words[Math.floor(Math.random() * words.length)];
const MAX_INCORRECT_GUESSES = 5;
const wordDisplay = document.getElementById("word");
const guessInput = document.getElementById("guessInput");
const submitBtn = document.getElementById("submitLetter");
const spinBtn = document.getElementById("spin");
const guessesDisplay = document.getElementById("guesses");
const amountDisplay = document.getElementById("amount-display");
const totalDisplay = document.getElementById("total-display");

let currentWord = randomWord.split('');
let guessedLetters = [];
let incorrectGuesses = 0;

wordDisplay.textContent = currentWord.map(() => '_').join(' ');

submitBtn.disabled = true;

submitBtn.addEventListener("click", function() {
    handleInput();
});

spinBtn.addEventListener("click", function() {
  const currentTime = new Date().getTime();

  if (currentTime - lastSpinTime >= 5000) {
      lastSpinTime = currentTime; // Update the last spin time

      spin(); // Call the spin function
  } else {
      alert("Please wait at least 5 seconds between spins.");
  }
});


function handleInput() {
    guess();
}

function updateWordDisplay() {
  wordDisplay.textContent = currentWord.map(letter => guessedLetters.includes(letter) ? letter : '_').join(' ');
  if (checkWin(currentWord, guessedLetters)) {
      alert(`Congratulations! You've won $${total}`);
      resetGame(); 
      submitBtn.disabled = true;
      spinBtn.disabled = true;
  }
  updateGuessesDisplay();
}

function checkWin(currentWord, guessedLetters) {
    for (let i = 0; i < currentWord.length; i++) {
        if (!guessedLetters.includes(currentWord[i])) {
            return false;
        }
    }
    return true;
}

function updateGuessesDisplay() {
  const incorrectLetters = guessedLetters.filter(letter => !currentWord.includes(letter)).join(', ');
  guessesDisplay.textContent = `Incorrect Guesses (${incorrectGuesses}): ${incorrectLetters}`;
}

function guess() {
  const letter = guessInput.value.toLowerCase();

  if (letter && guessedLetters.indexOf(letter) === -1) {
    guessedLetters.push(letter);

    if (!currentWord.includes(letter)) {
      incorrectGuesses++;
      total -= amount; // Deduct amount for incorrect guesses

      if (incorrectGuesses >= MAX_INCORRECT_GUESSES) {
        alert("You've made too many incorrect guesses! Sorry, You lose!");
        resetGame();
        return;
      }
    } else {
      total += amount; // Add amount for correct guesses
    }

    totalDisplay.textContent = `$${total}`; // Update total display

    if (total < 0) {
      alert("Letter is incorrect and You're Bankrupt! Sorry, You lose!");
      resetGame();
    } else {
      updateWordDisplay();
      updateGuessesDisplay();
    }
  } else if (letter && !currentWord.includes(letter) && guessedLetters.includes(letter)) {
    alert("You guessed this already, try again.");
  }

  guessInput.value = '';
  submitBtn.disabled = true;
}


function resetGame() {
  total = 0; // Reset total
  amount = 0; // Reset amount
  amountDisplay.textContent = "$0"; // Reset amount display
  totalDisplay.textContent = "$0"; // Reset total display

  randomWord = words[Math.floor(Math.random() * words.length)];
  originalWord = randomWord; // Store the original random word
  currentWord = originalWord.split('');
  guessedLetters = [];
  incorrectGuesses = 0;
  updateWordDisplay();
  updateGuessesDisplay();
}

function spin() {
    amount = Math.floor(Math.random() * 100) + 10;
    amountDisplay.textContent = `$${amount}`; // Update amount display
    submitBtn.disabled = false;
}
