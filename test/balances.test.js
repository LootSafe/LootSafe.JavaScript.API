const loot = require('./unit_config.js')
const lootsafe = loot.initUnit()

/* global describe it */
describe('Balance', () => {
  describe('Item balance', () => {
    it(`Should return an item balance from a queried account`, done => {
      lootsafe.itemBalance(lootsafe.itemAddress, lootsafe.account)
        .then(res => {
          if (parseInt(res.data) >= 1) {
            done()
          } else {
            done(res.message)
          }
        })
        .catch(function (err) {
          done(err)
        })
    })
  })

  describe('Item balances', () => {
    it(`Should return item balances from queried account`, done => {
      lootsafe.itemBalances(lootsafe.account)
        .then(res => {
          const firstItem = Object.keys(res.data[0])[0]
          if (parseInt(res.data[0][firstItem]) >= 1) {
            done()
          } else {
            done(res.message)
          }
        })
        .catch(function (err) {
          done(err)
        })
    })
  })

  describe('Token balance', () => {
    it(`Should return token balance from an account`, done => {
      lootsafe.balanceOf(lootsafe.account)
        .then(res => {
          if (res.status === 200) {
            if (res.data != null) {
              done()
            } else {
              done(res.message)
            }
          } else {
            done(res.message)
          }
        })
        .catch(function (err) {
          done(err)
        })
    })
  })
})
