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