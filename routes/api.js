var express      = require('express');
var router       = express.Router();
//const ChartModel = require("../models/chart.model");
//const mongoose   = require("mongoose");
const axios      = require('axios');


router.use(express.json());
router.use(express.urlencoded({extended: false}));


/* GET home page. */
router.get('/', function (req, res, next) {
  let url = `https://api.cryptowat.ch/markets/${req.query.market}/${req.query.currency}/ohlc?periods=${req.query.timeFrame}`;

  if (req.query.starDate != undefined ){
    url+="&after=${req.query.startDate}";
  }
  // kraken/btcusd/ohlc?periods=3600&after=1577836800

  axios.all([
    axios.get(url),
  ]).then(axios.spread((response) => {

  //  saveChart(response.data, req.query);

    res.json({

      bars: response.data,


    });

  })).catch(error => {
    console.log(error);
  });


  // res.json({api: "api"});
});

/*
function saveChart(obj, parameters) {
  let hours = parameters.timeFrame / 60;


  let timecandles = parameters.timeFrame.toString();

  let model = new ChartModel({
    _id        : new mongoose.Types.ObjectId(),
    timecandles: timecandles + 'h',
    bars       : obj.result[timecandles],
    timeStart  : parameters.startDate,
    timeStop   : "",
    market     : parameters.market,
    currency   : parameters.currency

  });
  model.save()
       .then(doc => {
         if (!doc || doc.length === 0) {
           console.log(`errore ${doc}`);
           return;
           //  return res.status(500).json(`errore ${doc}`)
         }
         console.log(`Inserito con successo nel db ${doc}`);
         return;
         //    res.status(201).send(`Inserito con successo nel db ${doc}`);

       }).catch(err => {
    console.log(` errore 500 ${err}`);
    return;
    //  res.status(500).json(` errore 500 ${err}`);
  });
}

function findChart(market, periods,) {
  AlertModel.find({}, function (err, docs) {
    if (!err) {
      return docs;
      //    process.exit();
    } else {
      throw err;
    }
  });
}
*/
module.exports = router;
