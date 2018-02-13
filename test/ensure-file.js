const Fsep = require('../index');
const Path = require('path');

const path = Path.join(__dirname, 'rw/blue/white/t.txt');

Promise.resolve().then(function () {
	return Fsep.ensureFile(path, 'foo bar');
}).then(function () {
	console.log('file is written');
}).catch(function (error) {
	throw error;
});
