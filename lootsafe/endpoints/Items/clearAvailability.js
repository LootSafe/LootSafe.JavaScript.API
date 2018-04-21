const fetch = require('node-fetch')

/** @function
 * @description Clear availability
 * @name newItem
 * @param {string} itemaddress
 * @param {string} user
 */
module.exports = function (itemAddress) {
  return fetch(`${this.apiUrl}item/clearAvailability`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      'key': this.apiKey,
      'otp': this.otpKey
    },
    body: JSON.stringify({
      itemAddress: this.itemAddress
    })
  })
    .then(res => res.json())
}
