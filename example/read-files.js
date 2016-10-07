var Fsep = require('../index');
var Path = require('path');

var paths = [
	Path.join(process.cwd(), 'rw/one.txt'),
	Path.join(process.cwd(), 'rw/two.txt')
];

Fsep.readFiles(paths).then(function (files) {

	console.log(files);

}).catch(function (error) {
	throw error;
});
