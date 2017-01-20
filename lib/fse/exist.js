const Fs = require('fs');

module.exports = function (path) {
	return new Promise(function(resolve, reject) {
		try {
			return resolve(Fs.existsSync(path));

		} catch (e) {
			return reject(e);
		}
	});
};
