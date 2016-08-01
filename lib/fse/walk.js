'use strict';

var Fsp = require('../fsp');
var Path = require('path');
var When = require('when');

module.exports.walk = function walk (path, options) {
	var filtersRegExpString = null;
	var filtersRegExp = null;

	options = (options) ? options : {};

	if (typeof path !== 'string') options = path;
	if (!options.hasOwnProperty('path')) options.path = path;
	if (!options.hasOwnProperty('filters')) options.filters = [];
	if (!options.hasOwnProperty('ignoreDot')) options.ignoreDot = false;

	if (options.filters.length > 0) {
		filtersRegExpString = '(' + options.filters.toString().replace(',', ')|(') + ')';
		filtersRegExp = new RegExp(filtersRegExpString);
	}

	return Fsp.readdir(options.path).then(function (files) {

		var allPromises = files.map(function (file) {

			if (options.ignoreDot && file.startsWith('.')) return Promise.resolve(null);
			if (options.filters.length > 0 && filtersRegExp.test(file)) return Promise.resolve(null);

			return Fsp.stat(Path.join(options.path, file)).then(function(stats) {

				if (stats.isDirectory()) {
					return walk(Path.join(options.path, file)).then(function (fileNames) {
						fileNames = fileNames.map(function (fileName) {
							return Path.join(options.path, fileName);
						});
						return fileNames;
					})
					.catch(function (error) {
						throw error;
					});
				}
				else return Promise.resolve(Path.join(options.path, file));
			})
			.catch(function (error) {
				throw error;
			});
		});

		return When.all(allPromises).then(function (files) {
			files = [].concat.apply([], files);

			if (options.ignoreDot === true || options.filters.length > 0) {
				files = files.filter(function (item) {
					return item !== null;
				});
			}

			return files;
		})
		.catch(function (error) {
			throw error;
		});
	})
	.catch(function (error) {
		throw error;
	});
};
