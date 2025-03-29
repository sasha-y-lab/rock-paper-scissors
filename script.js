// Your game will be played against the computer. You will write a 
// function that randomly returns “rock”, “paper” or “scissors”.


//Part one: computer choice code
// step one: Create a new function named getComputerChoice.


//step two: Write the code so that getComputerChoice will randomly return one of 
// the following string values: “rock”, “paper” or “scissors”.

//Hint: Math.random method returns a random number that’s greater than or 
// equal to 0 and less than 1. Think about how you can use this to conditionally 
// return one of the multiple choices.

// pseudocode

/* 
SEQUENCE
INIT choice1, choice2, choice3 inside of getComputerChoice function;
SET choice1 as "rock", choice2 as "paper", choice3 as "scissors";
    SET new variable compChoice to CALCULATE Math.random method times (choice1 minus choice 2 minus choice 3) plus choice3; //this returns a random number between the specified values
    // the above step only gave me 1 option over and over again. not random. got the right result in another assignment.   


    // NO THESE DON'T SOUND RIGHT
    //    SET new variable and get string of choice1 and convert to number;
      //  SET new variable and get string of choice2 and convert to number;
     //   SET new variable and get string of choice3 and convert to number;
            
        
        //these are the next steps
        GET random number result (compChoice) from Math.random method and convert to the choice name value it is;
                // to do this: 

                // INIT ISNT IT
                // INIT 3 new variables with their choice values: rock is equal to 1, paper is equal to 2, scissors is equal to 3;
                                
                // restart here
                IF Math.random spits out the number 1;
                                THEN the computer's choice is rock;
                                ELSE IF Math.random spits out the number 2;
                                THEN the computer's choice is paper;
                                ELSE Math.random spits out the number 3;
                                THEN the computer's choice is scissors;
                                ENDIF
                                    CALL getComputerChoice RETURNING DISPLAY of a random choice of either rock, paper or scissors.

*/



//global scope

let humanScore = 0;
let computerScore = 0;



function getComputerChoice(choice1, choice2, choice3) {
    choice1 = "rock";
    choice2 = "paper";
    choice3 = "scissors";

    const compChoice = Math.floor(Math.random() * 3) + 1;

    if (compChoice === 1) {
        console.log(choice1);
        return choice1;

    } else if (compChoice === 2) {
        console.log(choice2);
        return choice2;

    } else {
        console.log(choice3);
        return choice3;

    }

}

getComputerChoice(); // it works.



// Now write the logic to get the human choice

// step one: Create a new function named getHumanChoice

// Write the code so that getHumanChoice will return one of the valid choices depending on what the 
// user inputs.
// HINT: Use the prompt method to get the user’s input. consider all inputs as valid responses

// pseudocode

/*

SEQUENCE
INIT choice1, choice2, choice3 inside of getComputerChoice function;
SET choice1 as "rock", choice2 as "paper", choice3 as "scissors";
    SET new variable humanChoice to display text input of human whether, rock, paper or scissors;
        IF prompt method spits out the string "rock";
                                THEN the human's choice is rock;
                                ELSE IF prompt method spits out the string "paper";
                                THEN the human's choice is paper;
                                ELSE prompt method spits out the string "scissors";
                                THEN the human's choice is scissors;
                                ENDIF
                                    CALL getHumanChoice RETURNING DISPLAY of a random choice of either rock, paper or scissors.






*/


function getHumanChoice(choice1, choice2, choice3) {
    choice1 = "rock";
    choice2 = "paper";
    choice3 = "scissors";

const humanChoice = prompt("please type in either rock, paper or scissors in lowercase to play");

if (humanChoice === "rock") {
    
    console.log(choice1);
return choice1;

} else if (humanChoice === "paper") {
    console.log(choice2);
    return choice2;

} else if (humanChoice === "scissors") { // had to define this for step 5
    console.log(choice3);
    return choice3;

} else { // had to add this for step 5
    console.log();
    return;
}



}

getHumanChoice();



// Step 4: Declare the players score variables

// Your game will keep track of the players score. You will write variables 
// to keep track of the players score.

// Create two new variables named humanScore and computerScore in the global scope.
// Initialize those variables with the value of 0

// Step 5: Write the logic to play a single round
// Your game will be played round by round. You will write a function that takes the
// human and computer player choices as arguments, plays a single round, increments 
// the round winner’s score and logs a winner announcement.

// Create a new function named playRound

// Define two parameters for playRound: humanChoice and computerChoice. Use these two 
// parameters to take the human and computer choices as arguments.

// Make your function’s humanChoice parameter case-insensitive so that players can 
// input “rock”, “ROCK”, “RocK”, or other variations.

    // pseudocode 
    /* 
    SEQUENCE
    INIT function ignoreCase, with parameters of humanChoice and theRightChoice;
    CALCULATE humanChoice input as uppercase and check if it is equal to the correct input in uppercase
    // but now I have to input "rock", "paper", and "scissors" into theRightChoice in ignoreCase function
        SET theRightChoice to equal a list which includes rock, paper, scissors // had to put this above return
        // above had to turn from arrays to OR symbols
        // next

        IF humanChoice input matches theRightChoice input when they are both uppercase // change humanChoice to getHumanChoice()
        THEN display theRightChoice in lowercase
    */

        //refresh:

        // Your game will be played round by round. You will write a function that takes the
// human and computer player choices as arguments, plays a single round, increments 
// the round winner’s score and logs a winner announcement.

//pseudocode
/*
SEQUENCE
    INIT playRound function, with parameters humanCHoice, computerChoice;
    INIT user variable, SET as "Human" OR "The Computer" OR "Human and The Computer"
    SET points variable to equal 1
    SET Winner variable as empty 
    SET WinnerScore to ++points
    SET HumanScore to empty // already in global
    SET ComputerScore to empty // already in global
    
    CASE user OF
    condition 1: "Human and The Computer"
                 If humanChoice is rock, paper or scissors and computerChoice is rock, paper or scissors at the same time
                 It's a tie and they both get points of 1 
                 
    condition 2: "Human"
                 If humanChoice is rock and computerChoice is paper, humanChoice wins and gets 1 point

    condition 3: "Human"
                 If humanChoice is rock and computerChoice is scissors, then humanChoice wins and gets 1 point

                 "The Computer"
    condition 4: If humanChoice is paper and computerChoice is rock then computerChoice wins and gets 1 point

    condition 5: "The Computer"
                 If humanChoice is paper and computerChoice is scissors, then computerChoice wins and gets 1 point

    condition 6: "The Computer"
                 If humanChoice is scissors and computerChoice is rock, then computerChoice wins and gets 1 point
    
    condition 7: "Human"
                 If humanChoice is scissors and computerChoice is paper then humanChoice wins and gets 1 point

    IF user is equal to "Human" and  is the winner 
    THEN increase HumanScore with WinnerScore and update HumanScore at the end of the round;

*/


function playRound(humanChoice, computerChoice) {

   choice1 = "rock";
    choice2 = "paper";
    choice3 = "scissors";
        
        theRightChoice = choice1 || choice2 || choice3;
    humanChoice = getHumanChoice;

    computerChoice = getComputerChoice; 

    theRightChoice = humanChoice; 

    const userHuman = "Human";
    
    const userComputer = "The Computer";

    let points = 1;

    let winnerScore = 0;



    function ignoreCase(humanChoice, theRightChoice) {

   choice1 = "rock";
    choice2 = "paper";
    choice3 = "scissors";
        
        theRightChoice = [choice1, choice2, choice3];
    humanChoice = getHumanChoice;

    computerChoice = getComputerChoice;
    theRightChoice = humanChoice;

// found on mdn to do this for case insensitivity: a.localeCompare(b, "en", { sensitivity: "base" }) instead of === to uppercase
        if (theRightChoice.localeCompare(humanChoice, "en", { sensitivity: "base" })) {
            return;
        }
     } // return;
     

      ignoreCase();

      
      // humanScore 
// computerScore 

    //switch (user) {

      //  case "Human and The Computer":

      //debugging

      console.log(theRightChoice === "paper" && computerChoice === 2);
        
            
                if (theRightChoice === "paper" && computerChoice === 2) {
                //give them both 1 point
                humanScore = points;
                computerScore = points;
                winnerScore = ++humanScore && ++computerScore;
                console.log("The winner is: " + userHuman + " and " + userComputer + " ! Human's Score: " + humanScore + " The Computer's Score: " + computerScore); 
               // return;
               
                
            } 
            
            else if (theRightChoice === "rock" & computerChoice === 1) {
                humanScore = points;
                computerScore = points;
                winnerScore = ++humanScore && ++computerScore;
                console.log("The winner is: " + userHuman + " and " + userComputer + " ! Human's Score: " + humanScore + " The Computer's Score: " + computerScore); 
                //return;

            } 
            
            else if (theRightChoice === "scissors" && computerChoice === 3) {
                humanScore = points;
                computerScore = points;
                winnerScore = ++humanScore && ++computerScore;
                console.log("The winner is: " + userHuman + " and " + userComputer + " ! Human's Score: " + humanScore + " The Computer's Score: " + computerScore); 
                //return;

            } 
           /* else {
                console.log();
            }
            break;

            case "Human":
*/
               else if (theRightChoice === "rock" && computerChoice === 2) { // || theRightChoice === "rock" && computerChoice === 3 || theRightChoice === "scissors" &&computerChoice === 2
                    humanScore = points;
                    winnerScore = ++humanScore;
                    console.log("The winner is: " + userHuman + " ! Score: " + humanScore);
                    //return;

                } else if (theRightChoice === "rock" && computerChoice === 3) {
                    humanScore = points;
                    winnerScore = ++humanScore;
                    console.log("The winner is: " + userHuman + " ! Score: " + humanScore);
                    //return;
                    
                } else if (theRightChoice === "scissors" && computerChoice === 2) {
                    humanScore = points;
                    winnerScore = ++humanScore;
                    console.log("The winner is: " + userHuman + " ! Score: " + humanScore);
                    //return;

               } 
               /* 
               else {
                    console.log();
                } 

            break;

                case "The Computer": 
           */     
               else if (theRightChoice === "paper" && computerChoice === 1) {
                    computerScore = points;
                    winnerScore = ++computerScore;
                console.log("The winner is: " + userComputer + "! Score: " + computerScore);
                //return;

                } else if (theRightChoice === "paper" && computerChoice === 3) {
                    computerScore = points;
                    winnerScore = ++computerScore;
                    console.log("The winner is: " + userComputer + "! Score: " + computerScore);
                //return;

                } else if (theRightChoice === "scissors" && computerChoice === 1) {
                    computerScore = points;
                    winnerScore = ++computerScore;
                    console.log("The winner is: " + userComputer + "! Score: " + computerScore);
                //return;

                } else {
                    console.log();
                } 

           
            

                /*    break;

                default:
                    return;
        } */


//console.log(theRightChoice === "paper" && computerChoice === 2 && theRightChoice === computerChoice);
//console.log(theRightChoice === "rock" && computerChoice === 1 && theRightChoice === computerChoice);
//console.log(theRightChoice === "scissors" && computerChoice === 3 && theRightChoice === computerChoice);



}

playRound();