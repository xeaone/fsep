'use strict';

var Fsep = require('../index.js');

var options = {
	read: {
		path: './rw/one.txt'
	},
	write: {
		path: './rw/two.txt',
		flags: 'a'

	},
	line: function (line) {
		return line.toUpperCase();
	}
};

Fsep.readWriteLine(options).then(function () {
	console.log('done');
}).catch(function (error) {
	throw error;
});
