//Array of letters for game
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


//Variables for tracking players wins, losses,
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var lettersGuessed = [];
var computerGuess = [];


//Initial computer letter window.onload runs the browser!
window.onload = function() {
	var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    computerGuess.push(compGuess);
    // Check Point
	console.log(computerGuess[0]);
}


//Game
document.onkeyup = function(event) {
	var playerGuess = event.key;
    lettersGuessed.push(playerGuess);
    // Check Point
	console.log(computerGuess[0]);
// If both statements are true than player wins
if ((playerGuess === computerGuess[0]) && (guessesLeft > 0)) {
	wins++;
}
// If not player loses a guess 
else if ((playerGuess !== computerGuess[0]) && (guessesLeft > 0)) {
	guessesLeft = guessesLeft-1;
}
// clears the letters guessed when guesses are used up.
else {
	losses++;
	 guessesLeft = 9;
	lettersGuessed.length = 0;
	 computerGuess.length = 0;
	 var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	 computerGuess.push(compGuess);
	 console.log(computerGuess[0]);
}
// Prints everything to screen
  var html = "<p> Guess a letter if you Dare!</p>" +
           "<p>Wins: " + wins + "</p>" +
           "<p>Losses: " + losses + "</p>" +
          "<p>Guesses left: " + guessesLeft + "</p>" +
          "<p>Your guesses so far: " + lettersGuessed + "</p>";
 
    document.querySelector("#game").innerHTML = html;

  }