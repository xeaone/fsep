'use strict';

const Fs = require('fs');
const Path = require('path');
const Util = require('util');
const Mkdirs = require('./mkdirs');

const WriteFile = Util.promisify(Fs.writeFile);

module.exports = async function (path, data, options) {

	data = data || '';
	options = typeof options === 'string' ? { encoding: options } : options || {};

	const folderPath = Path.dirname(path);

	await Mkdirs(folderPath, options.mode, options.cwd);
	await WriteFile(path, data, options);

};
