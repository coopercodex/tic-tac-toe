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
        event.target.innerHTML = startGame.currentPlayer.token;
        startGame.trackPlayerSpaces(i);
        startGame.choosePlayer(event.target.id);
      }
    }
  }
}

function resetGame() {
  for (var i = 0; i < gameBox.length; i++) {
    gameBox[i].innerHTML = "";
  }
  redPillWins.innerHTML = startGame.redPlayer.wins;
  bluePillWins.innerHTML = startGame.bluePlayer.wins;
  startGame.resetData();
}

function declareWinner() {
  ref.innerHTML = `Winner ${startGame.currentPlayer.token}`
}

