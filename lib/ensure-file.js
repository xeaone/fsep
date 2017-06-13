const Mkdirs = require('./mkdirs');
const Valid = require('./valid');
const Fsp = require('./fs');
const Path = require('path');

module.exports = function (path, data, options, mode) {
	data = data || '';

	return Promise.resolve().then(function () {
		return Mkdirs(Path.dirname(path), mode);
	}).then(function () {
		return Valid(path);
	}).then(function (isValid) {
		if (!isValid) return Fsp.writeFile(path, data, options);
	}).catch(function (error) {
		throw error;
	});

};
