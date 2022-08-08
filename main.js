// QuerySelectors
var gameBoard = document.querySelector('.game-board');
var gameBox = document.querySelectorAll('.game-box');





// EventListeners
for (var i = 0; i < gameBox.length; i++) {
gameBox[i].addEventListener('click', markSpace);
}
//object instances
var startGame = new Game();

// functions
function markSpace(e) {

  if (e.target.innerHTML === '') {
    e.target.innerHTML = startGame.currentPlayer;
    startGame.choosePlayer(e.target.id);
    console.log(e.target.id)
  }
}