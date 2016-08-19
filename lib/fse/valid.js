'use strict';

const Fsp = require('../fsp/fs');
const When = require('when');

module.exports = function (path) {

	return Fsp.stat(path).then(function () {

		return When.resolve(true);

	}).catch(function (error) {

		if (error.code === 'ENOENT') return When.resolve(false);
		else return When.reject(error);
		
	});
};
