const Fsep = require('../index');
const Path = require('path');

const path = Path.join(__dirname, 'rw/blue');

Promise.resolve().then(function () {
	return Fsep.emptyFolder(path);
}).then(function () {
	console.log('done');
}).catch(function (error) {
	console.log(error);
});
