const Loot = require('./lootsafe/LootSafe.js')

const baseurl = 'http://localhost:1337/v1/'
const apikey = 'pWpzWuxoKUKAmlHc0wPi7lFS38FTth'
const otpkey = 'otpkey'
const account = '0xb68066af702fe39ad76f486a9a1f971bccc10b1e'

const lootsafe = Loot.init(baseurl, apikey, otpkey)

lootsafe.itemBalances(account).then(res => {
  console.log(res)
})
