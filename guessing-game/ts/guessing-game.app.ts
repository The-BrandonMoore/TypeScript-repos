import promptSync from "prompt-sync";
const prompt = promptSync();
console.log("Welcome to the Guess the Number Game");
console.log("====================================");

let tryAgain: string = "y";
while (tryAgain == "y") {
  console.log("\nI'm thinking of a number from 1 to 100.");
  console.log("Try to guess it.\n");
  let correctGuess: boolean = false;
  //number of guesses tracker
  let numberOfGuesses: number = 0;
  //create random number
  let secretNumber: number = Math.floor(Math.random() * 100) + 1;
  console.log(secretNumber);
  while (correctGuess == false) {
    //have the user guess
    let userGuess: number = parseInt(prompt("Enter Number: "));
    if (userGuess > 100 || userGuess <= 0) {
      console.log("You must enter a number from 1 to 100.");
      continue;
    }
    numberOfGuesses++;
    //do the math for the number over/under
    let offBy: number = userGuess - secretNumber;
    //if/else for the responses
    if (offBy == 0) {
      console.log("You got it in " + numberOfGuesses + " tries.");
      if (numberOfGuesses <= 3) {
        console.log("Great work! You are a mathematical wizard.");
      } else if (numberOfGuesses <= 7) {
        console.log("Not too bad! You've got some potential.");
      } else {
        console.log(
          "What took you so long? Maybe you should take some lessons."
        );
      }
      correctGuess = true;
    } else {
      if (offBy < -10) {
        console.log("Way too low! Try again.");
      } else if (offBy >= -10 && offBy < 0) {
        console.log("Too Low! Try Again.");
      } else if (offBy <= 10) {
        console.log("Too High! Try Again.");
      } else if (offBy > 10) {
        console.log("Way Too High! Try again.");
      }
    }
  }
  //try again?
  let successfulAnswer: boolean = false;
  while (successfulAnswer == false) {
    let checkPrompt: string = prompt("Try Again (y/n): ").toLowerCase();
    if (checkPrompt === "y" || checkPrompt === "n") {
      tryAgain = checkPrompt;
      successfulAnswer = true;
    } else {
      console.log("Must enter either 'y' or 'n'.");
    }
    //user input y/n = change "tryAgain"
  }
}
console.log("BYE!");
