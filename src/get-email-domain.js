const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
const getEmailDomain = (email) => {
    let emailDomain = email.split('@')
    return emailDomain[emailDomain.length - 1]
}

module.exports = {
    getEmailDomain
};
