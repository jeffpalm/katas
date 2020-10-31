const mixedFraction = require('./fraction-to-mixed-num.js')

const {test, expect, describe} = require('@jest/globals')

const tests = [
  {input: '42/9', expect: '4 2/3'},
  {input: '6/3', expect: '2'},
  {input: '1/1', expect: '1'},
  {input: '11/11', expect: '1'},
  {input: '4/6', expect: '2/3'},
  {input: '0/18891', expect: '0'},
  {input: '-10/7', expect: '-1 3/7'},
  {input: '-22/-7', expect: '3 1/7'}
];

describe('Normal tests', () => {
  tests.forEach(t => {
    test(`Input: ${t.input}. Expected output: ${t.expect}`, () => {
      expect(mixedFraction(t.input)).toBe(t.expect)
    })
  })
})

describe('Error handling', () => {
  test('Must raise ZeroDivisionError', () => {
    function divideByZero(){
      mixedFraction('3/0')
    }
     expect(divideByZero).toThrowError('ZeroDivisionError')
  })
})
