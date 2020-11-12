const getSum = (arr) => arr.reduce((a, c) => a + c);

const maxSequence = (arr) => {
  if (!arr.length) return 0;
  let max = getSum(arr);
  let copy = arr.slice();

  arr.forEach(() => {
    const left = copy.slice();
    const right = copy.slice();
    while (left.length > 1 && right.length > 1) {
      left.shift();
      right.pop();
      const leftSum = getSum(left);
      const rightSum = getSum(right);

      if (leftSum > max) max = leftSum;
      if (rightSum > max) max = rightSum;
    }
    copy.shift();
  });

  return max < 0 ? 0 : max;
};

module.exports = maxSequence;
