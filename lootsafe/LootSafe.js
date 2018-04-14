var lootsafe = module.exports = {

	init: function(baseurl, apikey, otpkey, ethAcc)
    {
		return new LootSafe(baseurl, 
							apikey,
							otpkey,
							ethAcc
							)
	}
};

class LootSafe {

    constructor(apiUrl, apiKey, otpKey, ethAcc){
        this.apiUrl = apiUrl
        this.apiKey = apiKey
        this.otpKey = otpKey
        this.ethAcc = ethAcc
        this.buildEndpoints()
    }

    otp(key){
        this.otpKey = key
        return this
    }

    buildEndpoints () {

        const availableEndpoints = require('./endpoints')

        Object.keys(availableEndpoints).map(
            endpoint => this[endpoint] = availableEndpoints[endpoint].bind(this)
        )
    }
}