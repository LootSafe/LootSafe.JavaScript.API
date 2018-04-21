const fetch = require('node-fetch')

/** @function
 * @description Get a trades offered
 * @name newItem
 * @param {string} name - Name of the item
 * @param {string} id - Id of the item
 * @param {number} totalSupply - Total supply of the item (can change depending on when ownerBurn is called)
 * @param {string} metadata - Use whatever format you want for this, this should be used to store extra important data about this item on chain
 */
module.exports = function (name, id, totalSupply = 1, metadata = '') {
  return fetch(`${this.apiUrl}item/new`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      'key': this.apiKey,
      'otp': this.otpKey
    },
    body: JSON.stringify({
      name,
      id,
      totalSupply,
      metadata
    })
  })
    .then(res => res.json())
}
