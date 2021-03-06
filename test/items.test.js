const loot = require('./unit_config.js')
const lootsafe = loot.initUnit()

/* global describe it */
describe('Items', () => {
  describe('Get Items', () => {
    it(`Should get all items`, done => {
      lootsafe.getItems()
        .then(res => {
          if (res.status === 200 && res.data) {
            done()
          } else {
            done('Wrong response code:' + res.status)
          }
        })
        .catch(function (err) {
          done(err)
        })
    })
  })

  describe('Get Item by Address', () => {
    it(`Should get an item by address`, done => {
      lootsafe.getItem(lootsafe.itemAddress)
        .then(res => {
          if (res.status === 200 && res.data) {
            done()
          } else {
            done('Wrong response code:' + res.status)
          }
        })
        .catch(function (err) {
          done(err)
        })
    })
  })

  describe('Get Ledger', () => {
    it(`Should return a ledger`, done => {
      lootsafe.ledger()
        .then(res => {
          if (res.status === 200 && res.data) {
            done()
          } else {
            done('Wrong response code:' + res.status)
          }
        })
        .catch(function (err) {
          done(err)
        })
    })
  })

  describe('Get Item Addresses', () => {
    it(`Should return item addresses`, done => {
      lootsafe.getItemAddresses()
        .then(res => {
          if (res.status === 200 && res.data) {
            done()
          } else {
            done('Wrong response code:' + res.status)
          }
        })
        .catch(function (err) {
          done(err)
        })
    })
  })

  describe('Get Item By Addresses', () => {
    it(`Should return item by address`, done => {
      lootsafe.getItemByAddress(lootsafe.itemAddress)
        .then(res => {
          if (res.status === 200 && res.data) {
            done()
          } else {
            done('Wrong response code:' + res.status)
          }
        })
        .catch(function (err) {
          done(err)
        })
    })
  })

  describe('Spawn Item', () => {
    it(`Should spawn a new item into an account`, done => {
      lootsafe.spawnItem(lootsafe.itemAddress, '0x8709f05d96b01f708e19862f1dc5b70a10b43494')
        .then(res => {
          if (res.status === 200 && res.data) {
            done()
          } else {
            done('Wrong response code:' + res.status)
          }
        })
        .catch(function (err) {
          done(err)
        })
    })
  })

  describe('Clear Availability', () => {
    it(`Should clear availability`, done => {
      lootsafe.clearAvailability(lootsafe.itemAddress, lootsafe.account)
        .then(res => {
          if (res.status === 200 && res.data) {
            done()
          } else {
            done('Wrong response code:' + res.status)
          }
        })
        .catch(function (err) {
          done(err)
        })
    })
  })
})
