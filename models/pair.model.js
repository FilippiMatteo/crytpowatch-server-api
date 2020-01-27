let mongoose = require('mongoose');


mongoose.connect("mongodb://localhost:27017/pairs");

let pairsSchema = new mongoose.Schema({
  id       : Number,
  symbol   : String,
  timeStart: String,
  base     : {
    id    : Number,
    symbol: String,
    name  : String,
    fiat  : Boolean,
    route : String
  },
  quote    : {
    id    : Number,
    symbol: String,
    name  : String,
    fiat  : Boolean,
    route : String
  },
  route    : String

});

module.exports = mongoose.model('pairs', pairsSchema);
