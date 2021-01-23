const randomNumber = Math.floor(Math.random() * 10) + 1
console.log("Random Number ", randomNumber);

function checkGuess() {
    let myGuess = guess.value
    if (myGuess == randomNumber) {
        feedback.textContent = "You got it! Nice job! Reresh the page to play again.";
    } 

    else if (myGuess > randomNumber && myGuess <= 10) {
        feedback.textContent = "Your guess was " + myGuess + ", that's too high. Try again.";
     }
    
    else if (myGuess < randomNumber && myGuess > 0) {
        feedback.textContent = "Your guess was " + myGuess + ", that's too low. Try again.";
    }

    else if (myGuess < 0 || myGuess > 10) {
        feedback.textContent = "Hey, I said between 1 and 10. You're way off. Try again.";
    }
}

submitGuess.addEventListener('click', checkGuess);