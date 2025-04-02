

function startTimer() {

    return setTimeout(playGame, 5000);

   } 

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
getHumanChoice(); // it works

//commenting a variable to put getHumanChoice result in

// let humanResult = getHumanChoice;
//console.log(getHumanChoice());



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

    
} //  end of computer choice

getComputerChoice();
  




function playGame() {

   
    
   





function playRound(humanChoice, computerChoice) { // getHumanChoice, getComputerChoice - humanChoiceMap, computerChoiceMap - humanChoice, computerChoice - the parameters are the choices
    
    computerChoice = getComputerChoice;
     humanChoice = getHumanChoice;  
 
    
    //let computerSelection = computerChoice;
   //let humanSelection = humanChoice;
    
   



    
    
    const userHuman = "Human"; //const
    const userComputer = "The Computer"; //const
    
   // let numberOfRounds = 1;
  //  let count = numberOfRounds;

    
    let humanScore = 0;
    let computerScore = 0;
  // let winner;
   
   let roundScore;
   let winnerStatement;
   let scoreResult;
   
   
   let updatedHumanScore = humanScore;
   let updatedComputerScore = computerScore;
    
   let choice1 = "rock";
   let choice2 = "paper";
   let choice3 = "scissors";

   
      
   // if (count >= 1 && count <= 4) {
   
  
  

        switch (humanChoice) { //changing humanChoice to getHumanChoice gave undefined log


            
            case "rock":

            

            switch (computerChoice) { // changing all computerChoice to getComputerChoice gave undefined log
                
                
                
                case "rock":
                    humanScore += 1;
                    computerScore += 1;
                   // winnerScore = (humanScore + 1) && (computerScore + 1);

                   
                   updatedHumanScore = humanScore;
                    console.log(updatedComputerScore = computerScore);
                  // let winner = userHuman || userComputer;
                    
                    

                    roundScore = userHuman + ": " + updatedHumanScore + " | " + userComputer + ": " + updatedComputerScore;
                    winnerStatement = "It's a tie! Both " + userHuman + " - Score: " + updatedHumanScore + " and " + userComputer + " - Score: " + updatedComputerScore + " won!";
                    scoreResult = winnerStatement + " | " + roundScore;  
                    
                     //console.log(scoreResult);
                    
        
          /*
                     if (count <= 5) {
                        count += 1;
                        }
                    
                   else if (count === 5) { 
                        winner = userHuman || userComputer;
                        updatedHumanScore += 1;
                        updatedComputerScore += 1;
                        winnerStatement = "It's a tie! Both " + userHuman + " - Score: " + updatedHumanScore + " and " + userComputer + " - Score: " + updatedComputerScore + " won!";
                        roundScore = userHuman + ": " +  updatedHumanScore + " | " + userComputer + ": " + updatedComputerScore;
                        scoreResult = winnerStatement + " | " + roundScore; 
                        console.log(scoreResult);


                        if (updatedHumanScore === updatedComputerScore) { 
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
                 
                         }   else {
                            return;
                         }            


                        if (winner === userHuman) { 
                     
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
                 
                         } else {
                            return;
                         }
                
                         //return console.log({ winnerStatement, roundScore, scoreResult, numberOfRounds, finalScore, winner, userHuman, userComputer, updatedHumanScore, updatedComputerScore });
                
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
                 
                         } else {
                            return;
                         }
                
                
                        // return console.log({ winnerStatement, roundScore, scoreResult, numberOfRounds, finalScore, winner, userHuman, userComputer, updatedHumanScore, updatedComputerScore });
                    } 
                

                     } else {
                        return;
                     } */

                       //break;
                      // return { roundScore, userHuman, userComputer, winnerStatement, scoreResult, updatedHumanScore, updatedComputerScore };
                      //  return choice1 + " wins! " + roundScore; // took out humanChoice + " " + computerChoice
                      return choice1 + " wins! " + roundScore;

                        
            
                case "paper":
                    humanScore += 1;
                   // computerScore = 0;
                   // humanScore = points;
                  // winnerScore = humanScore + 1;
                  console.log(updatedHumanScore = humanScore);
                   //updatedComputerScore = 0;
                   // let winner = userHuman;
                   
                   

                    roundScore = userHuman + ": " + updatedHumanScore + " | " + userComputer + ": " + updatedComputerScore;
                    winnerStatement = userHuman + " - Score: " + updatedHumanScore + " won!";
                    scoreResult = winnerStatement + " | " + roundScore;  
                    //console.log(scoreResult);
                
                    //    return humanChoice + " wins! " + roundScore;



/*
                    if (count <= 5) {
                        count += 1;
                        }

                    else if (count === 5) { 
                        winner = userHuman || userComputer;
                        updatedHumanScore += 1;
                        updatedComputerScore += 1;
                        winnerStatement = "It's a tie! Both " + userHuman + " - Score: " + updatedHumanScore + " and " + userComputer + " - Score: " + updatedComputerScore + " won!";
                        roundScore = userHuman + ": " +  updatedHumanScore + " | " + userComputer + ": " + updatedComputerScore;
                        scoreResult = winnerStatement + " | " + roundScore; 
                        console.log(scoreResult);


                        if (updatedHumanScore === updatedComputerScore) { 
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
                 
                         }  else {
                            return;
                         }             


                        if (winner === userHuman) { 
                     
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
                 
                         } else {
                            return;
                         }
                
                        // return console.log({ winnerStatement, roundScore, scoreResult, numberOfRounds, finalScore, winner, userHuman, userComputer, updatedHumanScore, updatedComputerScore });
                
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
                 
                         } else {
                            return;
                         }
                
                
                      //   return console.log({ winnerStatement, roundScore, scoreResult, numberOfRounds, finalScore, winner, userHuman, userComputer, updatedHumanScore, updatedComputerScore });
                    } 
                

                     } else {
                        return;
                     } */

                    //break;
                    //return { roundScore, userHuman, userComputer, winnerStatement, scoreResult, updatedHumanScore, updatedComputerScore };
                    return humanChoice + " wins! " + roundScore;



                case "scissors":
                   // humanScore = points;
                  // winnerScore = humanScore + 1;
                  humanScore += 1;
                 // computerScore = 0;
                  console.log(updatedHumanScore = humanScore);
                   //updatedComputerScore = 0;
                   //let winner = userHuman;
                    
                   

                    roundScore = userHuman + ": " + updatedHumanScore + " | " + userComputer + ": " + updatedComputerScore;
                    winnerStatement = userHuman + " - Score: " + updatedHumanScore + " won!";
                    scoreResult = winnerStatement + " | " + roundScore;  
                    //console.log(scoreResult);
                  //  return humanChoice + " wins! " + roundScore;


    /*
                  if (count <= 5) {
                    count += 1;
                    }

                  else if (count === 5) { 
                    winner = userHuman || userComputer;
                    updatedHumanScore += 1;
                    updatedComputerScore += 1;
                    winnerStatement = "It's a tie! Both " + userHuman + " - Score: " + updatedHumanScore + " and " + userComputer + " - Score: " + updatedComputerScore + " won!";
                    roundScore = userHuman + ": " +  updatedHumanScore + " | " + userComputer + ": " + updatedComputerScore;
                    scoreResult = winnerStatement + " | " + roundScore; 
                    console.log(scoreResult);


                    if (updatedHumanScore === updatedComputerScore) { 
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
             
                     }   else {
                        return;
                     }            


                    if (winner === userHuman) { 
                 
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
             
                     } else {
                        return;
                     }
            
                   //  return console.log({ winnerStatement, roundScore, scoreResult, numberOfRounds, finalScore, winner, userHuman, userComputer, updatedHumanScore, updatedComputerScore });
            
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
             
                     } else {
                        return;
                     }
            
            
                    // return console.log({ winnerStatement, roundScore, scoreResult, numberOfRounds, finalScore, winner, userHuman, userComputer, updatedHumanScore, updatedComputerScore });
                } 
            

                 } else {

                 } */
                  //break;
                 // return { roundScore, userHuman, userComputer, winnerStatement, scoreResult, updatedHumanScore, updatedComputerScore };
                 return humanChoice + " wins! " + roundScore;

                        default:
                            return;
            
                    } //return count;
                    

            case "paper":

            

                switch (computerChoice) {
                    case "rock":
                        // computerScore = points;
                        // winnerScore = computerScore + 1;

                        // updatedHumanScore = 0;
                       // humanScore = 0;
                        computerScore += 1;
                        console.log(updatedComputerScore = computerScore);
                  //let  winner = userComputer;
                    
                    

                        roundScore = userHuman + ": " + updatedHumanScore + " | " + userComputer + ": " + updatedComputerScore;
                        winnerStatement = userComputer + " - Score: " + updatedComputerScore + " won!";
                        scoreResult = winnerStatement + " | " + roundScore;  
                      
                     // console.log(scoreResult);
                      //  return computerChoice + " wins! " + roundScore;


/*


                      if (count <= 5) {
                        count += 1;
                        }

                     else if (count === 5) { 
                        winner = userHuman || userComputer;
                        updatedHumanScore += 1;
                        updatedComputerScore += 1;
                        winnerStatement = "It's a tie! Both " + userHuman + " - Score: " + updatedHumanScore + " and " + userComputer + " - Score: " + updatedComputerScore + " won!";
                        roundScore = userHuman + ": " +  updatedHumanScore + " | " + userComputer + ": " + updatedComputerScore;
                        scoreResult = winnerStatement + " | " + roundScore; 
                        console.log(scoreResult);


                        if (updatedHumanScore === updatedComputerScore) { 
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
                 
                         }   else {
                            return;
                         }            


                        if (winner === userHuman) { 
                     
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
                 
                         } else {
                            return;
                         }
                
                       //  return console.log({ winnerStatement, roundScore, scoreResult, numberOfRounds, finalScore, winner, userHuman, userComputer, updatedHumanScore, updatedComputerScore });
                
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
                 
                         } else {
                            return;
                         }
                
                
                        // return console.log({ winnerStatement, roundScore, scoreResult, numberOfRounds, finalScore, winner, userHuman, userComputer, updatedHumanScore, updatedComputerScore });
                    } 
                

                     } else {
                        return;
                     } */
                    //  break;
                    return computerChoice + " wins! " + roundScore;
                      
            
                    case "paper":
                        //humanScore = points;
                        //computerScore = points;
                      //  winnerScore = humanScore + 1 && computerScore + 1;
                      humanScore += 1;
                      computerScore += 1;
                      console.log(updatedHumanScore = humanScore);
                      console.log(updatedComputerScore += computerScore);
                       //let winner = userHuman || userComputer;
                        
                        
                        
                        roundScore = userHuman + ": " + updatedHumanScore + " | " + userComputer + ": " + updatedComputerScore;
                        winnerStatement = "It's a tie! Both " + userHuman + " - Score: " + updatedHumanScore + " and " + userComputer + " - Score: " + updatedComputerScore + " won!";
                        scoreResult = winnerStatement + " | " + roundScore;  
                        //console.log(scoreResult);
                       // return choice2 + " wins! " + roundScore; // removed humanChoice + " " + computerChoice
                      
                      
            /*          
                      
                       if (count <= 5) {
                        count += 1;
                        }
                     
                      else if (count === 5) { 
                        winner = userHuman || userComputer;
                        updatedHumanScore += 1;
                        updatedComputerScore += 1;
                        winnerStatement = "It's a tie! Both " + userHuman + " - Score: " + updatedHumanScore + " and " + userComputer + " - Score: " + updatedComputerScore + " won!";
                        roundScore = userHuman + ": " +  updatedHumanScore + " | " + userComputer + ": " + updatedComputerScore;
                        scoreResult = winnerStatement + " | " + roundScore; 
                        console.log(scoreResult);


                        if (updatedHumanScore === updatedComputerScore) { 
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
                 
                         }   else {
                            return;
                         }            


                        if (winner === userHuman) { 
                     
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
                 
                         } else {
                            return;
                         }
                
                      //   return console.log({ winnerStatement, roundScore, scoreResult, numberOfRounds, finalScore, winner, userHuman, userComputer, updatedHumanScore, updatedComputerScore });
                
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
                 
                         } else {
                            return;
                         }
                
                
                         return console.log({ winnerStatement, roundScore, scoreResult, numberOfRounds, finalScore, winner, userHuman, userComputer, updatedHumanScore, updatedComputerScore });
                    } 
                

                     } else {
                        return;
                     } */
                     
                       //break;
                       //return { roundScore, userHuman, userComputer, winnerStatement, scoreResult, updatedHumanScore, updatedComputerScore };
                       return choice2 + " wins! " + roundScore;



                    case "scissors":
                        // computerScore = points;
                      //  winnerScore = computerScore + 1;
                       // updatedHumanScore = 0;
                       //humanScore = 0;
                       computerScore +=1;
                       console.log(updatedComputerScore = computerScore);
                        // let winner = userComputer;
                        
                        

                        roundScore = userHuman + ": " + updatedHumanScore + " | " + userComputer + ": " + updatedComputerScore;
                        winnerStatement = userComputer + " - Score: " + updatedComputerScore + " won!";
                        scoreResult = winnerStatement + " | " + roundScore;  
                      //  console.log(scoreResult);
                      // return computerChoice + " wins! " + roundScore;
                      


          /*            
                      if (count <= 5) {
                        count += 1;
                        }

                      else if (count === 5) { 
                        winner = userHuman || userComputer;
                        updatedHumanScore += 1;
                        updatedComputerScore += 1;
                        winnerStatement = "It's a tie! Both " + userHuman + " - Score: " + updatedHumanScore + " and " + userComputer + " - Score: " + updatedComputerScore + " won!";
                        roundScore = userHuman + ": " +  updatedHumanScore + " | " + userComputer + ": " + updatedComputerScore;
                        scoreResult = winnerStatement + " | " + roundScore; 
                        console.log(scoreResult);


                        if (updatedHumanScore === updatedComputerScore) { 
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
                 
                         }   else {
                            return;
                         }            


                        if (winner === userHuman) { 
                     
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
                 
                         } else {
                            return;
                         }
                
                         //return console.log({ winnerStatement, roundScore, scoreResult, numberOfRounds, finalScore, winner, userHuman, userComputer, updatedHumanScore, updatedComputerScore });
                
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
                 
                         } else {
                            return;
                         }
                
                
                         return console.log({ winnerStatement, roundScore, scoreResult, numberOfRounds, finalScore, winner, userHuman, userComputer, updatedHumanScore, updatedComputerScore });
                    } 
                

                     } else {
                        return;
                     } */
                      
                      
                     // break;
                     //return { roundScore, userHuman, userComputer, winnerStatement, scoreResult, updatedHumanScore, updatedComputerScore };
                     return computerChoice + " wins! " + roundScore;

                        
                        default:
                            return;
        } //return count;

            case "scissors":

                switch (computerChoice) {
                    
                    case "rock":
                        // computerScore = points;
                      //  winnerScore = computerScore + 1;
                       // updatedHumanScore = 0;
                       //humanScore = 0;
                       computerScore += 1;
                       console.log(updatedComputerScore = computerScore);
                       // winner = userComputer;
                       
                        
                      
                        roundScore = userHuman + ": " + updatedHumanScore + " | " + userComputer + ": " + updatedComputerScore;
                        winnerStatement = userComputer + " - Score: " + updatedComputerScore + " won!";
                      
                        scoreResult = winnerStatement + " | " + roundScore;  
                       // console.log(scoreResult);
                       // return computerChoice + " wins! " + roundScore;
                      

/*

                       if (count <= 5) {
                        count += 1;
                        }

                       else if (count === 5) { 
                        winner = userHuman || userComputer;
                        updatedHumanScore += 1;
                        updatedComputerScore += 1;
                        winnerStatement = "It's a tie! Both " + userHuman + " - Score: " + updatedHumanScore + " and " + userComputer + " - Score: " + updatedComputerScore + " won!";
                        roundScore = userHuman + ": " +  updatedHumanScore + " | " + userComputer + ": " + updatedComputerScore;
                        scoreResult = winnerStatement + " | " + roundScore; 
                        console.log(scoreResult);


                        if (updatedHumanScore === updatedComputerScore) { 
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
                 
                         }   else {
                            return;
                         }            


                        if (winner === userHuman) { 
                     
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
                 
                         } else {
                            return;
                         }
                
                        // return console.log({ winnerStatement, roundScore, scoreResult, numberOfRounds, finalScore, winner, userHuman, userComputer, updatedHumanScore, updatedComputerScore });
                
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
                 
                         } else {
                            return;
                         }
                
                
                        // return console.log({ winnerStatement, roundScore, scoreResult, numberOfRounds, finalScore, winner, userHuman, userComputer, updatedHumanScore, updatedComputerScore });
                    } 
                

                     } else {
                        return; 
                     } */
                      
                      
                       //break;
                       //return { roundScore, userHuman, userComputer, winnerStatement, scoreResult, updatedHumanScore, updatedComputerScore };
                       return computerChoice + " wins! " + roundScore;


                    case "paper":
                       // humanScore = points;
                      //  winnerScore = humanScore + 1;
                      humanScore += 1;
                      //computerScore = 0;
                      console.log(updatedHumanScore = humanScore);
                       // updatedComputerScore = 0;
                       // let winner = userHuman;
                       
                        

                        roundScore = userHuman + ": " + updatedHumanScore + " | " + userComputer + ": " + updatedComputerScore;
                        winnerStatement = userHuman + " - Score: " + updatedHumanScore + " won!";
                    
                        scoreResult = winnerStatement + " | " + roundScore;  
                       // console.log(scoreResult);
                      //  return humanChoice + " wins! " + roundScore;
                     

        /*              
                      if (count <= 5) {
                        count += 1;
                        }


                      else if (count === 5) { 
                        winner = userHuman || userComputer;
                        updatedHumanScore += 1;
                        updatedComputerScore += 1;
                        winnerStatement = "It's a tie! Both " + userHuman + " - Score: " + updatedHumanScore + " and " + userComputer + " - Score: " + updatedComputerScore + " won!";
                        roundScore = userHuman + ": " +  updatedHumanScore + " | " + userComputer + ": " + updatedComputerScore;
                        scoreResult = winnerStatement + " | " + roundScore; 
                        console.log(scoreResult);


                        if (updatedHumanScore === updatedComputerScore) { 
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
                 
                         }  else {
                            return;
                         }             


                        if (winner === userHuman) { 
                     
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
                 
                         } else {
                            return;
                         }
                
                        // return console.log({ winnerStatement, roundScore, scoreResult, numberOfRounds, finalScore, winner, userHuman, userComputer, updatedHumanScore, updatedComputerScore });
                
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
                 
                         } else {
                            return;
                         }
                
                
                        // return console.log({ winnerStatement, roundScore, scoreResult, numberOfRounds, finalScore, winner, userHuman, userComputer, updatedHumanScore, updatedComputerScore });
                    } 
                

                     } else {
                        return;
                     } */
                     
                     
                      //break;
                     // return { roundScore, userHuman, userComputer, winnerStatement, scoreResult, updatedHumanScore, updatedComputerScore };
                     return humanChoice + " wins! " + roundScore;


                    case "scissors":
                        //humanScore = points;
                        //computerScore = points;
                        
                      //  winnerScore = humanScore + 1 && computerScore + 1;                    
                      humanScore += 1;
                      computerScore += 1;
                      console.log(updatedHumanScore = humanScore);
                      console.log(updatedComputerScore = computerScore);
                       // let winner = userHuman || userComputer;
                        
                        
                        
                        roundScore = userHuman + ": " + updatedHumanScore + " | " + userComputer + ": " + updatedComputerScore;
                        winnerStatement = "It's a tie! Both " + userHuman + " - Score: " + updatedHumanScore + " and " + userComputer + " - Score: " + updatedComputerScore + " won!";
                      
                        scoreResult = winnerStatement + " | " + roundScore;  
                        //console.log(scoreResult);
                        
                       

     /*                   
                        if (count <= 5) {
                            count += 1;
                            }

                        else if (count === 5) { 
                            winner = userHuman || userComputer;
                            updatedHumanScore += 1;
                            updatedComputerScore += 1;
                            winnerStatement = "It's a tie! Both " + userHuman + " - Score: " + updatedHumanScore + " and " + userComputer + " - Score: " + updatedComputerScore + " won!";
                            roundScore = userHuman + ": " +  updatedHumanScore + " | " + userComputer + ": " + updatedComputerScore;
                            scoreResult = winnerStatement + " | " + roundScore; 
                            console.log(scoreResult);
    
    
                            if (updatedHumanScore === updatedComputerScore) { 
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
                     
                             }  else {
                                return;
                             }        
    
    
                            if (winner === userHuman) { 
                         
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
                      
                             } else {
                                return;
                             }
                    
                            // return console.log({ winnerStatement, roundScore, scoreResult, numberOfRounds, finalScore, winner, userHuman, userComputer, updatedHumanScore, updatedComputerScore });
                    
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
                     
                             } else  {
                                return;
                             }
                    
                    
                             //return console.log({ winnerStatement, roundScore, scoreResult, numberOfRounds, finalScore, winner, userHuman, userComputer, updatedHumanScore, updatedComputerScore });
                        } 
                    
    
                         } else {
                            return;
                         } */
                       
                       
                       
                        //break;
                       // return { roundScore, userHuman, userComputer, winnerStatement, scoreResult, updatedHumanScore, updatedComputerScore };
                       return choice3 + " wins! " + roundScore;
                                            
                        default:
                            return;

}  // return count;                     

    
} // main switch endbacket 


// } // end of if statement 2



  // } // end of playerChoices

  // playerChoices({ winnerStatement, roundScore, scoreResult, numberOfRounds, finalScore, winner, userHuman, userComputer, updatedHumanScore, updatedComputerScore });


} // this is the playRound function endbracket




//let humanResult = getHumanChoice;
//let computerResult = getComputerChoice;

// let choiceResults = playerChoices;

// below code taken from assignment step 5 example

const humanSelection = getHumanChoice(); // changed getHumanChoice() to humanResult() & const to let
const computerSelection = getComputerChoice(); // changed getComputerChoice() to computerResult() & const to let 
//let choiceSelections = choiceResults();
//playRound(humanSelection, computerSelection); //commenting out as it didn't do anything

// this is coming back undefined, why?

console.log(playRound(humanSelection, computerSelection)); //  changed humanSelection, computerSelection - this line was printing the winning message for a second time
startTimer(); 
//if (count >= 2 && count <= 4) {
console.log(playRound(humanChoice, computerChoice));
startTimer(); 
console.log(playRound(humanChoice, computerChoice));
startTimer(); 
console.log(playRound(humanChoice, computerChoice));
startTimer(); 
console.log(playRound(humanChoice, computerChoice));
//}


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

//playGame(); this doubles prompts

// leave this call for playGame to sucessfully pass values from playRound to refreshPlay
//console.log(playGame());

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

