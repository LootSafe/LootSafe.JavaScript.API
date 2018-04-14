const Loot = require('./lootsafe/LootSafe.js')

baseurl = 'http://localhost:1337/v1'
apikey = 'pWpzWuxoKUKAmlHc0wPi7lFS38FTth'
otpkey = 'otpkey'
ethAcc = '0x91e7abb929ba280680318343aaaace7ad16623e1'

const lootsafe = Loot.init(baseurl, apikey, otpkey, ethAcc)

lootsafe.itemBalances(lootsafe.ethAcc).then(res => {
    console.log(res)
})      