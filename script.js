let total = 0; // Variable for grand total of cash winnings
let amount = 0; // Variable for the wager (Spinning the wheel summons this)
let lastSpinTime = 0; // Variable for start time when spin button is pressed (This is needed for time limit on spin button it prevents cheating) 
const words = ["adventure", "technology", "happiness", "internet", "javascript", "html", "mountain", "pool", "king", "dreadlocks", "brilliant", "computer", "elephant", "fantastic", "gorgeous", "hospital", "hospital", "knowledge", "landscape", "national","overflow", "pictures", "quantity", "rainbow", "symphony", "treasure", "universe"];
//array of random puzzle words to solve
let randomWord = words[Math.floor(Math.random() * words.length)];//random generator variable
const MAX_INCORRECT_GUESSES = 5; // 5 incorrect guesses will make you lose variable
const wordDisplay = document.getElementById("word"); //variable for puzzle board 
const guessInput = document.getElementById("guessInput"); //value holder variable 
const submitBtn = document.getElementById("submitLetter"); //submit button variable
const spinBtn = document.getElementById("spin"); // spin button variable
const guessesDisplay = document.getElementById("guesses"); // guess display
const amountDisplay = document.getElementById("amount-display"); //constant variable for wager total
const totalDisplay = document.getElementById("total-display"); //constant variable for grand total

let currentWord = randomWord.split('');//stores the selected random word as an array of letters (puzzle blanks on webpage)
let guessedLetters = []; //empty array to store guessed letters
let incorrectGuesses = 0; //starts at 0 wrong guesses

wordDisplay.textContent = currentWord.map(() => '_').join(' '); //sets the content of the wordDisplay element to display underscores (_) based on the length of the currentWord.

submitBtn.disabled = true; //disables submit button (until a spin)

submitBtn.addEventListener("click", function() {
    handleInput(); //When submit is pressed handleInput is called
});

spinBtn.addEventListener("click", function() {
  const currentTime = new Date().getTime();

  if (currentTime - lastSpinTime >= 5000) {//event listener is added, this will enforce the 5 second rule for spinning
      lastSpinTime = currentTime; // Update the last spin time

      spin(); // Call the spin function
  } else {
      alert("Please wait at least 5 seconds between spins.");
  }
});


function handleInput() {
    guess(); //handleInput needs the guess function to help with displays
}

function updateWordDisplay() { //main logic for game functionality. Updates the wordDisplay element's content by iterating over the currentWord array and replacing letters with underscores _ if they haven't been guessed yet.
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
  //if letter is correct its true otherwise incorrect is false
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

function spin() {//mimics the wheel of fortune wheel to display a montary wager when spin is pressed
    amount = Math.floor(Math.random() * 100) + 10;
    amountDisplay.textContent = `$${amount}`; // Update amount display
    submitBtn.disabled = false;
}

