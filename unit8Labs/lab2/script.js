// Your solution goes here 
function playGuessingGame(numToGuess, totalGuesses = 10) {
  let guessCount = 0;
  let guess = prompt("Enter a number between 1 and 100.");
  
  while (guessCount < totalGuesses) {
  if (guess === null) {
  return 0;
  } else if (guess === "" || isNaN(guess)) {
  guess = prompt("Please enter a number.");
  continue;
  }

guessCount++;

if (guess < numToGuess) {
  guess = prompt(`${guess} is too small. Guess a larger number.`);
} else if (guess > numToGuess) {
  guess = prompt(`${guess} is too large. Guess a smaller number.`);
} else {
  return guessCount;
}
}
return 0;

}

