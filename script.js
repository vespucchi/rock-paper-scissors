function getComputerChoice() { 
    let choice = Math.floor(Math.random() * 100 + 1);
    
    if (choice <= 33) { return "rock" }
        else if (choice >= 34 && choice <= 66) { return "paper" }
        else if (choice >= 67) { return "scissors"}
}

function getHumanChoice() { 
    let choice = prompt("Choice: ");
    return choice.toLowerCase(); 
}

function playGame() {
    let humanSelection;
    let computerSelection;
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++)
    {
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

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

}