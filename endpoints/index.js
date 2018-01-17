module.exports = {
    meta: require('./meta'),
    // Balances
    balanceOf: require('./Balance/balanceOf'),
    itemBalance: require('./Balance/itemBalance'),
    itemBalances: require('./Balance/itemBalances'),
    // Crafter
    craftables: require('./Crafter/getCraftables'),
    deconstructables: require('./Crafter/getDeconstructables'),
    recipe: require('./Crafter/getrecipe'),
    deconstruction: require('./Crafter/getDeconstructionrecipe'),
    // Lootbox
    lootboxChances: require('./LootBox/getChances'),
    lootboxCost: require('./LootBox/getCost'),
    lootboxItems: require('./LootBox/getItems'),
    // Trade
    trade: require('./Trade/getTrade'),
    tradeCost: require('./Trade/getTradeCost'),
    trades: require('./Trade/getTrades')
}