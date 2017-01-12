const Fsep = require('../index.js');
const Path = require('path');

var path = Path.join(__dirname, 'rw/red/green');

Fsep.mkdirs(path).then(function () {
	console.log('done');
}).catch(function (error) {
	throw error;
});
