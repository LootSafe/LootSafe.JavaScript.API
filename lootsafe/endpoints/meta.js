const fetch = require('node-fetch')

module.exports = function () {
    return fetch(`${this.apiUrl}`)
        .then(res => res.json())
}