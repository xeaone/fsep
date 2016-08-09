'use strict';

const Fs = require('fs');
const Path = require('path');
const When = require('when');

module.exports.mkdirs = function (path, mode) {
	return When.promise(function (resolve, reject) {
		mkdirs(path, mode, 0, function (error) {
			if (error) return reject(error);
			else return resolve();
		});
	});
};

function mkdirs (path, mode, stopIndex, callback) {
	if (!path) return callback(new Error('parameter path is required'));
	if (!Path.isAbsolute) return callback(new Error('parameter path must be absolute'));

	mode = (mode === null || mode === undefined) ? 0o777 : mode;

	const partialPath = createPath(path, stopIndex);
	if (partialPath === null) return callback();

	Fs.stat(partialPath, function (error, stats) {
		if (error) {
			if (error.code === 'ENOENT') {
				Fs.mkdir(partialPath, mode, function (error) {
					if (error) return callback(error);
					stopIndex = stopIndex + 1;
					mkdirs(path, mode, stopIndex, callback);
				});
			} else {
				return callback(error);
			}
		} else {
			if (stats.isDirectory()) {
				stopIndex = stopIndex + 1;
				mkdirs(path, mode, stopIndex, callback);
			} else {
				return callback(new Error(partialPath + ' must be a directory'));
			}
		}
	});
}

function createPath (path, stopIndex) {
	path = (path.charAt(0) === Path.sep) ? path.slice(1) : path; // remove pre forward slash
	path = (path.charAt(path.length - 1) === Path.sep) ? path.slice(0, path.length - 1) : path; // remove post forward slash
	path = path.split(Path.sep);

	if (path.length === stopIndex) return null;

	var partialPath = '';
	var i = 0;

	for (i; i <= stopIndex; i++) {
		partialPath = Path.join(partialPath, Path.sep, path[i]);
	}

	return partialPath;
}
