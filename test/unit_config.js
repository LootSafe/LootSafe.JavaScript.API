module.exports = {

  initUnit: function () {
    return new LootSafeUnit('http://localhost:1337/v1',
      'pWpzWuxoKUKAmlHc0wPi7lFS38FTth',
      'otpKey',
      '0xb68066af702fe39ad76f486a9a1f971bccc10b1e',
      '0xe5e71b70c81e1d96a4d594da6eea6337426f716b',
      'uncommon'
    )
  }
}

class LootSafeUnit {
  constructor (apiUrl, apiKey, otpKey, ethAcc, itemaddress, rarity) {
    this.apiUrl = apiUrl
    this.apiKey = apiKey
    this.otpKey = otpKey
    this.ethAcc = ethAcc
    this.itemaddress = itemaddress
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
