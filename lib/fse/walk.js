'use strict';

const Fs = require('../fsp/fs');
const Path = require('path');
const When = require('when');

module.exports = function (path, options) {

	options = (options) ? options : {};

	if (typeof path !== 'string') options = path;
	if (!options.hasOwnProperty('path')) options.path = path;
	if (!options.hasOwnProperty('filters')) options.filters = [];
	if (!options.hasOwnProperty('ignoreDot')) options.ignoreDot = false;
	if (!options.hasOwnProperty('relative')) options.relative = true;

	if (options.filters.length > 0) {
		options.filtersRegExpString = '(' + options.filters.toString().replace(/,/ig, ')|(') + ')';
		options.filtersRegExp = new RegExp(options.filtersRegExpString);
	}

	return walker(options.path, options).then(function (files) {

		if (options.ignoreDot || options.filters.length > 0) {
			files = files.filter(function (item) {
				return item !== null;
			});
		}

		if (options.relative) {
			files = files.map(function (file) {
				return file.replace(options.path + Path.sep, '');
			});
		}

		return files;
	})
	.catch(function (error) {
		throw error;
	});
};

function walker (path, options) {

	return Fs.readdir(path).then(function (files) {

		var promises = files.map(function (file) {

			if (options.ignoreDot && file.startsWith('.')) return Promise.resolve(null);
			if (options.filters.length > 0 && options.filtersRegExp.test(file)) return Promise.resolve(null);

			return Fs.stat(Path.join(path, file)).then(function(stats) {

				if (stats.isDirectory()) {

					return walker(Path.join(path, file), options).then(function (filePaths) {

						return filePaths.map(function (filePath) {

							var basename = Path.basename(filePath);

							if (options.ignoreDot && basename.startsWith('.')) return null;
							if (options.filters.length > 0 && options.filtersRegExp.test(basename)) return null;

							return filePath;
						});
					})
					.catch(function (error) {
						throw error;
					});
				}
				else return Promise.resolve(Path.join(path, file));
			})
			.catch(function (error) {
				throw error;
			});
		});

		return When.all(promises).then(function (files) {
			return [].concat.apply([], files);
		})
		.catch(function (error) {
			throw error;
		});
	})
	.catch(function (error) {
		throw error;
	});
}
