var express = require("express"),  
    app = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override");
    mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: false }));  
app.use(bodyParser.json());  
app.use(methodOverride());

var router = express.Router();

router.get('/', function(req, res) {  
   res.send("Hello World!");
});

app.use(router);

mongoose.connect('mongodb://localhost/posgrados', function(err, res) {  
  if(err) {
    console.log('ERROR: connecting to Database. ' + err);
  }
  app.listen(3000, function() {
    console.log("Node server running on http://localhost:3000");
  });
});
//Controller load
var PropuestasCtrl = require('.Controllers/propuestas');

//API Routes
var propuestas = express.Router();

propuestas.route('/propuestas')
    .get(PropuestasCtrl.findAllPropuestas)
    .post(PropuestasCtrl.addPropuesta)
    
propuestas.route('/propuestas/:id')  
  .get(PropuestasCtrl.findById)
  .put(PropuestasCtrl.updatePropuesta)
  .delete(PropuestasCtrl.deletePropuesta);
  
app.use('/api', propuestas);