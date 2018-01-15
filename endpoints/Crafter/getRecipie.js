const fetch = require('node-fetch')

/** @function
 * @description Get a crafting recipie for an item
 * @name recipie */
module.exports = function (item) {
    return fetch(`${this.apiUrl}/recipie/get/${item}`)
        .then(res => res.json())
}