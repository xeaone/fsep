'use strict';

const Path = require('path');
const EnsureFile = require('./ensure-file');

module.exports = async function Scaffold (path, data) {

	if (!path) throw new Error('Fsep.scaffold - missing path parameter');
	if (!data) throw new Error('Fsep.scaffold - missing data parameter');

	if (data.constructor === String) {

		await EnsureFile(Path.join(path, data), '');

	} else if (data.constructor === Array) {

		for (let name of data) {
			if (name && name.constructor === String) {
				await EnsureFile(Path.join(path, name), '');
			}
		}

	} else if (data.constructor === Object) {

		for (let key in data) {
			let value = data[key];

			if (!value) {
				continue;
			} if (value.constructor === String) {
				await EnsureFile(Path.join(path, key, value), '');
			} else if (value.constructor === Array || value.constructor === Object) {
				await Scaffold(Path.join(path, key), value);
			}

		}

	}

};
