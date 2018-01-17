const fetch = require('node-fetch')

/** @function
 * @description Get deconstruction recipe for specific item
 * @name deconstruction */
module.exports = function (item) {
    return fetch(`${this.apiUrl}/recipe/deconstruction/get/${item}`)
        .then(res => res.json())
}