var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",
	"p","q","r","s","t","u","v","w","x","y","z"];

var wins = 0;
var losses = 0;
var guessesLeft = 10;

var guessesSoFar = [];

document.onkeyup = function () {
	var userguess = String.fromCharCode(event.keyCode).
		toLowerCase();

	var randomLetter = letters[Math.floor(Math.random()*letters.length)];

	console.log(userguess);


	if (guessesSoFar.indexOf(userguess) < 0 && letters.indexOf(userguess) >= 0) {
		guessesSoFar[guessesSoFar.length] = userguess;
		guessesLeft--;
	}

	if (userguess == randomLetter) {
		alert("You are a psychic!");
		wins++;
		setGameOver();
	}

	else if (guessesLeft == 0) {
		alert("You lose!");
		losses++;
		setGameOver();
	}
	
	document.querySelector("#guesses").innerHTML = "<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>" + "<p>Guesses Left: " + guessesLeft + "</p>" + "<p>Your guesses so far: " + guessesSoFar + "</p>";

}

function setGameOver() {
	guessesLeft = 9;
	guessesSoFar = [];
	randomLetter = letters[Math.floor(Math.random()*letters.length)];
}