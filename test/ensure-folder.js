const Fsep = require('../index');
const Path = require('path');

var path = Path.join(__dirname, 'rw/blue/white');

Promise.resolve().then(function () {
	return Fsep.ensureFolder(path);
}).catch(function (error) {
	console.log(error);
});
