// QuerySelectors
var gameBoard = document.querySelector('.game-board');
var gameBox = document.querySelectorAll('.game-box');


//object instances
var startGame = new Game();


// EventListeners
for (var i = 0; i < gameBox.length; i++) {
gameBox[i].addEventListener('click', markSpace);
}


// functions
function markSpace(event) {
  if (event.target.innerHTML === '') {
    event.target.innerHTML = startGame.currentPlayer.token;
    startGame.choosePlayer(event.target.id);
    console.log(startGame.currentPlayer)
  }
}