const fetch = require('node-fetch')

/** @function
 * @description Get the items in a lootbox rarity group
 * @name lootboxItems */
module.exports = function (rarity) {
    return fetch(`${this.apiUrl}/lootbox/items/${rarity}`)
        .then(res => res.json())
}