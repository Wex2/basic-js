const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
const getDNSStats = (domains) => {
  const result = {}
  domains.forEach(item =>{
    item.split('.').reduceRight((strSum,current ) => {
      let property = strSum + '.' + current;
      if(result[property]){
        result[property] += 1
      } else {
        result[property] = 1
      }
      return property
    }, '')
  })
  return result
}

module.exports = {
  getDNSStats
};
