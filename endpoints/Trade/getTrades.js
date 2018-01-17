const fetch = require('node-fetch')

/** @function
 * @description Get a trades offered by a specific merchant
 * @name trades */
module.exports = function (merchant) {
    return fetch(`${this.apiUrl}/trades/get/${merchant}`)
        .then(res => res.json())
}