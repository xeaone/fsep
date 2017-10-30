'use strict';

const Fs = require('fs');
const Path = require('path');

function mkdirs (paths, mode, cwd, callback) {
	if (paths.length === 0) {
		return callback();
	} else {
		cwd = Path.join(cwd, paths.shift());
		Fs.mkdir(cwd, mode, function (error) {
			if (error) {
				if (error.code === 'EEXIST') {
					return mkdirs(paths, mode, cwd, callback);
				} else {
					return callback(error);
				}
			} else {
				return mkdirs(paths, mode, cwd, callback);
			}
		});
	}
}

module.exports = function (path, mode, cwd) {
	return new Promise(function(resolve, reject) {

		if (!path) {
			return reject(new Error('Fsep.mkdirs - missing path parameter'));
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

		mkdirs(path, mode, cwd, function (error) {
			if (error) {
				reject(error);
			} else {
				resolve();
			}
		});

	});
};
