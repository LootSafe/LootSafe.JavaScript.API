const fetch = require('node-fetch')

/** @function
 * @description Get a trade by id
 * @name trade */
module.exports = function (tradeId) {
    return fetch(`${this.apiUrl}/trade/${tradeId}`)
        .then(res => res.json())
}