module.exports = {

  initUnit: function () {
    return new LootSafeUnit('http://localhost:1337/v1/',
      'pWpzWuxoKUKAmlHc0wPi7lFS38FTth',
      'otpKey',
      '0xf659c7cef127b75ac85044c4297c21a230f352e9',
      '0x67a8baa3da64b40d359253dd08398d02bec939ef',
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
