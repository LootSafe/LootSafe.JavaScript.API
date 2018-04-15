const fetch = require('node-fetch')

/** @function
 * @description Get item ledger
 * @name ledger */
module.exports = function (item) {
  return fetch(`${this.apiUrl}/item/ledger`)
    .then(res => res.json())
    .catch(function (err) {
      throw Error(err)
    })
}
