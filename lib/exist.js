'use strict';

const Fs = require('fs');
const Util = require('util');

const Stat = Util.promisify(Fs.stat);

module.exports = async function Exist (path) {

	try {
		await Stat(path);
		return true;
	} catch (error) {
		if (error.code === 'ENOENT') {
			return false;
		} else {
			throw error;
		}
	}

};
