
var Fsep = require('../index');
var Path = require('path');

var path = Path.join(process.cwd(), 'rw/blue/blah');

Fsep.ensureDir(path).then(function () {
	console.log('done');
}).catch(function (error) { throw error; });
