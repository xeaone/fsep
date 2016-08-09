'use strict';

var Fsp = require('../fsp/fs');
var Mkdirs = require('../fse/mkdirs').mkdirs;
var Path = require('path');
var When = require('when');

module.exports.outputFile = function (path, data, options) {
	if (!path) return When.reject(new Error('parameter path is required'));
	if (!Path.isAbsolute) return When.reject(new Error('parameter path must be absolute'));

	data = (typeof data !== 'string') ? '' : data;

	const dirname = Path.dirname(path);

	return Mkdirs(dirname).then(function () {
		return Fsp.writeFile(path, data, options);
	}).catch(function (error) {
		throw error;
	});
};
