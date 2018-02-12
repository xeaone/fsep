'use strict';

const Fs = require('fs');
const Util = require('util');
const Path = require('path');

const Stat = Util.promisify(Fs.stat);
const ReadFolder = Util.promisify(Fs.readdir);

module.exports = async function Walk (path, options) {
	options = options || {};

	if (!path) throw new Error('Fsep.walker - path required');

	if (!('filters' in options)) options.filters = [];
	if (!('relative' in options)) options.relative = false;
	if (!('ignoreDot' in options)) options.ignoreDot = true;

	if (options.filters.length) {
		options.filtersString = `(${options.filters.join(')|(')})`;
		options.filtersPattern = new RegExp(options.filtersString);
	}

	const result = [];
	const items = await ReadFolder(path);

	for (let item of items) {

		if (options.ignoreDot && item.charAt(0) === '.') continue;
		if (options.filters.length && (options.filtersPattern.test(item) || options.filtersPattern.test(Path.join(path, item)))) continue;

		const stat = await Stat(Path.join(path, item));

		if (stat.isDirectory()) {
			let children = await Walk(Path.join(path, item), options);
			Array.prototype.push.apply(result, children);
		} else {
			let child = Path.join(path, item);

			if (options.relative) {
				let start = path + Path.sep;

				if (child.indexOf(start) === 0) {
					child = child.slice(start.length);
				}

			}

			result.push(child);
		}

	}

	return result;
};
