'use strict';

const FsDefault = require('./lib/fs');

const FsExtra = {

	readFolder: require('./lib/read-folder'),
	removeFile: require('./lib/remove-file'),
	removeFolder: require('./lib/remove-folder'),
	writeFolder: require('./lib/write-folder'),

	walk: require('./lib/walk'),
	exist: require('./lib/exist'),
	scaffold: require('./lib/scaffold'),

	mkdirs: require('./lib/mkdirs'),

	emptyFolder: require('./lib/empty-folder'),

	readFiles: require('./lib/read-files'),

	ensureFile: require('./lib/ensure-file'),
	ensureFolder: require('./lib/ensure-folder'),
	ensureSymlink: require('./lib/ensure-symlink'),

	outputFile: require('./lib/output-file'),
	outputFolder: require('./lib/output-folder'),

	readWriteLine: require('./lib/read-write-line')
};

const Fsep = Object.assign({}, FsExtra, FsDefault);

module.exports = Fsep;
