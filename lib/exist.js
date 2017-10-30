'use strict';

const Fs = require('fs');

module.exports = function (path) {
	return new Promise(function(resolve, reject) {
		Fs.stat(path, function (error, stat) {
			if (error) {
				if (error.code === 'ENOENT') {
					resolve(false);
				} else {
					reject(error);
				}
			} else {
				resolve(true);
			}
		});
	});
};
