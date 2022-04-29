const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
const transform = (arr) => {
  if(!Array.isArray(arr)){
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
  const copyArr = [...arr]
  copyArr.forEach((item,i) => {
    if(item === '--discard-next'){
      copyArr[i] = undefined
      copyArr[i + 1] = undefined
    }
    if(item === '--discard-prev'){
      copyArr[i] = undefined
      copyArr[i-1] = undefined
    }
    if(item === '--double-next'){
      copyArr[i] = copyArr[i + 1]
    }
    if(item === '--double-prev'){
      copyArr[i] = copyArr[i - 1]
    }
  })
  return copyArr.filter(item => item !== undefined)
}

module.exports = {
  transform
};
