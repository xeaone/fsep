'use strict';

const Mkdirs = require('./mkdirs');

module.exports = function () {
	return Mkdirs.apply(this, arguments);
};
