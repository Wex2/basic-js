const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
const createDreamTeam = members => {
  let team = [];
  if(Array.isArray(members)){
    members.map(item => {
      if(typeof item === 'string'){
        team.push(item.trim()[0].toUpperCase())
      }
    })
    return team.sort().join('')
  }
  return false
}

module.exports = {
  createDreamTeam
};
