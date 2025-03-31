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

const userHuman = "Human";
    
const userComputer = "The Computer";

let humanScore = 0;
let computerScore = 0;



// external function to carry values of variables: like score

 
 let numberOfRounds = 1;
 let increaseRoundsByOne; // = ++numberOfRounds;
let winnerScore;

let winner;
let loser;

let updatedHumanScore;
let updatedComputerScore;


/* might be redundant

function scoreOfWinner(winnerScore) {
    // `Winner Score: ${winnerScore}`; don't want this printed
    return winnerScore;
}
// doesn't need a variable to put into

*/


/* not sure if this is needed
 function declareWinner(winner, loser) {
   // `Winner: ${winner}, Loser: ${loser}`;
    return winner & loser;

 } 
 //doesn't need a variable to put into or an actual code in it. It's just passing values
*/

 /*
 this could be not needed
 function howMuchRounds(numberOfRounds) {
   // `Round: ${numberOfRounds}`;
    return numberOfRounds;

}

// needs a variabe to go into or an actual code in it. It's just passing values

*/

/*

// this function waits for 10 seconds - for playRoundAgain function

let x;

function wait10Seconds(x) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(x);
      }, 10000);
    });
  }
// this waits 
  async function f1() {
  await wait10Seconds(10);
    
  }

  // call f1(); in playRoundAgain()
  
*/



function increaseRounds(increaseRoundsByOne) {
   // `increaseRoundsByOne: ${increaseRoundsByOne}`;
    // show how to increase rounds
    
    if (numberOfRounds === 1) {
        increaseRoundsByOne = ++numberOfRounds;
    
    } else if (numberOfRounds === 2) {
        increaseRoundsByOne = numberOfRounds + 2;
    } else if (numberOfRounds === 3) {
        increaseRoundsByOne = numberOfRounds + 3;
    } else if (numberOfRounds === 4) {
        increaseRoundsByOne = numberOfRounds + 4;
    } else if (numberOfRounds === 5) {
        increaseRoundsByOne = numberOfRounds + 5;
    } else {
        return;
    }
   
   return increaseRoundsByOne;
        
     }

    // let roundX = increaseRounds; 





// processes the total score

function processScoreResult(updatedHumanScore, updatedComputerScore) {
   // console.log(`Updated Human Score: ${updatedHumanScore}, Updated Computer Score: ${updatedComputerScore}`);
    
    if (numberOfRounds === 2) {
        
        if (winner === userHuman) {

            updatedHumanScore = ++humanScore;


        } else if (winner === userComputer) {
            updatedComputerScore = ++computerScore;
        } else {
            return;
        }
        
       // console.log(processScoreResult(updatedHumanScore, updatedComputerScore));
    } else if (numberOfRounds === 3) {

        if (winner === userHuman) {

            updatedHumanScore = humanScore + 2;


        } else if (winner === userComputer) {
            updatedComputerScore = computerScore + 2;
        } else {
            return;
        }

    } else if (numberOfRounds === 4) {

        if (winner === userHuman) {

            updatedHumanScore = humanScore + 3;


        } else if (winner === userComputer) {
            updatedComputerScore = computerScore + 3;
        } else {
            return;
        }
 
    } else if (numberOfRounds === 5) {

        if (winner === userHuman) {

            updatedHumanScore = humanScore + 4;


        } else if (winner === userComputer) {
            updatedComputerScore = computerScore + 4;

        } else {
            return;
        }

        return "Final Score: " + userHuman + ": " + updatedHumanScore + ", " + userComputer + ": " + updatedComputerScore;
    
    } else {
        return;
    }

    
}

// total score needs a varaible to go into // unfortunatly it didn't work

// let totalScore = processScoreResult;




// start of other functions for main game

function getComputerChoice(choice1, choice2, choice3) {
    choice1 = "rock";
    choice2 = "paper";
    choice3 = "scissors";

    const computerChoice = Math.floor(Math.random() * 3) + 1;

    // adding a mapping of computerChoice number values to the string values they correspond to for step 5:
    // const map1 = new Map();
    // map1.set("a", 1);
    // map1.set("b", 2);
    // map1.set("c", 3);
    
    const computerChoiceMap = new Map();

    computerChoiceMap.set("rock", 1);
    computerChoiceMap.set("paper", 2);
    computerChoiceMap.set("scissors", 3);

    // testing the new number to string map
// console.log(computerChoiceMap.get("rock")); // yes this works
// console.log(computerChoiceMap.get("paper")); //yes this works
// console.log(computerChoiceMap.get("scissors")); // yes this works



    if (computerChoice === 1) { // changed compChoice to computerChoice
        console.log(choice1);
        return choice1;

    } else if (computerChoice === 2) {
        console.log(choice2);
        return choice2;

    } else if (computerChoice === 3) {
        console.log(choice3);
        return choice3;

    } else {
        return;
    }


}

// commenting out calling the function as it keeps executing without a log
// getComputerChoice(); // it works.

//commenting a variable to put getComputerChoice result in

let computerResult = getComputerChoice;



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

let humanChoice = prompt("please type in either rock, paper or scissors in lowercase to play"); // changed const to let

// going to make humanChoice input case insensitive for step 5
let standardChoice = choice1 || choice2 || choice3;

let ignoreCase = standardChoice.localeCompare(humanChoice, "en", { sensitivity: "base" });

   // console.log(typeof ignoreCase); // says ignoreCase is a number? now I must convert a number to string by mapping again

let humanChoiceMap = new Map();

humanChoiceMap.set(0, "rock");
humanChoiceMap.set(1, "paper"); 
humanChoiceMap.set(-1, "scissors");

if (ignoreCase === 0) { 
    
    console.log(choice1); // choice1 changed to ignoreCase which outputs 0
    return choice1;


} else if (ignoreCase === 1) {
    console.log(choice2); // ignoreCase outputs 1
    return choice2;

} else if (ignoreCase === -1) { // had to define this for step 5
    console.log(choice3); // ignoreCase outputs -1
    return choice3;

} else { // had to add this for step 5
    return;
}


}

// commenting out calling the function as it keeps executing without a log
// getHumanChoice(); // it works

//commenting a variable to put getHumanChoice result in

let humanResult = getHumanChoice;




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

// there was something playing the human prompt twice & it was the initial codes at the top.


// step 6: Move your playRound function and score variables so that they’re declared
//  inside of the new playGame function

function playGame() {


function playRound(humanChoice, computerChoice) { // the parameters are the choices

   

    /*
   // let points = 0;

   // humanScore = points;
   // computerScore = points; redundant */

   

    let winnerStatement;

    let roundScore;
/*
    let choice1 = "rock";
    let choice2 = "paper";
    let choice3 = "scissors";

    */

    // commenting out variables humanChoice and computerChoice doesn't break the code but two prompts are happening still

   // humanChoice = ; // I think humanSelection is prompting twice as a value for humanChoice, same with computerSelection for computerChoice

   // computerChoice = ;

     //pseudo code

                // if humanChoice is "rock", check computerChoice and if it is also rock, then it's a tie and
                // both get 1 point plus an increment. Print the winner with score. but then check all answers





        switch (humanChoice) { //changing humanChoice to getHumanChoice gave undefined log

            case "rock":

            switch (computerChoice) { // changing all computerChoice to getComputerChoice gave undefined log
                
               // case "rock" || "scissors" || "paper":

 /* for (humanScore === 0 && computerScore === 0, humanScore <= 2 && computerScore <= 2, ++humanScore && ++computerScore) {
    // humanScore <= 2 || computerScore <= 2) {
// if (winnerScore === ++humanScore && ++computerScore;) {

// when userHuman wins, increase score by 1 point & when userComputer wins, increase score by 1 point


    console.log(updatedHumanScore);
console.log(updatedComputerScore);
console.log(winnerScore);
return winnerScore && updatedHumanScore && updatedComputerScore;

} // this is if endbrackets */
                
                
                
                case "rock":
                    //humanScore = points;
                    //computerScore = points;
                    winnerScore = ++humanScore && ++computerScore;
                    updatedHumanScore = 1;
                    updatedComputerScore = 1;
                    winner = userHuman && userComputer;
                    loser = "No one";
                    

                    roundScore = userHuman + ": " + humanScore + " | " + userComputer + ": " + computerScore;
                    winnerStatement = "It's a tie! Both " + userHuman + " - Score:" + humanScore + " and " + userComputer + " - Score:" + computerScore + " won!";
                        console.log(winnerStatement + " | " + roundScore);
                        return playRoundAgain();
                      //  return choice1 + " wins! " + roundScore; // took out humanChoice + " " + computerChoice
                        

                        
            
                case "paper":
                   // humanScore = points;
                   winnerScore = ++humanScore;
                   updatedHumanScore = 1;
                   updatedComputerScore = 0;
                   winner = userHuman;
                   loser = userComputer;
                   

                    roundScore = userHuman + ": " + humanScore + " | " + userComputer + ": " + computerScore;
                    winnerStatement = userHuman + " - Score:" + humanScore + " won!";
                    console.log(winnerStatement + " | " + roundScore);
                    return playRoundAgain();
                    //    return humanChoice + " wins! " + roundScore;
                   


                case "scissors":
                   // humanScore = points;
                   winnerScore = ++humanScore;
                   updatedHumanScore = 1;
                   updatedComputerScore = 0;
                    winner = userHuman;
                    loser = userComputer;
                   

                    roundScore = userHuman + ": " + humanScore + " | " + userComputer + ": " + computerScore;
                    winnerStatement = userHuman + " - Score:" + humanScore + " won!";
                    console.log(winnerStatement + " | " + roundScore);
                    return playRoundAgain();
                  //  return humanChoice + " wins! " + roundScore;
                        
                    

                        default:
                            return;
            
                    }
                    

            case "paper":

                switch (computerChoice) {
                    case "rock":
                        // computerScore = points;
                         winnerScore = ++computerScore;

                         updatedHumanScore = 0;
                    updatedComputerScore = 1;
                    winner = userComputer;
                    loser = userHuman;
                    

                        roundScore = userHuman + ": " + humanScore + " | " + userComputer + ": " + computerScore;
                        winnerStatement = userComputer + " - Score:" + computerScore + " won!";
                        console.log(winnerStatement + " | " + roundScore);
                        return playRoundAgain();
                      //  return computerChoice + " wins! " + roundScore;
                      
                      
            
                    case "paper":
                        //humanScore = points;
                        //computerScore = points;
                        winnerScore = ++humanScore && ++computerScore;
                        updatedHumanScore = 1;
                        updatedComputerScore = 1;
                        winner = userHuman && userComputer;
                        loser = "No one";
                        
                        
                        roundScore = userHuman + ": " + humanScore + " | " + userComputer + ": " + computerScore;
                        winnerStatement = "It's a tie! Both " + userHuman + " - Score:" + humanScore + " and " + userComputer + " - Score:" + computerScore + " won!";
                        console.log(winnerStatement + " | " +roundScore);
                        return playRoundAgain();
                       // return choice2 + " wins! " + roundScore; // removed humanChoice + " " + computerChoice
                       


                    case "scissors":
                        // computerScore = points;
                        winnerScore = ++computerScore;
                        updatedHumanScore = 0;
                        updatedComputerScore = 1;
                        winner = userComputer;
                        loser = userHuman;
                        

                        roundScore = userHuman + ": " + humanScore + " | " + userComputer + ": " + computerScore;
                        winnerStatement = userComputer + " - Score:" + computerScore + " won!";
                        console.log(winnerStatement + " | " + roundScore);
                        return playRoundAgain();
                      // return computerChoice + " wins! " + roundScore;
                        

                        
                        default:
                            return;
        }

            case "scissors":

                switch (computerChoice) {
                    
                    case "rock":
                        // computerScore = points;
                        winnerScore = ++computerScore;
                        updatedHumanScore = 0;
                        updatedComputerScore = 1;
                        winner = userComputer;
                        loser = userHuman;
                        
                      
                        roundScore = userHuman + ": " + humanScore + " | " + userComputer + ": " + computerScore;
                        winnerStatement = userComputer + " - Score:" + computerScore + " won!";
                        console.log(winnerStatement + " | " + roundScore);
                        return playRoundAgain();
                       // return computerChoice + " wins! " + roundScore;
                       


                    case "paper":
                       // humanScore = points;
                        winnerScore = ++humanScore;

                        updatedHumanScore = 1;
                        updatedComputerScore = 0;
                        winner = userHuman;
                        loser = userComputer;
                        

                        roundScore = userHuman + ": " + humanScore + " | " + userComputer + ": " + computerScore;
                        winnerStatement = userHuman + " - Score:" + humanScore + " won!";
                        console.log(winnerStatement + " | " + roundScore);
                        return playRoundAgain();
                      //  return humanChoice + " wins! " + roundScore;
                      


                    case "scissors":
                        //humanScore = points;
                        //computerScore = points;
                        
                        winnerScore = ++humanScore && ++computerScore;                    
                        
                        updatedHumanScore = 1;
                        updatedComputerScore = 1;
                        winner = userHuman && userComputer;
                        loser = "No one";
                        
                        
                        roundScore = userHuman + ": " + humanScore + " | " + userComputer + ": " + computerScore;
                        winnerStatement = "It's a tie! Both " + userHuman + " - Score:" + humanScore + " and " + userComputer + " - Score:" + computerScore + " won!";
                        console.log(winnerStatement + " | " + roundScore);
                        return playRoundAgain();
                        // return choice3 + " wins! " + roundScore; // removed humanChoice + " " + computerChoice
                        

                                            
                        default:
                            return;

}                        

    
} // main switch endbacket 



} // this is the playRound function endbracket


// below code taken from assignment step 5 example

let humanSelection = humanResult(); // changed getHumanChoice() to humanResult() & const to let
let computerSelection = computerResult(); // changed getComputerChoice() to computerResult() & const to let 

//playRound(humanSelection, computerSelection); //commenting out as it didn't do anything


console.log(playRound(humanSelection, computerSelection)); // this line was printing the winning message for a second time



// start playRoundAgain function

function playRoundAgain() {
    //`Round: ${roundX}, Total Score: ${totalScore}`; don't want this printed yet
    
    // play 4 more rounds without using loops
    
    //pseudo code
    /*
    SEQUENCE
    IF round one has completed
    THEN play again
    ELSEIF round two has completed
    THEN update rounds and scores but do not print
    THEN play again
    ELSEIF round 3 has completed
    THEN update rounds and scores but do not print
    THEN play again
    ELSEIF round 4 has completed
    THEN update rounds and scores but do not print
    THEN play again
    ELSEIF round 5 has completed
    Then update rounds and score but this time also print total score.
    
    */

    

    // need to add a wait 10 seconds before playing
    
    if (numberOfRounds === 1) { // updatedHumanScore <= 1 && updatedComputerScore <= 1
        
       setTimeout(() => {
            
        console.log(playRound(humanSelection, computerSelection));
        increaseRounds(increaseRoundsByOne);
        processScoreResult(updatedHumanScore, updatedComputerScore);

    }, 10000); // 10 seconds
    
    } else if (numberOfRounds === 2) {
        
        setTimeout(() => {

        console.log(playRound(humanSelection, computerSelection));
        increaseRounds(increaseRoundsByOne);
        processScoreResult(updatedHumanScore, updatedComputerScore);
    
    }, 10000); // 10 seconds

    } else if (numberOfRounds === 3) {
        
        setTimeout(() => {

        console.log(playRound(humanSelection, computerSelection));
        increaseRounds(increaseRoundsByOne);
        processScoreResult(updatedHumanScore, updatedComputerScore);

    }, 10000); // 10 seconds

    } else if (numberOfRounds === 4) {
        
        setTimeout(() => {

        increaseRounds(increaseRoundsByOne)
        processScoreResult(updatedHumanScore, updatedComputerScore);
        console.log(processScoreResult(updatedHumanScore, updatedComputerScore));

    }, 10000); // 10 seconds

    } else {
        return;
    }
    
    
        // return roundX && totalScore;
    
} // end of playRoundAgain



} // end of playGame


playGame();

// I changed the return from winnerStatement in the switch statements 
// to the result + "wins" and now it displays the result.

// console.log(playRound); // displays the whole function
// console.log(playRound()); // undefined

// step6: CALL playRound function 4 times in playGame function and after each call state the total score of 
// userHuman and userComputer

//updatedHumanScore


//updatedComputerScore = ;

//humanSelectionMap = new Map();
//humanSelectionMap.set(computerChoice.scissors.roundScore, humanScore === 1 && computerScore === 1);


//humanSelectionMap.get(humanScore && computerScore);
/*
humanScore = ;
computerScore <= 1;

let winnerScore = ++humanScore && ++computerScore;

let updatedScores = winnerScore;

let roundTwoScore = ++updatedScores;
let roundThreeScore = ++roundTwoScore;
let roundFourScore = ++roundThreeScore;
let roundFiveScore = ++roundFourScore;

console.log(updatedScores);

*/

//console.log(winnerScore + "winnerScore");


/*
function playRoundTwo() {

    if (humanScore <= 2 && computerScore <= 2 && roundScore === 2) {
        // play this round and add this rounds score to the winner's score

        playRound((humanSelection, computerSelection));
        // print the winner's names with their scores
        console.log(winnerScore);
        return winnerScore;

    } 

    return roundTwoScore;
}  
 playRoundTwo();

*/

/*
winnerScore = (humanScore + roundTwoScore) || (computerScore + roundTwoScore);

function playRoundThree() {
    // play this round and add this rounds score to the winner's score
        
    if (humanScore <= 4 && computerScore <= 4 && roundScore === 4) {

        playRound((humanSelection, computerSelection));
        console.log(winnerScore);
        return winnerScore;
    }

    return roundThreeScore;
}

//playRoundThree();

winnerScore = (humanScore + roundThreeScore) || (computerScore + roundThreeScore);

function playRoundFour() {
    // play this round and add this rounds score to the winner's score
        
    if (humanScore <= 8 && computerScore <= 8 && roundScore === 8) {

        playRound((humanSelection, computerSelection));
        console.log(winnerScore);
        return winnerScore;
    }

    return roundFourScore;
}
//playRoundFour();

winnerScore = (humanScore + roundFourScore) || (computerScore + roundFourScore);

function playRoundFive() {
    // play this round and add this rounds score to the winner's score
        
    if (humanScore <= 10 && computerScore <= 10 && roundScore === 10) {

        playRound((humanSelection, computerSelection));
        console.log(winnerScore);
        return winnerScore;
    }

    return roundFiveScore;
}
//playRoundFive();

playRoundTwo();
playRoundThree();
playRoundFour();
playRoundFive();
    
*/















// Define two parameters for playRound: humanChoice and computerChoice. Use these two 
// parameters to take the human and computer choices as arguments.

// Make your function’s humanChoice parameter case-insensitive so that players can 
// input “rock”, “ROCK”, “RocK”, or other variations. (did this inside of getHumanChoice();)

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


/* old code - coudln't get console.log to run on if statements

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
*/ /*
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
           */  /*   
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

           */
            

                /*    break;

                default:
                    return;
        } */


//console.log(theRightChoice === "paper" && computerChoice === 2 && theRightChoice === computerChoice);
//console.log(theRightChoice === "rock" && computerChoice === 1 && theRightChoice === computerChoice);
//console.log(theRightChoice === "scissors" && computerChoice === 3 && theRightChoice === computerChoice);

/*

}

playRound(); */


// Step 6: Write the logic to play the entire game

// Your game will play 5 rounds. You will write a function named playGame that 
// calls playRound to play 5 rounds, keeps track of the scores and declares a 
// winner at the end.

// pseudo code

/*
SEQUENCE
CALL playRound function 4 times in playGame function and after each call state the total score of 
userHuman and userComputer

*/

