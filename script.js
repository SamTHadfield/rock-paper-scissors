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

// Step 2
function getComputerChoice() {
  return Math.random();
}

let choice = getComputerChoice();

if (choice >= 0 && choice <= 0.33) {
  console.log("rock");
} else if (choice >= 0.34 && choice <= 0.66) {
  console.log("paper");
} else {
  console.log("scissors");
}

// Step 3
function getHumanChoice() {
  let choice = prompt(
    "Do you choose 'rock', 'paper', or 'scissors'?"
  ).toLowerCase();

  if (choice === "rock") {
    console.log("rock");
  } else if (choice === "paper") {
    console.log("paper");
  } else if (choice === "scissors") {
    console.log("scissors");
  } else {
    console.log("I'm sorry, you entered an incorrect value");
  }
}

getHumanChoice();

// Step 4
let humanScore = 0;
let computerScore = 0;
