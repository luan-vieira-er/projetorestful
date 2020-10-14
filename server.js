require('dotenv').config()
var express = require('express'),
app = express(),

port = process.env.PORT || 3000;

app.get("/", function(req, res) {
    console.log("Inicializado Server RESTful | Porta: "+ port + " Pi Estimado: " + getPi()) ;
    res.send("Inicializado Server RESTful | Porta: " + port);
})

app.get('/api/getPi', function(req, res, next) {
    var Pi1 = getPi()
    var Pi2 = getPi()
    var Pi3 = getPi()

    var Pi = [
        { id: 1, codigo: 'MonteCarlo1', Pi: Pi1 },
        { id: 2, codigo: 'MonteCarlo2', Pi: Pi2 }, 
        { id: 3, codigo: 'MonteCarlo3', Pi: Pi3 }
      ];

    res.send(Pi);
  })

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