const fetch = require('node-fetch')

/** @function
 * @description Get a list of items
 * @name getItems */
module.exports = function () {
  return fetch(`${this.apiUrl}/item/list`)
    .then(res => res.json())
    .catch(function (err) {
      throw Error(err)
    })
}
