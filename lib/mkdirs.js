const Path = require('path');
const Fs = require('fs');

function mkdirs (path, mode, current, callback) {
	if (path.length === 0) {
		return callback();
	}

	current = Path.join(current, path.shift());

	Fs.mkdir(current, mode, function (error) {
		if (error) {
			if (error.code === 'EEXIST') {
				return mkdirs(path, mode, current, callback);
			} else {
				return callback(error);
			}
		} else {
			return mkdirs(path, mode, current, callback);
		}
	});

}

module.exports = function (path, mode, current) {
	return new Promise(function(resolve, reject) {

		if (path === null || path === undefined) {
			return reject(new Error('parameter path is required'));
		}

		if (typeof mode === 'string') {
			current = mode;
			mode = null;
		}

		if (typeof path === 'string') {
			path = Path.normalize(path);

			if (current) {
				current = Path.normalize(current);
				path = path.replace(current + Path.sep, '');
			} else {
				if (Path.isAbsolute(path)) {
					current = path.slice(0, 1);
				} else {
					current = process.cwd();
				}
			}

			if (Path.isAbsolute(path)) {
				path = path.slice(1);
			}

			path = path.split(Path.sep);
		}

		mkdirs(path, mode, current, function (error) {
			if (error) {
				return reject(error);
			} else {
				return resolve();
			}
		});

	});
};
