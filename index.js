'use strict';

var Fs = require('./lib/fsp/fs.js');
var Walk = require('./lib/fse/walk');
var Valid = require('./lib/fse/valid');

var all = {};

all = Object.assign(all, Fs);
all = Object.assign(all, Walk);
all = Object.assign(all, Valid);

module.exports = all;

/*
	Pollyfill
	Object.assign
*/
if (typeof Object.assign != 'function') {

	Object.assign = function(target) {
		// 'use strict';

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
