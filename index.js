const randomNumberGenerator = require('./rng.js');
const id = randomNumberGenerator(1000000,3000000000)

const RoID = `https://www.roblox.com/users/${id}/profile`
const RoGame = `https://www.roblox.com/games/${id}/RobloxRandoms`
const RoCatalog = `https://www.roblox.com/catalog/${id}/RobloxRandoms`

exports.RobloxID = function() {
    return RoID
}
exports.RobloxGame = function() {
    return RoGame
}
exports.RobloxCatalog = function() {
    return RoCatalog
}
