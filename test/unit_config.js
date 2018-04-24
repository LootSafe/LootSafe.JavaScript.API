module.exports = {

  initUnit: function () {
    return new LootSafeUnit('http://localhost:1337/v1/',
      'pWpzWuxoKUKAmlHc0wPi7lFS38FTth',
      'otpKey',
      '0x9ec8e41ad25e59acfbe41f765e63a0cf7ace8560',
      '0x5e5cdd09f3d933fbad664b2240ce1d748ac82f09',
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
