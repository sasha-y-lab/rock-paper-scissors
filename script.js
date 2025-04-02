
const userHuman = "Human"; //const
const userComputer = "The Computer"; //const




let humanScore = 0;
let computerScore = 0;





  



/*

function startTimer() {

 setTimeout(playGame, 3000);

   } 

   startTimer();

*/

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

//const humanSelection = getHumanChoice; // changed getHumanChoice() to humanResult() & const to let
//const computerSelection = getComputerChoice; // changed getComputerChoice() to computerResult() & const to let 
//let choiceSelections = choiceResults();
//playRound(humanSelection, computerSelection); //commenting out as it didn't do anything

/*
console.log(playGame()); // took out humanSelection, computerSelection - this plays the first prompt correctly.
//startTimer(); 

console.log(playGame());
//startTimer(); 

console.log(playGame());
//startTimer(); 

console.log(playGame());
//startTimer();

console.log(playGame());
//clearTimeout();
*/

function playGame() {

    
    
    
   





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
                    
                   // winnerScore = (humanScore + 1) && (computerScore + 1);
                   humanScore++;
                   computerScore++;;
                   
                  console.log(updatedHumanScore = humanScore);
                    console.log(updatedComputerScore = computerScore);
                  // let winner = userHuman || userComputer;
                    
                    

                    roundScore = userHuman + ": " + updatedHumanScore + " | " + userComputer + ": " + updatedComputerScore;
                    winnerStatement = "It's a tie! Both " + userHuman + " - Score: " + updatedHumanScore + " and " + userComputer + " - Score: " + updatedComputerScore + " won!";
                    scoreResult = winnerStatement + " | " + roundScore;
                    console.log(scoreResult); 
                    
                  console.log(choice1 + " wins! " + roundScore);
                  
                   
                  break;

                        
            
                case "paper":
                    
                   // computerScore = 0;
                   humanScore++;
                  // winnerScore = humanScore + 1;
                  console.log(updatedHumanScore = humanScore);
                   //updatedComputerScore = 0;
                   // let winner = userHuman;
                   
                   

                    roundScore = userHuman + ": " + updatedHumanScore + " | " + userComputer + ": " + updatedComputerScore;
                    winnerStatement = userHuman + " - Score: " + updatedHumanScore + " won!";
                    scoreResult = winnerStatement + " | " + roundScore;
                    
                    console.log(scoreResult); 
                    console.log(humanChoice + " wins! " + roundScore);
                   
                    break;


                case "scissors":
                   humanScore++;
                  // winnerScore = humanScore + 1;
                  ;
                 // computerScore = 0;
                  console.log(updatedHumanScore = humanScore);
                   //updatedComputerScore = 0;
                   //let winner = userHuman;
                    
                   

                    roundScore = userHuman + ": " + updatedHumanScore + " | " + userComputer + ": " + updatedComputerScore;
                    winnerStatement = userHuman + " - Score: " + updatedHumanScore + " won!";
                    scoreResult = winnerStatement + " | " + roundScore;
                    console.log(scoreResult);  
                   console.log(humanChoice + " wins! " + roundScore);
                   
                   

                   break;

                        default:
                            break;
            
                    } 
                    break;

            case "paper":

            

                switch (computerChoice) {
                    case "rock":
                         computerScore++;
                        // winnerScore = computerScore + 1;

                        // updatedHumanScore = 0;
                       // humanScore = 0;
                        
                        console.log(updatedComputerScore = computerScore);
                  //let  winner = userComputer;
                    
                    

                        roundScore = userHuman + ": " + updatedHumanScore + " | " + userComputer + ": " + updatedComputerScore;
                        winnerStatement = userComputer + " - Score: " + updatedComputerScore + " won!";
                        scoreResult = winnerStatement + " | " + roundScore;
                        console.log(scoreResult); 
                        
                    console.log(computerChoice + " wins! " + roundScore);
                    
                      break;
            
                    case "paper":
                        humanScore++;
                        computerScore++;
                      //  winnerScore = humanScore + 1 && computerScore + 1;
                      
                      console.log(updatedHumanScore = humanScore);
                      console.log(updatedComputerScore = computerScore);
                       //let winner = userHuman || userComputer;
                        
                        
                        
                        roundScore = userHuman + ": " + updatedHumanScore + " | " + userComputer + ": " + updatedComputerScore;
                        winnerStatement = "It's a tie! Both " + userHuman + " - Score: " + updatedHumanScore + " and " + userComputer + " - Score: " + updatedComputerScore + " won!";
                        scoreResult = winnerStatement + " | " + roundScore;
                        console.log(scoreResult); 
                        console.log(choice2 + " wins! " + roundScore);
                        
                        break;


                    case "scissors":
                        computerScore++;
                      //  winnerScore = computerScore + 1;
                       // updatedHumanScore = 0;
                       //humanScore = 0;
                       
                       console.log(updatedComputerScore = computerScore);
                        // let winner = userComputer;
                        
                        

                        roundScore = userHuman + ": " + updatedHumanScore + " | " + userComputer + ": " + updatedComputerScore;
                        winnerStatement = userComputer + " - Score: " + updatedComputerScore + " won!";
                        scoreResult = winnerStatement + " | " + roundScore;
                        console.log(scoreResult); 
                        console.log(computerChoice + " wins! " + roundScore);
                        
                        break;
                        
                        default:
                            break;
        } 
        
        break;

            case "scissors":

                switch (computerChoice) {
                    
                    case "rock":
                         computerScore++;
                      //  winnerScore = computerScore + 1;
                       // updatedHumanScore = 0;
                       //humanScore = 0;
                       
                       console.log(updatedComputerScore = computerScore);
                       // winner = userComputer;
                       
                        
                      
                        roundScore = userHuman + ": " + updatedHumanScore + " | " + userComputer + ": " + updatedComputerScore;
                        winnerStatement = userComputer + " - Score: " + updatedComputerScore + " won!";
                        scoreResult = winnerStatement + " | " + roundScore;
                        console.log(scoreResult); 
                        console.log(computerChoice + " wins! " + roundScore);
                       
                        break;


                    case "paper":
                       humanScore++;
                      //  winnerScore = humanScore + 1;
                      
                      //computerScore = 0;
                      console.log(updatedHumanScore = humanScore);
                       // updatedComputerScore = 0;
                       // let winner = userHuman;
                       
                        

                        roundScore = userHuman + ": " + updatedHumanScore + " | " + userComputer + ": " + updatedComputerScore;
                        winnerStatement = userHuman + " - Score: " + updatedHumanScore + " won!";
                        scoreResult = winnerStatement + " | " + roundScore;
                        console.log(scoreResult);  
                        console.log(humanChoice + " wins! " + roundScore);
                      
                        break;

                    case "scissors":
                        humanScore++;;
                        computerScore++;;
                        
                      //  winnerScore = humanScore + 1 && computerScore + 1;                    
                      
                      console.log(updatedHumanScore = humanScore);
                      console.log(updatedComputerScore = computerScore);
                       // let winner = userHuman || userComputer;
                        
                        
                        
                        roundScore = userHuman + ": " + updatedHumanScore + " | " + userComputer + ": " + updatedComputerScore;
                        winnerStatement = "It's a tie! Both " + userHuman + " - Score: " + updatedHumanScore + " and " + userComputer + " - Score: " + updatedComputerScore + " won!";
                        scoreResult = winnerStatement + " | " + roundScore;
                        console.log(scoreResult);  
                        console.log(choice3 + " wins! " + roundScore);
                        
                        break;

                        default:
                            break;

}  

break;                

    
} // main switch endbacket 




} // this is the playRound function endbracket


playRound(); // humanSelection, computerSelection


playRound();


playRound();


playRound();


playRound();



} // end of playGame

playGame(); // needed to start playRound