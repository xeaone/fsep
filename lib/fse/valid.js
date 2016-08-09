'use strict';

var Fs = require('fs');
var When = require('when');

module.exports.valid = function (path) {
	return When.promise(function (resolve, reject) {

		Fs.stat(path, function (error, stats) {
			if (error === null) return resolve(true, stats);
			else if (error.code === 'ENOENT') return resolve(false, stats);
			else return reject(error);
		});

	});
};
