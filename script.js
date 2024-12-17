/////////////////
// Scoreboard //
////////////////

let playerScore = 0;
let computerScore = 0;
let roundWinner = document.getElementById("round-winner");
let currentScore = document.getElementById("current-score");

///////////////////////////////////////////
// Player Selection | Computer Selection //
//////////////////////////////////////////

// Add Event Listeners | Call playRound() function | Pass in arguments
const buttons = document.querySelectorAll(".button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const playerSelection = button.id;
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
  });
});

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

////////////////
// One Round //
////////////////

function playRound(playerChoice, computerChoice) {
  switch (playerChoice) {
    case "rock":
      if (computerChoice === "rock") {
        tie();
      } else if (computerChoice === "paper") {
        computerWin();
      } else if (computerChoice === "scissors") {
        playerWin();
      }
      break;

    case "paper":
      if (computerChoice === "rock") {
        playerWin();
      } else if (computerChoice === "paper") {
        tie();
      } else if (computerChoice === "scissors") {
        computerWin();
      }
      break;

    case "scissors":
      if (computerChoice === "rock") {
        computerWin();
      } else if (computerChoice === "paper") {
        playerWin();
      } else if (computerChoice === "scissors") {
        tie();
      }
      break;
  }

  //////////////////////////////
  // Capitalize First Letter //
  //////////////////////////////

  function playerChoiceCapitalized() {
    const playerChoiceCapitalized =
      playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
    return playerChoiceCapitalized;
  }

  function computerChoiceCapitalized() {
    const computerChoiceCapitalized =
      computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
    return computerChoiceCapitalized;
  }

  ///////////////////////
  // Helper Functions //
  //////////////////////

  function playerWin() {
    playerScore++;
    roundWinner.innerText = `You win! ${playerChoiceCapitalized()} beats ${computerChoiceCapitalized()}!`;
  }

  function computerWin() {
    computerScore++;
    roundWinner.innerText = `You lose! ${computerChoiceCapitalized()} beats ${playerChoiceCapitalized()}!`;
  }

  function tie() {
    roundWinner.innerText = "It's a draw!";
  }

  if (playerScore === 5 || computerScore === 5) {
    gameWinner();
  }

  score();

  function score() {
    currentScore.innerText = `Player: ${playerScore} | Computer: ${computerScore}`;
  }

  function gameWinner() {
    const container = document.getElementById("container");
    container.remove();

    if (playerScore === 5) {
      roundWinner.innerText = "You won the game!";
    } else if (computerScore === 5) {
      roundWinner.innerText = "You lost to the computer!";
    }
  }
}

////////////////////////////////
// OLD CODE FOR THIS PROJECT //
///////////////////////////////

// Human Choice Function:
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

// Re-call functions to play 5 rounds:
// for (let i = 0; i < 5; i++) {
//   const humanSelection = getHumanChoice();
//   const computerSelection = getComputerChoice();
//   playRound(humanSelection, computerSelection);
//   console.log("Human Score: " + humanScore);
//   console.log("Computer Score: " + computerScore);
// }

// console.log Statements:
// console.log("It's a draw! Rock ties with Rock!");
// console.log("You lose! Paper beats Rock!");
// console.log("You win! Rock beats Scissors!");
