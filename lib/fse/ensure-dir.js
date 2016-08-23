'use strict';

const Mkdirs = require('./mkdirs');
const Valid = require('./valid');

module.exports = function (path) {
	return Valid(path).then(function (isValid) {
		if (!isValid) return Mkdirs(path);
	}).catch(function (error) { throw error; });
};
