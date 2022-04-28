const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
const countCats = (matrix ) => {
  return matrix.flat().reduce((sum, current) => {
     return  current === '^^'? sum+1 : sum;
  }, 0)
 /* let number = 0
  matrix.forEach( item => {
    item.forEach(el => {
      if(el === '^^') number++;
    })
  })
  if (number === 0) return 0;
  return number*/
}

module.exports = {
  countCats
};
