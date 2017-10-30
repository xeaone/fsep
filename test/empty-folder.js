const Fsep = require('../index');
const Path = require('path');

var path = Path.join(__dirname, 'rw/blue');

Fsep.emptyFolder(path).then(function () {
	console.log('done');
}).catch(function (error) {
	console.log(error);
});
