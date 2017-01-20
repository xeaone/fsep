
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

var all = Object.assign({}, require('./lib/fsp/fs.js'));

all.walk = require('./lib/fse/walk');
all.exist = require('./lib/fse/exist');
all.valid = require('./lib/fse/valid');
all.mkdirs = require('./lib/fse/mkdirs');
all.scaffold = require('./lib/fse/scaffold');
all.readFiles = require('./lib/fse/read-files');
all.ensureDir = require('./lib/fse/ensure-dir');
all.ensureFile = require('./lib/fse/ensure-file');
all.outputFile = require('./lib/fse/output-file');
all.readWriteLine = require('./lib/fse/read-write-line');

module.exports = all;
