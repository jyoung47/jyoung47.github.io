# jyoung47.github.io
# WheeloFortuneType
This game was developed as my first project during the Per Scholas Software Engineers Cohort.
It is based off America's favorite TV Game show, "Wheel Of Fortune". My version has elements
of "Hangman" with the thrill of winning money, giving the game the same excitement found in the original show.
--------------------------------------------------------------
Game Functions
The puzzleboard conceals a randomly selected word from a predefined array, and each string of 
letters is represented by underscores.

The Player will 1st have to press the "spin button" to generate a random dollor amount for a wager.
A time limit of 5 seconds is enforced on the spin button to ensure a fair gameplay experience without 
excessive spinning attempts within a single turn. Wagers will be random amounts ranging from $10 to $100. 
If a failed wager results in a negative total amount or the first turn is an incorrect guessed letter, 
the player will be alerted that they have lost and must restart. 

The Player will guess one letter and press submit. If the letter is correct, the letter will be revealed in place 
of the underscore.

if the letter is incorrect, the "incorrect guesses display" will show the number of incorrect guesses and the letters
that were incorrect. 5 incorrect guesses will alert the player that they lost and the game will restart. If a letter
is guessed that was already guessed, the player will be alerted to try again with no consequence.  

The player will have to spin each turn and guess every letter of the word until it's complete. This will gather a grand prize
of monatary value that will be alerted to the player after the word is filled in and the player has won.

________________________________________________________
User Stories
I can spin once per turn and have a wager set.
I can submit a guessed letter.
the wager can deduct or add value to the grand total
whether the letter is true or false.
I can see the guessed letters and number of incorrect guesses.
I can get alerted if the letter is guessed twice.
I can lose by 5 incorrect guesses or by falling below $0
I can win the game by guessing all the correct letters and win the grand total.

_________________________________________________________

Built With:
HTML
CSS
Javascript
__________________________________________________________

How I built this game:
I started out by building this game by writing down the pseudo code. First, I found out that the logic of the game has to be simple
enough to understand. Thats when I started off by testing true or false statements with each letter of short selected words. I build
off of that by contructing the varibles I needed and worked with each one by one until I noticed I needed more variables and functions.
The predefined array of words was created by me and as the list become larger I created the display I knew I needed to work with. as the
code expended I found myself debugging and creating new methods that made sense to make like the spin function, reset game function and 
check win function.

Adknowledgements
Thank you to my instructors from Per Scholas, Tishana Trainor and Kasper Kain for providing me with all the help I needed to
keep pushing forward with this project. Also would like to thank my friend Mohammed a Software Engineer from Ford Motor Company, who showed me how to add animation in javascript and css.  

