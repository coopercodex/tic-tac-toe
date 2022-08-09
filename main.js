// QuerySelectors
var gameBoard = document.querySelector('.game-board');
var gameBox = document.querySelectorAll('.game-box');
var ref = document.querySelector('.referee');
var redPillWins = document.querySelector('.red-pill-wins');
var bluePillWins = document.querySelector('.blue-pill-wins');

//object instances
var startGame = new Game();


// EventListeners
gameBoard.addEventListener('click', markSpace);


// functions
function markSpace(event) {
  if (!event.target.innerText) {
    for (var i = 0; i < gameBox.length; i++) {
      if (gameBox[i].id === event.target.id) {
        startGame.choosePlayer(event.target.id);
        startGame.trackPlayerSpaces(i);
        event.target.innerHTML = startGame.currentPlayer.token;
      }
    }
  }
}

function resetGame() {
  for (var i = 0; i < gameBox.length; i++) {
    gameBox[i].innerHTML = "";
  }
  redPillWins.innerHTML = `Wins: ${startGame.redPlayer.wins}`;
  bluePillWins.innerHTML = `Wins: ${startGame.bluePlayer.wins}`;
  startGame.resetData();
  gameBoard.classList.remove('prevent-click');
}

function declareWinner() {
  ref.innerHTML = `Winner is ${startGame.currentPlayer.token} Pill!`;
  gameBoard.classList.add('prevent-click');
}

function displayTurn() {
  ref.innerHTML = `${startGame.currentPlayer.token}! Must Choose`;
}

function displayDraw() {
  ref.innerHTML = `It's a Draw!`;
}


