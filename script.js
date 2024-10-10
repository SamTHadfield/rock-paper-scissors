// Step 2: Write the logic to get the computer choice

// Create new function named getComputerChoice()
// Will need to randomly return one of the following strings: "rock", "paper", "scissors"
// Declare variable
// Use Math.random method on variable to generate a random number
// Employ if/else statements to print string based on random output of variable

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
