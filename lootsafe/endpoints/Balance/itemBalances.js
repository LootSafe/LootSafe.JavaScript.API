const fetch = require('node-fetch')

/** @function
 * @description Get all item balances of an address
 * @name itemBalances
 * @param {string} address - Address to get item balances of
 */
module.exports = function (address) {
  return fetch(`${this.apiUrl}/balance/items/${address}`)
    .then(res => res.json())
    .catch(function (err) {
      throw Error(err)
    })
}
