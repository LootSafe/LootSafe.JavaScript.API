# LootSafe.JavaScript.API

LootSafe API abstraction written in JavaScript

### Usage

```
const Loot = require('./lootsafe/LootSafe.js')

baseurl = 'http://localhost:1337/v1'
apikey = 'pWpzWuxoKUKAmlHc0wPi7lFS38FTth'
otpkey = 'otpkey'
ethAcc = '0x91e7abb929ba280680318343aaaace7ad16623e1'

const lootsafe = Loot.init(baseurl, apikey, otpkey)

lootsafe.itemBalances(ethAcc).then(res => {
    console.log(res)
})      

```

### Example

```
node index.js
```

### Unit Tests

Available Unit Tests
```
test/balances.test.js
test/crafter.test.js
test/events.test.js
test/globes.test.js
test/lootbox.test.js
test/lootsafe.test.js
```

Running an individual test

```
./node_modules/mocha/bin/mocha test/balances.test.js
```

Running all tests

```
./node_modules/mocha/bin/mocha test/*
```

### Endpoints

 Endpoint  | Type | Auth | Status |
|---|---|---|---|
| **Balance**   |   |   |   |
| balanceOf(address)  | **GET**  | OPEN  | Available |
| itemBalances(address)  | **GET**  | OPEN  | Available |
| itemBalance(itemAddress,address)  | **GET**  | OPEN   | Available |
| **Crafter**   |   |   |   |
| getCraftables()  | **GET**  | OPEN   | Available |
| getDeconstructables()  | **GET**  | OPEN   | Available |
| getDeconstructionRecipe(item)  | **GET**  | OPEN   | Available |
| getRecipe(item) | **GET**  | OPEN   | Available |
| newRecipe(apiKey, otp, result, materials, counts)  | **POST**  | AUTH   | Available |
| removeRecipe(apiKey,otp, item)  | **POST**  | AUTH   | Available 
| **Events**  |   |   |   |
| fetchEvents()  | **GET**  | OPEN   | Available |
| **Globals**  |   |   |   |
| getMeta()  | **GET**  | OPEN   | Available |
| getTokenAddress()  | **GET**  | OPEN   | Available |
| newItem(apiKey, otp, name, id, totalSupply, metadata) | **POST**  | AUTH   | Available |
| **Items**  |   |   |   |
| getItems()  | **GET**  | OPEN   | Available |
| getItemAddresses()  | **GET**  | OPEN   | Available |
| ledger()  | **GET**  | OPEN   | Available |
| getItem(item)  | **GET**  | OPEN   | Available |
| getItemByAddress(item) | **GET**  | OPEN   | Available |
| spawnItem(item, useraccount) | **POST**  | OPEN   | Available |
| clearAvailability(item, useraccount) | **POST**  | OPEN   | Available |
| **LootBox** |   |   |   |
| getChances()  | **GET**  | OPEN   | Available |
| getCost()  | **GET**  | OPEN   | Available |
| getItems(rarity)  | **GET**  | OPEN   | Available |
| addItem(apikey,opt,item,rarity)  | **POST**  | AUTH  | Available |
| updateChance(apikey, opt, epic, rare, uncommon) | **GET**  | AUTH  | Available |
| updateLootBoxCost(apikey, opt, cost)  | **GET**  | AUTH  | Available |