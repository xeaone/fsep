const Fsep = require('../index');
const Path = require('path');

const path = Path.join(__dirname, 'rw/blue.txt');

Fsep.exist(path).then(function (result) {
	console.log(result);
}).catch(function (error) {
	throw error;
});
