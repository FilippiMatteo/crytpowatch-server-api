let mongoose = require('mongoose');


mongoose.connect("mongodb://localhost:27017/markets");

// "id":1,"exchange":"bitfinex","pair":"btcusd","active":true,"route":"https://api.cryptowat.ch/markets/bitfinex/btcusd"


let marketSchema = new mongoose.Schema({
  id       : Number,
  exchange   : String,
  pair: String,
  active : Boolean,
  route : String
});

module.exports = mongoose.model('market', marketSchema);
