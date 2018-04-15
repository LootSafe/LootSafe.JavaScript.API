const fetch = require('node-fetch')

/** @function
 * @description Get an item
 * @name getItem */
module.exports = function () {
  return fetch(`${this.apiUrl}/item/addresses/get/`)
    .then(res => res.json())
    .catch(function (err) {
      throw Error(err)
    })
}
