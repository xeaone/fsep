const Path = require('path');
const Fs = require('./fs');

const root = process.platform === 'win32' ? process.cwd().split(Path.sep)[0] : '/';

function emptyDir (path, safe) {
	safe = safe === undefined ? true : false;

	if (safe && path === root) {
		return Promise.reject(new Error('safe mode is enabled can not empty root'));
	} else {

		return Promise.resolve().then(function () {
			return Fs.readdir(path);
		}).then(function (items) {
			return items.map(function (item) {
				item = Path.join(path, item);

				return Promise.resolve().then(function () {
					return Fs.stat(item);
				}).then(function (stats) {
					if (stats.isDirectory()) {
						return Promise.resolve().then(function () {
							return emptyDir(item);
						}).then(function () {
							return Fs.rmdir(item);
						}).catch(function (error) {
							throw error;
						});
					} else {
						return Fs.unlink(item);
					}
				}).catch(function (error) {
					throw error;
				});

			});
		}).then(function (promises) {
			return Promise.all(promises);
		}).catch(function (error) {
			throw error;
		});

	}

}

module.exports = emptyDir;
