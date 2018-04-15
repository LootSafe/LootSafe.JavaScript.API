module.exports = {

  init: function (baseurl, apikey, otpkey) {
    return new LootSafe(baseurl,
      apikey,
      otpkey
    )
  }
}

class LootSafe {
  constructor (apiUrl, apiKey, otpKey) {
    this.apiUrl = apiUrl
    this.apiKey = apiKey
    this.otpKey = otpKey
    this.buildEndpoints()
  }

  otp (key) {
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
