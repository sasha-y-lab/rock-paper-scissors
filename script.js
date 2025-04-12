const body = document.querySelector("body");
// create a new div called container

const container = document.createElement("div");
container.setAttribute("id", "container"); // adds id


// access container div
const mainContainer = document.querySelector("#container");

// what goes in the main container? a header1 and a game display div
const mainContainerH1 = document.createElement("h1");
mainContainerH1.textContent = "ROCK, PAPER, SCISSORS";
container.appendChild(mainContainerH1);

const gameDisplay = document.createElement("div");
gameDisplay.classList.add("game-display");

// what goes in game display div? a div for gameControl that includes a header3 & 3 buttons
// along with user image button choice and user name on another line
// score on last line

const gameControl = document.createElement("div");
gameControl.classList.add("game-control");

const gameControlH3 = document.createElement("h3");
gameControlH3.textContent = "Click to Play";
gameControl.appendChild(gameControlH3);

// create a div just for buttons

const myButtons = document.createElement("div");
myButtons.classList.add("all-buttons");

// rock button
const rockBtn = document.createElement("button");
rockBtn.setAttribute("id", "rock-btn"); // adds id
rockBtn.style.backgroundColor = "white";
rockBtn.style.border = "none";


// rock button has rock image inside of it
const rockImg = document.createElement("img");
rockImg.setAttribute("id", "rock-img"); // adds id 
rockImg.src = "./images/rps-rock-hand.png";
rockImg.height = 250;
rockImg.width = 250;
rockBtn.appendChild(rockImg);

myButtons.appendChild(rockBtn);

// paper button

const paperBtn = document.createElement("button");
paperBtn.setAttribute("id", "paper-btn"); // adds id
paperBtn.style.backgroundColor = "white";
paperBtn.style.border = "none";


// paper button has paper image inside of it
const paperImg = document.createElement("img");
paperImg.setAttribute("id", "paper-img"); // adds id
paperImg.src = "./images/rps-paper-hand.png";
paperImg.height = 250;
paperImg.width = 250;
paperBtn.appendChild(paperImg);

myButtons.appendChild(paperBtn);

// scissors button

const scissorsBtn = document.createElement("button");
scissorsBtn.setAttribute("id", "scissors-btn"); // adds id
scissorsBtn.style.backgroundColor = "white";
scissorsBtn.style.border = "none";

// scissors button has scissors image inside of it
const scissorsImg = document.createElement("img");
scissorsImg.setAttribute("id", "scissors-img"); // adds id
scissorsImg.src = "./images/rps-scissors-hand.png";
scissorsImg.height = 250;
scissorsImg.width = 250;
scissorsBtn.appendChild(scissorsImg);

myButtons.appendChild(scissorsBtn);

gameControl.appendChild(myButtons);

// a div for user choices images &  scoring
const gameResultDisplay = document.createElement("div");
gameResultDisplay.classList.add("game-result");
//gameControl.appendChild(gameResultDisplay);

/*
// a div for user choices images &  scoring
const gameResultDisplay = document.createElement("div");
gameResultDisplay.classList.add("game-result");
*/

// human user
const humanCurrentChoice = document.createElement("div");
humanCurrentChoice.classList.add("human-current-choice");

const userHumanImg = document.createElement("img");
userHumanImg.classList.add("human-img");
//userHumanImg.src = "";
//userHumanImg.height = 150;
//userHumanImg.width = 150;
humanCurrentChoice.appendChild(userHumanImg);

const textHumanImg = document.createElement("p");
textHumanImg.classList.add("player-h");
//textHumanImg.textContent = "You";
humanCurrentChoice.appendChild(textHumanImg);

const scoreHuman = document.createElement("p");
scoreHuman.classList.add("h-score");
humanCurrentChoice.appendChild(scoreHuman);

gameResultDisplay.appendChild(humanCurrentChoice);

// computer user
const computerCurrentChoice = document.createElement("div");
computerCurrentChoice.classList.add("computer-current-choice");

const userComputerImg = document.createElement("img");
userComputerImg.classList.add("computer-img");
//userComputerImg.src = "";
//userComputerImg.height = 150;
//userComputerImg.width = 150;
computerCurrentChoice.appendChild(userComputerImg);

const textComputerImg = document.createElement("p");
textComputerImg.classList.add("player-c");
//textComputerImg.textContent = "Computer";
computerCurrentChoice.appendChild(textComputerImg);

const scoreComputer = document.createElement("p");
scoreComputer.classList.add("c-score");
computerCurrentChoice.appendChild(scoreComputer);

gameResultDisplay.appendChild(computerCurrentChoice);

gameControl.appendChild(gameResultDisplay);


gameDisplay.appendChild(gameControl);

container.appendChild(gameDisplay);
body.appendChild(container);

/*
function getComputerChoice (computerSelectionMap) {

   let computerSelection = Math.floor(Math.random() * 3) + 1;
         
    computerSelectionMap = new Map();

    computerSelectionMap.set(1, rockImg);
    computerSelectionMap.set(2, paperImg);
    computerSelectionMap.set(3, scissorsImg);

    return computerSelectionMap;



} */



// start game

let humanScore = 0;
let computerScore = 0;

function playGame () {

    // start player selection

    function playerSelection (humanSelection, computerSelectionMap) {

        
    
// access all buttons

        let allButtons = document.querySelectorAll(".all-buttons");
        
        
        
            
        //loop through buttons
        
        allButtons.forEach((allButton) => {
            allButton.addEventListener('click', (e) => {
                
              //  console.log(e.target); // show each button pressed when pressed
              humanSelection = e.target;
              console.log(humanSelection);
                
              let computerSelection = Math.floor(Math.random() * 3) + 1;
                 
              computerSelectionMap = new Map();
          
              computerSelectionMap.set(1, rockImg);
              computerSelectionMap.set(2, paperImg);
              computerSelectionMap.set(3, scissorsImg);
        
             
              
               if (humanSelection === rockImg || humanSelection === paperImg || humanSelection === scissorsImg) {
                
                    //console.log(humanSelection);
        
                    //for (let i = 0; i < computerSelection; i++) {
                   let computerChoice = computerSelectionMap.get(computerSelection);
                   // console.log(computerSelection);
                   // console.log(computerChoice);
                    
                   // open gameresult display and update
         
        const updateUserHumanImg = document.querySelector(".human-img")
        // human user
        updateUserHumanImg.src = humanSelection.src;
        //console.log(humanSelection.src);
        updateUserHumanImg.height = 150;
        updateUserHumanImg.width = 150;
        humanCurrentChoice.appendChild(updateUserHumanImg);
        
        const updateTextHumanImg = document.querySelector(".player-h");
        updateTextHumanImg.textContent = "You";
        humanCurrentChoice.appendChild(updateTextHumanImg);
        

        let updateScoreHuman = document.querySelector(".h-score");
        //updateScoreHuman.textContent = updatedHumanScore; //humanScore.toString()
        humanCurrentChoice.appendChild(updateScoreHuman);
        
        gameResultDisplay.appendChild(humanCurrentChoice);
        //const scoreHuman = document.createElement("p");
        //scoreHuman.classList.add("h-score");
        //scoreHuman.textContent = humanScore.toString();
        //humanCurrentChoice.appendChild(scoreHuman);
        
        
        
        // computer user
        //const computerCurrentChoice = document.createElement("div");
        //computerCurrentChoice.classList.add("computer-current-choice");
        
        const updateUserComputerImg = document.querySelector(".computer-img");
        //userComputerImg.classList.add("computer-img");
        updateUserComputerImg.src = computerSelectionMap.get(computerSelection).src;
        //console.log(addComputerImage(imgSrc));
        
        updateUserComputerImg.height = 150;
        updateUserComputerImg.width = 150;
        computerCurrentChoice.appendChild(updateUserComputerImg);
        
        const updateTextComputerImg = document.querySelector(".player-c");
        updateTextComputerImg.textContent = "Computer";
        computerCurrentChoice.appendChild(updateTextComputerImg);
        

        let updateScoreComputer = document.querySelector(".c-score");
       // updateScoreComputer.textContent = updatedComputerScore; //computerScore.toString()
        computerCurrentChoice.appendChild(updateScoreComputer);
        gameResultDisplay.appendChild(computerCurrentChoice);


        //const scoreComputer = document.createElement("p");
        //scoreComputer.classList.add("c-score");
        //scoreComputer.textContent = computerScore.toString();
        //computerCurrentChoice.appendChild(scoreComputer);
        
        //gameResultDisplay.appendChild(computerCurrentChoice);
        
        //gameControl.appendChild(gameResultDisplay);
        //gameDisplay.appendChild(gameControl);
        
        //container.appendChild(gameDisplay);
        //body.appendChild(container);

        gameControl.appendChild(gameResultDisplay);
        gameDisplay.appendChild(gameControl);
        
        container.appendChild(gameDisplay);
        body.appendChild(container);

        function playRound() { //humanSelection, computerChoice
    
          

        let updatedHumanScore = humanScore;
        let updatedComputerScore = computerScore; 
        
            //playerSelection(humanSelection, computerSelectionMap); // this was doubling the play
        
            
                      
               
        
                if (humanSelection === computerChoice) {
                    console.log(humanSelection);
                    console.log(computerChoice);
        humanScore += 1;
        computerScore += 1;
       console.log(humanScore);
       console.log(computerScore);
       updatedHumanScore = humanScore;
      updatedComputerScore = computerScore;
       // console.log(updatedHumanScore);
       // console.log(updatedComputerScore);
        
        //let newHumanScore = humanScore++;
        //let newComputerScore = computerScore++;
        
        //const updateScoreHuman = document.querySelector(".h-score");
        updateScoreHuman.textContent = updatedHumanScore; //humanScore.toString()
        //humanCurrentChoice.appendChild(updateScoreHuman);
        
        //gameResultDisplay.appendChild(humanCurrentChoice);
        
       // const updateScoreComputer = document.querySelector(".c-score");
        updateScoreComputer.textContent = updatedComputerScore; //computerScore.toString()
        //computerCurrentChoice.appendChild(updateScoreComputer);
        //gameResultDisplay.appendChild(computerCurrentChoice);
        
       // gameControl.appendChild(gameResultDisplay);
        //gameDisplay.appendChild(gameControl);
        
       // container.appendChild(gameDisplay);
       // body.appendChild(container);
        
        
        //return { computerScore, humanScore, computerChoice, humanSelection }; //updatedComputerScore, updatedHumanScore,
        
        
                } //inner if statement end
                
                
               else if ((humanSelection === rockImg && computerChoice === paperImg) || (humanSelection === paperImg && computerChoice === scissorsImg) || (humanSelection === scissorsImg && computerChoice === rockImg)) {
                    console.log(humanSelection);
                    console.log(computerChoice);
       computerScore += 1;
      humanScore + 0;
    console.log(computerScore);
        console.log(humanScore);
       updatedHumanScore = humanScore;
        updatedComputerScore = computerScore;
       // console.log(updatedHumanScore);
       // console.log(updatedComputerScore);
        
        //const updateScoreHuman = document.querySelector(".h-score");
        updateScoreHuman.textContent = updatedHumanScore;
        //humanCurrentChoice.appendChild(updateScoreHuman);
        
       // gameResultDisplay.appendChild(humanCurrentChoice);
        
        //const updateScoreComputer = document.querySelector(".c-score");
        updateScoreComputer.textContent = updatedComputerScore;
        //computerCurrentChoice.appendChild(updateScoreComputer);
        //gameResultDisplay.appendChild(computerCurrentChoice);
        
    
        
       // return { computerScore, humanScore, updatedComputerScore, updatedHumanScore, computerChoice, humanSelection };
        
                }
                
               else if ((computerChoice === rockImg && humanSelection === paperImg) || (computerChoice === paperImg && humanSelection === scissorsImg) || (computerChoice === scissorsImg && humanSelection === rockImg)) {

                    console.log(humanSelection);
        console.log(computerChoice);
                    humanScore += 1;
                    computerScore + 0;
                    console.log(humanScore);
                    console.log(computerScore);
                    
        updatedHumanScore = humanScore;
        updatedComputerScore = computerScore;
        //console.log(updatedHumanScore);
        //console.log(updatedComputerScore);
        
                   // const updateScoreHuman = document.querySelector(".h-score");
                    updateScoreHuman.textContent = updatedHumanScore;
                   // humanCurrentChoice.appendChild(updateScoreHuman);
        
                   // gameResultDisplay.appendChild(humanCurrentChoice);
        
       // const updateScoreComputer = document.querySelector(".c-score");
       updateScoreComputer.textContent = updatedComputerScore;
       // computerCurrentChoice.appendChild(updateScoreComputer);
        // gameResultDisplay.appendChild(computerCurrentChoice);
        
    
        
                   // return { computerScore, humanScore, updatedComputerScore, updatedHumanScore, computerChoice, humanSelection };
                } 
                else {
                    return;
                }

                //return { computerScore, humanScore, updatedComputerScore, updatedHumanScore };
        }
        playRound();
                    
        //return { computerScore, humanScore };
        
            
        
            } // first if statement end
            
        //} // end of for loop
               
                    }); // event listener end
                
                }); // for each loop end
        
            } // end of function playerSelection
              playerSelection();



}
playGame();




  




