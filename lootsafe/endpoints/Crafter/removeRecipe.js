const fetch = require('node-fetch')

/** @function
 * @description Removes a recipe
 * @param {string} address
 * @name removeRecipe */
module.exports = function (itemAddress) {
  return fetch(`${this.apiUrl}recipe/remove`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      key: 'pWpzWuxoKUKAmlHc0wPi7lFS38FTth'
    },
    body: JSON.stringify({
      item: itemAddress
    })
  })
    .then(res => res.json())
    .catch(function (err) {
      throw Error(err)
    })
}
