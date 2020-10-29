const solution = require('./coin-flip.js');
const {expect, test} = require('@jest/globals');

const tests = [
	{input: [1, 0, 1, 0, 1, 1], expect: 1},
	{input: [1, 1, 0, 1, 1], expect: 2},
	{input: [0, 1, 0], expect: 0},
	{input: [0, 1, 1, 0], expect: 2}
];

tests.forEach(t => {
	test(`Input: ${t.input}, expected output: ${t.expect}`, () => {
		expect(solution(t.input)).toBe(t.expect)
	})
});
