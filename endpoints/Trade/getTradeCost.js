const fetch = require('node-fetch')

/** @function
 * @description Get cost to list a trade
 * @name tradeCost */
module.exports = function (merchant) {
    return fetch(`${this.apiUrl}/trade/cost`)
        .then(res => res.json())
}