const Fsep = require('../index.js');
const Path = require('path');

var path = Path.join(__dirname, 'rw/red/green');

Promise.resolve().then(function () {

	Fsep.mkdirs(path).catch(function (error) {
		console.log(error);
	});

	Fsep.mkdirs(path).catch(function (error) {
		console.log(error);
	});

}).then(function () {
	return Fsep.mkdirs(path);
}).then(function () {
	console.log('done');
}).catch(function (error) {
	throw error;
});
