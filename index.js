class LootSafe {
    constructor (apiUrl, authKey) {
        this.apiUrl = apiUrl
        this.authKey = authKey

        // Build all LootSafe.endpoints
        this.buildEndpoints()
    }

    buildEndpoints () {
        const availableEndpoints = require('./endpoints')

        Object.keys(availableEndpoints).map(
            endpoint => this[endpoint] = availableEndpoints[endpoint].bind(this)
        )
    }
}

const lootsafe = new LootSafe('http://localhost:1337/v1', 'sha1$7f408b79$1$02fdd7ee5f25861e9ed1af83bf06124c52b3aec6')

lootsafe.meta().then(res => {
    console.log('res', res)
})

lootsafe.balanceOf('0x02e064890915485094ea7a304b7deaa3e3248207').then(res => console.log(res))