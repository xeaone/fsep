'use strict';

const Fs = require('./lib/fsp/fs.js');
const Walk = require('./lib/fse/walk');
const Valid = require('./lib/fse/valid');
const OutputFile = require('./lib/fse/output-file');
const Mkdirs = require('./lib/fse/mkdirs');

var all = {};

all = Object.assign(all, Fs);
all = Object.assign(all, Walk);
all = Object.assign(all, Valid);
all = Object.assign(all, OutputFile);
all = Object.assign(all, Mkdirs);

module.exports = all;

/*
	Pollyfill
	Object.assign
*/
if (typeof Object.assign != 'function') {

	Object.assign = function(target) {

		if (target == null) throw new TypeError('Cannot convert undefined or null to object');

		target = Object(target);

		for (var index = 1; index < arguments.length; index++) {

			var source = arguments[index];

			if (source != null) {
				for (var key in source) {
					if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
				}
			}
		}

		return target;
	};
}
