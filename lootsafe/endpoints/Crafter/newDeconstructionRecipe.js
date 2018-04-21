const fetch = require('node-fetch')

/** @function
 * @description New Destruction Recipe
 * @param {string} result
 * @param {list} materials
 * @param {list} counts
 * @name newDestructionRecipe */
module.exports = function (result, materials, counts) {
  return fetch(`${this.apiUrl}recipe/deconstruction/new`, {
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
