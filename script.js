//Choice functions
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

// function getHumanChoice() {
//   let choice = prompt(
//     "Do you choose 'rock', 'paper', or 'scissors'?"
//   ).toLowerCase();

//   if (choice === "rock") {
//     return "rock";
//   } else if (choice === "paper") {
//     return "paper";
//   } else if (choice === "scissors") {
//     return "scissors";
//   }
// }

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  // Re-call functions to play 5 rounds
  // for (let i = 0; i < 5; i++) {
  //   const humanSelection = getHumanChoice();
  //   const computerSelection = getComputerChoice();
  //   playRound(humanSelection, computerSelection);
  //   console.log("Human Score: " + humanScore);
  //   console.log("Computer Score: " + computerScore);
  // }

  // Add Event Listeners to Buttons
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const humanSelection = button.id;
      const computerSelection = getComputerChoice();
      playRound(humanSelection, computerSelection);
    });
  });

  // One Round
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
          console.log("You win! Paper beats Rock!");
          return humanScore++;
        } else if (computerChoice === "paper") {
          console.log("It's a draw! Paper ties with Paper!");
        } else if (computerChoice === "scissors") {
          console.log("You lose! Scissors beats Paper!");
          return computerScore++;
        }
        break;

      case "scissors":
        if (computerChoice === "rock") {
          console.log("You lose! Rock beats Scissors!");
          return computerScore++;
        } else if (computerChoice === "paper") {
          console.log("You win! Scissors beats Paper!");
          return humanScore++;
        } else if (computerChoice === "scissors") {
          console.log("It's a draw! Scissors ties with Scissors!");
        }
        break;

      default:
        console.log("You entered an incorrect value.");
    }
  }

  // Final message upon game completion
  if (humanScore > computerScore) {
    console.log("Congrats! You beat the Computer!");
  } else if (humanScore === computerScore) {
    console.log("Tie game!");
  } else {
    console.log("Sorry, the Computer wins the game.");
  }
}

playGame();
