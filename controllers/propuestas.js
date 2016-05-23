var mongoose = require('mongoose');  
var Propuesta  = mongoose.model('Propuesta');

//GET - Return all propuestas in the DB
exports.findAllPropuestas = function(req, res) {  
    Propuesta.find(function(err, propuestas) {
    if(err) res.send(500, err.message);

    console.log('GET /propuestas')
        res.status(200).jsonp(propuestas);
    });
};

//GET - Return a Propuesta with specified ID
exports.findById = function(req, res) {  
    Propuesta.findById(req.params.id, function(err, propuesta) {
    if(err) return res.send(500, err.message);

    console.log('GET /propuestas/' + req.params.id);
        res.status(200).jsonp(propuesta);
    });
};

//POST - Insert a new Propuesta in the DB
exports.addPropuesta = function(req, res) {  
    console.log('POST');
    console.log(req.body);

    var propuesta = new Propuesta({
        usuario:    req.body.usuario,
        propuesta:     req.body.propuesta,
        fecha:  req.body.fecha
    });

    propuesta.save(function(err, propuesta) {
        if(err) return res.status(500).send(err.message);
    res.status(200).jsonp(propuesta);
    });
};

//PUT - Update a register already exists
exports.updatePropuesta = function(req, res) {  
    Propuesta.findById(req.params.id, function(err, propuesta) {
        propuesta.propuesta    = req.body.propuesta;
        propuesta.fecha = req.body.fecha;

        propuesta.save(function(err) {
            if(err) return res.status(500).send(err.message);
      res.status(200).jsonp(propuesta);
        });
    });
};

//DELETE - Delete a Propuesta with specified ID
exports.deletePropuesta = function(req, res) {  
    Propuesta.findById(req.params.id, function(err, propuesta) {
        propuesta.remove(function(err) {
            if(err) return res.status(500).send(err.message);
        res.status(200).send();
        })
    });
};