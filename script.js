
const userHuman = "Human"; //const
const userComputer = "The Computer"; //const




let humanScore = 0;
let computerScore = 0;





  





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
//getHumanChoice(); // it works but it is the only thing playing.




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

//getComputerChoice() // works - comment out as it's the only thing playing.
  

//let humanResult = getHumanChoice;
//let computerResult = getComputerChoice;



// below code taken from assignment step 5 example

const humanSelection = getHumanChoice(); // changed getHumanChoice() to humanResult() & const to let
const computerSelection = getComputerChoice(); // changed getComputerChoice() to computerResult() & const to let 
//let choiceSelections = choiceResults();
//playRound(humanSelection, computerSelection); //commenting out as it didn't do anything

// this is coming back undefined, why?

playRound(humanSelection, computerSelection); //  this plays the first prompt correctly.
startTimer(); 

playRound(humanSelection, computerSelection);
startTimer(); 
playRound(humanSelection, computerSelection);
startTimer(); 
playRound(humanSelection, computerSelection);
startTimer(); 
playRound(humanSelection, computerSelection);



function playGame() {

    startTimer(); 
    
    
   





function playRound(humanChoice, computerChoice) { // getHumanChoice, getComputerChoice - humanChoiceMap, computerChoiceMap - humanChoice, computerChoice - the parameters are the choices
    
    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();  
      

let roundScore;
let winnerStatement;
let scoreResult = winnerStatement + " | " + roundScore;


let updatedHumanScore = humanScore;
let updatedComputerScore = computerScore;

let choice1 = "rock";
let choice2 = "paper";
let choice3 = "scissors";

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
                   console.log(scoreResult); 
                    
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
                    console.log(scoreResult); 
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
                    console.log(scoreResult);  
                   return humanChoice + " wins! " + roundScore;

                        default:
                            return;
            
                    } 
                    

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
                        console.log(scoreResult); 
                      
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
                        console.log(scoreResult); 
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
                        console.log(scoreResult); 
                       return computerChoice + " wins! " + roundScore;

                        
                        default:
                            return;
        } 

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
                      
                        console.log(scoreResult); 
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
                    
                        console.log(scoreResult);  
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
                      
                        console.log(scoreResult);  
                    return choice3 + " wins! " + roundScore;
                                            
                        default:
                            return;

}                   

    
} // main switch endbacket 




} // this is the playRound function endbracket

playRound(humanChoice, computerChoice);

} // end of playGame

//playGame(); this doubles prompts