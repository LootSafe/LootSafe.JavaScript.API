module.exports = {

  initUnit: function () {
    return new LootSafeUnit('http://localhost:1337/v1/',
      'pWpzWuxoKUKAmlHc0wPi7lFS38FTth',
      'otpKey',
      '0x25ccc86f44133480a33b10af194d92c9f51454e4',
      '0x74bac1b9304d5bcf882e73e204e1adc09da72ce5',
      'rare'
    )
  }
}

class LootSafeUnit {
  constructor (apiUrl, apiKey, otpKey, account, itemAddress, rarity) {
    this.apiUrl = apiUrl
    this.apiKey = apiKey
    this.otpKey = otpKey
    this.account = account
    this.itemAddress = itemAddress
    this.rarity = rarity
    this.buildEndpoints()
  }

  otp (key) {
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
