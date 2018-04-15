const fetch = require('node-fetch')

/** @function
 * @description Get the cost to open a lootbox
 * @name lootboxCost */
module.exports = function () {
  return fetch(`${this.apiUrl}/lootbox/cost`)
    .then(res => res.json())
    .catch(function (err) {
      throw Error(err)
    })
}
