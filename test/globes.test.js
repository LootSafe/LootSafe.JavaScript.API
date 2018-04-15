const loot = require('./unit_config.js')
const lootsafe = loot.initUnit()

/* global describe it */
describe('Globes', () => {
  describe('Meta Data', () => {
    it(`Should return meta data from the root url`, done => {
      lootsafe.getMeta()
        .then(res => {
          if (res.connected === true) {
            done()
          } else {
            done(res)
          }
        })
        .catch(function (err) {
          done(err)
        })
    })
  })

  describe('Get Token Address', () => {
    it(`Should return a token address`, done => {
      lootsafe.getTokenAddress()
        .then(res => {
          if (res.status === 200) {
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

  describe('New Item', () => {
    it(`Should create a new item`, done => {
      lootsafe.newItem('potato', '123', 1, 'metadata')
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
