const Fs = require('fs');

module.exports = function (path) {
	return new Promise(function(resolve, reject) {
		Fs.stat(path, function (error) {
			if (error) {
				if (error.code === 'ENOENT') return resolve(false);
				else return reject(error);
			} else {
				return resolve(true);
			}
		});
	});
};
