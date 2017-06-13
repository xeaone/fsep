const Fsp = require('./fs');

module.exports = function (path) {
	return new Promise(function(resolve, reject) {
		try {
			return resolve(Fsp.existsSync(path));
		} catch (e) {
			return reject(e);
		}
	});
};
