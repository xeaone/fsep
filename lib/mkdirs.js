'use strict';

const Fs = require('fs');
const Util = require('util');
const Path = require('path');

const Mkdir = Util.promisify(Fs.mkdir);

module.exports = async function (path, mode) {
	let paths, current;

	if (!path) {
		throw new Error('Fsep.mkdirs - missing path parameter');
	}

	if (typeof path === 'string') {
		path = Path.normalize(path);
		path = Path.resolve(process.cwd(), path);
		paths = path.split(Path.sep);
	} else if (typeof path === 'obejct') {
		paths = path;
	}

	current = Path.sep;

	for (let part of paths) {
		current = Path.join(current, part);

		try {
			await Mkdir(current, mode);
		} catch (error) {
			if (error.code === 'EEXIST' || error.code === 'EISDIR') {
				continue;
			} else {
				throw error;
			}
		}

	}

};
