class LootSafe {
    constructor (apiUrl, apiKey) {
        this.apiUrl = apiUrl
        this.apiKey = apiKey
        this.otpKey = null
        // Build all LootSafe.endpoints
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

const lootsafe = new LootSafe('http://localhost:1337/v1', 'pWpzWuxoKUKAmlHc0wPi7lFS38FTth')

const ethAcc = '0x616604227072883aabfc3ee09eae350be9c0912d'

//lootsafe.trade("0x627306090abab3a6e1400e9345bc60c78a8bef57", "0x00000000021a583c").then(res => console.log('response', res))

lootsafe.otp('').newItem("FNX45", "fnx45", 120000).then(res => {
    console.log('res', res)
})