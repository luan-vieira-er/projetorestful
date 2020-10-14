require('dotenv').config()
var express = require('express'),
app = express(),

port = process.env.PORT || 3000;

app.get("/", function(req, res) {
    console.log("Inicializado Server RESTful | Porta: "+ port + " Pi Estimado: " + getPi()) ;
    res.send("Inicializado Server RESTful | Porta: " + port);
})

app.get('/api/getPi', function(req, res, next) {
    var Pi = getPi()
    var x = Math.random() * 100
    var codigo = 'MonteCarlo'
    var id = 0

    if (x > 33){
        if (x > 66){
            codigo = 'MonteCarlo1'
            id = 1
        } else {
            codigo = 'MonteCarlo2'
            id = 2
        }
    } else {
        codigo = 'MonteCarlo3'
        id = 3
    }

    var PiCalculado = [
        { id: id, codigo: codigo, Pi: Pi }
      ];

    res.send(PiCalculado);
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