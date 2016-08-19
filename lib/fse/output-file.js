'use strict';

const Fsp = require('../fsp/fs');
const Mkdirs = require('../fse/mkdirs').mkdirs;
const Path = require('path');
const When = require('when');

module.exports = function (path, data, options) {
	if (!path) return When.reject(new Error('parameter path is required'));
	if (!Path.isAbsolute) return When.reject(new Error('parameter path must be absolute'));

	data = (typeof data !== 'string') ? '' : data;

	const dirname = Path.dirname(path);

	return Mkdirs(dirname).then(function () {

		return Fsp.writeFile(path, data, options);

	}).catch(function (error) { throw error; });
};
