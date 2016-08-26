'use strict';

const Fsp = require('../fsp/fs');

module.exports = function (path) {
	return Fsp.stat(path).then(function () {

		return true;

	}).catch(function (error) {

		if (error.code === 'ENOENT') return false;
		else return error;

	});
};
