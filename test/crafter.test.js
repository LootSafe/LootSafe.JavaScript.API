const loot = require('./unit_config.js')
const lootsafe = loot.initUnit()

/* global describe it */
describe('Crafter', () => {
  describe('Get Craftables', () => {
    it(`Should return a list of craftables`, done => {
      lootsafe.craftables()
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

  describe('Get Deconstructables', () => {
    it(`Should return a list of deconstructables`, done => {
      lootsafe.deconstructables()
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

  describe('Get Recipe', () => {
    it(`Should return a craftable recipe`, done => {
      lootsafe.craftables()
        .then(res => {
          if (res.status === 200 && res.data) {
            var craftable = res.data[0]
            lootsafe.recipe(craftable)
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
          } else {
            done('Wrong response code:' + res.status)
          }
        })
        .catch(function (err) {
          done(err)
        })
    })
  })

  describe('Get Destruction Recipe', () => {
    it(`Should return a craftable destruction recipe`, done => {
      lootsafe.deconstructables()
        .then(res => {
          if (res.status === 200 && res.data) {
            var craftable = res.data[0]
            lootsafe.deconstruction(craftable)
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
          } else {
            done('Wrong response code:' + res.status)
          }
        })
        .catch(function (err) {
          done(err)
        })
    })
  })

  describe('Create New Recipe', () => {
    it(`Should create a new recipe`, done => {
      var materials = ['1212', '3434']
      var counts = ['1', '2']

      lootsafe.newRecipe('123', materials, counts)
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

  describe('Remove Recipe', () => {
    it(`Should remove an existing recipe`, done => {
      lootsafe.removeRecipe(lootsafe.address)
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

  describe('Create New Destruction Recipe', () => {
    it(`Should create a new destruction recipe`, done => {
      var materials = ['1212', '3434']
      var counts = ['1', '2']

      lootsafe.newDestructionRecipe('123', materials, counts)
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
