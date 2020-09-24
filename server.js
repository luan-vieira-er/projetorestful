var express = require('express'),
app = express(),

port = process.env.PORT || 3000,
mongoose = require('mongoose'),
Message = require('./api/models/msgModel'),
bodyParser = require('body-parser');

app.get("/", function(req, res) {
    console.log("Inicializado Server RESTful | Porta: "+ port);
    res.send("Inicializado Server RESTful | Porta: "+ port);
})

var uristring =
    process.env.MONGOLAB_URI ||
    process.env.MONGOHQ_URL ||
    'mongodb://localhost/msgdb';

mongoose.Promise = global.Promise;
mongoose.connect(uristring, function (err, res) {
    if (err) {
    console.log ('ERROR connecting to: ' + uristring + '. ' + err);
    } else {
    console.log ('Succeeded connected to: ' + uristring);
    }
})
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var routes = require('./api/routes/msgRoutes');
routes(app);
app.listen(port);