'use strict';

var Fsep = require('../index.js');

var options = {
	read: {
		path: './rw/one.txt'
	},
	write: {
		path: './rw/two.txt'

	},
	line: function (line) {
		return line.toUpperCase();
	}
};

Promise.resolve().then(function () {
	return Fsep.readWriteLine(options);
}).then(function () {
	console.log('done');
}).catch(function (error) {
	throw error;
});
