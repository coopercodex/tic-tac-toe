class Game {
  constructor() {
    this.board = ['', '', '', '', '', '', '', '', ''];
    this.winConditions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    this.redPlayer = new Player('🔴', 1);
    this.bluePlayer = new Player('🔵', 2);
    this.currentPlayer = this.redPlayer;
  }

  choosePlayer(id) {
    displayTurn();
    this.board[id] = this.currentPlayer.token;
    if (this.currentPlayer === this.redPlayer) {
      this.currentPlayer = this.bluePlayer;
    } else if (this.currentPlayer === this.bluePlayer) {
      this.currentPlayer = this.redPlayer;
    }
  }

  trackPlayerSpaces(i) {
    this.currentPlayer.spaces.push(i);
    this.board.shift();
    this.checkWin();
  }

  checkWin() {
    var winCount;
    for (var i = 0; i < this.winConditions.length; i++) {
      winCount = 0;
      for (var j = 0; j < 3; j++) {
        var winningCondition = this.winConditions[i][j];
        if (this.currentPlayer.spaces.indexOf(winningCondition) >= 0) {
          winCount++;
          if (winCount === 3) {
            declareWinner();
            this.gameReset('win');
          } else if (winCount !== 3 && !this.board.includes('')) {
            displayDraw();
            this.gameReset('tie');
          }
        }
      }
    }
  }

  gameReset(gameStatus) {
    if (gameStatus === 'win') {
      this.currentPlayer.winner = true;
      this.currentPlayer.wins++;
    }
    setTimeout(resetGame, 500);
  }

  resetData() {
    this.board = ['', '', '', '', '', '', '', '', ''];
    this.redPlayer.spaces = [];
    this.bluePlayer.spaces = [];
  }
}





