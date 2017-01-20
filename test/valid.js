const Fsep = require('../index');
const Path = require('path');

const path = Path.join(__dirname, 'rw/blue.txt');

Fsep.valid(path).then(function (valid) {
	console.log(valid);
})
.catch(function (error) {
	throw error;
});
