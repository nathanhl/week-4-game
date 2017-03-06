//Letter choices available
var computerLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Setting all to zero
var wins = 0;
var losses = 0;
var guesses = 7;
var guessesRemaining = 7;
var guessedLetters = [];
var letterToGuess = null;
var computerGuess = computerLetters[Math.floor(Math.random() * computerLetters.length)];

var updateGuessesRemaining = function() {
    document.querySelector('#guessesRemaining').innerHTML = "Guesses left: " + guessesRemaining;
};

var updateLetterToGuess = function() {
    this.letterToGuess = this.computerLetters[Math.floor(Math.random() * this.computerLetters.length)];
};

var updateGuessesSoFar = function() {
    document.querySelector('#letters').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
};

var reset = function() {
    totalGuesses = 7;
    guessesRemaining = 7;
    guessedLetters = [];

    updateLetterToGuess();
    updateGuessesRemaining();
    updateGuessesSoFar();
};

updateLetterToGuess();
updateGuessesRemaining();

document.onkeyup = function(event) {
    guessesRemaining--;
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    guessedLetters.push(userGuess);
    updateGuessesRemaining();
    updateGuessesSoFar();

    if (guessesRemaining > 0) {
        if (userGuess == letterToGuess) {
            wins++;
            document.querySelector('#wins').innerHTML = "Your Total Wins: " + wins;
            alert("Wow, you're supergalactic!");
            reset();
        }
    } else if (guessesRemaining == 0) {
        losses++;
        document.querySelector('#losses').innerHTML = "Your Total Losses: " + losses;
        alert("Nice try, but go back to the void!");
        reset();
    }
};
