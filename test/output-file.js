var Fsep = require('../index');
var Path = require('path');

var path = Path.join(process.cwd(), 'rw/stuff/la/blue.js');
var data = 'hello';

Fsep.outputFile(path, data, 'utf8').then(function () {
	console.log('done');
}).catch(function (error) { throw error; });
