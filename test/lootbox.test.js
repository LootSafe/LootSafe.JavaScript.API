const loot = require('./unit_config.js')
const lootsafe = loot.initUnit()

/* global describe it */
describe('LootBox', () => {
  describe('Get LootBox Cost', () => {
    it(`Should return lootbox costs`, done => {
      lootsafe.lootboxCost()
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

  describe('Get LootBox Chances', () => {
    it(`Should return lootbox chances`, done => {
      lootsafe.lootboxChances()
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

  describe('Get LootBox Items', () => {
    it(`Should return lootbox items by rarity`, done => {
      lootsafe.lootboxItems(lootsafe.rarity)
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

  describe('Add LootBoxItem', () => {
    it(`Should add an item to the lootbox with it's rarity type`, done => {
      lootsafe.lootboxItems(lootsafe.itemAddress, lootsafe.rarity)
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

  describe('Update Chance', () => {
    it(`Should update the chance for an item`, done => {
      lootsafe.lootboxItems(lootsafe.itemAddress)
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

  describe('Update LootBox Cost', () => {
    it(`Should update the cost of a lootbox`, done => {
      lootsafe.updateLootBoxCost(100)
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
