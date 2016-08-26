
var Fsep = require('../index');
var Path = require('path');

var path = Path.join(process.cwd(), 'rw/blue/white/t.txt');

Fsep.ensureFile(path, 'la').then(function () {

	console.log('file is written');

}).catch(function (error) { throw error; });
