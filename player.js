class Player {
  constructor(token, id) {
    this.token = token
    this.id = id;
    this.wins = 0;
    this.winner = false;
  }

  increaseWins() {
    this.wins += 1;
  }
}