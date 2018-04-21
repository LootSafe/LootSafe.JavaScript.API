const fetch = require('node-fetch')

/** @function
 * @description Add a new recipe
 * @param {string} result
 * @param {list} materials
 * @param {list} counts
 * @name newRecipe */
module.exports = function (result, materials, counts) {
  return fetch(`${this.apiUrl}recipe/new`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      key: 'pWpzWuxoKUKAmlHc0wPi7lFS38FTth'
    },
    body: JSON.stringify({
      result: this.result,
      materials: this.materials,
      counts: this.counts
    })
  })
    .then(res => res.json())
    .catch(function (err) {
      throw Error(err)
    })
}
