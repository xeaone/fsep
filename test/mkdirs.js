const Fsep = require('../index.js');
const Path = require('path');

var relativePath = 'rw/red/green';
var absolutePath = Path.join(__dirname, 'rw/red/green');

Promise.resolve().then(function () {

	Fsep.mkdirs(relativePath, 'foo/bar/').catch(function (error) {
		console.error(error);
	});

	// Fsep.mkdirs(relativePath, __dirname).catch(function (error) {
	// 	console.error(error);
	// });

	// Fsep.mkdirs(absolutePath, __dirname).catch(function (error) {
	// 	console.error(error);
	// });

	// Fsep.mkdirs(relativePath).catch(function (error) {
	// 	console.error(error);
	// });

	// Fsep.mkdirs(absolutePath).catch(function (error) {
	// 	console.error(error);
	// });

}).then(function () {
	console.log('done');
}).catch(function (error) {
	console.error(error);
});
