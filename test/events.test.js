const fetch = require('node-fetch')
const loot = require('./unit_config.js')
const lootsafe = loot.initUnit()

describe('Events', () => {
 
	describe('Get Events', () => {
	    it(`Should fetch all events`, done => {
			lootsafe.fetchEvents()
			.then(res => {
	          if(res.status === 200)
	            done()
	          else
	            done('Wrong response code:'  + res.status)
			})
	        .catch(function(err){
	          done(err)
	        })			
		})
	})

})