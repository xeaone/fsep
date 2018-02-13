const Fsep = require('../index');
const Path = require('path');

const path = Path.join(__dirname, 'rw/stuff/la/blue.js');

Promise.resolve().then(function () {
	return Fsep.outputFile(path, 'hello', 'utf8');
}).then(function () {
	console.log('done');
}).catch(function (error) { throw error; });
