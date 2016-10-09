'use strict';

var all = {
	walk: require('./lib/fse/walk'),
	valid: require('./lib/fse/valid'),
	mkdirs: require('./lib/fse/mkdirs'),
	scaffold: require('./lib/fse/scaffold'),
	readFiles: require('./lib/fse/read-files'),
	ensureDir: require('./lib/fse/ensure-dir'),
	ensureFile: require('./lib/fse/ensure-file'),
	outputFile: require('./lib/fse/output-file'),
	readWriteLine: require('./lib/fse/read-write-line')
};

all = Object.assign(all, require('./lib/fsp/fs.js'));

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
