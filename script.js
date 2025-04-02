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

// const userHuman = "Human";
    
// const userComputer = "The Computer";

//let humanScore = 0;
//let computerScore = 0;



// external function to carry values of variables: like score

 
 
//let winnerScore;

// let winner;
// let loser;

//let updatedHumanScore;
//let updatedComputerScore;

//let roundScore //= userHuman + ": " + updatedHumanScore + " | " + userComputer + ": " + updatedComputerScore;
//let winnerStatement;
//let finalScore;
//let scoreResult;



/* might be redundant

function scoreOfWinner(winnerScore) {
    // `Winner Score: ${winnerScore}`; don't want this printed
    return winnerScore;
}
// doesn't need a variable to put into

*/


/* isn't needed
 function declareWinner(winner, loser) {
    `Winner: ${winner}, Loser: ${loser}`;
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

/*
let numberOfRounds = 1;


function increaseRounds() { //increaseRoundsByOne
   // `increaseRoundsByOne: ${increaseRoundsByOne}`;
    // show how to increase rounds
    
    
    let increaseRoundsByOne = null; 

    if (numberOfRounds === 1) {
      increaseRoundsByOne = numberOfRounds += 1;
      return increaseRoundsByOne; // gives round 2
    
    } else if (numberOfRounds === 2) {
        increaseRoundsByOne = numberOfRounds += 1; // gives round 3
        return increaseRoundsByOne;
    } else if (numberOfRounds === 3) {
        increaseRoundsByOne = numberOfRounds += 1;
        return increaseRoundsByOne;
    } else if (numberOfRounds === 4) {
        increaseRoundsByOne = numberOfRounds += 1;
        return increaseRoundsByOne;
    } else if (numberOfRounds === 5) {
        increaseRoundsByOne = numberOfRounds += 1;
        return increaseRoundsByOne;
    } else {
        return;
    }
   
   //return increaseRoundsByOne;
        
     } */

 //    let roundNumber = increaseRounds;
    // roundX is going to play playRound aka playGame
// not sure if needed
/*
function roundX() {

  return  playGame();

}

*/


/*
function startTimer() {

    setTimeout(refreshPlay, 10000);

   } 

   */


 /*   
   function wait5Seconds() {
    return new Promise(resolve => {
      setTimeout((resolve, 5000)); 
    });
  }
  
  async function waitNow() {
    
  await wait5Seconds(); 
   
  }
  
  waitNow();

*/


/*
// processes the total score

function refreshPlay(userHuman, userComputer, roundScore, winnerStatement, humanScore, computerScore, winner, scoreResult) { //processScoreResult(updatedHumanScore, updatedComputerScore)
   // console.log(`Updated Human Score: ${updatedHumanScore}, Updated Computer Score: ${updatedComputerScore}`);
  // userHuman = "Human";
  // userComputer = "The Computer";
   
   //let winnerStatement;
   winner = null;
   userHuman = null;

   let updatedHumanScore = humanScore;
 let updatedComputerScore = computerScore; 
   roundScore = null;
   scoreResult = null;
   
  
  let finalScore;

   if (numberOfRounds === 1) {
    


    if (winner === userHuman && winner === userComputer) { // this round 1 has already happened I guess
        // it is now after round one results.

       // updatedHumanScore += 1; // humanScore to result
       // updatedComputerScore += 1; // computerScore
    // winnerStatement = "It's a tie! Both " + userHuman + " - Score: " + updatedHumanScore + " and " + userComputer + " - Score: " + updatedComputerScore + " won!";
      
    
    increaseRounds();
         startTimer(); 
         
        return { updatedHumanScore, updatedComputerScore }
 
     // console.log(scoreResult);
      //return console.log({ updatedHumanScore, updatedComputerScore, numberOfRounds, winner, userHuman, userComputer }); //console.log({ increaseRounds(){}, getHumanChoice(){}, getComputerChoice(){}, startTimer(){} }); // updatedHumanScore, updatedComputerScore
    }

    

    else if (winner === userHuman) {

        //updatedHumanScore += 1;
        //updatedComputerScore += 0;
      //  winnerStatement = "It's a tie! Both " + userHuman + " - Score: " + updatedHumanScore + " and " + userComputer + " - Score: " + updatedComputerScore + " won!";
     // winnerStatement = userHuman + " - Score: " + updatedHumanScore + " won!";
     // console.log(scoreResult);
     
     increaseRounds();
     startTimer(); 
    
     return { updatedHumanScore, updatedComputerScore }
      //return { updatedHumanScore, updatedComputerScore, numberOfRounds, winner, userHuman, userComputer }; //console.log({ increaseRounds(){}, getHumanChoice(){}, getComputerChoice(){}, startTimer(){} }); //updatedHumanScore, updatedComputerScore

    } else if (winner === userComputer) {
        //updatedHumanScore += 0;
       // updatedComputerScore += 1;
      
       
       increaseRounds();
        startTimer(); 
        

        //winnerStatement = userComputer + " - Score: " + updatedComputerScore + " won!";
       // console.log(scoreResult);
       // return console.log({ increaseRounds, getHumanChoice, getComputerChoice, startTimer }); //updatedHumanScore, updatedComputerScore
       //return { updatedHumanScore, updatedComputerScore, numberOfRounds, winner, userHuman, userComputer }; //console.log({ increaseRounds(){}, getHumanChoice(){}, getComputerChoice(){}, startTimer(){} });
       return { updatedHumanScore, updatedComputerScore }

    } 
    return console.log({ updatedHumanScore, updatedComputerScore, numberOfRounds, winner, userHuman, userComputer });

   }

   */

   /*

   function getWinner(humanSelection, computerSelection) {

     //if (numberOfRounds === 2) { // && updatedHumanScore <= 2  && updatedComputerScore <= 2 
        // this is while round 1 has ended and the round has increased to 2

        // what is next? it should play
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();

        getHumanChoice(); 
        getComputerChoice();

        updatedHumanScore = null; 
        updatedComputerScore = null;
        let winner = null;

        // next it should declare a winner.

       // if (humanSelection === "rock" 

       switch (humanSelection) { 

        case "rock":

            if (computerSelection === "rock") {

                winner === userHuman || userComputer;

            } else if (computerSelection === "paper") {
               
                winner === userHuman;


            } else if (computerSelection === "scissors") {

                winner === userHuman;

            }

            break;

        case "paper":

            if (computerSelection === "rock") {

                winner === userComputer;

            } else if (computerSelection === "paper") {
               
                winner === userHuman || userComputer;


            } else if (computerSelection === "scissors") {

                winner === userComputer;

            }

            break;

        case "scissors":
            
        if (computerSelection === "rock") {

            winner === userComputer;

        } else if (computerSelection === "paper") {
           
            winner === userHuman;


        } else if (computerSelection === "scissors") {

            winner === userHuman || userComputer;

        }

        break;


           default:
            break;

    }  

    return winner
}


    function determineWinner(humanSelection, computerSelection, numberOfRounds, updatedHumanScore, updatedComputerScore, userHuman, userComputer) {

       let winner = null;
     //  let updatedHumanScore = humanScore;
      // let updatedComputerScore = computerScore;

       // get winner based on choices
       winner = getWinner(humanSelection, computerSelection);
let roundScore = null;
let scoreResult = null;

// update based on results.


        if (winner === userHuman || winner === userComputer) { 
            // this is after round two has finished
            // after round 2 finishes it should update both scores and post a updated scoreResult statement

            updatedHumanScore += 1;
            updatedComputerScore += 1;
            
         winnerStatement = "It's a tie! Both " + userHuman + " - Score: " + updatedHumanScore + " and " + userComputer + " - Score: " + updatedComputerScore + " won!";    
         roundScore = userHuman + ": " +  updatedHumanScore + " | " + userComputer + ": " + updatedComputerScore;
         scoreResult = winnerStatement + " | " + roundScore;
        console.log(scoreResult);
        // after this it should increase the rounds to 3, then pause.


         increaseRounds();

         startTimer(); 
         
         // return [result, updatedHumanScore, updatedComputerScore, winnerStatement, scoreResult];
         //return console.log({ roundScore, numberOfRounds, winner, userHuman, userComputer, updatedHumanScore, updatedComputerScore, winnerStatement, scoreResult });
        }

        else if (winner === userHuman) { 
           
            updatedHumanScore += 1;
            updatedComputerScore += 0;
            
          //  winnerStatement = "It's a tie! Both " + userHuman + " - Score: " + updatedHumanScore + " and " + userComputer + " - Score: " + updatedComputerScore + " won!";
          winnerStatement = userHuman + " - Score: " + updatedHumanScore + " won!";
          roundScore = userHuman + ": " +  updatedHumanScore + " | " + userComputer + ": " + updatedComputerScore;
          scoreResult = winnerStatement + " | " + roundScore;
          console.log(scoreResult);
          
          increaseRounds();

          startTimer(); 
          
          //return [result, updatedHumanScore, updatedComputerScore, winnerStatement, scoreResult];
          //return console.log({ roundScore, numberOfRounds, winner, userHuman, userComputer, updatedHumanScore, updatedComputerScore, winnerStatement, scoreResult });

        } else if (winner === userComputer) { //numberOfRounds === 1 && 
           // startTimer();
           // humanSelection(); // getHumanChoice();
           // computerSelection();// getComputerChoice();
            updatedHumanScore += 0;
            updatedComputerScore += 1;
            
            winnerStatement = userComputer + " - Score: " + updatedComputerScore + " won!";
            roundScore = userHuman + ": " +  updatedHumanScore + " | " + userComputer + ": " + updatedComputerScore;
            scoreResult = winnerStatement + " | " + roundScore;
            console.log(scoreResult);

            increaseRounds();

            startTimer(); 
    
            //return [result, updatedHumanScore, updatedComputerScore, winnerStatement, scoreResult];
            //return console.log({ roundScore, numberOfRounds, winner, userHuman, userComputer, userComputer, updatedHumanScore, updatedComputerScore, winnerStatement, scoreResult });

        } 

        */
        
        //else {
            
        //}
    
       // console.log(processScoreResult(updatedHumanScore, updatedComputerScore));
     
    
    
    /*
    
    else if (numberOfRounds === 3) { // && updatedHumanScore <= 3  && updatedComputerScore <= 3

        getHumanChoice; // humanSelection();  is not defined
        getComputerChoice;


        if (winner === userHuman || winner === userComputer) { //numberOfRounds === 2 && 
           
            updatedHumanScore += 1;
            updatedComputerScore += 1;
            
         winnerStatement = "It's a tie! Both " + userHuman + " - Score: " + updatedHumanScore + " and " + userComputer + " - Score: " + updatedComputerScore + " won!";
         roundScore = userHuman + ": " +  updatedHumanScore + " | " + userComputer + ": " + updatedComputerScore;
         scoreResult = winnerStatement + " | " + roundScore;
          console.log(scoreResult);

          increaseRounds();

          startTimer(); 
          
  
          return console.log({ roundScore, numberOfRounds, winner, userHuman, userComputer, updatedHumanScore, updatedComputerScore, winnerStatement, scoreResult });
        }
        
        else if (winner === userHuman) { //numberOfRounds === 2 && 
         
            updatedHumanScore += 1;
            updatedComputerScore += 0;
            
            winnerStatement = userHuman + " - Score: " + updatedHumanScore + " won!";
            roundScore = userHuman + ": " +  updatedHumanScore + " | " + userComputer + ": " + updatedComputerScore;
            scoreResult = winnerStatement + " | " + roundScore;
            console.log(scoreResult);
            increaseRounds();

            startTimer(); 
            
    
            return console.log({ roundScore, numberOfRounds, winner, userHuman, userComputer, updatedHumanScore, updatedComputerScore, winnerStatement, scoreResult });

        } else if (winner === userComputer) { //numberOfRounds === 2 && 
           
            updatedHumanScore += 0;
            updatedComputerScore += 1;
            
           winnerStatement = userComputer + " - Score: " + updatedComputerScore + " won!";
           roundScore = userHuman + ": " +  updatedHumanScore + " | " + userComputer + ": " + updatedComputerScore;
           scoreResult = winnerStatement + " | " + roundScore;
           console.log(scoreResult);
            
            increaseRounds();

            startTimer(); 
            
    
            return console.log({ roundScore, numberOfRounds, winner, userHuman, userComputer, updatedHumanScore, updatedComputerScore, winnerStatement, scoreResult });

        } else {
            return;
        }

    } else if (numberOfRounds === 4) { //&& updatedHumanScore <= 4  && updatedComputerScore <= 4

        getHumanChoice;
        getComputerChoice;


        if (winner === userHuman || winner === userComputer) { //numberOfRounds === 3 && 
            
            updatedHumanScore += 1;
            updatedComputerScore += 1;
            
         winnerStatement = "It's a tie! Both " + userHuman + " - Score: " + updatedHumanScore + " and " + userComputer + " - Score: " + updatedComputerScore + " won!";
         roundScore = userHuman + ": " +  updatedHumanScore + " | " + userComputer + ": " + updatedComputerScore;
         scoreResult = winnerStatement + " | " + roundScore;
          console.log(scoreResult);

          increaseRounds();

          startTimer();
           

          return console.log({ roundScore, numberOfRounds, winner, userHuman, userComputer, updatedHumanScore, updatedComputerScore, winnerStatement, scoreResult });
        }
        
        else if (winner === userHuman) { //numberOfRounds === 3 && 
            
            updatedHumanScore += 1;
            updatedComputerScore += 0;
            
            winnerStatement = userHuman + " - Score: " + updatedHumanScore + " won!";
            roundScore = userHuman + ": " +  updatedHumanScore + " | " + userComputer + ": " + updatedComputerScore;
            scoreResult = winnerStatement + " | " + roundScore;
            console.log(scoreResult);
            
            increaseRounds();

            startTimer();
                    

            return console.log({ roundScore, numberOfRounds, winner, userHuman, userComputer, updatedHumanScore, updatedComputerScore, winnerStatement, scoreResult });

        } else if (winner === userComputer) { //numberOfRounds === 3 && 
            
            updatedHumanScore += 0;
            updatedComputerScore += 1;

            winnerStatement = userComputer + " - Score: " + updatedComputerScore + " won!";
            roundScore = userHuman + ": " +  updatedHumanScore + " | " + userComputer + ": " + updatedComputerScore;
            scoreResult = winnerStatement + " | " + roundScore;
            console.log(scoreResult);

            increaseRounds();

            startTimer();
           

            return console.log({ roundScore, numberOfRounds, winner, userHuman, userComputer, updatedHumanScore, updatedComputerScore, winnerStatement, scoreResult });

        } else {
            return;
        }
 
    } */
    
        /*
    
    if (numberOfRounds >= 2 && numberOfRounds <= 4) {

        return console.log({ roundScore, numberOfRounds, winner, userHuman, userComputer, updatedHumanScore, updatedComputerScore, winnerStatement, scoreResult });
    }
    
    
    else if (numberOfRounds === 5) { 


        if (winner === userHuman || winner === userComputer) { 
           
            updatedHumanScore += 1;
            updatedComputerScore += 1;
            winnerStatement = "It's a tie! Both " + userHuman + " - Score: " + updatedHumanScore + " and " + userComputer + " - Score: " + updatedComputerScore + " won!";
            roundScore = userHuman + ": " +  updatedHumanScore + " | " + userComputer + ": " + updatedComputerScore;
            scoreResult = winnerStatement + " | " + roundScore; 
            console.log(scoreResult);
            

            if (updatedHumanScore === updatedComputerScore) { //winner === userHuman && winner === userComputer
                // updatedHumanScore = humanScore + 1;
                // updatedComputerScore = computerScore + 1;
            
             
             finalScore = "Winners: " + userHuman + " and " + userComputer + "!";
               console.log(finalScore);
               //return console.log({ roundScore, winnerStatement, scoreResult, numberOfRounds, finalScore, winner, userHuman, userComputer, updatedHumanScore, updatedComputerScore });
             }
             
             else if (updatedHumanScore > updatedComputerScore) { //winner === userHuman
     
               //  updatedHumanScore = humanScore + 1;
                // updatedComputerScore;
            

                 finalScore = "Winner: " + userHuman + "!";
                 console.log(finalScore);
                // return console.log({ winnerStatement, roundScore, scoreResult, numberOfRounds, finalScore, winner, userHuman, userComputer, updatedHumanScore, updatedComputerScore }); //finalScore;
     
             } else if (updatedHumanScore < updatedComputerScore) { //winner === userComputer
                 //updatedHumanScore;
                // updatedComputerScore = computerScore + 1;
                 
                 finalScore = "Winner: " + userComputer + "!";
                 console.log(finalScore);
                 // return console.log({ winnerStatement, roundScore, scoreResult, numberOfRounds, finalScore, winner, userHuman, userComputer, updatedHumanScore, updatedComputerScore }); //finalScore;
     
             } 
         
             return console.log({ winnerStatement, roundScore, scoreResult, numberOfRounds, finalScore, winner, userHuman, userComputer, updatedHumanScore, updatedComputerScore }); //finalScore;
     
         
        }


        
       else if (winner === userHuman) { 
         
            updatedHumanScore += 1;
            updatedComputerScore += 0;
            winnerStatement = userHuman + " - Score: " + updatedHumanScore + " won!";
            roundScore = userHuman + ": " +  updatedHumanScore + " | " + userComputer + ": " + updatedComputerScore;
            scoreResult = winnerStatement + " | " + roundScore;
            console.log(scoreResult);
            
            if (updatedHumanScore === updatedComputerScore) { //winner === userHuman && winner === userComputer
                // updatedHumanScore = humanScore + 1;
                // updatedComputerScore = computerScore + 1;
              

              finalScore = "Winners: " + userHuman + " and " + userComputer + "!";
              console.log(finalScore);
               //console.log(scoreResult);
               //return console.log({ winnerStatement, roundScore, scoreResult, numberOfRounds, finalScore, winner, userHuman, userComputer, updatedHumanScore, updatedComputerScore });
             }
             
             else if (updatedHumanScore > updatedComputerScore) { //winner === userHuman
     
               //  updatedHumanScore = humanScore + 1;
                // updatedComputerScore;
                // winnerStatement = userHuman + " - Score: " + updatedHumanScore + " won!";
                 finalScore = "Winner: " + userHuman + "!";
                 console.log(finalScore);
                 //return console.log({ winnerStatement, roundScore, scoreResult, numberOfRounds, finalScore, winner, userHuman, userComputer, updatedHumanScore, updatedComputerScore }); //finalScore;
     
             } else if (updatedHumanScore < updatedComputerScore) { //winner === userComputer
                 //updatedHumanScore;
                // updatedComputerScore = computerScore + 1;
                // winnerStatement = userComputer + " - Score: " + updatedComputerScore + " won!";
                 finalScore = "Winner: " + userComputer + "!";
                 console.log(finalScore);
                // return console.log({ winnerStatement, roundScore, scoreResult, numberOfRounds, finalScore, winner, userHuman, userComputer, updatedHumanScore, updatedComputerScore }); //finalScore;
     
             } 

             return console.log({ winnerStatement, roundScore, scoreResult, numberOfRounds, finalScore, winner, userHuman, userComputer, updatedHumanScore, updatedComputerScore });

        } 
        
        else if (winner === userComputer) { 
           
            updatedHumanScore += 0;
            updatedComputerScore += 1;
            winnerStatement = userComputer + " - Score: " + updatedComputerScore + " won!";
            roundScore = userHuman + ": " +  updatedHumanScore + " | " + userComputer + ": " + updatedComputerScore;
            scoreResult = winnerStatement + " | " + roundScore;
            console.log(scoreResult);

            if (updatedHumanScore === updatedComputerScore) { //winner === userHuman && winner === userComputer
                // updatedHumanScore = humanScore + 1;
                // updatedComputerScore = computerScore + 1;
             
              finalScore = "Winners: " + userHuman + " and " + userComputer + "!";
              console.log(finalScore);
               //return console.log({ winnerStatement, roundScore, scoreResult, numberOfRounds, finalScore, winner, userHuman, userComputer, updatedHumanScore, updatedComputerScore });
             }
             
             else if (updatedHumanScore > updatedComputerScore) { //winner === userHuman
     
               //  updatedHumanScore = humanScore + 1;
                // updatedComputerScore;
                // winnerStatement = userHuman + " - Score: " + updatedHumanScore + " won!";
                 finalScore = "Winner: " + userHuman + "!";
                 console.log(finalScore);
                 //return console.log({ winnerStatement, roundScore, scoreResult, numberOfRounds, finalScore, winner, userHuman, userComputer, updatedHumanScore, updatedComputerScore }); //finalScore;
     
             } else if (updatedHumanScore < updatedComputerScore) { //winner === userComputer
                 //updatedHumanScore;
                // updatedComputerScore = computerScore + 1;
                // winnerStatement = userComputer + " - Score: " + updatedComputerScore + " won!";
                 finalScore = "Winner: " + userComputer + "!";
                 console.log(finalScore);
                 //return console.log({ winnerStatement, roundScore, scoreResult, numberOfRounds, finalScore, winner, userHuman, userComputer, updatedHumanScore, updatedComputerScore }); //finalScore;
     
             } 


             return console.log({ winnerStatement, roundScore, scoreResult, numberOfRounds, finalScore, winner, userHuman, userComputer, updatedHumanScore, updatedComputerScore });
        } 



    
    } 

}


   console.log(determineWinner());

} */

// total score needs a varaible to go into // unfortunatly it didn't work

// let totalScores = processScoreResult;
 //do not call refreshPlay.



//let finalResult = playGame();
//refreshPlay(playGame());


// function refreshPlay() {

    // let roundX;

    
   // let roundNumber;
   // let totalScores;
    
         

  //  if (numberOfRounds === 1) {
   //     startTimer();
        //roundX = console.log(playRound(humanSelection, computerSelection));
   /*     
        roundNumber = increaseRounds(increaseRoundsByOne); 
        totalScores = processScoreResult(updatedHumanScore, updatedComputerScore); 

        return [roundNumber, totalScores];
    }
    else if (numberOfRounds >= 2 && numberOfRounds < 5) {
        startTimer();
        getHumanChoice();
        getComputerChoice(); */
        //playGame();
     //   roundNumber = increaseRounds(increaseRoundsByOne); 
     //   totalScores = processScoreResult(updatedHumanScore, updatedComputerScore); 
        //console.log(totalScores);
        // increaseRounds(increaseRoundsByOne);
        // processScoreResult(updatedHumanScore, updatedComputerScore);
        
     //   return [roundNumber, totalScores]; //roundX

     //   } else if (numberOfRounds === 5 ) {
        // roundX = console.log(playRound(humanSelection, computerSelection));
     //   startTimer();
        
    //    roundNumber = increaseRounds(increaseRoundsByOne); 
   //     totalScores = processScoreResult(updatedHumanScore, updatedComputerScore);
        //finalScore = `Final Score: ${userHuman}: ${updatedHumanScore} | ${userComputer}: ${updatedComputerScore}`;
 /*       console.log(finalScore);
        return [roundNumber, totalScores];

        } else {
            return;
        }
*/
//} // end of refresh play brackets




// start getHumanChoice

function getHumanChoice(choice1, choice2, choice3) { // humanChoiceMap
    choice1 = "rock";
    choice2 = "paper";
    choice3 = "scissors";

let humanChoice = prompt("please type in either rock, paper or scissors in lowercase to play"); // changed const to let

// going to make humanChoice input case insensitive for step 5
let standardChoice = choice1 || choice2 || choice3;

let ignoreCase = standardChoice.localeCompare(humanChoice, "en", { sensitivity: "base" });

   // console.log(typeof ignoreCase); // says ignoreCase is a number? now I must convert a number to string by mapping again

humanChoiceMap = new Map();

humanChoiceMap.set(0, "rock"); 
humanChoiceMap.set(1, "paper"); 
humanChoiceMap.set(-1, "scissors");

if (ignoreCase === 0) { 
    
    console.log(choice1); // humanChoice to  humanChoiceMap - choice1 to humanChoice - choice1 changed to ignoreCase which outputs 0
    return choice1;


} else if (ignoreCase === 1) {
    console.log(choice2); // humanChoice to humanChoiceMap - choice2 to humanChoice - ignoreCase outputs 1
    return choice2;

} else if (ignoreCase === -1) { // had to define this for step 5
    console.log(choice3); // humanChoice to humanChoiceMap - chocie3 to humanChoice ignoreCase outputs -1
    return choice3;

} else { // had to add this for step 5
    return;
}


}

// commenting out calling the function as it keeps executing without a log
// getHumanChoice(); // it works

//commenting a variable to put getHumanChoice result in

// let humanResult = getHumanChoice;




function getComputerChoice(choice1, choice2, choice3) { //  computerChoiceMap
    choice1 = "rock";
    choice2 = "paper";
    choice3 = "scissors";

  let computerChoice = Math.floor(Math.random() * 3) + 1;

    // adding a mapping of computerChoice number values to the string values they correspond to for step 5:
    // const map1 = new Map();
    // map1.set("a", 1);
    // map1.set("b", 2);
    // map1.set("c", 3);
    
    computerChoiceMap = new Map();

    computerChoiceMap.set("rock", 1);
    computerChoiceMap.set("paper", 2);
    computerChoiceMap.set("scissors", 3);

    // testing the new number to string map
// console.log(computerChoiceMap.get("rock")); // yes this works
// console.log(computerChoiceMap.get("paper")); //yes this works
// console.log(computerChoiceMap.get("scissors")); // yes this works



    if (computerChoice === 1) { //  computerChoiceMap === "rock"
        console.log(choice1); // computerChoiceMap
       // return choice1;
       return choice1; // computerChoiceMap

    } else if (computerChoice === 2) { //  computerChoiceMap === "paper"
        console.log(choice2); // computerChoiceMap
       // return choice2;
       return choice2; //computerChoiceMap

    } else if (computerChoice === 3) { //   computerChoiceMap === "scissors"
        console.log(choice3); // computerChoiceMap
        // return choice3;
        return choice3;

    } else {
        return;
    }

    
}






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


//moved getHumanchoice


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


function startTimer() {

    setTimeout(refreshPlay, 10000);

   } 

function playGame() {

   //startTimer();
    

  //  function getChoiceResultsArray (f1, f2) {
  //      return [f1(), f2()];
    
  //   }


    // add function for choices

 //function playerChoices() {


   


    // commenting out calling the function as it keeps executing without a log
    // getComputerChoice(); // it works.
   // let humanResult = getHumanChoice;
   // let computerResult = getComputerChoice;
    //return [humanResult, computerResult];
   // return [humanResult, computerResult];
  //getHumanChoice();
 // getComputerChoice();
 //let choicesArray = [getHumanChoice, getComputerChoice];
 //console.log(choicesArray[0]());
 //console.log(choicesArray[1]());

 //return choicesArray[[0][1]];


 

//let getChoiceResults = getChoiceResultsArray(getHumanChoice, getComputerChoice);
// console.log(getChoiceResults);
//return getChoiceResults;

 /* 
 function returnChoiceResults() {
    return getChoiceResultsArray(getHumanChoice, getComputerChoice);


 }

let getChoiceResults = returnChoiceResults();

*/


//return [getChoiceResults[0], getChoiceResults[1]];
// return getChoiceResults;

// } // end of player choices endbracket

 
 //let getChoiceResults = playerChoices(); 
 //console.log(getChoiceResults);

 //let processPlayerChoices = getChoiceResults;
 //processPlayerChoices();

//commenting a variable to put getComputerChoice result in
    
// start refresh code



function playRound(humanChoice, computerChoice) { // getHumanChoice, getComputerChoice - humanChoiceMap, computerChoiceMap - humanChoice, computerChoice - the parameters are the choices
    startTimer(); 
    
   // computerChoice = getComputerChoice();
  // humanChoice = getHumanChoice();
   
 // const userHuman = "Human";
    
// const userComputer = "The Computer";

    /*
   // let points = 0;

   // humanScore = points;
   // computerScore = points; redundant */

   // let scoreResult;

   // let winnerStatement;

   // let roundScore;
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

                /*
                const userHuman = "Human";
                const userComputer = "The Computer";
                let humanScore = 0;
                let computerScore = 0;
                let winner;
              //  let loser;
                let roundScore;
                let winnerStatement;
                let scoreResult;

                */

    // old switch

    /*   switch (humanChoice) { // humanChoiceMap getHumanChoice -  humanChoice to humanChoiceMap - changing humanChoice to getHumanChoice gave undefined log

           case "rock":

            switch (computerChoice) { // computerChoiceMap to getComputerChoice computerChoice to computerChoiceMap - changing all computerChoice to getComputerChoice gave undefined log
                     
               
                case "rock":
                    humanScore = 1;
                    computerScore = 1;
                   // winnerScore = (humanScore + 1) && (computerScore + 1);
                    //updatedHumanScore = humanScore + 1;
                   // updatedComputerScore = computerScore + 1;
                    winner = userHuman && userComputer;
                    loser = "No one";
                   //increaseRounds();// processScoreResult(updatedHumanScore, updatedComputerScore);

                   roundScore = userHuman + ": " + humanScore + " | " + userComputer + ": " + computerScore;
                   winnerStatement = "It's a tie! Both " + userHuman + " - Score: " + humanScore + " and " + userComputer + " - Score: " + computerScore + " won!";
                   scoreResult = winnerStatement + " | " + roundScore;  
                    
                    console.log(scoreResult); //winnerStatement + " | " + roundScore
                    //   playRoundAgain();
                      // break;
                      //  return choice1 + " wins! " + roundScore; // took out humanChoice + " " + computerChoice
                      return { userHuman, userComputer, roundScore, winnerStatement, humanScore, computerScore, winner, scoreResult };
                    // return [humanScore, computerScore, winnerStatement, scoreResult];
                        
            
                case "paper":
                    humanScore = 1;
                   // computerScore;
                  // winnerScore = humanScore + 1;
                  // updatedHumanScore = 1;
                  // updatedComputerScore = 0;
                   winner = userHuman;
                   loser = userComputer;
                  // increaseRounds(); // processScoreResult(updatedHumanScore, updatedComputerScore);

                   roundScore = userHuman + ": " + humanScore + " | " + userComputer + ": " + computerScore;
                    winnerStatement = userHuman + " - Score: " + humanScore + " won!";
                    scoreResult = winnerStatement + " | " + roundScore;  
                    console.log(scoreResult);
                  //  playRoundAgain();
                    //    return humanChoice + " wins! " + roundScore;
                   // break;
                  return { userHuman, userComputer, roundScore, winnerStatement, humanScore, computerScore, winner, scoreResult };
                 // return [humanScore, computerScore, winnerStatement, scoreResult];


                case "scissors":
                   humanScore = 1;
                  // computerScore;
                  // winnerScore = humanScore + 1;
                  // updatedHumanScore = 1;
                  // updatedComputerScore = 0;
                    winner = userHuman;
                    loser = userComputer;
                   // increaseRounds(); //  processScoreResult(updatedHumanScore, updatedComputerScore);

                   roundScore = userHuman + ": " + humanScore + " | " + userComputer + ": " + computerScore;
                 winnerStatement = userHuman + " - Score: " + humanScore + " won!";
                   scoreResult = winnerStatement + " | " + roundScore;  
                   console.log(scoreResult); // console.log(winnerStatement + " | " + roundScore);
                   // playRoundAgain();
                  //  return humanChoice + " wins! " + roundScore;
                  //break;
                  return { userHuman, userComputer, roundScore, winnerStatement, humanScore, computerScore, winner, scoreResult };
                 // return [humanScore, computerScore, winnerStatement, scoreResult];


                        default:
                            return;
            
                    }
                    

            case "paper":

                switch (computerChoice) {
                    case "rock":
                         computerScore = 1;
                         //humanScore;
                        // winnerScore = computerScore + 1;

                        // updatedHumanScore = 0;
                   // updatedComputerScore = 1;
                    winner = userComputer;
                    loser = userHuman;
                  //  increaseRounds();  // processScoreResult(updatedHumanScore, updatedComputerScore);

                       roundScore = userHuman + ": " + humanScore + " | " + userComputer + ": " + computerScore;
                      winnerStatement = userComputer + " - Score: " + computerScore + " won!";
                       scoreResult = winnerStatement + " | " + roundScore;  
                       console.log(scoreResult); //  console.log(winnerStatement + " | " + roundScore);
                      //  playRoundAgain();
                      //  return computerChoice + " wins! " + roundScore;
                    //  break;
                    return { userHuman, userComputer, roundScore, winnerStatement, humanScore, computerScore, winner, scoreResult };
                   // return [humanScore, computerScore, winnerStatement, scoreResult];
                      
            
                    case "paper":
                        humanScore = 1;
                        computerScore = 1;
                      //  winnerScore = humanScore + 1 && computerScore + 1;
                        //updatedHumanScore = 1;
                        //updatedComputerScore = 1;
                        winner = userHuman && userComputer;
                        loser = "No one";
                       // increaseRounds(increaseRoundsByOne);  //  processScoreResult(updatedHumanScore, updatedComputerScore);
                        
                       roundScore = userHuman + ": " + humanScore + " | " + userComputer + ": " + computerScore;
                       winnerStatement = "It's a tie! Both " + userHuman + " - Score: " + humanScore + " and " + userComputer + " - Score: " + computerScore + " won!";
                        scoreResult = winnerStatement + " | " + roundScore;  
                        console.log(scoreResult);   //  console.log(winnerStatement + " | " +roundScore);
                      //  playRoundAgain();
                       // return choice2 + " wins! " + roundScore; // removed humanChoice + " " + computerChoice
                      // break;
                      return { userHuman, userComputer, roundScore, winnerStatement, humanScore, computerScore, winner, scoreResult };
                     // return [humanScore, computerScore, winnerStatement, scoreResult];


                    case "scissors":
                        computerScore = 1;
                        //humanScore;
                      //  winnerScore = computerScore + 1;
                       // updatedHumanScore = 0;
                       // updatedComputerScore = 1;
                        winner = userComputer;
                        loser = userHuman;
                       // increaseRounds(increaseRoundsByOne);  //  processScoreResult(updatedHumanScore, updatedComputerScore);

                        roundScore = userHuman + ": " + humanScore + " | " + userComputer + ": " + computerScore;
                       winnerStatement = userComputer + " - Score: " + computerScore + " won!";
                        scoreResult = winnerStatement + " | " + roundScore;  
                        console.log(scoreResult); // console.log(winnerStatement + " | " + roundScore);
                      //  playRoundAgain();
                      // return computerChoice + " wins! " + roundScore;
                     //  break;
                      //return scoreResult;
                     // return [humanScore, computerScore, winnerStatement, scoreResult];
                     return { userHuman, userComputer, roundScore, winnerStatement, humanScore, computerScore, winner, scoreResult };
                        
                        default:
                            return;
        }

            case "scissors":

                switch (computerChoice) {
                    
                    case "rock":
                         computerScore = 1;
                       //  humanScore;
                      //  winnerScore = computerScore + 1;
                       // updatedHumanScore = 0;
                       // updatedComputerScore = 1;
                        winner = userComputer;
                        loser = userHuman;
                        //increaseRounds(increaseRoundsByOne);  // processScoreResult(updatedHumanScore, updatedComputerScore);
                      
                       roundScore = userHuman + ": " + humanScore + " | " + userComputer + ": " + computerScore;
                       winnerStatement = userComputer + " - Score: " + computerScore + " won!";
                      
                        scoreResult = winnerStatement + " | " + roundScore;  
                        console.log(scoreResult); //console.log(winnerStatement + " | " + roundScore);
                      //  playRoundAgain();
                       // return computerChoice + " wins! " + roundScore;
                      // break;
                      return { userHuman, userComputer, roundScore, winnerStatement, humanScore, computerScore, winner, scoreResult };
                     // return [humanScore, computerScore, winnerStatement, scoreResult];


                    case "paper":
                       humanScore = 1;
                      // computerScore;
                      //  winnerScore = humanScore + 1;

                       // updatedHumanScore = 1;
                       // updatedComputerScore = 0;
                        winner = userHuman;
                        loser = userComputer;
                        //increaseRounds(increaseRoundsByOne);   // processScoreResult(updatedHumanScore, updatedComputerScore);

                        roundScore = userHuman + ": " + humanScore + " | " + userComputer + ": " + computerScore;
                       winnerStatement = userHuman + " - Score: " + humanScore + " won!";
                    
                        scoreResult = winnerStatement + " | " + roundScore;  
                        console.log(scoreResult); //  console.log(winnerStatement + " | " + roundScore);
                       // playRoundAgain();
                      //  return humanChoice + " wins! " + roundScore;
                    // break;
                    return { userHuman, userComputer, roundScore, winnerStatement, humanScore, computerScore, winner, scoreResult };
                   //return [humanScore, computerScore, winnerStatement, scoreResult];


                    case "scissors":
                        humanScore = 1;
                        computerScore = 1;
                        
                      //  winnerScore = humanScore + 1 && computerScore + 1;                    
                        
                       // updatedHumanScore = 1;
                       // updatedComputerScore = 1;
                        winner = userHuman && userComputer;
                        loser = "No one";
                       // increaseRounds(increaseRoundsByOne); // processScoreResult(updatedHumanScore, updatedComputerScore);
                        
                       roundScore = userHuman + ": " + humanScore + " | " + userComputer + ": " + computerScore;
                     winnerStatement = "It's a tie! Both " + userHuman + " - Score: " + humanScore + " and " + userComputer + " - Score: " + computerScore + " won!";
                      
                       scoreResult = winnerStatement + " | " + roundScore;  
                       console.log(scoreResult); // console.log(winnerStatement + " | " + roundScore);
                      //  playRoundAgain();
                        // return choice3 + " wins! " + roundScore; // removed humanChoice + " " + computerChoice
                       // break;
                     // return [humanScore, computerScore, winnerStatement, scoreResult];
                     return { userHuman, userComputer, roundScore, winnerStatement, humanScore, computerScore, winner, scoreResult };

                                            
                        default:
                            return;

                            



}                        

    
} // main switch endbacket 

//return playRoundAgain();

// I need to return a value
//getHumanChoice();
//getComputerChoice();
//return playRound();

return { userHuman, userComputer, roundScore, winnerStatement, humanScore, computerScore, winner, scoreResult };

*/ // end of old switch

                const userHuman = "Human";
                const userComputer = "The Computer";
                let humanScore = 0;
                let computerScore = 0;
                let winner = null;
                let roundScore;
                let winnerStatement;
                let scoreResult;
                let numberOfRounds = 1;
                let increaseRoundsByOne = null; 
                let updatedHumanScore = humanScore;
                let updatedComputerScore = computerScore;

   


switch (humanChoice) { 

    case "rock":

        if (computerChoice === "rock") {

            winner === userHuman || userComputer;
            return winner;
        } else if (computerSelection === "paper") {
           
            winner === userHuman;
            return winner;

        } else if (computerChoice === "scissors") {

            winner === userHuman;
            return winner;
        }

        break;

    case "paper":

        if (computerChoice === "rock") {

            winner === userComputer;
            return winner;

        } else if (computerChoice === "paper") {
           
            winner === userHuman || userComputer;
            return winner;

        } else if (computerChoice === "scissors") {

            winner === userComputer;
            return winner;
        }

        break;

    case "scissors":
        
    if (computerChoice === "rock") {

        winner === userComputer;
        return winner;

    } else if (computerChoice === "paper") {
       
        winner === userHuman;
        return winner;

    } else if (computerChoice === "scissors") {

        winner === userHuman || userComputer;
        return winner;
    }

    break;


       default:
        break;

}  


if (numberOfRounds === 1 || numberOfRounds === 2 || numberOfRounds === 3 || numberOfRounds === 4 || numberOfRounds === 5) {
    increaseRoundsByOne = numberOfRounds += 1;
    return increaseRoundsByOne;
  
  }


  if (numberOfRounds >= 2 && numberOfRounds <= 4) {

if (winner === userHuman || winner === userComputer) { 

    updatedHumanScore += 1;
    updatedComputerScore += 1;
    
 winnerStatement = "It's a tie! Both " + userHuman + " - Score: " + updatedHumanScore + " and " + userComputer + " - Score: " + updatedComputerScore + " won!";    
 roundScore = userHuman + ": " +  updatedHumanScore + " | " + userComputer + ": " + updatedComputerScore;
 scoreResult = winnerStatement + " | " + roundScore;
console.log(scoreResult);

return console.log({ roundScore, winner, userHuman, userComputer, updatedHumanScore, updatedComputerScore, winnerStatement, scoreResult });

}

else if (winner === userHuman) { 
   
    updatedHumanScore += 1;
    updatedComputerScore += 0;
    
  
  winnerStatement = userHuman + " - Score: " + updatedHumanScore + " won!";
  roundScore = userHuman + ": " +  updatedHumanScore + " | " + userComputer + ": " + updatedComputerScore;
  scoreResult = winnerStatement + " | " + roundScore;
  console.log(scoreResult);
  

  return console.log({ roundScore, winner, userHuman, userComputer, updatedHumanScore, updatedComputerScore, winnerStatement, scoreResult });

} else if (winner === userComputer) { //numberOfRounds === 1 && 
   
    updatedHumanScore += 0;
    updatedComputerScore += 1;
    
    winnerStatement = userComputer + " - Score: " + updatedComputerScore + " won!";
    roundScore = userHuman + ": " +  updatedHumanScore + " | " + userComputer + ": " + updatedComputerScore;
    scoreResult = winnerStatement + " | " + roundScore;
    console.log(scoreResult);
    return console.log({ roundScore, winner, userHuman, userComputer, updatedHumanScore, updatedComputerScore, winnerStatement, scoreResult });


} 

   return console.log({ roundScore, numberOfRounds, winner, userHuman, userComputer, updatedHumanScore, updatedComputerScore, winnerStatement, scoreResult });
}


else if (numberOfRounds === 5) { 


    if (winner === userHuman || winner === userComputer) { 
       
        updatedHumanScore += 1;
        updatedComputerScore += 1;
        winnerStatement = "It's a tie! Both " + userHuman + " - Score: " + updatedHumanScore + " and " + userComputer + " - Score: " + updatedComputerScore + " won!";
        roundScore = userHuman + ": " +  updatedHumanScore + " | " + userComputer + ": " + updatedComputerScore;
        scoreResult = winnerStatement + " | " + roundScore; 
        console.log(scoreResult);
        

        if (updatedHumanScore === updatedComputerScore) { //winner === userHuman && winner === userComputer
            // updatedHumanScore = humanScore + 1;
            // updatedComputerScore = computerScore + 1;
        
         
         finalScore = "Winners: " + userHuman + " and " + userComputer + "!";
           console.log(finalScore);



           //return console.log({ roundScore, winnerStatement, scoreResult, numberOfRounds, finalScore, winner, userHuman, userComputer, updatedHumanScore, updatedComputerScore });
         }
         
         else if (updatedHumanScore > updatedComputerScore) { //winner === userHuman
 
           //  updatedHumanScore = humanScore + 1;
            // updatedComputerScore;
        

             finalScore = "Winner: " + userHuman + "!";
             console.log(finalScore);
            // return console.log({ winnerStatement, roundScore, scoreResult, numberOfRounds, finalScore, winner, userHuman, userComputer, updatedHumanScore, updatedComputerScore }); //finalScore;
 
         } else if (updatedHumanScore < updatedComputerScore) { //winner === userComputer
             //updatedHumanScore;
            // updatedComputerScore = computerScore + 1;
             
             finalScore = "Winner: " + userComputer + "!";
             console.log(finalScore);
             // return console.log({ winnerStatement, roundScore, scoreResult, numberOfRounds, finalScore, winner, userHuman, userComputer, updatedHumanScore, updatedComputerScore }); //finalScore;
 
         } 
     
         return console.log({ winnerStatement, roundScore, scoreResult, numberOfRounds, finalScore, winner, userHuman, userComputer, updatedHumanScore, updatedComputerScore }); //finalScore;
 
     
    }


    
   else if (winner === userHuman) { 
     
        updatedHumanScore += 1;
        updatedComputerScore += 0;
        winnerStatement = userHuman + " - Score: " + updatedHumanScore + " won!";
        roundScore = userHuman + ": " +  updatedHumanScore + " | " + userComputer + ": " + updatedComputerScore;
        scoreResult = winnerStatement + " | " + roundScore;
        console.log(scoreResult);
        
        if (updatedHumanScore === updatedComputerScore) { //winner === userHuman && winner === userComputer
            // updatedHumanScore = humanScore + 1;
            // updatedComputerScore = computerScore + 1;
          

          finalScore = "Winners: " + userHuman + " and " + userComputer + "!";
          console.log(finalScore);
           //console.log(scoreResult);
           //return console.log({ winnerStatement, roundScore, scoreResult, numberOfRounds, finalScore, winner, userHuman, userComputer, updatedHumanScore, updatedComputerScore });
         }
         
         else if (updatedHumanScore > updatedComputerScore) { //winner === userHuman
 
           //  updatedHumanScore = humanScore + 1;
            // updatedComputerScore;
            // winnerStatement = userHuman + " - Score: " + updatedHumanScore + " won!";
             finalScore = "Winner: " + userHuman + "!";
             console.log(finalScore);
             //return console.log({ winnerStatement, roundScore, scoreResult, numberOfRounds, finalScore, winner, userHuman, userComputer, updatedHumanScore, updatedComputerScore }); //finalScore;
 
         } else if (updatedHumanScore < updatedComputerScore) { //winner === userComputer
             //updatedHumanScore;
            // updatedComputerScore = computerScore + 1;
            // winnerStatement = userComputer + " - Score: " + updatedComputerScore + " won!";
             finalScore = "Winner: " + userComputer + "!";
             console.log(finalScore);
            // return console.log({ winnerStatement, roundScore, scoreResult, numberOfRounds, finalScore, winner, userHuman, userComputer, updatedHumanScore, updatedComputerScore }); //finalScore;
 
         } 

         return console.log({ winnerStatement, roundScore, scoreResult, numberOfRounds, finalScore, winner, userHuman, userComputer, updatedHumanScore, updatedComputerScore });

    } 
    
    else if (winner === userComputer) { 
       
        updatedHumanScore += 0;
        updatedComputerScore += 1;
        winnerStatement = userComputer + " - Score: " + updatedComputerScore + " won!";
        roundScore = userHuman + ": " +  updatedHumanScore + " | " + userComputer + ": " + updatedComputerScore;
        scoreResult = winnerStatement + " | " + roundScore;
        console.log(scoreResult);

        if (updatedHumanScore === updatedComputerScore) { //winner === userHuman && winner === userComputer
            // updatedHumanScore = humanScore + 1;
            // updatedComputerScore = computerScore + 1;
         
          finalScore = "Winners: " + userHuman + " and " + userComputer + "!";
          console.log(finalScore);
           //return console.log({ winnerStatement, roundScore, scoreResult, numberOfRounds, finalScore, winner, userHuman, userComputer, updatedHumanScore, updatedComputerScore });
         }
         
         else if (updatedHumanScore > updatedComputerScore) { //winner === userHuman
 
           //  updatedHumanScore = humanScore + 1;
            // updatedComputerScore;
            // winnerStatement = userHuman + " - Score: " + updatedHumanScore + " won!";
             finalScore = "Winner: " + userHuman + "!";
             console.log(finalScore);
             //return console.log({ winnerStatement, roundScore, scoreResult, numberOfRounds, finalScore, winner, userHuman, userComputer, updatedHumanScore, updatedComputerScore }); //finalScore;
 
         } else if (updatedHumanScore < updatedComputerScore) { //winner === userComputer
             //updatedHumanScore;
            // updatedComputerScore = computerScore + 1;
            // winnerStatement = userComputer + " - Score: " + updatedComputerScore + " won!";
             finalScore = "Winner: " + userComputer + "!";
             console.log(finalScore);
             //return console.log({ winnerStatement, roundScore, scoreResult, numberOfRounds, finalScore, winner, userHuman, userComputer, updatedHumanScore, updatedComputerScore }); //finalScore;
 
         } 


         return console.log({ winnerStatement, roundScore, scoreResult, numberOfRounds, finalScore, winner, userHuman, userComputer, updatedHumanScore, updatedComputerScore });
    } 




} 




} // this is the playRound function endbracket




let humanResult = getHumanChoice;
let computerResult = getComputerChoice;

// let choiceResults = playerChoices;

// below code taken from assignment step 5 example

let humanSelection = humanResult(); // changed getHumanChoice() to humanResult() & const to let
let computerSelection = computerResult(); // changed getComputerChoice() to computerResult() & const to let 
//let choiceSelections = choiceResults();
//playRound(humanSelection, computerSelection); //commenting out as it didn't do anything

// this is coming back undefined, why?

console.log(playRound(humanSelection, computerSelection)); // choiceSelections - this line was printing the winning message for a second time

//call playRound and store it's returned values
//let values = playRound(); //humanSelection, computerSelection
//pass values to refreshPlay and return final result
//return refreshPlay(values);

// moving playRoundAgain
//let roundX = playRound;





/*

roundX = playRound(humanSelection, computerSelection);
roundNumber = increaseRounds(increaseRoundsByOne);
totalScores = processScoreResult(updatedHumanScore, updatedComputerScore);

*/

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

/* not sure if need this function now

function updatingResults() {


   
    
  

// need to add a wait 10 seconds before playing

if (updatedHumanScore <= 1 && updatedComputerScore <= 1 && numberOfRounds === 1) { 
    
    
    // function waiting() {
   
/*  

   function wait10Seconds(x) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(x);
      }, 10000);
    });
  }
  
  async function f1() {
    // return await wait10Seconds(10000);
   const x = await wait10Seconds(10000); // overrides if value is in it
    // console.log(x); // 10
  }
  
  f1();

  */
 
 

// startTimer();

 // refreshPlay();
  
// } waiting endbracket
       
    


// clearTimeout(wait10Seconds);






//return [humanSelection, computerSelection, increaseRoundsByOne, updatedHumanScore, updatedComputerScore];
// return [playRound(humanSelection, computerSelection), increaseRounds(increaseRoundsByOne), processScoreResult(updatedHumanScore, updatedComputerScore)];
// return wait10Seconds;

/*

} else if (updatedHumanScore <= 2 && updatedComputerScore <= 2 && numberOfRounds === 2) {  
    
   // f1();
    // refreshPlay();

    // setTimeout(refreshPlay, 10000);
    startTimer();

    */
  //  moving below 
/*
    function refreshPlay() {
    
        
                roundX = console.log(playRound(humanSelection, computerSelection));
                roundNumber = increaseRounds(increaseRoundsByOne); // this is round 2
                totalScores = console.log(processScoreResult(updatedHumanScore, updatedComputerScore)); 
                // increaseRounds(increaseRoundsByOne);
                // processScoreResult(updatedHumanScore, updatedComputerScore);
                
                return [roundX, roundNumber, totalScores];
        
                }
              console.log(refreshPlay());

              */
    
/*
    const wait10Seconds = setTimeout(() => {

    console.log(playRound(humanSelection, computerSelection));
    increaseRounds(increaseRoundsByOne);
    processScoreResult(updatedHumanScore, updatedComputerScore);

}, 10000); // 10 seconds
clearTimeout(wait10Seconds); */
// return wait10Seconds;
//return [playRound(humanSelection, computerSelection), increaseRounds(increaseRoundsByOne), processScoreResult(updatedHumanScore, updatedComputerScore)];
// return [humanSelection, computerSelection, increaseRoundsByOne, updatedHumanScore, updatedComputerScore];


/*
} else if (updatedHumanScore <= 3 && updatedComputerScore <= 3 && numberOfRounds === 3) {  
    
   // f1();
   // refreshPlay();

   //setTimeout(refreshPlay, 10000);
   startTimer();

   */
    /*
    const wait10Seconds = setTimeout(() => {

    console.log(playRound(humanSelection, computerSelection));
    increaseRounds(increaseRoundsByOne);
    processScoreResult(updatedHumanScore, updatedComputerScore);

}, 10000); // 10 seconds
clearTimeout(wait10Seconds);
*/

// return wait10Seconds;
//return [humanSelection, computerSelection, increaseRoundsByOne, updatedHumanScore, updatedComputerScore];
// return [playRound(humanSelection, computerSelection), increaseRounds(increaseRoundsByOne), processScoreResult(updatedHumanScore, updatedComputerScore)];
/*
} else if (updatedHumanScore <= 4 && updatedComputerScore <= 4 && numberOfRounds === 4) {   
    
   // f1();
  //  refreshPlay();
  // setTimeout(refreshPlay, 10000);
  startTimer();

  */
    // return processScoreResult(); // updatedHumanScore, updatedComputerScore

//    function endPlay() {
/*
    const wait10Seconds = setTimeout(() => {

    increaseRounds(increaseRoundsByOne)
    processScoreResult(updatedHumanScore, updatedComputerScore);
    console.log(processScoreResult(updatedHumanScore, updatedComputerScore));

}, 10000); // 10 seconds
return clearTimeout(wait10Seconds);
*/
//} // function end play endbrackets

// endPlay();
// return wait10Seconds;
// return [humanSelection, computerSelection, increaseRoundsByOne, updatedHumanScore, updatedComputerScore];
// return [playRound(humanSelection, computerSelection), increaseRounds(increaseRoundsByOne), processScoreResult(updatedHumanScore, updatedComputerScore)];

/*
}


else if (updatedHumanScore <= 5 && updatedComputerScore <= 5 && numberOfRounds === 5) {

    */
   // console.log(processScoreResult(updatedHumanScore, updatedComputerScore));
 //  refreshPlay();
   //setTimeout(refreshPlay, 10000);
 
   /*
}

else {
    return;
}

*/

// return processScoreResult(updatedHumanScore, updatedComputerScore); 
    // must return something to keep it defined and not undefined.

    // return [playRound(humanSelection, computerSelection), increaseRounds(increaseRoundsByOne), processScoreResult(updatedHumanScore, updatedComputerScore)]

//} // end of updating results




 // start playRoundAgain function
// might not need this again
 //function playRoundAgain() { // roundX, roundNumber, totalScores
    

  /*  function startTimer() {

        // setTimeout(refreshPlay, 10000);
        setTimeout(() => {
            console.log(refreshPlay());

        }, 10000);

  
       }

       */

 //   startTimer();
    
//} // end of playRoundAgain

/*

let finshedRound = roundX();
let updatedRoundNumber = roundNumber();
let finalScore = totalScores();

*/

//playRoundAgain();

//console.log(playRoundAgain()); // finshedRound, updatedRoundNumber, finalScore


// below if statement for playGame

/*
if (updatedHumanScore <= 5 && updatedComputerScore <= 5 && numberOfRounds === 5) {

    return "Game Over";
}
*/

} // end of playGame

// leave this call for playGame to sucessfully pass values from playRound to refreshPlay
console.log(playGame());

// call playGame and store final result.
//let finalResults = playGame();
//console.log(finalResults);









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

