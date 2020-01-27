let mongoose = require('mongoose');


/* bars [
       CloseTime,
       OpenPrice,
       HighPrice,
       LowPrice,
       ClosePrice,
       Volume,
       QuoteVolume
     ] */

mongoose.connect("mongodb://localhost:27017/charts");

let chartSchema = new mongoose.Schema({
  timecandles: String,
  bars       : [[Number]],
  timeStart  : String,
  timeStop   : String,
  market     : String,
  currency   : String

});

module.exports = mongoose.model('chart', chartSchema);
