const Mkdirs = require('./mkdirs');
const Path = require('path');
const Fsp = require('./fs');

module.exports = function (path, data, options) {
	options = typeof options === 'string' ? { encoding: options } : options;
	data = !data ? '' : data;

	var dirname = Path.dirname(path);

	return Promise.resolve().then(function () {
		return Mkdirs(dirname, options.mode || options.cwd);
	}).then(function () {
		return Fsp.writeFile(path, data, options);
	}).catch(function (error) {
		throw error;
	});
};
