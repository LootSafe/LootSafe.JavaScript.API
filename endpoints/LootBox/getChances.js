const fetch = require('node-fetch')

/** @function
 * @description Get the chances of each rarity group
 * @name lootboxChances */
module.exports = function () {
    return fetch(`${this.apiUrl}/lootbox/chances`)
        .then(res => res.json())
}