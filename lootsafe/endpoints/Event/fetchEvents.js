const fetch = require('node-fetch')

/** @function
 * @description Get a list of events
 * @name fetchEvents */
module.exports = function () {
  return fetch(`${this.apiUrl}events`)
    .then(res => res.json())
    .catch(function (err) {
      throw Error(err)
    })
}
