const fetch = require('node-fetch')

/** @function
 * @description Get a list of deconstructable assets
 * @name deconstructables */
module.exports = function () {
    return fetch(`${this.apiUrl}/deconstructables`)
        .then(res => res.json())
        .catch(function(err){
          throw Error(err)
        })                         
}