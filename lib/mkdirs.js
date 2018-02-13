'use strict';

const Fs = require('fs');
const Util = require('util');
const Path = require('path');

const Mkdir = Util.promisify(Fs.mkdir);

module.exports = async function Mkdirs (path, mode, cwd) {

	if (!path) {
		throw new Error('Fsep.mkdirs - missing path parameter');
	}

	if (typeof mode === 'string') {
		cwd = mode;
		mode = null;
	}

	if (typeof path === 'string') {
		path = Path.normalize(path);
		cwd = cwd ? Path.normalize(cwd) : process.cwd();

		if (Path.isAbsolute(path) && path.indexOf(cwd) === 0) {
			path = path.slice(cwd.length);
		}

		path = path.split(Path.sep);
	}

	if (path.length) {
		cwd = Path.join(cwd, path.shift());

		try {
			Mkdir(cwd, mode);
		} catch (error) {

			if (error.code === 'EEXIST') {
				await Mkdirs(path, mode, cwd, callback);
			} else {
				throw error;
			}

		}

	}

};
