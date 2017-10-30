'use strict';

const Fsp = require('./fs');
const Exist = require('./exist');

module.exports = function (paths, options) {
	return Promise.all(paths.map(function (path) {

		return Promise.resolve().then(function () {
			return Exist(path);
		}).then(function (exist) {

			if (!exist) {
				throw new Error('Fsep.readFiles - path ' + path + ' does not exist');
			} else {
				return Fsp.readFile(path, options);
			}

		}).catch(function (error) {
			throw error;
		});

	}));
};
