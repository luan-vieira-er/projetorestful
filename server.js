require('dotenv').config()
var express = require('express'),
app = express(),

port = process.env.PORT || 3000;
/*mongoose = require('mongoose'),
Message = require('./api/models/msgModel'),
bodyParser = require('body-parser');*/

app.get("/", function(req, res) {
    console.log("Inicializado Server RESTful | Porta: "+ port + " Pi Estimado: " + getPi()) ;
    res.send("Pi Estimado: " + getPi());
})

var uristring =
    process.env.MONGOLAB_URI ||
    process.env.MONGOHQ_URL ||
    'mongodb://localhost/msgdb';

app.listen(port);

function getPi(){
    var n = 10000000, inside = 0, x, y, z;
    for (i = 0; i<n; i++){
        x = Math.random();
        y = Math.random();
        if (Math.sqrt(x * x + y * y) <= 1){
            inside++;
        }
    }
    return 4 * inside / n;
}

//MONGOOSE DEPRECATED
/*mongoose.Promise = global.Promise;
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
routes(app);*/