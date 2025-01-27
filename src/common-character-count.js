const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

const getCommonCharacterCount = (s1, s2) => {
    const copyStr = s2.split('')
    return s1.split('').filter(current => {
        let i = copyStr.indexOf(current)
        if(i + 1){
            copyStr.splice(i, 1)
            return true
        }
        return false
    }).length
}

module.exports = {
    getCommonCharacterCount
};
