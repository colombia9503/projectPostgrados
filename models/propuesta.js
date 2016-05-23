var mongoose = require('mongoose'),  
    Schema   = mongoose.Schema;
    
var propuestaSchema = new Schema({
  usuario: {type: String},
  propuesta: {type: String},
  fecha: {type: String}
});

module.exports = mongoose.model('Propuesta', propuestaSchema);
