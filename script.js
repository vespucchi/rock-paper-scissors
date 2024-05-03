function getComputerChoice() { 
    let choice = Math.floor(Math.random() * 100 + 1);
    
    if (choice <= 33) { return "rock" }
        else if (choice >= 34 && choice <= 66) { return "paper" }
        else if (choice >= 67) { return "scissors"}
}

function updateScoreboard(humanScore, computerScore) {
    let human = document.querySelector("#human");
    let pc = document.querySelector("#pc");

    human.textContent = humanScore;
    pc.textContent = computerScore;
}

function playGame() {
    let humanSelection;
    let computerSelection;
    let humanScore = 0;
    let computerScore = 0;
    let buttons = document.querySelectorAll("button");
    
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            if(humanScore !== 5 && computerScore !== 5) {
                humanSelection = button.textContent;

                computerSelection = getComputerChoice();

                playRound(humanSelection, computerSelection);
                updateScoreboard(humanScore, computerScore);
                if(humanScore === 5 || computerScore === 5) {
                    printWinner(humanScore, computerScore);
                }
            }
        })
    })


    function playRound(human, computer) {
        if (human === "rock") {
            switch (computer) {
                case "scissors": 
                    ++humanScore 
                    break;
                case "paper": 
                    ++computerScore;
                    break;
            }
        } else if (human === "paper") {
            switch (computer) {
                case "rock": 
                    ++humanScore 
                    break;
                case "scissors":
                    ++computerScore;
                    break;
            }
        } else if (human === "scissors") {
            switch (computer) {
                case "paper": 
                    ++humanScore 
                    break;
                case "rock": 
                    ++computerScore;
                    break;
            }
        }
    }

    function printWinner(human, computer) {
        let winner = document.querySelector("#winner");

        if (human > computer) {
            winner.textContent = "You won the game! :)";
        } else {
            winner.textContent = "You lost the game! :(";
        }
    }
}

playGame();