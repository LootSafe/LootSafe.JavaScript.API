const fetch = require('node-fetch')

/** @function
 * @description Get deconstruction recipe for specific item
 * @name deconstruction
 * @param {string} item - address of the item
 */
module.exports = function (itemAddress) {
  return fetch(`${this.apiUrl}recipe/deconstruction/get/${itemAddress}`)
    .then(res => res.json())
    .catch(function (err) {
      throw Error(err)
    })
}
