const Path = require('path');
const Fsep = require('../index.js');

const path = Path.join(__dirname, 'rw/red/green');

Promise.resolve().then(function () {
	return Fsep.mkdirs(path);
}).catch(function (error) {
	console.error(error);
});
