'use strict';

const Fsp = require('./fs');
const Path = require('path');
const Exist = require('./exist');
const Mkdirs = require('./mkdirs');

module.exports = function (source, target, type, mode) {
	return Promise.resolve().then(function () {
		return Mkdirs(Path.dirname(target), mode);
	}).then(function () {
		return Exist(target);
	}).then(function (exist) {
		if (!exist) {
			return Fsp.symlink(source, target, type);
		}
	}).catch(function (error) {
		throw error;
	});
};
