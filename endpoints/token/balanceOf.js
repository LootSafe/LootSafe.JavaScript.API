const fetch = require('node-fetch')

/** @function
 * @name balanceOf
 * @param {string} address - Address to get balance of */
module.exports = function (address) {
    return fetch(`${this.apiUrl}/balance/token/${address}`)
        .then(res => res.json())
        .then(json => {
            if (json.status === 200) {
                return json.data
            } else {
                return json
            }
        })
}