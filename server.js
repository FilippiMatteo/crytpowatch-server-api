var express = require('express');
var path    = require('path');

var cors = require('cors');
var PORT = process.env.Port || "8888";
var HOST = '0.0.0.0';

// use it before all route definitions
var api = require('./routes/api');

var app = express();

app.use(cors({origin: '*'}));


app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', api);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.send("errore 404");
  next();
});


app.listen(PORT, HOST, function () {
  console.log("server listener on " + PORT)
});

module.exports = app;
