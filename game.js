class Game {
  constructor() {
    this.board = ['', '', '', '', '', '', '', '', ''];
    this.winConditions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    this.redPlayer = new Player('R', 1);
    this.bluePlayer = new Player('O', 2);
    this.currentPlayer = this.redPlayer;
  }

  choosePlayer(id) {
    this.board[id] = this.currentPlayer.token;
    if (this.currentPlayer === this.redPlayer) {
      this.currentPlayer = this.bluePlayer;
    } else if (this.currentPlayer === this.bluePlayer) {
      this.currentPlayer = this.redPlayer;
    }
  }

  trackPlayerSpaces(i) {
    console.log(i);
    this.currentPlayer.spaces.push(i);
    console.log(this.currentPlayer.spaces);
    this.checkWin();
  }

  checkWin(playerName) {
    var winCount;
    for (var i = 0; i < this.winConditions.length; i++) {
      winCount = 0;
      for (var j = 0; j < 3; j++) {
        var winningCondition = this.winConditions[i][j];
        if (this.currentPlayer.spaces.indexOf(winningCondition) >= 0) {
          winCount++;
          if (winCount === 3) {
            this.winReset();
            return true;
          }
        }
      }
    }
  }

  winReset() {
    this.currentPlayer.wins++;
    declareWinner();
    setTimeout(resetGame, 3000);
  }
  resetData() {
    this.board = ['', '', '', '', '', '', '', '', ''];
    this.redPlayer.spaces = [];
    this.bluePlayer.spaces = [];
  }

}



