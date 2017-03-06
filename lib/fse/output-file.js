
const Fsp = require('../fsp/fs');
const Mkdirs = require('../fse/mkdirs');
const Path = require('path');

module.exports = function (path, data, options) {
	if (!path) return Promise.reject(new Error('parameter path is required'));
	if (!Path.isAbsolute) return Promise.reject(new Error('parameter path must be absolute'));

	data = data === null || data === undefined ? '' : data;

	var dirname = Path.dirname(path);

	return Mkdirs(dirname, options.mode, options.cwd).then(function () {

		return Fsp.writeFile(path, data, options);

	}).catch(function (error) {
		throw error;
	});
};
