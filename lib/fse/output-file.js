'use strict';

var Fs = require('../fsp/fs');
var Valid = require('../fse/valid');
var Path = require('path');
var When = require('when');

module.exports.outputFile = function (path, data, options) {
	if (!path) throw new Error('parameter path is required');
	if (!Path.isAbsolute) throw new Error('parameter path must be absolute');

	path = (path.charAt(0) === Path.sep) ? path.slice(1) : path; // remove pre forward slash
	path = (path.charAt(path.length - 1) === Path.sep) ? path.slice(0, path.length - 1) : path; // remove post forward slash
	path = path.split(Path.sep);

	console.log(path);

	return When.resolve();
};
