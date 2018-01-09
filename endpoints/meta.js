const fetch = require('node-fetch')

module.exports = function () {
    console.log(this)
    return fetch(`${this.apiUrl}`)
        .then(res => res.json())
}