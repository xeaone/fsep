'use strict';

const Util = require('util');

module.exports = function (data) {
	if (!data) {
		return data;
	} else if (typeof data === 'function') {
		return Util.promisify(data);
	} else if (typeof data === 'object') {
		const target = data.constructor();

		for (let key in data) {

			if (key.indexOf('Sync') !== key.length-4 && typeof data[key] === 'function') {
				target[key] = Util.promisify(data[key]);
			} else {
				target[key] = data[key];
			}

		}

		return target;
	} else {
		return data;
	}
};
