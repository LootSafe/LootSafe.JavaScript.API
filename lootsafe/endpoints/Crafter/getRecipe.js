const fetch = require('node-fetch')

/** @function
 * @description Get a crafting recipe for an item
 * @name recipe
 * @param {string} item - address of the item
 */
module.exports = function (itemAddress) {
  return fetch(`${this.apiUrl}recipe/get/${itemAddress}`)
    .then(res => res.json())
    .catch(function (err) {
      throw Error(err)
    })
}
