const fetch = require('node-fetch')

/** @function
 * @description Get Token Address
 * @name getTokenAddress */
module.exports = function () {
  return fetch(`${this.apiUrl}/address/token`)
    .then(res => res.json())
    .catch(function (err) {
      throw Error(err)
    })
}
