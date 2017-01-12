const Path = require('path');
const Fsep = require('../index.js');

var path = Path.join(process.cwd(), 'rw');

// var data = {
// 	root: {
// 		one: 'one.txt',
// 		two: 'two.txt',
// 		ar: [
// 			'three.txt',
// 			'four.txt'
// 		]
// 	}
// };

var data = [
	'five.txt',
	'six.txt'
];

Fsep.scaffold(path, data).then(function () {
	console.log('done');
}).catch(function (error) {
	throw error;
});
