# LootSafe.JavaScript.API

LootSafe API abstraction written in JavaScript to aid developers with integrating LootSafe's services with their games.

Check out [our website](http://lootsafe.io/) for more information.

## Index

* [Requirements and Installation](#requirements-and-installation)
* [Running the example](#running-the-example)
* [Unit Tests](#unit-tests)
* [Endpoints](#endpoints)

## Requirements and Installation

This API wrapper works on a Node.js server and currently requires the usage of the following required libaries

* [node-fetch](https://www.npmjs.com/package/node-fetch)
* [Mocha](https://github.com/mochajs/mocha) (for Unit Tests)

**Step 1** 

Clone/Download this repository

**Step 2** 

Install dependencies using the [node package manager](https://www.npmjs.com/get-npm)

  ```npm install``` 

## Running the example

Everything is installed, you're ready to see our example in action!

**Run the following command**

```
node index.js
```

**Contents of index.js**

```
const Loot = require('./lootsafe/LootSafe.js')

const baseurl = 'http://localhost:1337/v1/'
const apikey = 'pWpzWuxoKUKAmlHc0wPi7lFS38FTth'
const otpkey = 'otpkey'
const account = '0xb68066af702fe39ad76f486a9a1f971bccc10b1e'

const lootsafe = Loot.init(baseurl, apikey, otpkey)

lootsafe.itemBalances(account).then(res => {
  console.log(res)
})    
```

## Unit Tests

Keep in mind that some of the unit tests that clear availability 

**Running an individual test**

```
./node_modules/mocha/bin/mocha test/balances.test.js
```

**Running all tests**

```
./node_modules/mocha/bin/mocha test/*
```

**Available Unit Tests**

```
test/balances.test.js
test/crafter.test.js
test/events.test.js
test/general.test.js
test/items.test.js
test/lootbox.test.js
```

## Endpoints
 Endpoint  | Type | Auth | Status |
|---|---|---|---|
| **Balance**   |   |   |   |
| balanceOf(address)  | **GET**  | OPEN  | Available |
| itemBalances(address)  | **GET**  | OPEN  | Available |
| itemBalance(itemAddress,address)  | **GET**  | OPEN   | Available |
| **Crafter**   |   |   |   |
| getCraftables()  | **GET**  | OPEN   | Available |
| getDeconstructables()  | **GET**  | OPEN   | Available |
| getDeconstructionRecipe(itemAddress)  | **GET**  | OPEN   | Available |
| getRecipe(itemAddress) | **GET**  | OPEN   | Available |
| newRecipe(apiKey, otp, result, materials, counts)  | **POST**  | AUTH   | Available |
| removeRecipe(apiKey,otp, itemAddress)  | **POST**  | AUTH   | Available 
| **Events**  |   |   |   |
| fetchEvents()  | **GET**  | OPEN   | Available |
| **General**  |   |   |   |
| getMeta()  | **GET**  | OPEN   | Available |
| getTokenAddress()  | **GET**  | OPEN   | Available |
| newItem(apiKey, otp, name, id, totalSupply, metadata) | **POST**  | AUTH   | Available |
| **Items**  |   |   |   |
| getItems()  | **GET**  | OPEN   | Available |
| getItemAddresses()  | **GET**  | OPEN   | Available |
| ledger()  | **GET**  | OPEN   | Available |
| getItem(item)  | **GET**  | OPEN   | Available |
| getItemByAddress(itemAddress) | **GET**  | OPEN   | Available |
| spawnItem(itemAddress, account) | **POST**  | OPEN   | Available |
| clearAvailability(itemAddress) | **POST**  | OPEN   | Available |
| **LootBox** |   |   |   |
| getChances()  | **GET**  | OPEN   | Available |
| getCost()  | **GET**  | OPEN   | Available |
| getItems(rarity)  | **GET**  | OPEN   | Available |
| addItem(apikey,opt,itemAddress,rarity)  | **POST**  | AUTH  | Available |
| updateChance(apikey, opt, epic, rare, uncommon) | **GET**  | AUTH  | Available |
| updateLootBoxCost(apikey, opt, cost)  | **GET**  | AUTH  | Available |
