const SnakesLadders = require('./snakes-and-ladders.js')
const {test, expect} = require('@jest/globals')


const game = new SnakesLadders();

test('Player 1 roles 1 1, ladders 2 to 38', () => {
  expect(game.play(1, 1)).toBe('Player 1 is on square 38')
})

test('Player 1 roles 1 5', () => {
  expect(game.play(1, 5)).toBe('Player 1 is on square 44')
})

test('Player 2 roles 6 2, ladders 8 to 31', () => {
  expect(game.play(6, 2)).toBe('Player 2 is on square 31')
})

test('Player 1 roles 1 1, snakes 46 to 25', () => {
  expect(game.play(1, 1)).toBe('Player 1 is on square 25')
})

test('Player 1 roles 1 2, ladders from 28 to 84', () => {
  expect(game.play(1, 2)).toBe('Player 1 is on square 84')
})

test('Player 2 roles 2 3, ladders from 36 to 44', () => {
  expect(game.play(2, 3)).toBe('Player 2 is on square 44')
})

test('Player 1 roles 5 6, snakes from 95 to 75', () => {
  expect(game.play(5, 6)).toBe('Player 1 is on square 75')
})

test('Player 2 roles 6 6', () => {
  expect(game.play(6, 6)).toBe('Player 2 is on square 56')
})

test('Player 2 roles 6 6', () => {
  expect(game.play(6, 6)).toBe('Player 2 is on square 68')
})

test('Player 2 roles 1 2, ladders from 71 to 91', () => {
  expect(game.play(1, 2)).toBe('Player 2 is on square 91')
})

test('Player 1 roles 1 2, ladders from 78 to 98', () => {
  expect(game.play(1, 2)).toBe('Player 1 is on square 98')
})

test('Player 2 roles 4 4, snakes from 99 to 80', () => {
  expect(game.play(4, 4)).toBe('Player 2 is on square 80')
})

test('Player 2 roles 1 2', () => {
  expect(game.play(1, 2)).toBe('Player 2 is on square 83')
})

test('Player 1 roles 1 2, bounces to 99 snakes from 99 to 80', () => {
  expect(game.play(1, 2)).toBe('Player 1 is on square 80')
})