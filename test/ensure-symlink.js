const Fsep = require('../index');
const Path = require('path');

const source = Path.join(__dirname, 'rw/blue/white/t.txt');
const target = Path.join(__dirname, 'rw/blue/sym/t.txt');

Fsep.ensureSymlink(source, target).then(function () {
	console.log('symlink created');
}).catch(function (error) {
	console.log(error);
});
