'use strict';

const Os = require('os');
const Fs = require('fs');
const Util = require('util');
const Path = require('path');

const Stat = Util.promisify(Fs.stat);
const RemoveFile = Util.promisify(Fs.unlink);
const RemoveFolder = Util.promisify(Fs.rmdir);
const ReadFolder = Util.promisify(Fs.readdir);

const home = Os.homedir();
const root = process.platform === 'win32' ? process.cwd().split(Path.sep)[0] : '/';

module.exports = async function EmptyFolder (path, safe) {
	safe = safe === undefined ? true : false;

	if (safe && (path === root || path === home)) {
		throw new Error('Fsep.emptyFolder - safe mode is enabled can not empty root or home');
	}

	const items = await ReadFolder(path);

	for (let item of items) {
		item = Path.join(path, item);

		let stat = await Stat(item);

		if (stat.isDirectory()) {
			await EmptyFolder(item);
			await RemoveFolder(item);
		} else {
			await RemoveFile(item);
		}

	}

};
