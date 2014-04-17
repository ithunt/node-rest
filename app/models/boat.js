var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BoatSchema = new Schema({
	name: String
});


module.exports = mongoose.model('Boat', BoatSchema);


