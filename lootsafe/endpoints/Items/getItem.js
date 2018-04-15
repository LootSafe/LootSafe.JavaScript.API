const fetch = require('node-fetch')

/** @function
 * @description Get an item
 * @param {string} itemAddress
 * @name getItem */
module.exports = function (itemAddress) {
  return fetch(`${this.apiUrl}/item/get/` + itemAddress)
    .then(res => res.json())
    .catch(function (err) {
      throw Error(err)
    })
}
