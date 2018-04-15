const fetch = require('node-fetch')

/** @function
 * @description Get a list of craftable assets
 * @name craftables */
module.exports = function () {
  return fetch(`${this.apiUrl}/craftables`)
    .then(res => res.json())
    .catch(function (err) {
      throw Error(err)
    })
}
