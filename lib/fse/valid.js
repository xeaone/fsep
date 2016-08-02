'use strict';

var Fs = require('fs');
var When = require('when');

module.exports.valid = function (path) {
	return When.promise(function (resolve, reject) {

		Fs.stat(path, function (error) {
			if (error === null) return resolve(true);
			else if (error.code === 'ENOENT') return resolve(false);
			else return reject(error);
		});

	});
};
