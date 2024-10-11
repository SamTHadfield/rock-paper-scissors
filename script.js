// Step 2: Write the logic to get the computer choice

// Create new function named getComputerChoice()
// Will need to randomly return one of the following strings: "rock", "paper", "scissors"
// Declare variable
// Use Math.random method on variable to generate a random number
// Employ if/else statements to print string based on random output of variable

// Step 3: Write the logic to get the human choice (pseudocode)

// Create a new function named getHumanChoice
// Create let variable within function
// Set let variable equal to prompt ("Do you choose 'rock', 'paper', or 'scissors'?")
// Create if/else statements within function based on value of let variable

// function getComputerChoice() {
//     return Math.random();
//   }

//   let choice = getComputerChoice();

//   if (choice >= 0 && choice <= 0.33) {
//     console.log("rock");
//   } else if (choice >= 0.34 && choice <= 0.66) {
//     console.log("paper");
//   } else {
//     console.log("scissors");
//   }

// Step 2
function getComputerChoice() {
  let choice = Math.random();

  if (choice >= 0 && choice <= 0.33) {
    return "rock";
  } else if (choice >= 0.34 && choice <= 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

// Step 3
function getHumanChoice() {
  let choice = prompt(
    "Do you choose 'rock', 'paper', or 'scissors'?"
  ).toLowerCase();

  if (choice === "rock") {
    return "rock";
  } else if (choice === "paper") {
    return "paper";
  } else if (choice === "scissors") {
    return "scissors";
  }
}

// Step 4
let humanScore = 0;
let computerScore = 0;

//Step 5: Write the logic to play a single round

// Create new function named playRound
// Set parameters to humanChoice and computerChoice
// playRound function has to console.log winner of the game i.e. "You lose! Paper beats Rock."
//  - may need to employ switch statement here (if/else statements will become cumbersome very quickly)
// Increment humanScore or computerScore based on winner.

function playRound(humanChoice, computerChoice) {
  switch (humanChoice) {
    case "rock":
      if (computerChoice === "rock") {
        console.log("It's a draw! Rock ties with Rock!");
      } else if (computerChoice === "paper") {
        console.log("You lose! Paper beats Rock!");
        return computerScore++;
      } else if (computerChoice === "scissors") {
        console.log("You win! Rock beats Scissors!");
        return humanScore++;
      }
      break;

    case "paper":
      if (computerChoice === "rock") {
        console.log("You win! Paper beats rock!");
        return humanScore++;
      } else if (computerChoice === "paper") {
        console.log("It's a draw! Paper ties with Paper!");
      } else if (computerChoice === "scissors") {
        console.log("You lose! Scissors beats paper!");
      }
      return computerScore++;
      break;

    case "scissors":
      if (computerChoice === "rock") {
        console.log("You lose! Rock beats scissors!");
        return computerScore++;
      } else if (computerChoice === "paper") {
        console.log("You win! Scissors beats paper!");
        return humanScore++;
      } else if (computerChoice === "scissors") {
        console.log("It's a draw! Scissors ties with Scissors!");
      }
      break;

    default:
      console.log("You entered an incorrect value.");
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

console.log("Human Score: " + humanScore);
console.log("Computer Score: " + computerScore);
