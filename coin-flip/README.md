## Coin Flip
### Problem
There are N coins, each showing either heads or tails. We would like all the coins to form a sequence of alternating heads and tails. What is the minimum number of coins that must be reversed to achieve this?

Write a function solution(A)
that, given an array A consisting of N integers representing the coins, returns the minimum number of coins that must be reversed. 
Consecutive elements of array A represent consecutive coins and contain either a 0 (heads) or 1 (tails).

### Examples
1. A = [1, 0, 1, 0, 1, 1], return 1. After flipping the sixth coin, we achieve an alternating sequence
2. A = [1, 1, 0, 1, 1], return 2. After flipping the first and fifth coins, we achieve an alternating sequence.
3. A = [0, 1, 0], return 0. 
4. A = [0, 1, 1, 0], return 2. Reverse first and second coins.

### Assumptions
1. N is an integer between 1 and 100
2. Each element of array A is either 1 or 0

