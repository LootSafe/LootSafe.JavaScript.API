const fetch = require('node-fetch')

/** @function
 * @description Get Item By Address
 * @param {string} itemaddress
 * @name Get Item By Address */
module.exports = function (itemaddress) {
  return fetch(`${this.apiUrl}/item/get/` + itemaddress)
    .then(res => res.json())
    .catch(function (err) {
      throw Error(err)
    })
}
