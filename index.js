
if (typeof Object.assign != 'function') {
	Object.assign = function(target) {
		if (target === null || target === undefined) throw new TypeError('Cannot convert undefined or null to object');
		target = Object(target);
		for (var index = 1; index < arguments.length; index++) {
			var source = arguments[index];
			if (source !== null || source !== undefined) {
				for (var key in source) {
					if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
				}
			}
		}
		return target;
	};
}

const Fsep = {
	walk: require('./lib/walk'),
	exist: require('./lib/exist'),
	valid: require('./lib/valid'),
	mkdirs: require('./lib/mkdirs'),
	scaffold: require('./lib/scaffold'),
	emptyDir: require('./lib/empty-dir'),
	readFiles: require('./lib/read-files'),
	ensureDir: require('./lib/ensure-dir'),
	ensureFile: require('./lib/ensure-file'),
	ensureFolder: require('./lib/ensure-folder'),
	ensureSymlink: require('./lib/ensure-symlink'),
	outputFile: require('./lib/output-file'),
	outputFolder: require('./lib/output-folder'),
	readWriteLine: require('./lib/read-write-line')
};

Object.assign(Fsep, require('./lib/fs'));

module.exports = Fsep;
