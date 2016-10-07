const When = require('when');
const Fsp = require('../fsp/fs');
const Valid = require('../fse/valid');

module.exports = function (paths, options) {
	if (!paths) throw new Error('Fsep.readFiles: missing paths argument');
	if (paths.constructor.name !== 'Array') throw new Error('Fsep.readFiles: paths argument must be an array');

	var importPromises = paths.map(function (path) {

		return Valid(path).then(function (isValid) {

			if (!isValid) throw new Error('Fsep.readFiles: path ' + path + ' is not valid');
			else return Fsp.readFile(path, options);

		}).catch(function (error) {

			throw error;

		});

	});

	return When.all(importPromises);
};
