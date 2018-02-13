'use strict';

const Mkdirs = require('./mkdirs');

module.exports = async function () {
	await Mkdirs.apply(this, arguments);
};
