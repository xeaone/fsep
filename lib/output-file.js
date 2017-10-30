'use strict';

const Path = require('path');
const Fsp = require('./fs');
const Mkdirs = require('./mkdirs');

module.exports = function (path, data, options) {
	options = typeof options === 'string' ? { encoding: options } : options || {};
	data = data || '';

	return Promise.resolve().then(function () {
		const dirname = Path.dirname(path);
		return Mkdirs(dirname, options.mode, options.cwd);
	}).then(function () {
		return Fsp.writeFile(path, data, options);
	}).catch(function (error) {
		throw error;
	});
};
