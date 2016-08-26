
var Fsep = require('../index');
var Path = require('path');

var path = Path.join(process.cwd(), 'rw/blue/white');

Fsep.ensureDir(path).then(function () {
	console.log('done');
}).catch(function (error) { throw error; });
