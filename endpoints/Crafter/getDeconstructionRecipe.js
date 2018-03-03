const fetch = require('node-fetch')

/** @function
 * @description Get deconstruction recipe for specific item
 * @name deconstruction
 * @param {string} item - address of the item
 */
module.exports = function (item) {
    return fetch(`${this.apiUrl}/recipe/deconstruction/get/${item}`)
        .then(res => res.json())
}