class SnakesLadders {
  constructor(){
    this.toMove = 1
    this.gameOver = false
    this.player = {
      1: 0,
      2: 0
    }
    this.ladderOrSnake = {
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
      87: 94,
      16: 6,
      46: 25,
      49: 11,
      62: 19,
      64: 60,
      74: 53,
      89: 68,
      92: 88,
      95: 75,
      99: 80
    }
  }

  swapToMove() {
    if (this.toMove === 1) {
      this.toMove = 2
    } else {
      this.toMove = 1
    }
  }

  checkLadderOrSnake() {
    if (this.ladderOrSnake[this.player[this.toMove]]) {
      this.player[this.toMove] = this.ladderOrSnake[this.player[this.toMove]]
    }
  }

  checkBounce() {
    if (this.player[this.toMove] > 100) {
      this.player[this.toMove] = 100 - (this.player[this.toMove] % 100)
    }
  }

  movePlayer(moveCount) {
    this.player[this.toMove] += moveCount
    this.checkBounce()
    this.checkLadderOrSnake()
  }

  play(dieOne, dieTwo) {
    if (this.gameOver) return 'Game over!'

    this.movePlayer(dieOne + dieTwo)

    if (this.player[this.toMove] === 100) {
      this.gameOver = true
      return `Player ${this.toMove} Wins!`
    }

    const output = `Player ${this.toMove} is on square ${this.player[this.toMove]}`

    if (dieOne !== dieTwo) {
      this.swapToMove()
    }

    return output
  }
}

module.exports = SnakesLadders
