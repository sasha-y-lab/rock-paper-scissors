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

gameControl.appendChild(rockBtn);

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

gameControl.appendChild(paperBtn);

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

gameControl.appendChild(scissorsBtn);


// a div for user choices images &  scoring
const gameResultDisplay = document.createElement("div");
gameResultDisplay.classList.add("game-result");

// human user
const humanCurrentChoice = document.createElement("div");
humanCurrentChoice.classList.add("human-current-choice");

const userHumanImg = document.createElement("img");
userHumanImg.classList.add("human-img");
userHumanImg.src = "";
userHumanImg.height = 150;
userHumanImg.width = 150;
humanCurrentChoice.appendChild(userHumanImg);

const textHumanImg = document.createElement("p");
textHumanImg.textContent = "You";
humanCurrentChoice.appendChild(textHumanImg);

gameResultDisplay.appendChild(humanCurrentChoice);

// computer user
const computerCurrentChoice = document.createElement("div");
computerCurrentChoice.classList.add("computer-current-choice");

const userComputerImg = document.createElement("img");
userComputerImg.classList.add("computer-img");
userComputerImg.src = "";
userComputerImg.height = 150;
userComputerImg.width = 150;
computerCurrentChoice.appendChild(userComputerImg);

const textComputerImg = document.createElement("p");
textComputerImg.textContent = "Computer";
computerCurrentChoice.appendChild(textComputerImg);

gameResultDisplay.appendChild(computerCurrentChoice);

gameControl.appendChild(gameResultDisplay);

gameDisplay.appendChild(gameControl);

container.appendChild(gameDisplay);
body.appendChild(container);

const choices = [rockBtn, paperBtn, scissorsBtn];

const changeUserImage = () => {



	const userImage = document.querySelector('.human-img');
    
    
    if (rockBtn.onclick) { //addEventListener('click')
	userImage.src = rockImg.src;
    return userImage.src;
    } else if (paperBtn.onclick) {
        userImage.src = paperImg.src;
        return userImage.src;
    } else if (scissorsBtn.onclick) {
        userImage.src = scissorsImg.src;
        return userImage.src;
    } else {
        return;
    } 



}

for (let i = choices.length - 1; i >= 0; i++) {
const buttonChoice = choices[i].document.querySelector("button");
buttonChoice.onclick = changeUserImage;
break;
}

/* doesn't work
const rockChoice = document.querySelector("#rock-btn");
//buttons.onclick = changeUserImage;
rockChoice.onclick = changeUserImage;

const paperChoice = document.querySelector('#paper-btn');
paperChoice.onclick = changeUserImage;

const scissorsChoice = document.querySelector('#scissors-btn');
scissorsChoice.onclick = changeUserImage;

*/

//let humanScore = 0;
//let computerScore = 0;





  





   