const fetch = require('node-fetch')

/** @function
 * @description Get item balance of an address
 * @name itemBalance
 * @param {string} itemAddress - Item to check against
 * @param {string} address - Address to get item balance of 
 */
module.exports = function (itemAddress, address) {
    return fetch(`${this.apiUrl}/balance/item/${itemAddress}/${address}`)
        .then(res => res.json())
		.catch(function(err){
			throw Error(err)
		})               
}