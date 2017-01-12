const Fsep = require('../index');
const Path = require('path');

const path = Path.join(__dirname, 'rw/blue/white/t.txt');

Fsep.ensureFile(path, 'ta da').then(function () {
	console.log('file is written');
}).catch(function (error) {
	throw error;
});
