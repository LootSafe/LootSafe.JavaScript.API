const fetch = require('node-fetch')

/** @function
 * @description Get meta data
 * @name getMeta */
module.exports = function () {
  return fetch(`${this.apiUrl}/`)
    .then(res => res.json())
    .catch(function (err) {
      throw Error(err)
    })
}
