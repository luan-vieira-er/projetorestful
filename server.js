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

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/msgdb');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var routes = require('./api/routes/msgRoutes');
routes(app);
app.listen(port);