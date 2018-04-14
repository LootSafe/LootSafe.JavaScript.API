const fetch = require('node-fetch')

/** @function
 * @description Get the items in a lootbox rarity group
 * @name lootboxItems 
 * @param {string} rarity - Rarity of the item group to fetch
 */
module.exports = function (rarity) {
    return fetch(`${this.apiUrl}/lootbox/items/${rarity}`)
        .then(res => res.json())
        .catch(function(err){
          throw Error(err)
        })                      
}