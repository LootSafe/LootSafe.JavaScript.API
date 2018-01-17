const fetch = require('node-fetch')

/** @function
 * @description Get a trade by merchant and id
 * @name trade */
module.exports = function (merchant, tradeId) {
    return fetch(`${this.apiUrl}/trade/get/${merchant}/${tradeId}`)
        .then(res => res.json())
}