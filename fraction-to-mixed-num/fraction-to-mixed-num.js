const {ceil, floor, abs} = Math
const {parseInt} = Number

const greatestCommonFactor = (numOne, numTwo) => {
  let i = 1
  let output = 1
  while(i <= numOne && i <= numTwo) {
    if (numOne % i === 0 && numTwo % i === 0) output = i
    i++
   }
   return output
 }

const simplifyFraction = (numerator, denominator) => {
 if (numerator === 0) return ''
 const gcf = greatestCommonFactor(numerator, denominator)
 if (numerator/gcf === 1 && denominator/gcf === 1) return ''
 return `${numerator/gcf}/${denominator/gcf}`
}

const mixedFraction = (s) => {
 let numerator = parseInt(s.match(/(.+)(?=\/)/)[1])
 let denominator = parseInt(s.match(/(?:\/)(.+)/)[1])

 // Edge cases
 if (denominator === 0) throw new Error('ZeroDivisionError')

 if (numerator === 0) return '0'

 const sign = numerator / denominator < 0 ? '-' : ''

 numerator = abs(numerator)
 denominator = abs(denominator)

 const remainder = numerator % denominator

 const wholeNum = numerator/denominator > 0 ? floor(numerator/denominator) || '' : ceil(numerator/denominator) || ''

 const fraction = simplifyFraction(remainder, denominator)

 return `${sign}${wholeNum ? wholeNum : ''}${wholeNum && fraction ? ' ' : ''}${fraction ? fraction : ''}`
}



module.exports = mixedFraction
