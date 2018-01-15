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

const ethAcc = '0x616604227072883aabfc3ee09eae350be9c0912d'

lootsafe.meta().then(res => console.log('meta', res))
lootsafe.craftables().then(res => console.log('response', res))