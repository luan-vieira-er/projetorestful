require('dotenv').config()
var express = require('express'),
app = express(),

port = process.env.PORT || 3000;
Message = require('./api/models/msgModel')
bodyParser = require('body-parser')

app.get("/", function(req, res) {
    console.log("Inicializado Server RESTful | Porta: "+ port + " Pi Estimado: " + getPi()) ;
    //res.send("Pi Estimado: " + getPi());
    res.send("Inicializado Server RESTful | Porta: " + port);
})

app.get('/api/getPi', function(req, res, next) {
    res.send(Pi);
  })

var Pi = [
    { id: 1, codigo: 'MonteCarlo', Pi: getPi() },
    { id: 2, codigo: 'MonteCarlo', Pi: getPi() }, 
    { id: 3, codigo: 'MonteCarlo', Pi: getPi() }
  ];

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