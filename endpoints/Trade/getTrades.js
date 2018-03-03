const fetch = require('node-fetch')

/** @function
 * @description Get a trades offered
 * @name trades */
module.exports = function () {
    return fetch(`${this.apiUrl}/trades`)
        .then(res => res.json())
}