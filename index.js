const randomNumberGenerator = require('./rng.js');

exports.RobloxID = function() {
    // Oh hey, friend! Seems you forgot to do RobloxID(), and did RobloxID! Make sure to fix it!
    const RoID = `https://www.roblox.com/users/` + randomNumberGenerator(1000000,3000000000) + `/profile`
    return RoID
}
exports.RobloxGame = function() {
    // Oh hey, friend! Seems you forgot to do RobloxGame(), and did RobloxGame! Make sure to fix it!
    const RoGame = `https://www.roblox.com/games/` + randomNumberGenerator(1000000,3000000000) + `/RobloxRandoms`
    return RoGame
}
exports.RobloxCatalog = function() {
    // Oh hey, friend! Seems you forgot to do RobloxCatalog(), and did RobloxCatalog! Make sure to fix it!
    const RoCatalog = `https://www.roblox.com/catalog/` + randomNumberGenerator(1000000,3000000000) + `/RobloxRandoms`
    return RoCatalog
}
