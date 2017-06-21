
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

var Fsep = Object.assign({}, require('./lib/fs'));

Fsep.walk = require('./lib/walk');
Fsep.exist = require('./lib/exist');
Fsep.valid = require('./lib/valid');
Fsep.mkdirs = require('./lib/mkdirs');
Fsep.scaffold = require('./lib/scaffold');
Fsep.emptyDir = require('./lib/empty-dir');
Fsep.readFiles = require('./lib/read-files');
Fsep.ensureDir = require('./lib/ensure-dir');
Fsep.ensureFile = require('./lib/ensure-file');
Fsep.outputFile = require('./lib/output-file');
Fsep.ensureSymlink = require('./lib/ensure-symlink');
Fsep.readWriteLine = require('./lib/read-write-line');

module.exports = Fsep;
