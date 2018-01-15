const fetch = require('node-fetch')

/** @function
 * @description Get token balance of an address
 * @name balanceOf
 * @param {string} address - Address to get balance of */
module.exports = function (address) {
    return fetch(`${this.apiUrl}/balance/token/${address}`)
        .then(res => res.json())
}