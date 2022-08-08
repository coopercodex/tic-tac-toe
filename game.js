class Game {
  constructor() {
    this.board = ['', '', '', '', '', '', '', '', ''];
    this.winConditions = [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6];
    this.redPlayer = new Player('<img src="/Users/derekcooper/turing_work/1mod/tic-tac-toe/assets/redpill.jpg">');
    this.bluePlayer =  new Player('<img src="/Users/derekcooper/turing_work/1mod/tic-tac-toe/assets/bluepill.jpeg">');
    this.currentPlayer = this.redplayer.id;
  }


  choosePlayer(id) {
    if (this.board[id] === this.currentPlayer) {
      this.currentPlayer = this.bluePlayer;
    } else if (this.board[id] === this.bluePlayer) {
      this.currentPlayer = this.redPlayer;
    }
  }
}



