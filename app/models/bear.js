var mongoos = require('mongoose');
var Schema = mongoose.Schema;

var BearSchema = new Schme({
	name: String
});


module.exports = mongoose.model('Bear', BearSchema);


