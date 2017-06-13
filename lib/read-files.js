const Valid = require('./valid');
const Fsp = require('./fs');

module.exports = function (paths, options) {

	if (!paths) {
		throw new Error('Fsep.readFiles: missing paths argument');
	}

	if (paths.constructor.name !== 'Array') {
		throw new Error('Fsep.readFiles: paths argument must be an array');
	}

	return Promise.all(paths.map(function (path) {

		return Valid(path).then(function (isValid) {

			if (!isValid) {
				throw new Error('Fsep.readFiles: path ' + path + ' is not valid');
			} else {
				return Fsp.readFile(path, options);
			}

		}).catch(function (error) {
			throw error;
		});

	}));

};
