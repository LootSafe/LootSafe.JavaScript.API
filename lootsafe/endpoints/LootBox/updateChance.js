const fetch = require('node-fetch')

/** @function
 * @description Update Chance
 * @param {number} epic
 * @param {number} rare
 * @param {number} uncommon
 * @name updateChance */
module.exports = function (epic, rare, uncommon) {
  return fetch(`${this.apiUrl}lootbox/chances/update/${epic}/${rare}/${uncommon}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      key: 'pWpzWuxoKUKAmlHc0wPi7lFS38FTth'
    }
  })
    .then(res => res.json())
    .catch(function (err) {
      throw Error(err)
    })
}
