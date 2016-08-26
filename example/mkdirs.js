var Fsep = require('../index.js');
var Path = require('path');

var path = Path.join(process.cwd(), 'rw/red/green');

Fsep.mkdirs(path).then(function () {

	console.log('done');

}).catch(function (error) {
	throw error;
});
