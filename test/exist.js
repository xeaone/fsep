const Fsep = require('../index');
const Path = require('path');

const path = Path.join(__dirname, 'rw/blue/white/t.txt');

Fsep.exist(path).then(function (result) {
	console.log(result);
}).catch(function (error) {
	console.log(error);
});
