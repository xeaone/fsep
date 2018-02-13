const Path = require('path');
const Fsep = require('../index.js');

var path = Path.join(__dirname, 'rw');

var data = {
	root: {
		one: 'one.txt',
		two: 'two.txt',
		ar: [
			'three.txt',
			'four.txt'
		]
	}
};

Promise.resolve().then(function () {
	return Fsep.scaffold(path, data);
}).catch(function (error) {
	console.error(error);
});
