const fetch = require('node-fetch')

/** @function
 * @description Get a crafting recipe for an item
 * @name recipe */
module.exports = function (item) {
    return fetch(`${this.apiUrl}/recipe/get/${item}`)
        .then(res => res.json())
}