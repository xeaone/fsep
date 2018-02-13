'use strict';

const Fs = require('fs');
const Path = require('path');
const Util = require('util');

const Exist = require('./exist');
const Mkdirs = require('./mkdirs');

const WriteFile = Util.promisify(Fs.writeFile);

module.exports = function (path, data, options, mode) {

	data = data || '';
	options = typeof options === 'string' ? { encoding: options } : options || {};

	const folderPath = Path.dirname(path);

	await Mkdirs(folderPath, options.mode, options.cwd);

	const exist = await Exist(path);

	if (exist === false) {
		await WriteFile(path, data, options);
	}

};
