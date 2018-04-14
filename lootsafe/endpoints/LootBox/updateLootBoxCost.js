const fetch = require('node-fetch')

/** @function
 * @description Update LootBox Cost
 * @param {number} cost 
 * @name updateLootBoxCost */
module.exports = function (cost) {

	return fetch(`${this.apiUrl}/lootbox/cost/` + cost, {
	        method: 'GET',
	        headers: {
	          'Content-Type': 'application/json',
	          key: 'pWpzWuxoKUKAmlHc0wPi7lFS38FTth'
	          }
	        })
	        .then(res => res.json())
	        .catch(function(err){
	          throw Error(err)
	        })                                                        
}