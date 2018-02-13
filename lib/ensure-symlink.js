'use strict';

const Fs = require('fs');
const Path = require('path');
const Util = require('util');

const Exist = require('./exist');
const Mkdirs = require('./mkdirs');

const Symlink = Util.promisify(Fs.symlink);

module.exports = async function (source, target, type, mode) {

	const path = Path.dirname(target);

	await Mkdirs(path, mode);

	const exist = await Exist(target);

	if (!exist) {
		await Symlink(source, target, type);
	}

};
