// Returns object with the 2 possible alternating arrays of n length
const genBinArrays = (n) => {
  const outputOne = []
  const outputTwo = []
  let prev = true

  for (let i = 0; i < n; i++){
    outputOne.push(prev ? 1 : 0)
    outputTwo.push(prev ? 0 : 1)
    prev = !prev
  }

  return {oneZero: outputOne, zeroOne: outputTwo}
}

const solution = (A) => {
	const {oneZero, zeroOne} = genBinArrays(A.length)

  const reducer = (a, b) => a + b
  const bitWiseAnd = (e, i) => e === A[i] ? 1 : 0

  const sumOneZero = oneZero.map(bitWiseAnd).reduce(reducer)
  const sumZeroOne = zeroOne.map(bitWiseAnd).reduce(reducer)

  return sumOneZero < sumZeroOne ? sumOneZero : sumZeroOne
}


module.exports = solution
