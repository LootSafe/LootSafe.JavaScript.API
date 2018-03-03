const fetch = require('node-fetch')

/** @function
 * @description Get a crafting recipe for an item
 * @name recipe 
 * @param {string} item - address of the item
 */
module.exports = function (item) {
    return fetch(`${this.apiUrl}/recipe/get/${item}`)
        .then(res => res.json())
}