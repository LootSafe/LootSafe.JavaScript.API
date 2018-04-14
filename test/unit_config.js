var lootsafe = module.exports = {

	initUnit: function() {
		return new LootSafeUnit('http://localhost:1337/v1', 
							'pWpzWuxoKUKAmlHc0wPi7lFS38FTth',
							'otpKey',
							'0x91e7abb929ba280680318343aaaace7ad16623e1',
							'0x061923321deb8bd9c34eed3b7a915659cf3af088',
                            'uncommon'
							)
	}
};

class LootSafeUnit {

    constructor(apiUrl, apiKey, otpKey, ethAcc, itemaddress, rarity){
        this.apiUrl = apiUrl
        this.apiKey = apiKey
        this.otpKey = otpKey
        this.ethAcc = ethAcc
        this.itemaddress = itemaddress
        this.rarity = rarity
        this.buildEndpoints()
    }

    otp(key){
        this.otpKey = key
        return this
    }

    buildEndpoints () {

        const availableEndpoints = require('../lootsafe/endpoints')

        Object.keys(availableEndpoints).map(
            endpoint => this[endpoint] = availableEndpoints[endpoint].bind(this)
        )
    }
}