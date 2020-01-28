var express = require('express');
var path    = require('path');

 var cors = require('cors');


// use it before all route definitions
 var api = require('./routes/api');

 var app = express();

app.use(cors({origin: '*'}));


app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', (req, res, next) => {
    console.log("test");
    res.send("test");
    next();
});

 app.use('/api', api);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    res.send("errore 404");
    next();
});



module.exports = app;
