$(function() {
    let choices = ['rock', 'paper', 'scissors'];

    $(".move-buttons div").click(function(event){
        play($(event.target).data("move"));
    })

    function play (playerChoice) {
        let cChoice = computerChoice();
        winner(cChoice, playerChoice);
        
    }

    function computerChoice () {
        return choices[Math.floor(Math.random() * 3)];
    }
    
    function winner (cChoice, playerChoice) {
        console.log(cChoice, playerChoice);
        if (playerChoice === "rock" && cChoice === "scissors"){
            printResult (false, true, false);
        } else if (playerChoice === "paper" && cChoice === "rock"){
            printResult (false, true, false);
        } else if (playerChoice === "scissors" && cChoice === "paper"){
            printResult (false, true, false);
        } else if (cChoice === "rock" && playerChoice === "scissors"){
            printResult (true, false, false);
        } else if (cChoice === "paper" && playerChoice === "rock"){
            printResult (true, false, false);  
        } else if (cChoice === "scissors" && playerChoice === "paper"){
            printResult (true, false, false);
        } else { 
            printResult (false, false, true);
        }
    }

    function printResult (computerWins, playerWins, draw) {
        console.log(computerWins,playerWins, draw);
        if (playerWins) {
           let playerScore = parseInt ($("#playerScore").html()); 
           playerScore ++; 
           $ ("#playerScore").html(playerScore);
           $ ("#result").html("You win!");
         } else if (computerWins) {
            let computerScore = parseInt ($("#computerScore").html());
            computerScore ++;
            $ ("#computerScore").html(computerScore);
            $ ("#result").html("Computer wins!");
        } else {
            $ ("#result").html("It's a draw!");

        }

    }
});