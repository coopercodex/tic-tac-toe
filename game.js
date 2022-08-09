class Game {
  constructor() {
    this.board = ['', '', '', '', '', '', '', '', ''];
    this.winConditions = [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6];
    this.redPlayer = new Player(`<img src="assets/redpill.jpeg">`,1);
    this.bluePlayer =  new Player(`<img src="assets/bluepill.jpeg">`,2);
    this.currentPlayer = this.redPlayer;
  }

  resetGame() {
    this.currentPlayer = this.redplayer;
    this.board = ['', '', '', '', '', '', '', '', ''];
  }

  choosePlayer(id) {
    this.board[id] = this.currentPlayer.token;
    if (this.currentPlayer === this.redPlayer) {
      this.currentPlayer = this.bluePlayer;
    } else if (this.currentPlayer != this.redPlayer) {
      this.currentPlayer = this.redPlayer;
    }
  }
  }



