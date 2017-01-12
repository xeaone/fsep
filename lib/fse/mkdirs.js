const Path = require('path');
const Fs = require('fs');
const MODE = 0o777;

function mkdirs (path, mode, callback, current, index) {
	if (!path) return callback(new Error('parameter path is required'));
	if (path === '' || path === ' ') return callback(new Error('parameter path is not valid'));

	mode = !mode ? MODE : mode;
	current = current || Path.parse(process.cwd()).root;
	index = index === null || index === undefined ? 0 : index+1;

	if (typeof path === 'string') {
		if (!Path.isAbsolute(path)) path = Path.join(process.cwd(), path);
		path = Path.normalize(path);
		path = path.slice(1);
		path = path.split(Path.sep);
	}

	if (index >= path.length) return callback();

	current = Path.join(current, path[index]);

	Fs.stat(current, function (error, stats) {
		if (error) {
			if (error.code === 'ENOENT') {
				Fs.mkdir(current, mode, function (error) {
					if (error) {
						if (error.code !== 'EEXIST') return callback(error);
						else return callback(error);
					} else {
						return mkdirs(path, mode, callback, current, index);
					}
				});
			} else if (error.code === 'EEXIST') {
				return mkdirs(path, mode, callback, current, index);
			} else {
				return callback(error);
			}
		} else {
			if (stats.isDirectory()) {
				return mkdirs(path, mode, callback, current, index);
			} else {
				return callback(new Error(current + ' must be a directory'));
			}
		}
	});

}

module.exports = function (path, mode) {
	return new Promise(function(resolve, reject) {
		mkdirs(path, mode, function (error) {
			if (error) return reject(error);
			else return resolve();
		});
	});
};
