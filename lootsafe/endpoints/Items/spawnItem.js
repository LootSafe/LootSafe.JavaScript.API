const fetch = require('node-fetch')

/** @function
 * @description Spawn item and give to
 * @name newItem
 * @param {string} itemAddress
 * @param {string} to
 */
module.exports = function (itemAddress, to) {
  return fetch(`${this.apiUrl}item/spawn`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      'key': this.apiKey,
      'otp': this.otpKey
    },
    body: JSON.stringify({
      itemAddress,
      to
    })
  })
    .then(res => res.json())
}
