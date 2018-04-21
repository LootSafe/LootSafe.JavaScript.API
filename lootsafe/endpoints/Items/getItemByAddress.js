const fetch = require('node-fetch')

/** @function
 * @description Get Item By Address
 * @param {string} itemaddress
 * @name Get Item By Address */
module.exports = function (itemAddress) {
  return fetch(`${this.apiUrl}item/get/` + itemAddress)
    .then(res => res.json())
    .catch(function (err) {
      throw Error(err)
    })
}
