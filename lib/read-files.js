'use strict';

const Fs = require('fs');
const Util = require('util');
const Exist = require('./exist');

const ReadFile = Util.promisify(Fs.readFile);

module.exports = async function (paths, options) {
	const result = [];

	for (let path of paths) {
		
		let exist = await Exist(path);

		if (!exist) {
			throw new Error('Fsep.readFiles - path ' + path + ' does not exist');
		} else {
			let data = await ReadFile(path, options);
			result.push(data);
		}

	}

	return result;
};
