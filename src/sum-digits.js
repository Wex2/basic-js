const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
const getSumOfDigits = (n) => {
  let str = n.toString()
      .split('')
      .reduce((sum,a) => sum + +a, 0)
  if (str > 9){
    return getSumOfDigits(str)
  } else {
    return str
  }
  /*let str = n.toString()
  while(str.length !== 1 ){
    str = str.split('')
        .reduce((sum,num) => sum + +num, 0)
        .toString()
  }
  return +str*/
}

module.exports = {
  getSumOfDigits
};
