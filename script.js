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
    }
}