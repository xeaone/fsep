'use strict';

var Fsep = require('../index.js');
var When = require('when');

var options = {
	read: {
		path: './rw/one.txt'
	},
	write: {
		path: './rw/two.txt'

	},
	line: function (line) {
		return When.promise.resolve().then(function () { line.toUpperCase(); });
	}
};

Fsep.readWriteLine(options).then(function () {
	console.log('done');
}).catch(function (error) {
	throw error;
});
