const pokemonButton = document.getElementById("pokemon");
const pokemon = ["Charmander", "Squirtle", "Bulbasaur"];
const modalWin = document.getElementById("modalwin");
const modalLose = document.getElementById("modallose");
const modalDraw = document.getElementById("modaldraw");
const overlay = document.getElementById("overlay");
const span1 = document.getElementById("closewin");
const span2 = document.getElementById("closelose");
const span3 = document.getElementById("closedraw");
const wins = document.getElementById("wins");
const losses = document.getElementById("losses");
const draws = document.getElementById("draws");
const winReset = document.getElementById("winbutton");
const loseReset = document.getElementById("losebutton");
const drawReset = document.getElementById("drawbutton");
let yourScore = document.getElementById("yourscore");
let computerScore = document.getElementById("computerscore");
let currentRound = document.getElementById("currentround");
let result = document.getElementById("result");
let yourScoreNumber = 0;
let computerScoreNumber = 0;
let computerSelection = "";
let roundCounter = 0;
let bo5wins = 0;
let bo5losses = 0;
let bo5draws = 0;

const choiceClickHandler = function (event) {
  if (event.target.tagName === "IMG") {
    let playerSelection = event.target.id;
    game(playerSelection);
  }
}

const game = function (playerSelection) {
  computerSelection = pokemon[Math.floor(Math.random() * 3)];
  switch (playerSelection) {
    case computerSelection:
      result.innerHTML = "Computer played " + computerSelection + "!<br>" + "It's a draw!";
      roundHandler();
      break;
    case pokemon[0]:
      switch (computerSelection) {
        case pokemon[1]:
          lossHandler();
          break;
        case pokemon[2]:
          winHandler();
          break;
      }
    break;
    case pokemon[1]:
      switch (computerSelection) {
        case pokemon[0]:
          winHandler();
          break;
        case pokemon[2]:
          lossHandler();
          break;
      }
    break;
    case pokemon[2]:
      switch (computerSelection) {
        case pokemon[0]:
          lossHandler();
          break;
        case pokemon[1]:
          winHandler();
          break;
      }
    break;
  }
}

const winHandler = function () {
  yourScoreNumber = yourScoreNumber + 1;
  yourScore.innerHTML = yourScoreNumber;
  result.innerHTML = "Computer played " + computerSelection + "!<br>" + "You won this round!";
  roundHandler();
}

const lossHandler = function () {
  computerScoreNumber = computerScoreNumber + 1;
  computerScore.innerHTML = computerScoreNumber;
  result.innerHTML = "Computer played " + computerSelection + "!<br>" + "You lost this round!";
  roundHandler();
}

const roundHandler = function () {
  roundCounter = roundCounter + 1;
  currentRound.innerHTML = roundCounter;
  if (roundCounter === 5) {
    if (yourScoreNumber > computerScoreNumber) {
      bo5wins = bo5wins + 1;
      wins.innerHTML = bo5wins;
      overlay.style.display = "block";
      modalWin.style.display = "block";
    } else if (computerScoreNumber > yourScoreNumber) {
        bo5losses = bo5losses + 1;
        losses.innerHTML = bo5losses;
        overlay.style.display = "block";
        modalLose.style.display = "block";
    } else {
        bo5draws = bo5draws + 1;
        draws.innerHTML = bo5draws;
        overlay.style.display = "block";
        modalDraw.style.display = "block";
    }
  } else if (roundCounter === 4) {
      if ((yourScoreNumber === 2) && (computerScoreNumber === 0)) {
        bo5wins = bo5wins + 1;
        wins.innerHTML = bo5wins;
        overlay.style.display = "block";
        modalWin.style.display = "block";
      } else if ((computerScoreNumber === 2) && (yourScoreNumber === 0)) {
          bo5losses = bo5losses + 1;
          losses.innerHTML = bo5losses;
          overlay.style.display = "block";
          modalLose.style.display = "block";
      }
  } else if (yourScoreNumber === 3) {
      bo5wins = bo5wins + 1;
      wins.innerHTML = bo5wins;
      overlay.style.display = "block";
      modalWin.style.display = "block";
  } else if (computerScoreNumber === 3) {
      bo5losses = bo5losses + 1;
      losses.innerHTML = bo5losses;
      overlay.style.display = "block";
      modalLose.style.display = "block";
  }
}

const buttonHandler = function (event) {
  yourScoreNumber = 0;
  computerScoreNumber = 0;
  roundCounter = 0;
  computerSelection = "";
  result.innerHTML = " " + "<br> ";
  yourScore.innerHTML = yourScoreNumber;
  computerScore.innerHTML = computerScoreNumber;
  currentRound.innerHTML = roundCounter;
  modalWin.style.display = "none";
  modalLose.style.display = "none";
  modalDraw.style.display = "none";
  overlay.style.display = "none";
}

pokemonButton.addEventListener("click", choiceClickHandler);
span1.addEventListener("click", buttonHandler);
span2.addEventListener("click", buttonHandler);
span3.addEventListener("click", buttonHandler);
winReset.addEventListener("click", buttonHandler)
loseReset.addEventListener("click", buttonHandler)
drawReset.addEventListener("click", buttonHandler)