const Mkdirs = require('./mkdirs');
const Valid = require('./valid');
const Fsp = require('./fs');
const Path = require('path');

module.exports = function (source, target, type, mode) {
	return Promise.resolve().then(function () {
		return Mkdirs(Path.dirname(target), mode);
	}).then(function () {
		return Valid(target);
	}).then(function (isValid) {
		if (!isValid) return Fsp.symlink(source, target, type);
	}).catch(function (error) {
		throw error;
	});
};
