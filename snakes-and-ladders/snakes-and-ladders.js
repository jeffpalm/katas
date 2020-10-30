class SnakesLadders {
  constructor(){
    this.turn = true // true = player 1. false = player 2.
    this.pOne = 0
    this.pTwo = 0
    this.ladders = {
      2: 38,
      7: 14,
      8: 31,
      15: 26,
      21: 42,
      28: 84,
      36: 44,
      51: 67,
      71: 91,
      78: 98,
      87: 94
    }
    this.snakes = {
      16: 6
    }
  }
}

module.exports = SnakesLadders
