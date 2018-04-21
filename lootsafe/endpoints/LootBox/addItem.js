const fetch = require('node-fetch')

/** @function
 * @description Add an itmem to a LootBox
 * @param {string} item
 * @param {string} rarity
 * @name addItem */
module.exports = function (itemAddress, rarity) {
  return fetch(`${this.apiUrl}lootbox/item/add`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      key: 'pWpzWuxoKUKAmlHc0wPi7lFS38FTth'
    },
    body: JSON.stringify({
      item: itemAddress,
      rarity: this.rarity
    })
  })
    .then(res => res.json())
    .catch(function (err) {
      throw Error(err)
    })
}
